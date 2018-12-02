(ns ^:figwheel-hooks dublons.core
  (:require [goog.dom :as gdom]
            [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            [clojure.string :refer [split]]
            [dublons.config :as c]
            [dublons.web :as w]))

;; drawing
(defn draw-letter
  [cosine diam]
  (let [w (Math/abs cosine)
        size (* diam 0.8)
        offset-base (- (/ diam 10) (/ (* diam w) 10))
        offset (if (< cosine 0) 0 offset-base)]
    (q/text-font (q/create-font "Helvetica" size true))
    (apply q/fill c/letter-color)
    (q/with-translation [offset 0]
      (q/scale w 1)
      (q/text "D" (- (/ size 3))  (/ size 3))
      (q/rect (/ size 15) (- (/ size 2)) (/ size 15) size)
      (q/rect (- (/ size 10)) (- (/ size 2)) (/ size 15) size))))

(defn draw-dublon
  [dublon]
  (let [pos (:pos dublon)
        diam (:diam dublon)
        cosine (q/cos (:angle dublon))
        elipse-width (* diam (Math/abs cosine))
        wd (/ diam 10)
        depth (- wd (/ elipse-width 10))]
    (q/with-translation [(:x pos) (:y pos)]
      (q/with-fill (conj c/fill-color 10)
        (q/with-stroke (conj c/fill-color 10)
          (q/ellipse 0 0 (* (+ 10 elipse-width) 1.2) (* 1.3 diam))
          (q/ellipse 5 0 (* (+ 10 elipse-width) 1.2) (* 1.3 diam))))
      
      (apply q/fill c/fill-color)
      (apply q/stroke c/stroke-color)

      (q/with-fill c/stroke-color
        (q/rect 0 (- (/ diam 2)) depth diam))
      
      (if (< cosine 0)
        (do
          (q/with-fill c/stroke-color
            (q/ellipse depth 0 elipse-width diam))
          (q/ellipse 0 0 elipse-width diam))        
        (do
          (q/with-fill c/stroke-color
            (q/ellipse 0 0 elipse-width diam))
          (q/ellipse depth 0 elipse-width diam)))
      (draw-letter cosine diam))))

(defn draw-state [state]
  (let [size (w/window-size)]
    (q/resize-sketch (:width size) (:height size)))
  (apply q/background c/background-color)
  (doall (map draw-dublon (:dublons state)))
  state)
;; end drawing

;; calculation
(defn distance
  [a b]
  (Math/sqrt
   (+ 
    (Math/pow (- (:x b) (:x a)) 2)
    (Math/pow (- (:y b) (:y a)) 2))))

(defn inc-angle
  ([angle] (inc-angle angle c/angle-increment))
  ([angle amount]
   (let [result (+ angle amount)]
     (if (< result 3.14) result 0))))

(defn calc-columns-fn
  [n]
  (->> (range)
       (map #(* % %))
       (take-while (fn [x] (<= x (+ 2 n))))
       last
       Math/sqrt))

(def calc-columns (memoize calc-columns-fn))

(defn calc-axis-fn
  [length num-parts]
  (let [size (/ length num-parts)
        half-size (/ size 2)]
    (->> (range num-parts)
         (map #(* % size))
         (map #(int (+ % half-size))))))

(def calc-axis (memoize calc-axis-fn))

(defn calc-positions-fn
  [width height n]
  (let [num-columns (calc-columns n)
        num-rows (Math/ceil (/ n num-columns))
        ys (calc-axis height num-rows)
        rows (->> (range n)
                  (partition-all num-columns)
                  (map #(calc-axis width (count %))))]
    (mapcat (fn [row y-coord] (for [x row y [y-coord]] {:x x :y y})) rows ys)))

(def calc-positions (memoize calc-positions-fn))

(defn calc-diam-fn
  [width height n]
  (let [num-columns (calc-columns n) ;;TODO is this duplicated?
        num-rows (Math/ceil (/ n num-columns))
        field-width (/ width num-columns)
        field-height (/ height num-rows)
        field-size (min field-width field-height)]
    (int (* 0.6 field-size))))

(def calc-diam (memoize calc-diam-fn))
;; end calculations

;; infrastructure
(defn create-dublon
  [pos diam]
  {:pos pos :diam diam :angle (inc-angle (rand 3.14)) :clicked false})

(defn setup []
  (q/frame-rate c/frame-rate)
  (let [passed-count (int (:count (w/parse-params)))
        n (w/logpass "n" (if (= passed-count 0) 1 passed-count))
        positions (calc-positions (q/width) (q/height) n)
        diam 0]
    {:dublons (into [] (map #(create-dublon % diam) positions))}))

(defn update-dublon
  [dublon position]
  (let [c (:clicked dublon)
        old-diam (:diam dublon)]
    {:diam (if c (* c/clicked-increase-factor old-diam) old-diam)
     :angle (if c 0 (inc-angle (:angle dublon)))
     :pos position
     :clicked c}))

;; relies on q and therefore not easy to test
;; maybe worth refactoring
(defn update-dublons 
  [dublons]
  (let [n (count dublons)
        positions (calc-positions (q/width) (q/height) n)
        diam (calc-diam (q/width) (q/height) n)
        ds (for [d dublons] (update d :diam (fn [_] diam)))]
    (map update-dublon ds positions)))

(defn update-state [state]
  (update state :dublons update-dublons))

(defn click
  [state event]
  (let [dublons (:dublons state)]
    (if (= (count dublons) (->> dublons (filter :clicked) count))
      (set! (.-href js/window.location) "links.html")
      (update state :dublons
              (fn [dublons]
                (doall
                 (map (fn [d]
                        (if (< (distance (:pos d) event) (:diam d))
                          (update d :clicked (fn [_] true))
                          d))
                      dublons)))))))
;; end infrastructure

(defn ^:export run-sketch []
  (q/defsketch hello-quiljs
    :host "dublons"
    :settings #(q/smooth 2)
    :setup setup
    :update update-state
    :draw draw-state
    :mouse-released click
    :middleware [m/fun-mode]))

(run-sketch)

