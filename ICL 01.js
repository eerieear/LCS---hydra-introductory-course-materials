

// PART 0 (10m) (10)
// INTRODUCTION

// Olivia Jack

// Zach Krall
// Flor Alonso (Flor de fuego) CLIC


// Naroto Haieda


// URLS
// https://hydra-editor.glitch.me/
// https://pixeljam.glitch.me/
// https://github.com/ojack/hydra/blob/master/docs/funcs.md

Evaluate line SHIFT + ENTER
Evaluate bunch of code CTRL + ALT + ENTER

//PART 1
// COLORS AND OUTPUTS
//SOURCES (COLOR - BASIC ROUTING)
//(30m)(40)

// SOLID // COLORS (5m)(15)

solid(0.4,0.3,0.7).out(o0)

solid(0.4,0.3,0.7).out(o0)
solid(1,0,0).out(o0)
solid(0,1,0).out(o0)
solid(0,0,5).out(o0)

solid().out(o0)
solid().out(o1)
solid().out(o2)
solid().out(o3)


//OUTPUT BUFFERS (5m)(20)
.out()

// MONITOR - RENDER BUFFER

render()

render(o0)
render(o1)
render(o2)
render(o3)



render(o2)

solid(0.4,0.3,0.7).out(o0)
solid(1,0,0).out(o1)
solid(0,1,0).out(o2)
solid(0,0,5).out(o3)


solid(0.4,0.3,0.7).out(o0)
solid(0.4,0.3,0.7).out(o1)
solid(0.4,0.3,0.7).out(o2)
solid(0.4,0.3,0.7).out(o3)


solid(0.4,0.3,0.7).out(o0)
solid(0.2,0.8,0.4).out(o1)
solid(0.3,0.1,0.2).out(o2)
solid(0.7,0.1,0.5).out(o3)

render()

// FUNCTIONS AS VALUES (5 min)(25)

solid((({time})=>Math.sin(time)*[0.45]+ 0.8),0.3,0.7).out(o0)
solid(0.2,0.8,0.4).out(o1)
solid(0.3,0.1,0.2).out(o2)
solid(0.7,0.1,0.5).out(o3)


solid((({time})=>Math.sin(time)*[0.5]+ 0.25),0,0).out(o1)
solid(0,(({time})=>Math.sin(time)*[0.5]+ 0.5),0).out(o2)
solid(0,0,(({time})=>Math.sin(time)*[0.5]+ 0.75)).out(o3)




osc( [1,10,50,100,250,500].fast(2) ).out(o0) // frequency
osc( ({time}) => Math.sin(time/10) * 100 ).out(o1) // frequency 2
osc( 10, [-10,-1,-0.1,0,0.1,1,10], 0 ).out(o2) // sync
osc(10,0.1, ({time}) => Math.sin(time/10) * 100 ).out(o3) // offset
render()


// SHIFT (10 min)(35)
// .shift( r, g, b, a )


render(o3)

solid(0,0,0)
// solid(1,1,1)
// solid(1,0,0)
// solid(0.2,0.8,0.4)
// solid(0.7,0.1,0.4)
.shift(0.5,0.1,0.3,[0.5].fast(2))//SHIFT
.shift(0,0,0.9,[0.8, 0.02])//SHIFT
.shift(0.15,0.6,0.2,[0.2, 0.6])//RE-SHIFT
.out(o3)


solid(0,0,(({time})=>Math.sin(time)*[0.2]+0.6))
// solid(0.2,0.8,0.4)
.shift(0.5,0.2, 0, [0,0.8, 0.3, 0.6])// .shift( r, g, b, a )
.out(o3)


// NEXT OSC
// osc( frequency, sync, offset )
// .shift( r, g, b, a )

osc(1)
// osc(0.61,0.25,0.9)//
.shift(0.5,0.2, 0.5, [0.8, 0.2])
.out(o3)

// >> PRACTICE with this 10 mins (45)




























//
// noise([(({time})=>Math.sin(time))]).out()
//
// (({time})=>Math.sin(time))

// SOURCES

// solid().out(o0)
//
// src(o1).out(o0)
//

// osc(10).color(([1,0,0,1,0],[0,1,0,1,0],[0,0,1,1,0]).fast(6)).out(o0)
//
// osc(10).color([0.4,0.5,0.7]).out(o0)
//
// osc(10).color(([1,0,0],[0,1,0],[0,0,1]).fast(0.5)).out(o0)


//
// // COMPLEX EXAMPLE
// osc(10).color(([1],[0],[0]).fast(2)).out(o0)
// osc( [1,10,50,100,250,500].fast(2) )
// // .kaleid(20)
// .out(o0) // frequency
// osc( ({time}) => Math.sin(time/10) * 100 ).kaleid(19).out(o1) // frequency 2
// osc( 10, [-10,-1,-0.1,0,0.1,1,10], 0 ).kaleid(21).out(o2) // sync
// osc(10,0.1, ({time}) => Math.sin(time/10) * 1 ) // offset
//   .modulate(o1,0.05)
//   .modulate(o2,0.05)
//   .modulate(o3,0.05)
//   // .kaleid(2)
//   .add(noise(3,10))
//   .out(o3)
// render(o3)
