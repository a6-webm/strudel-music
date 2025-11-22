setcpm(125/4)
samples('github:tidalcycles/dirt-samples')

s("breaks125:0")
  .slice(8, `<
  [[5 1] 1 2 3 4 5 6*3 7]!2
  [0 1 2 [0 1][2 5] 3 6*2 4]!2
  >`)
