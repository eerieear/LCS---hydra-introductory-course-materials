// questions(?) (5 min)(50)


solid().out()
render(o0)

// PT 2 (40m)(90)
//

// SOURCES (DYNAMIC TEXTURES)
// OSC (10m)(60)

// default(60Hz)
osc().out(o0)

// 1/2 speed
osc([30]).out(o0)

// 8Hz
osc(8).out(o0)

// PARAMETER SEQUENCES
// Lists as parameter sequences
osc([80, 100, 200, 50], 0.02 ).out(o0)

//[ , ]
// iterate 8/30Hz
osc([8,30]).out(o0)

// FAST
// decrease iterate value by 90%
osc(([8,30]).fast(0.1)).out(o0)

//ITERATE FAST - STROBE
osc([80, 100, 200, 50].fast(0.3), 1 ).out(o0)

osc(([80, 100, 200, 50].fast(0.5)), 0.02 ).out(o0) //very slow
osc(([80, 100, 200, 50].fast(0.5)), 0.4 ).out(o0) //fast
osc(([80, 100, 200, 50].fast(0.5)), -0.4 ).out(o0)  //reverse
// osc(([80, 100, 200, 50].fast(0.5)), -152.4 ).out(o0) //very fast


//SOFT ITERATE
osc([4, 3, 2, 6].fast(0.5), 0.125 ).out(o0)



// GRADIENT (5m)(65)
gradient().out(o0)

gradient(0.5).out(o0)

gradient(1).out(o0)

// gradient([1,2,4]).out(o0)
// gradient([0.51,0.002,20]).out(o0)
gradient([0.51,0.002,200]).out(o0)

gradient([0.5,0.25,0.5,0.25]).out(o0)

gradient([0.5,0.25,0.5,0.25]).invert([1,0,1,1,0.7,0.2]).out(o0)


//NOISE (5m)(70)

// (Perlin noise)
// noise( scale, offset )
    // scale :: int (default 10.0)
    // offset :: float (default 0.1)

noise().out()

// NOISE SCALE

//BASIC NOISE
noise(1).out()

//MORPHING SHAPES
noise(5).out()

//DYNAMIC TEXTURE
noise(50,0.07).out()

//COMPLEX TEXTURE
noise(300,0.3).out()

//A DYNAMIC GRADIANT
noise(0.35).out()

// A SECUENCE
noise([1,2,0.25]).out()

noise([1,2,0.5].fast(0.25)).out()

noise([1,0.25]).out()

noise([0.7,0.1,0.03]).out(o0)

noise(0.5,0.1,0.3).out(o0)

noise(0.5,0.1,0.3).scale(0.25)
.out(o0)


// NOISE OFFSET (speed)

noise().out(o0)

noise(1).out(o0)
// default
noise(1,0.1).out(o0)
// default x10
noise(1,1).out(o0)
// slow down
noise(1,0.03).out(o0)


noise([1,0.5,1,1.5,2],[0.5,1,2,4,8,16]).out(o0)


// VORONOI (RANDOM POLIGON TEXTURE) (5m)(75)

// voronoi( scale, speed, blending )
//(default 5),(default 0.3),(default 0.3)


voronoi(0.4)
.out()

// LESS BLENDING (sharper edges)
voronoi(1.8, 1.75, 0.1).out()

// MORE BLENDING (less contrast)
voronoi(1.8, 1.75, 2).out()
// .diff(o0).out()

// LESS BLENDING (negative shade reverses light)
voronoi(1.8, 1.75, -2).out()



// OPERATORS PT 1 (15m)(90)
// MASK

//.mask( texture, reps, offset )
  //(color/ src/ shape) + reps(default 3.0) + offset (default 0.5)
// +++
// shape( sides, radius, smoothing)

osc(40).mask(shape(4),0.4,0.2).out(o0) // SHAPE IS SOLLID MASK

osc(80).mask(shape(4,0.4,0.6),9,0.4).out(o0) //SHAPE + MASK PARAMETERS

osc(80).mask(shape(4,0.4,[0.2,0.4,0.6,0.8,0.6,0.4])).out(o0) // ONLY SHAPE PARAMETER


// NOISE

osc(60).mask(noise(1),4,0.2).out(o0) //noise( scale, offset)

osc(40).mask(noise(2,0.5),4,0.2).out(o0)


//low contrast
osc(1.08).mask(noise(2),4,0.6).out(o0)
//contrast
osc(8.08).mask(noise(2),4,0.6).contrast(1.4).out(o0)
// contrast
osc(18.08).mask(noise(2),40,2.6).contrast(2).out(o0)

osc(18.08).mask(noise(2),40,2.6).contrast(-2).out(o0)// negative contrast
osc(18.08).mask(noise(20),1,3.6).contrast(-0.25).out(o0)// negative contrast
// slow
osc(1.08).mask(noise(2),4,0.6).out(o0)


// MORE COMPLEX EXAMPLES
osc(18.08).mask(noise(20),1,3.6).contrast(-0.25)
.diff(osc(4).rotate((0.23)).color(1,[0,1,1],[0,1,0,0].fast(8)))
.out(o0)


// VORONOI
// voronoi( scale, speed, blending )
// (default 5)+(default 0.3)+(default 0.3)

voronoi(0.45,[2.5,0.5,0.25],1).out(o0) // CHANGING SPEED

voronoi(0.95,1.2,[1,0.5,0.1,0.5]).out(o0)

voronoi(2.5)
.diff(voronoi([130,300,100]),0.05)
// .mult(voronoi(24),0.04).contrast(24)
// .thresh([0.7,0.6,0.4,0.6,0.75])
  // .diff(voronoi([130,300,100]),0.05)
  .thresh(({time}) => Math.sin(time/120) * 0.05 )
.out()

// COMPLEX EXAMPLE
// RIVER ROCKS
voronoi(200)
.color(0,0,1)
.mult(osc(1,0.02))
.rotate()
.modulate(osc(1.5),0.8)
.add(voronoi(190))
.add(o0)
.mult(solid(0,0,1),0.07)
.add(noise(0.3,0.07))
.diff(noise(0.3,0.07))
// .thresh(0.4)
.out(o0)

// >> PRACTICE with this 15 mins (95)

// >> QUESTIONS 10 min (105)

// BREAK 15m (125)
