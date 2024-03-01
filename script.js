gsap.from(".nav-1 img",{

    y:-100,
    delay:0.5,
    duration:1,
    opacity:0,

})




gsap.from(".nav-2 h3",{

    y:-100,
    delay:0.5,
    duration:0.5,
    opacity:0,
    stagger:0.2,

})


gsap.from(".nav-3 h3,.nav-3 button",{

    x:100,
    delay:0.5,
    duration:1,
    opacity:0,
    stagger:0.2,    

})

gsap.from("h1",{
    delay:0.5,
    duration:0.8,
    y:800,
    opacity:0,
    stagger:0.4,

})

gsap.from("span",{
    x:200,
    duration:1,
    delay:1,
    opacity:0,
    
})



gsap.from("#left-img,#right-img",{
    delay:0.5,
    duration:0.7,
    opacity:0,
    scale:0,
})


gsap.from("h5",{
    opacity:0,
    duration:0.7,
    delay:0.5,
    y:30,
    yoyo:true,
   repeat:-1,
})