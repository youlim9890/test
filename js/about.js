 const a =(node)=> document.querySelector(node);

const redcircle = a('#redcircle_2');
const bluecircle = a('#bluecircle_2');
const yellowcircle = a('#yellowcircle_2');
const line1 = a('#line1_2');
const line2 = a('#line2_2');
const button = a('#button');
const time = a('#time');
const progress = a('#progressSlider');

const animation = gsap.to(redcircle,{
    motionPath:{
        path:line1,
        align:line1,
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
    },
    // onUpdate:update,
    onComplete: () =>{
       button.textContent ='play';
    },
    transformOrigin: "50% 50%",
    duration: 5,
    ease: "power1.inOut",
    repeat:-1
});


const animation2 = gsap.to(bluecircle,{
    motionPath:{
        path:line1,
        align:line1,
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
    },
    transformOrigin: "50% 50%",
    duration: 3,
    ease: "power1.inOut",
    repeat:-1
});

animation2.timeScale(0.8)
animation2.time(1)


const animation3 = gsap.to(yellowcircle,{
    motionPath:{
        path:line2,
        align:line2,
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
    },
    transformOrigin: "50% 50%",
    duration: 2.5,
    ease: "power1.inOut",
    repeat:-1
});

