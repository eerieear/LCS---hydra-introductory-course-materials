

// PT 3
// SOURCES (GEOMETRY) 30m (155)

// SOURCES (Render Outputs) (10m) (135)
// ROUTING OUTPUT BUFFERS
// src( input )
// "MAIN" OUT >> out(o0)

render()

render(o0)
render(o1)
render(o2)
render(o3)

// .shift( r, g, b, a )
// O1
osc(4).shift(0.5,0.2, 0.3, [0.4, 0.2]).out(o1)
// O2
osc(10).shift(0.5,0.2, 0.3, [0.5, 0.8]).rotate(-1.2).out(o2)
// O3
osc(80).shift(0.5,0.2, 0.5, [0.3, 0.6]).rotate(1.2).out(o3)

// MIX
src(o1).diff(o2).out(o0)
src(o2).add(o1).out(o0)
src(o2).diff(o3).out(o0)

src(o1).diff(o2).modulate(o3).out(o0)//order alters result 1
src(o1).diff(o3).modulate(o2).out(o0)//order alters result 2
src(o2).diff(o3).modulate(o1).out(o0)//order alters result 3

render(o0)

// STOP
solid().out(o0)



// SHAPE (20m)(155)

// shape( sides, radius, smoothing)
// sides :: int (default 3.0)/ radius :: float (default 0.3)/ smoothing :: float (default 0.01)

shape(2).out(o0)

shape(2)
  // .diff(src(o0).scale(0.8))
.out(o0)

osc(10,-0.02)
  .rotate(0.8)
  // LATER//.layer(shape(4,[0.2,0.4,0.6,0.8,1]))
  // .add(shape(4,0.45)) //adds values
  // .blend(shape(4,0.47)) // overlays
  // .mult(shape(4,0.5))  //multiplies values
  // .mult(shape(4,0.7)) //shape amount
  // .diff(shape(4,0.73))
  // .mult(shape(4,0.72))
  // .mask(shape(4,0.72,0.02))
  // .mask(shape(4,0.72),0.2,4.8) //works as mult lets pass the positive values
  // .mask(voronoi(2,0.1,0.3))
  // .layer(shape(4,[0.2,0.4,0.6,0.8,1]))//not a mask , a solid layer
.out()


// SHAPE
// shape( sides, radius, smoothing)
// sides (default 3.0) / radius (default 0.3) smoothing (default 0.01)

shape(2)
// shape(3)
//// predictably...
// shape([4,4,4,4,4,5,6,7,10,15,20,25,30,40,60,60,60])
////why would you use a float ?
// shape([4,4,4.1,4.3,4.5,5,6,7,10,15,20,25,30,40,60,60,60])
.out(o0)

// STOP
solid().out(o0)

//COMBINING SHAPES IN OUTPUT BUFFERS (20m)(175)

// OPERATORS
// Functions for performing operations on sources.
    add()   //( texture, amount )
    blend() //( texture, amount )
    mult()  //( texture, amount )
    diff()  //( only texture )
    layer() //( only texture )
    mask()  //( texture, reps, offset )

shape(2)
  .scale(2.5)
  .diff(shape(2).scale(2.2))
  .diff(shape(2).scale(1.8))
  .diff(shape(2).scale(1.4))
  .mult(gradient())
.out(o0)

solid().out(o)

gradient([0.25,0.15,0.4],0.5)
.thresh([0.3,0.5,0.4].fast(0.05))
.out(o1)

render(o0)


shape(2)
  .scale(2.5)
  .diff(shape(2).scale(2.2))
  .diff(shape(2).scale(1.8))
  .diff(shape(2).scale(1.4))
  .add(osc(2,0.3,0.5))
  .modulate(gradient(6))
    .modulate(src(o0)
    .diff(src(o0).scale([0.0002,0,0,0,0.0005]))
    .diff(src(o0).scale(0.9999998))
    .mult(src(o0).scale(0.9999998))
    )
  .modulate(o1,[0.7,0.4].fa
    st(0.02))
  .modulate(o1,[0.7,0.4].fast(0.02)).scale(1.99999,0.7)// INTENSE MODULATION
  .invert([0,0,1,0,1,0,0,0,0].fast(0.05))
  // .diff(o0)
  .add(src(o0).scale(0.99998))
  .diff(noise(0.4,0.02))
    // .rotate(0.005,0.002)
    // .rotate(0.005,0.0000002)//FULL
   // .scale(1.9999,0.6)
  .out(o0)

gradient([0.25,0.15,0.4],0.5)
.thresh([0.3,0.5,0.4].fast(0.05))
.out(o1)

render(o0)

solid().out()

// EXAMPLES HYDRA WEB
// a... rainbow ball?
shape(5,0.5,0.1).repeat(19,19)
  .mult(osc(10,1,2))
  .rotate( ({time}) => time%360 )
  .scrollX(1,-0.25)
  .mult(shape(15,0.3,0.01)
        .rotate( ({time}) => time%360 )
        .scrollX(1,-0.25))
  .out(o0)

shape(([2,4]),0.5,0.1).repeat(19,19)
      // .mult(osc(10,1,2).diff(gradient(1).add(src(o0))))
      // .rotate( ({time}) => time%[360] )
      // .scrollX(0.001,0.0025)
      // .mult(shape(15,([0.3,0.4,0.5,0.4,0.4,0.4,0.6,0.5,0.1,0.2,0.4,0.3]),0.01)//X OR
      // .mult(shape(15,([0.3,0.4,0.6,0.8,1,2,2.2,2.4,3]),0.01) //X OR
            // .rotate( ({time}) => time%360 )
            // .scrollX(0.01,-0.0125))
            // .rotate( ({time}) => time%3 )
            // .add(src(o0).scale(1.2))
            // .modulate(src(o0).scale(1.4).modulate(osc(0.3)))
            // .modulate(src(o0).scale(0.4).modulate(osc(0.3)))
      .out(o0)



shape(([2,4]),0.5,0.1).repeat(19,19)
        .mult(osc(10,1,2).diff(gradient(1).add(src(o0))))
        // .rotate( ({time}) => time%[360] )
        .scrollX(0.001,0.0025)
        .mult(shape(3,([0.3,0.4,0.5,0.4,0.4,0.4,0.6,0.5,0.1,0.2,0.4,0.3]),0.01)//X OR
        // .mult(shape(15,([0.3,0.4,0.6,0.8,1,2,2.2,2.4,3]),0.01) //X OR
              .rotate( ({time}) => time%360 )
              .scrollX(0.01,-0.0125))
              .rotate( ({time}) => time%3 )
              .add(src(o0).scale(1.2))
              .modulate(src(o0).scale(1.4).modulate(osc(0.3)))
              .modulate(src(o0).scale(0.4).modulate(osc(0.3)))
        .out(o1)


solid().out(o2)


src(o2)
.modulate(o1)
.out()
