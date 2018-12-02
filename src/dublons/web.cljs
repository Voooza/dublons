(ns ^:figwheel-hooks dublons.web
  (:require [clojure.string :refer [split]]))

;; set of helpers for js interop

(def log (.-log js/console))

(defn logpass
  ([thing](log (str thing)) thing)
  ([msg thing] (log (str msg ": " thing)) thing))

(defn window-size
  []
  {:width (.-innerWidth js/window)
   :height (.-innerHeight js/window)})

(defn parse-params
  []
  (let [param-strs (-> (.-location js/window) (split #"\?") last (split #"\&"))]
    (into {} (for [[k v] (map #(split % #"=") param-strs)]
               [(keyword k) v]))))

