(ns dublons.core-test
    (:require
     [cljs.test :refer-macros [deftest is testing run-tests]]
     [dublons.core :as c]))


(deftest test-distance
  (is (= 1 (c/distance {:x 1 :y 3} {:x 2 :y 1})))
  (is (= 1 (c/distance {:x 1 :y 1} {:x 1 :y 2})))
  (is (= (Math/sqrt 2) (c/distance {:x 1 :y 1} {:x 2 :y 2}))))

;; test-inc-angle
;; ((fn []
;;    [(= (inc-angle 1) 1.05)
;;     (= (inc-angle 2) 2.05)
;;     (= (inc-angle 3.1) 0)
;;     (= (inc-angle 1 5) 0)
;;     ]))


;;test calc-columns
;; ((fn []
;;    [(= 1 (calc-columns 1))
;;     (= 2 (calc-columns 2))
;;     (= 2 (calc-columns 3))
;;     (= 2 (calc-columns 4))
;;     (= 2 (calc-columns 5))
;;     (= 2 (calc-columns 6))
;;     (= 3 (calc-columns 7))
;;     (= 3 (calc-columns 8))
;;     (= 3 (calc-columns 9))
;;     (= 4 (calc-columns 22))
;;     (= 5 (calc-columns 23))
;;     (= 10 (calc-columns 100))
;;     (= 10 (calc-columns 118))
;;     (= 11 (calc-columns 129))]))

(run-tests)
