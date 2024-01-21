var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

});

gsap.from("#main .head .uphead", {
    y: 100,
    duration: 1,
    delay: 1,
    opacity: 0,

});
gsap.from(" #main .second .right .h1 h1", {
    duration: 1,
    opacity: 0,
    
});
