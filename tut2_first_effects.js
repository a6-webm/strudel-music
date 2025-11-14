setcpm(100/4)
$: s(`[- - hh hh] [- - - hh] [- - hh -] <[- - hh -] [- hh hh hh]>`).bank("casiorz1").gain("[1 0.2 1 0.2]*4")
$: s("[bd - - -] [<- - sd sd> - - -] [bd - - -] [- - - -]").bank("casiorz1")
  
$: note(`<
c4  c4  e4  e4,
bb4 bb4 a4  e4,
a5  g5  e5  f5
>`).s("saw")
.lpf(1000)
  .adsr("0.5:0:1:0.1")
  .gain(0.3)
