(ns lambda-fit.core
  (:require [reagent.core :as r]
            [lambda-fit.datautils :as utils]))

;; define your app data so that it doesn't get over-written on reload

(defonce app-state (r/atom {:text "Hello world!"}))
(defonce my-weight (r/atom 0))
(defonce my-height (r/atom 0))

(defn weight-input [weight]
  [:input {:type "text"
           :value @weight
           :on-change #(reset! weight (-> % .-target .-value))}]
  )

(defn height-input [height]
  [:input {:type "text"
           :value @height
           :on-change #(reset! height (-> % .-target .-value))}])

(defn calc-bmi-imperial [height, weight]
  (if (utils/valid-number? height)
   (/ (* 703 weight) (* height height))
   "Please enter a height and weight." ))

(defn get-bmi []
  [:div
   [:p "Enter your height in inches" [height-input my-height]]
   [:p "Enter your weight in pounds" [weight-input my-weight]]
   [:p "Your BMI is: " (calc-bmi-imperial @my-height @my-weight)]
   [:p "BMI is a useless measurement and is stupid BTW. You should measure your health by how you feel"]])

(defn about-page []
  [:span.main
   [:h1 "About Lambda Fit"]
   [:p "This website seeks to provide information about WHAT you can do to increase your fitness, not HOW to do it. That is personal to you.
               No internet stranger can tell you exactly how to 'be fit' because it isn't as simple as taking a magical diet pill. There is no one
               size fits all solution.
               
               This website also encourages those on a journey to increase their fitness to log their failures and progress in a way that works for them.
               Keeping an immutable log of yourself at different points in time provides information about how you change and can be quite encouraging.
               It is important to see yourself as you were, and as you are as opposed to looking for current 'flaws' without reviewing older entries"]
   [get-bmi]])

(defn start []
  (r/render-component [about-page]
                            (. js/document (getElementById "app"))))

(defn ^:export init []
  ;; init is called ONCE when the page loads
  ;; this is called in the index.html and must be exported
  ;; so it is available even in :advanced release builds
  (start))

(defn stop []
  ;; stop is called before any code is reloaded
  ;; this is controlled by :before-load in the config
  (js/console.log "stop"))
