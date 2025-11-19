$: n("0 1 5 2 4 6")
  .scale("C3:Major")
  .s("folkharp")
  .jux(iter(4))

$: s(`
[hh - hh -] [hh <- oh> hh -] [hh - hh -],
[bd bd - -] <- [- bd bd bd]> [- - - -]
`).bank("dpm48")
  .ply("<1 2 2 1>*2")
  .gain("<1 0.2>*24")

$: note("[c2 e2 a1 f2]/4")
  .s("piano")
  .off(4/16, x=>x.speed(2).gain(0.4).delay("1:0.4:0.5"))
