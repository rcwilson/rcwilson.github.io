let door = document.querySelector(".door")
let doorText = document.querySelector(".door-text")
let background = document.querySelector(".background")
let foreground = document.querySelector(".foreground")
let introduction = document.querySelector(".introduction")
let navbar = document.querySelector(".nav-bar")
let backgroundImage = document.body.style.backgroundImage

    

// ========================DEV BUTTONS==========================

// document.querySelector(".fade-in").addEventListener("click", () => {
//     fadeBackgroundImage("in")
// })
// document.querySelector(".fade-out").addEventListener("click", () => {
//     fadeBackgroundImage("out")
// })
// document.querySelector(".to-top").addEventListener("click", () => {
//     window.scrollTo(0, 0)
// })
// document.querySelector(".foreground-toggle").addEventListener("click", () => {
//         screenTransition(1.5)
//     })


// ===================== DEVELOPMENT MODE ======================
// SET DEV MODE
const DEV_MODE = 
    true
// false

if (DEV_MODE === true) {
    fadeBackgroundImage("in")
    setBackgroundImage('./docs/img/textures/background-morning.png')
    navbar.classList.add("show")
    document.body.style.overflow = "scroll"
} else {
    // ====SET SCROLL TO TOP ON REFRESH===
    window.onbeforeunload = () => { window.scrollTo(0, 0) }
}
// ==============================================================



// ============DOOR EVENTS===========
door.addEventListener("mouseover", () => {
    fadeBackgroundImage("in")
    doorText.setAttribute("class", "door-text-animation")
    door.style.animation = "door-hover 8s infinite alternate none ease-in-out";
})
door.addEventListener("click", () => {
    fadeBackgroundImage("out");
    screenTransition(1)
    window.scroll({
        top: 2717,
        behavior: 'smooth',
    })

})
window.addEventListener("scroll", () => {
    console.log(scrollY)

    if (scrollY > 2350 && scrollY < 2800) {
        // fadeBackgroundImage("in")
        setBackgroundImage('./docs/img/textures/background-morning.png');
        navbar.classList.add("show")
    }
})
// ==================================

// =====================NAVIGATION=========================
const aboutMe = document.querySelector(".about")
aboutMe.addEventListener("click", () => {

    screenTransition(.6)
    window.scrollTo({
        top: 5215,
        behavior: "smooth"
    })
})

// ==================ABOUT ME SECTION====================
const aboutMeSlideArray = document.querySelectorAll(".content-container-slide");
let currentSlideIndex = 0;
let maxSlideIndex = aboutMeSlideArray.length - 1;

document.querySelector(".left-bubble-1.about").onclick = onClickLeft;
document.querySelector(".right-bubble-1.about").onclick = onClickRight;

function handleSlideChange(action, callback) {
    aboutMeSlideArray[currentSlideIndex].classList.remove("active")
    switch (action) {
        case "right": 
                    if(currentSlideIndex < maxSlideIndex) { 
                        currentSlideIndex ++ 
                    }else {
                        currentSlideIndex = 0;
                    } 
                    break;  
        case "left":
                    if(currentSlideIndex > 0) { 
                        currentSlideIndex -- 
                    }else {
                        currentSlideIndex = maxSlideIndex;
                    } 
                    break;              
        }
        callback();
}
function onClickRight() {
    handleSlideChange("right", () => {
        aboutMeSlideArray[currentSlideIndex].classList.add("active")
    })
}
function onClickLeft() {
    handleSlideChange("left", () => {
        aboutMeSlideArray[currentSlideIndex].classList.add("active")
    })
}






function fadeBackgroundImage(direction) {
    switch (direction) {
        case "in":
            background.classList.add("show")

            break;
        case "out":
            background.classList.remove("show")

            break;
        default: console.log("direction must be in or out");
    }
}
function setBackgroundImage(imageUrl) {
    document.body.style.backgroundImage = `url(${imageUrl})`;
    fadeBackgroundImage("in");
}
function screenTransition(duration) {
    foreground.style.animation = `transition ${duration}s 1 linear`;
    foreground.addEventListener('animationend', () => {
        foreground.style.animation = "none";
        })
}