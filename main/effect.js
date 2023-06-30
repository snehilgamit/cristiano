gsap.registerPlugin(ScrollTrigger)
gsap.to(".gallery",{
    scrollTrigger:{
        Trigger:'.textfan',
        start:"300 200",
        end:"center 500",
        scrub:2,
    },
    duration: 5,
    backgroundColor: "white",
})

gsap.from(".cr7text",{
    scrollTrigger:{
        trigger:'.cr7',
        start:'top center',
        end:'top 70',
        scrub:true,
    },
   x:-400,
   "color":'black',
   "z-index":'-1'
})

gsap.to(".cr7text",{
    scrollTrigger:{
        trigger:'.cr7',
        start:'clamp(bottom center)',
    },
   "z-index":'-1'
})
