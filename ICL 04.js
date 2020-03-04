// PT 4
// CUSTOM SOURCES
// SCREEN

solid().out()

s0.initScreen(1)
src(s0)
.out(o0)
//
render(o0)

s0.initScreen(1)
src(s0)
// .blend(solid(),0.57) // Solid works as an opacity or color filter
.blend(solid(0.4),0.4)
.mult(osc(([100,20].fast(0.15)),0.04))
// .mult(osc(([4,3,21,1,2,3].fast(0.25)),0.04,0.05))
// .thresh(([0.027,0.04,0.09,0.2].fast(1.75)))
.add(gradient(1.2,0.5).thresh(0.2))
// .modulate(s0,0.05)
// .modulate(s3,0.05) // Modulate another
.modulate(noise(0.48,0.1))
.diff(s0)
// .blend(solid(),0.3) // Solid here is MASTER opacity or color filter
.out(o0)

s0.clear()


// SOURCES
// SCREEN Pt 2


s0.initScreen(2)
src(s0)
// .saturate(1.1) // COLOR FROM FEEDBACK USING SATURATION
// .saturate([1,2,3,4,8,12,24].fast(0.25)) // COLOR FROM FEEDBACK USING SATURATION
// .saturate([100,20,30,40,80,12,24].fast(0.5)) // COLOR FROM FEEDBACK USING SATURATION
// .scale([1.01,0.8,0.5])
// .scale([1.03])
// .contrast(1.05)
// .scrollX([0.01,0.02,0.05, 0.08, 0.1]*(-1))
// .scrollY([0.01,0.02,0.05, 0.08, 0.07])
// .modulate(s0)
// .diff(s0)
  // .modulateKaleid(osc(1,0.05,3),1)
// .modulateRotate(o0,[0.4,0.6,0.7,0.8]) //FEEDBACK MODULATES ROTATION
// .thresh([0.6,0.5,0.4,0.3])
// .mult((osc(200)))
.blend(solid(),0.25) // Solid here is MASTER opacity or color filter
.out(o0)

//
//
//

// SOURCES video

vid = document.createElement('video')
vid.autoplay = true
vid.loop = true

//
vid.src = '/Volumes/DATA/e_e/IMAGEN/webm/webm ee/5.webm'
//


//EXAMPLE OF ADD
s0.init({src: vid})
src(s0)
// .diff(
  // shape(
    // (4),4.2).scale(0.18)
  //   .diff((osc(9)))
  //   .diff(shape(
  //     (4),4.2).scale([0.1,0.13,0.5]))
  // )
// .add(gradient(2))
// .modulate(o1)
// .mult(o1)
// .diff(o1)
.out(o3)

render()

solid().out(o1)

shape(3,0.4)
  // .rotate(({time})=>Math.sin(time)*5)
.out(o1)


shape(2,0.2)
  // .rotate(({time})=>Math.sin(time)*5)
.out(o2)

shape(4,0.4)
  // .rotate(({time})=>Math.sin(time)*5)
  .add(gradient(0.5))
.out(o3)

src(s0)
.blend(o0)
.add(o0)
.diff(o2,0.002)
.diff(o1)
.blend(solid(),[0.4,0.5,0.4].fast(0.03))
.thresh(0.6)
.out(o0)




render(o0)


s0.init({src: vid})
src(s0).out(o0)


//LOAD VID
vid = document.createElement('video')
vid.autoplay = true
vid.loop = true
/////

// LOAD IMG
myImage = document.createElement('Image')
myImage = new Image(3120,4160)
myImage.src = '/Volumes/DATA/e_e/IMAGEN/phone/eShef.jpg'
myImage.autoplay = true
myImage.loop = true
//
// s0.init({src: myImage})
// src(s0)
// .rotate(1.56)
// .out(o3)
//
s0.init({src: myImage})
src(s0)
.rotate(1.56)
// .modulate(o0,0.05)
.out(o0)

render(o0)

solid().out(o3)

//frame rate freeze
(osc(1,0.5)
  .rotate(1.56)
  .thresh(0.3)
)
.out(o2)

(gradient(1,0.5)
  .rotate(1.56)
  // .thresh(0.9)
)
.out(o2)

render()

solid().out(o0)

//STARTIC SOURCE

src(s0)
.rotate(1.56)
.scale(0.98)
// .invert(0.1,0,0.4)
// .mult(osc(4.2,0.6))
// .contrast(2)
// .modulate(o0,1.1)
.add(o1,0.25)
// .scrollY(0.0001,0.002)
.out(o3)

src(o3)
.add(o1)
.modulate(o2,0.05)
// .diff(o2)
.modulate(noise(0.7,0.05),0.07)
// .diff(noise(0.3,0.61),0.07)
.contrast(1.5)
.mult(
  shape(2,0.6)
  .color().rotate(1.56)
  .scrollX(0.05)
  )
.repeatX(2)
.out(o0)

// OUT MIX

src(o3)
// .add(o1)
.modulate(o2,0.05)
.diff(o2)
// .modulate(noise(0.7,0.05),0.07)
// .diff(noise(0.3,0.61),0.07)
// .contrast(1.5)
.mult(
  shape(2,0.6)
  .color().rotate(1.56)
  .scrollX(0.05)
  )
.repeatX(2)
.out(o0)
