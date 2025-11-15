setcpm(100/4)
$: s(`[- - hh hh] [<- - sd -> - - hh] [- - hh -] <[- - hh -] [- hh hh hh]>`)
  .bank("casiorz1")
  .gain("[1 0.2 1 0.2]*4")
  .room(0.05)

$: s("pink")
  .lpf(3000)
  .adsr("3:0:1:3")
  .fast(rand.range(1, 2))
  .gain(0.3)

$: note(`
<c4*4  g3*2    c3*4  c4*2>,
<bb4*4 [c5 b4] bb4*4 f4*2>,
<a5*4  [a5 g5] f5*4  e5*2>
`).s("saw")
  .vowel("<[o e a o] [o e] [u o e o] [e i]>")
  .att("<0.2 0.1>")
  .dec("<0.1 0.3>")
  .sus(0)
  .rel(0)
  .room(0.2)
