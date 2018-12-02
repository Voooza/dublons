(ns ^:figwheel-hooks dublons.core
  (:require [goog.dom :as gdom]
            [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            [clojure.string :refer [split]]
            [cljs.test :refer-macros [deftest is testing run-tests]]))

(def fill-color [234 233 66])
(def stroke-color [224 150 66])
(def letter-color [224 150 66])
(def background-color [20 20 20 ])
(def shade-color [20 20 20 ])
(def base-diam 100)

(def log (.-log js/console))
(defn logpass
  [thing]
  (log (str thing))
  thing)

(defn window-size
  []
  {:width (.-innerWidth js/window)
   :height (.-innerHeight js/window)})

(defn draw-letter
  [cosine diam]
  (let [w (Math/abs cosine)
        size (- diam 20)
        offset-base (- (/ diam 10) (/ (* diam w) 10))
        offset (if (< cosine 0) 0 offset-base)]
    (q/text-font (q/create-font "Helvetica" size true))
    
    (apply q/fill letter-color)
    ;;    (log (str offset))
    (q/with-translation [offset 0]
      (q/scale w 1)
      (q/text "D" (- (/ size 3))  (/ size 3))
      (q/rect (/ size 15) (- (/ size 2)) (/ size 15) size)
      (q/rect (- (/ size 10)) (- (/ size 2)) (/ size 15) size))
    )
  )

(defn draw-dublon
  [dublon]
  ;;  (log (str dublon))
  (let [pos (:pos dublon)
        diam (:diam dublon)
        cosine (q/cos (:angle dublon))
        elipse-width (* diam (Math/abs cosine))
        wd (/ diam 10)
        depth (- wd (/ elipse-width 10))]
    (q/with-translation [(:x pos) (:y pos)]
      (q/with-fill (conj fill-color 10)
        (q/with-stroke (conj fill-color 10)
          (q/ellipse 0 0 (* (+ 10 elipse-width) 1.2) (* 1.3 diam))
          (q/ellipse 5 0 (* (+ 10 elipse-width) 1.2) (* 1.3 diam))))
      
      (apply q/fill fill-color)
      (apply q/stroke stroke-color)

      (q/with-fill stroke-color
        (q/rect 0 (- 0 (/ diam 2)) depth diam))
      
      (if (< cosine 0)
        (do
          (q/with-fill stroke-color
            (q/ellipse depth 0 elipse-width diam))
          (q/ellipse 0 0 elipse-width diam))        
        (do
          (q/with-fill stroke-color
            (q/ellipse 0 0 elipse-width diam))
          (q/ellipse depth 0 elipse-width diam)))
      
      (draw-letter cosine diam)
      ))
  )

(defn inc-angle
  ([angle] (inc-angle angle 0.04))
  ([angle amount]
   (let [result (+ angle amount)]
     (if (< result  3.14) result 0))))

(defn calc-columns
  [n]
  (->> (range)
       (map #(* % %))
       (take-while (fn [x] (<= x (+ 2 n))))
       last
       Math/sqrt))

(defn calc-axis
  [length num-parts]
  (let [size (/ length num-parts)
        half-size (/ size 2)]
    (->> (range num-parts)
         (map #(* % size))
         (map #(int (+ % half-size))))))

;; test calc-axis
;; ((fn []
;;    [
;;     (= (calc-axis 40 4) `(5 15 25 35))]))

(defn calc-positions
  [width height n]
  (let [num-columns (calc-columns n)
        num-rows (Math/ceil (/ n num-columns))
        ys (calc-axis height num-rows)
        rows (->> (range n)
                  (partition-all num-columns)
                  (map #(calc-axis width (count %))))]
    (mapcat (fn [row y-coord] (for [x row y [y-coord]] {:x x :y y})) rows ys)))


;; test calc-positions
;; ((fn []
;;    [(= (logpass  (calc-positions 100 100 3)) [{:x 25 :y 25} {:x 75 :y 25} {:x 50 :y 75}])
;;     (= (logpass  (calc-positions 100 100 2)) [{:x 25 :y 50} {:x 75 :y 50}])]))


(defn distance
  [a b]
  (Math/sqrt
   (+ 
    (Math/pow (- (:x b) (:x a)) 2)
    (Math/pow (- (:y b) (:y a)) 2))))


(defn parse-params
  "Parse URL parameters into a hashmap"
  []
  (let [param-strs (-> (.-location js/window) (split #"\?") last (split #"\&"))]
    (into {} (for [[k v] (map #(split % #"=") param-strs)]
               [(keyword k) v]))))


(defn calc-diam
  [width height n]
  (let [num-columns (calc-columns n)
        num-rows (Math/ceil (/ n num-columns))
        field-width (/ width num-columns)
        field-height (/ height num-rows)
        field-size (min field-width field-height)]
    (int (* 0.6 field-size))))

;; test calc-diam
;; ((fn []
;;    [(= (calc-diam 100 100 16) 15)
;;     (= (calc-diam 100 200 9) 20)]))

(defn create-dublon
  [pos diam]
  {:pos pos :diam diam :angle (inc-angle (rand 3.14)) :clicked false})

(defn setup []
  (q/frame-rate 30)
  (let [n (int (:count (parse-params)))
        positions (calc-positions (q/width) (q/height) n)
        diam 0]
    {:dublons (into [] (map #(create-dublon % diam) positions))}))

(defn update-dublon
  [dublon position]
  (let [c (:clicked dublon)
        old-diam (:diam dublon)]
    {:diam (if c (* 1.2 old-diam) old-diam)
     :angle (if c 0 (inc-angle (:angle dublon)))
     :pos position
     :clicked c}))

(defn update-dublons
  [dublons]
  (let [n (int (:count (parse-params)))
        positions (calc-positions (q/width) (q/height) n)
        diam (calc-diam (q/width) (q/height) n)
        ds (for [d dublons] (update d :diam (fn [_] diam)))]
    (map update-dublon ds positions)))

(defn update-state [state]
  ;;  (log (str state))
  (update state :dublons update-dublons))

(defn draw-state [state]
  (let [size (window-size)]
    ;;    (log (str (window-size)))
    (q/resize-sketch (:width size) (:height size)))
  (apply q/background background-color)
  (doall (map draw-dublon (:dublons state)))
  state)

(defn click
  [state event]
  (let [dublons (:dublons state)]
    (if (= (count dublons)
           (->> dublons
                (filter :clicked)
                count
                logpass))
      (set! (.-href js/window.location) "links.html")))
  (update state :dublons
          (fn [dublons]
            (doall (map (fn [d]
                          (if (< (distance (:pos d) event)
                                 (:diam d))
                            (do
                              (update d :clicked (fn [_] true)))
                            d))
                        dublons)))))

(defn ^:export run-sketch []
  (q/defsketch hello-quiljs
    :host "dublons"
    ;;    :size [600 500]
    :settings #(q/smooth 2)
    :setup setup
    :update update-state
    :draw draw-state
    :mouse-released click
    :middleware [m/fun-mode]))

(run-sketch)



;; tests



