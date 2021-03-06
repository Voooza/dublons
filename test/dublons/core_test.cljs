(ns dublons.core-test
    (:require
     [cljs.test :refer-macros [deftest is testing run-tests]]
     [dublons.core :refer [distance
                           inc-angle
                           calc-columns
                           calc-axis
                           calc-positions
                           calc-diam
                           update-dublon
                           click]]
     [dublons.config :as c]))


(deftest test-distance
  (is (= 1 (distance {:x 1 :y 1} {:x 2 :y 1})))
  (is (= 1 (distance {:x 1 :y 1} {:x 1 :y 2})))
  (is (= (Math/sqrt 2) (distance {:x 1 :y 1} {:x 2 :y 2}))))

(deftest test-inc-angle
  (is (= (inc-angle 1) (+ 1 c/angle-increment)))
  (is (= (inc-angle 2) (+ 2 c/angle-increment)))
  (is (= (inc-angle (inc-angle 2)) (+ 2 (* 2 c/angle-increment))))
  (is (= (inc-angle 3.1) 0))
  (is (= (inc-angle 1 5) 0)))

(deftest test-calc-columns
  (is (= 1 (calc-columns 1)))
  (is (= 2 (calc-columns 2)))
  (is (= 2 (calc-columns 3)))
  (is (= 2 (calc-columns 4)))
  (is (= 2 (calc-columns 5)))
  (is (= 2 (calc-columns 6)))
  (is (= 3 (calc-columns 7)))
  (is (= 3 (calc-columns 8)))
  (is (= 3 (calc-columns 9)))
  (is (= 4 (calc-columns 22)))
  (is (= 5 (calc-columns 23)))
  (is (= 10 (calc-columns 100)))
  (is (= 10 (calc-columns 118)))
  (is (= 11 (calc-columns 129))))

(deftest test-calc-axis
  (is (= (calc-axis 40 4) `(5 15 25 35)))
  (is (= (calc-axis 100 3) `(16 50 83))))

(deftest test-calc-positions
  (is (= (calc-positions 100 100 3) [{:x 25 :y 25} {:x 75 :y 25} {:x 50 :y 75}]))
  (is (= (calc-positions 100 100 2) [{:x 25 :y 50} {:x 75 :y 50}]))
  (is (= (count (calc-positions 1 1 100)) 100)))

(deftest test-calc-diam
  (is (= (calc-diam 100 100 16) 15))
  (is (= (calc-diam 100 200 9) 20)))

(deftest test-update-dublon
  (is (= (update-dublon {:angle 0 :diam 100 :pos {:x 10 :y 10} :clicked false} {:x 20 :y 20})
         {:angle (inc-angle 0) :diam 100 :pos {:x 20 :y 20} :clicked false}))
  (is (= (update-dublon {:angle 0 :diam 100 :pos {:x 10 :y 10} :clicked true} {:x 20 :y 20})
         {:angle 0 :diam (* c/clicked-increase-factor 100) :pos {:x 20 :y 20} :clicked true})))

(deftest test-click
  ;; click on
  (is (= (click {:dublons [{:diam 100
                            :angle 0
                            :pos {:x 50 :y 50}
                            :clicked false}]}
                {:x 55 :y 55})
         {:dublons [{:diam 100
                     :angle 0
                     :pos {:x 50 :y 50}
                     :clicked true}]}))
  ;; click away
  (is (= (click {:dublons [{:diam 1
                            :angle 0
                            :pos {:x 50 :y 50}
                            :clicked false}]}
                {:x 55 :y 55})
         {:dublons [{:diam 1
                     :angle 0
                     :pos {:x 50 :y 50}
                     :clicked false}]})))


(run-tests)
