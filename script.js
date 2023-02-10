gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
    toggleActions: "restart pause resume pause",
    scroller: ".container"
});

gsap.to(".orange p", {
    scrollTrigger: ".orange",
    duration: 2,
    repeat: -1,
    rotation: 360
});

gsap.to(".violet", {
    scrollTrigger: {
        trigger: ".violet",
        toggleActions: "restart pause reverse pause"
    },
    duration: 5,
    backgroundColor: "#FFA500",
    ease: "none"
});

gsap.to(".yoyo p", {
    scrollTrigger: ".yoyo",
    scale: 2,
    repeat: -1,
    yoyo: true,
    ease: "power2"
});
