import { inView, animate } from "motion";

if(navigator.maxTouchPoints > 1){
    document.body.classList.add("touchpoints");
}

//TYPOGRAPHY SHIFT
if(document.querySelector(".typography-shift") !== null){
    document.querySelectorAll(".typography-shift").forEach(el => {
        let delay = 0;
        if(el.getAttribute("data-delay")){
            delay = Number(el.getAttribute("data-delay"));
        }
        inView(el, ({ target }) => {
            animate(
                target.querySelector("span"),
                { y: ["100%", "0"], opacity: ["0", "1"] },
                { duration: 0.75, delay, easing: [0.25, 1, 0.5, 1] }
            );
        });        
    })
}
//SHIFT UP
if(document.querySelector(".shift-up") !== null){
    document.querySelectorAll(".shift-up").forEach(el => {
        let delay = 0;
        if(el.getAttribute("data-delay")){
            delay = Number(el.getAttribute("data-delay"));
        }
        inView(el, ({ target }) => {
            animate(
                target,
                { y: ["100%", "0"], opacity: ["0", "1"] },
                { duration: 0.75, delay, easing: [0.25, 1, 0.5, 1] }
            );
        });        
    })
}
//SCALE IN
if(document.querySelector(".scale-in") !== null){
    document.querySelectorAll(".scale-in").forEach(el => {
        let delay = 0;
        if(el.getAttribute("data-delay")){
            delay = Number(el.getAttribute("data-delay"));
        }
        inView(el, ({ target }) => {
            animate(
                target,
                { scale: ["1.05", "1"], opacity: ["0", "1"], filter: ["blur(10px)", "blur(0px)"]},
                { duration: 0.75, delay, easing: [0.25, 1, 0.5, 1] }
            );
        });        
    })
}
//FADE IN
if(document.querySelector(".fade-in") !== null){
    document.querySelectorAll(".fade-in").forEach(el => {
        let delay = 0;
        if(el.getAttribute("data-delay")){
            delay = Number(el.getAttribute("data-delay"));
        }
        inView(el, ({ target }) => {
            animate(
                target,
                { opacity: ["0", "1"]},
                { duration: 0.75, delay, easing: [0.25, 1, 0.5, 1] }
            );
        });        
    })
}