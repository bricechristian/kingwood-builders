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