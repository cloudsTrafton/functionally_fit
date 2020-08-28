(ns lambda-fit.datautils)

(defn not-zero? [value]
  (not (zero? value))
  )

(defn valid-number? [value]
  (and (not-zero? value) (number? value) true)
  )