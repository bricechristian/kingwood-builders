import { inView, animate, scroll } from "motion";

if(navigator.maxTouchPoints > 1){
    document.body.classList.add("touchpoints");
}

//ADDS 'IN-VIEW' CLASS
if(document.querySelector(`[data-viewport]`) !== null){
    document.querySelectorAll(`[data-viewport]`).forEach(el => {  
        let delay = 0;
        let amount = "any";
        if(el.getAttribute("data-viewport-delay")){
            delay = Number(el.getAttribute("data-viewport-delay") * 1000);
        }                
        if(el.getAttribute("data-viewport-amount")){
            amount = Number(el.getAttribute("data-viewport-amount"))
        }                
        inView(el, () => {
            setTimeout(() => {
                el.classList.add("in-view")
            }, delay);
        }, { amount });    
    })
}
//TYPOGRAPHY SHIFT
if(document.querySelector(`[data-viewport="typography-shift"]`) !== null){
    document.querySelectorAll(`[data-viewport="typography-shift"]`).forEach(el => {
        let delay = 0;
        if(el.getAttribute("data-viewport-delay")){
            delay = Number(el.getAttribute("data-viewport-delay"));
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
//SHOPIFY POLICY TITLE SHIFT
if(document.querySelector(`.shopify-policy__title`) !== null){
    const el = document.querySelector(`.shopify-policy__title h1`);
    el.innerHTML = `<span>${el.textContent}</span>`;
    setTimeout(() => {
        el.parentElement.style.opacity = 1;
    }, 50);
    inView(el, ({ target }) => {
        animate(
            target.querySelector("span"),
            { y: ["100%", "0"], opacity: ["0", "1"] },
            { duration: 0.75, delay: .15, easing: [0.25, 1, 0.5, 1] }
        );
    });    
}
//SHIFT UP
if(document.querySelector(`[data-viewport="shift-up"]`) !== null){
    document.querySelectorAll(`[data-viewport="shift-up"]`).forEach(el => {
        let delay = 0;
        let rotate = 0;
        if(el.getAttribute("data-viewport-delay")){
            delay = Number(el.getAttribute("data-viewport-delay"));
        }      
        if(el.getAttribute("data-viewport-rotate")){
            rotate = Number(el.getAttribute("data-viewport-rotate"));
        }      
        inView(el, ({ target }) => {
            animate(
                target,
                { y: ["100%", "0"], rotate, opacity: ["0", "1"] },
                { duration: 0.75, delay, easing: [0.25, 1, 0.5, 1] }
            );
        });        
    })
}
//BLAST UP
if(document.querySelector(`[data-viewport="blast-up"]`) !== null){
    document.querySelectorAll(`[data-viewport="blast-up"]`).forEach(el => {
        let delay = 0;
        let rotate = 0;
        if(el.getAttribute("data-viewport-delay")){
            delay = Number(el.getAttribute("data-viewport-delay"));
        }      
        if(el.getAttribute("data-viewport-rotate")){
            rotate = Number(el.getAttribute("data-viewport-rotate"));
        }      
        inView(el, ({ target }) => {
            animate(
                target,
                { y: ["100%", "0"], rotate},
                { duration: 0.6, delay, easing: [0.25, 1, 0.5, 1] }
            );
        });        
    })
}
//SCALE IN
if(document.querySelector(`[data-viewport="scale-in"]`) !== null){
    document.querySelectorAll(`[data-viewport="scale-in"]`).forEach(el => {
        let delay = 0;
        if(el.getAttribute("data-viewport-delay")){
            delay = Number(el.getAttribute("data-viewport-delay"));
        }         
        inView(el, ({ target }) => {
            animate(
                target,
                { scale: ["1.05", "1"], opacity: ["0", "1"]},
                { duration: 1.5, delay, easing: [0.25, 1, 0.5, 1] }
            );
        });        
    })
}
//ROTATE IN
if(document.querySelector(`[data-viewport="rotate-in"]`) !== null){
    document.querySelectorAll(`[data-viewport="rotate-in"]`).forEach(el => {
        let delay = 0;
        if(el.getAttribute("data-viewport-delay")){
            delay = Number(el.getAttribute("data-viewport-delay"));
        }      
        inView(el, ({ target }) => {
            animate(
                target,
                { rotate: [-35, 0]},
                { duration: 1.5, delay, easing: [0.25, 1, 0.5, 1] }
            );
        });        
    })
}
//FADE IN
if(document.querySelector(`[data-viewport="fade-in"]`) !== null){
    document.querySelectorAll(`[data-viewport="fade-in"]`).forEach(el => {
        let delay = 0;
        if(el.getAttribute("data-viewport-delay")){
            delay = Number(el.getAttribute("data-viewport-delay"));
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
//SCROLL: SCALE UP
if(document.querySelector(`[data-viewport="scale-on-scroll"]`) !== null){
    document.querySelectorAll(`[data-viewport="scale-on-scroll"]`).forEach(el => {
        let delay = 0;
        let duration = 0.75;
        if(el.getAttribute("data-viewport-delay")){
            delay = Number(el.getAttribute("data-viewport-delay"));
        }      
        if(el.getAttribute("data-viewport-duration")){
            duration = Number(el.getAttribute("data-viewport-duration"));
        }      
        scroll(animate(el, { scale: [1, 1.35] }));
        inView(el, ({ target }) => {
            animate(
                target,
                { scale: ["1.05", "1"], opacity: ["0", "1"]},
                { duration: .75, delay, easing: [0.25, 1, 0.5, 1] }
            );
        });             
      
    })
}