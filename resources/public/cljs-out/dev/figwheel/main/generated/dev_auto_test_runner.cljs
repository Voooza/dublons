(ns figwheel.main.generated.dev-auto-test-runner
  (:require [cljs.test :refer-macros [run-tests]]
            [cljs-test-display.core] [dublons.core-test]))

  (run-tests (cljs-test-display.core/init! "app-auto-testing") (quote dublons.core-test))