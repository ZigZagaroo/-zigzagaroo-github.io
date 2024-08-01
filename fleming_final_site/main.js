const name = document.querySelector(".hero-container .name");
const contactContent = document.querySelectorAll("#contact-section h3, #contact-section span");
const heroToNav = document.querySelector(".hero-to-nav");
const navToHero = document.querySelector("#nav-to-hero");
const navToContact = document.querySelector("#nav-to-contact");
const navToAbout = document.querySelector("#nav-to-about");
const aboutToNav = document.querySelector("#about-to-nav");
const navToPortfolio = document.querySelector("#nav-to-portfolio");
const portfolioToNav = document.querySelector("#portfolio-to-nav");
const navSection = document.querySelectorAll("#nav-section");
const contactToNav = document.querySelector("#contact-to-nav");
const navItems = document.querySelectorAll("#nav-section ul li button");
const wolfHeadFull = document.querySelectorAll("#portfolio > img");
const skillImg = document.querySelectorAll(".skill-img");
const smNodes = document.querySelectorAll(".sm-node");
const closeImg = document.querySelector("#close-img");

smNodes.forEach(sm => {
    sm.addEventListener("click", () => {
        console.log("Fafas")
        gsap.set(".imgs", { display: "grid" });
        gsap.to(`[data-img-no="${sm.dataset.imgCon}"]`, { zIndex: 99999, scale: "1", duration: 1 });
    });  
});

closeImg.addEventListener("click", () => {
    gsap.to(`.imgs img`, { scale: "0", zIndex: -9999999, duration: 1 });
    gsap.to(".imgs", { display: "none" });
})

function splitText(el) {
    let newName = "";

    el.textContent.split("").forEach(char => {
        newName += `<span>${char}</span>`
    });

    el.innerHTML = newName;
}

splitText(name);
splitText(aboutToNav);

gsap.set(".hero-container", { opacity: "0%" });
gsap.set(".hero-container .inner button span", { opacity: "0%" });

const tl = gsap.timeline();

tl.to(".hero-container", { opacity: "100%", duration: 2 });
tl.to(".hero-container .inner button span", { opacity: "100%", duration: 0, stagger: 0.125 });

const tl2 = gsap.timeline();

heroToNav.addEventListener("click", () => {
    tl2.to(".hero-container .inner button.hero-to-nav span", { opacity: "0%", duration: 0, stagger: {
        each: 0.125,
        from: [100, 100]
    }});

    gsap.set(navSection, { display: "block" });
    gsap.set(navToHero, { display: "block" });

    navItems.forEach(item => {
        splitText(item);

        const text = item.querySelectorAll("span");
        gsap.set(text, { opacity: "0%" });

        tl2.to(text, { opacity: "100%", duration: 0, stagger: 0.125});
    })

    splitText(navToHero);
    gsap.set("#nav-to-hero span", { opacity: "0%" });

    tl2.to("#nav-to-hero span", { opacity: "100%", duration: 0, stagger: 0.125 });

    tl2.set(".hero-container .inner button#home-content", { display: "none", duration: 0 });
});

const tl3 = gsap.timeline();

navToHero.addEventListener("click", () => {
    tl3.to("#nav-to-hero span", { opacity: "0%", duration: 0, stagger: {
        each: 0.125,
        from: [100, 100]
    }});

    for(let i = navItems.length - 1; i >= 0; i--) {
        const text = navItems[i].querySelectorAll("span");

        tl3.to(text, { opacity: "0%", duration: 0, stagger: {
            each: 0.125,
            from: [100, 100]
        }});
    }

    tl3.set("#nav-to-hero", { display: "none" });
    tl3.set(".hero-container .inner button#home-content", { display: "block", duration: 0 });
    tl3.to(".hero-container .inner button#home-content span", { opacity: "100%", duration: 0, stagger: 0.125 });
});

const tl4 = gsap.timeline();

navToContact.addEventListener("click", () => {
    tl4.set("#nav-to-hero", { display: "none" });
    tl4.set("#contact-to-nav", { display: "block" });

    for(let i = navItems.length - 1; i >= 0; i--) {
        const text = navItems[i].querySelectorAll("span");

        tl4.to(text, { opacity: "0%", duration: 0, stagger: {
            each: 0.125,
            from: [100, 100]
        }});
    }

    tl4.set("#contact-section", { display: "block" });
    contactContent.forEach(item => {
        splitText(item);

        const text = item.querySelectorAll("span");

        gsap.set(text, { opacity: "0%" });

        tl4.to(text, { opacity: "100%", duration: 0, stagger: 0.125});
    });

    tl4.to(".hero-container .inner #contact-section h3 span", { opacity: "100%", duration: 0, stagger: {
        each: 0.125,
        from: [100, 100]
    }});
});

const tl5 = gsap.timeline();

contactToNav.addEventListener("click", () => {
    tl5.set("#nav-to-hero", { display: "block" });
    tl5.set("#contact-to-nav", { display: "none" });

    tl5.to("#contact-section .contact-text span", { opacity: "0%", duration: 0, stagger: {
        each: 0.125,
        from: [100, 100]
    }});

    contactContent.forEach(item => {
        const text = item.querySelectorAll("span");

        tl5.to(text, { opacity: "0%", duration: -2, stagger: {
            each: 0.125,
            from: [100, 100]
        }});
    });

    tl5.set("#contact-section", { display: "none" });

    for(let i = 0 ; i < navItems.length; i++) {
        const text = navItems[i].querySelectorAll("span");

        tl5.to(text, { opacity: "100%", duration: 0, stagger: 0.125 });
    }
});

const tl6 = gsap.timeline();

navToAbout.addEventListener("click", () => {
    tl6.set("#about p", { transform: "translate(0px, calc(-1 * 90vh))" });
    tl6.set("#about button", { opacity: "0%" });

    tl6.fromTo(".hero-container", { opacity: "100%" }, { opacity: "0%", duration: 1 });
    tl6.set(".hero-container", { display: "none" });
    
    tl6.set("#about", { display: "grid" });
    tl6.to(".about-img", { opacity: "100%", duration: 2 });
    
    tl6.to("#about p", { transform: "translate(0px, 0px)", duration: 4 });

    tl6.to("#about button", { opacity: "100%", duration: 0, stagger: 0.125 });
});

aboutToNav.addEventListener("click", () => {
    tl6.to("#about button", { opacity: "0%", duration: 0, stagger: {
        each: 0.125,
        from: [100, 100]
    }});

    tl6.to("#about p", { transform: "translate(0px, calc(-1 * 90vh))", duration: 2 });

    tl6.fromTo(".about-img", { opacity: "100%" }, { opacity: "0%", duration: 2 });
    tl6.set("#about", { display: "none" });

    tl6.set(".hero-container", { display: "flex" });
    tl6.fromTo(".hero-container", { opacity: "0%" }, { opacity: "100%", duration: 2 });

    tl6.set("#nav-to-hero", { display: "block" });
    tl6.set("#contact-to-nav", { display: "none" });

    tl6.to("#contact-section .contact-text span", { opacity: "0%", duration: 0, delay: 2, stagger: {
        each: 0.125,
        from: [100, 100]
    }});

    contactContent.forEach(item => {
        const text = item.querySelectorAll("span");

        tl6.to(text, { opacity: "0%", duration: -2, stagger: {
            each: 0.125,
            from: [100, 100]
        }});
    });

    tl6.set("#contact-section", { display: "none" });

    for(let i = 0 ; i < navItems.length; i++) {
        const text = navItems[i].querySelectorAll("span");

        tl6.to(text, { opacity: "100%", duration: 0, stagger: 0.125 });
    }
});

navToPortfolio.addEventListener("click", () => {
    tl6.fromTo(".hero-container", { opacity: "100%" }, { opacity: "0%", duration: 1 });
    tl6.set(".hero-container", { display: "none" });

    tl6.to("#portfolio", { display: "grid" });
    tl6.to("#portfolio", { opacity: "1" });
});

portfolioToNav.addEventListener("click", () => {
    tl6.to("#portfolio", { opacity: "0" });
    tl6.to("#portfolio", { display: "none" });
    
    tl6.set(".hero-container", { display: "grid" });
    tl6.fromTo(".hero-container", { opacity: "0%" }, { opacity: "100%", duration: 1 });
})

const tl7 = gsap.timeline();
let headOpen = false;

wolfHeadFull.forEach(p => p.addEventListener("click", () => {
    if(!headOpen) {
        tl7.to(".wolf-jaw", { top: "460px", duration: 1 });
        tl7.to(".skills", { opacity: "1", duration: 1 });
    } else {
        tl7.to(".skills", { opacity: "0", duration: 1 });
        tl7.to(".wolf-jaw", { top: "81px", duration: 1 });
    }
    
    headOpen = !headOpen;
}));

const tl8 = gsap.timeline();
let smOpen = false;

skillImg.forEach(si => si.addEventListener("click", () => {
    const smNode = si.parentElement.querySelectorAll(".sm-node");
    const largeNodes = si.parentElement.parentElement.querySelectorAll(".container");

    if(!smOpen) {
        largeNodes.forEach(largeNode => {
            if(largeNode !== si.parentElement) {
                tl8.to(largeNode, { opacity: "0", duration: 1 });
                tl8.to(largeNode, { display: "none", duration: 0 });
            }
        });

        tl8.to(smNode, { opacity: "1", duration: 1 }); 
    }
    else {
        tl8.to(smNode, { opacity: "0", duration: 1 });
        
        largeNodes.forEach(largeNode => {
            if(largeNode !== si.parentElement) {
                tl8.to(largeNode, { opacity: "1", duration: 1 });
                tl8.to(largeNode, { display: "block", duration: 0 });
            }
        });
    }

    smOpen = !smOpen;
}));
