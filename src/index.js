let door = document.querySelector(".door")
let doorText = document.querySelector(".door-text")
let background = document.querySelector(".background")
let foreground = document.querySelector(".foreground")
let introduction = document.querySelector(".introduction")
let navbar = document.querySelector(".nav-bar")
let backgroundImage = document.body.style.backgroundImage

// ----DEV BUTTONS

document.querySelector(".fade-in").addEventListener("click", () => {
    fadeBackgroundImage("in")
})
document.querySelector(".fade-out").addEventListener("click", () => {
    fadeBackgroundImage("out")
})
document.querySelector(".to-top").addEventListener("click", () => {
    window.scrollTo(0, 0)
})
document.querySelector(".foreground-toggle").addEventListener("click", () => {
    console.log("POPPYCOCK")
    foreground.style.animation = "transition 2s 1 linear";
    foreground.style.display = "block"
    
})

// ^^^^ DEV BUTTONS


// ==========DEV OPTIONS===========
fadeBackgroundImage("in")
setBackgroundImage('./docs/img/textures/background-morning.png')
navbar.classList.add("show")
// ================================

// window.onbeforeunload = () => {
//     window.scrollTo(0, 0)
// }



// DOOR EVENTS
door.addEventListener("mouseover", () => {
    fadeBackgroundImage("in")
    doorText.setAttribute("class", "door-text-animation")
    door.style.animation = "door-hover 8s infinite alternate none ease-in-out";
})
door.addEventListener("click", () => {
    fadeBackgroundImage("out");
    window.scroll({
        top: 6017,
        behavior: 'smooth',
    })

})
window.addEventListener("scroll", () => {
    console.log(scrollY)
    
    if (scrollY > 2350 && scrollY < 2800) {
        fadeBackgroundImage("in")
        setBackgroundImage('./docs/img/textures/background-morning.png');
        navbar.classList.add("show")
       }
})

// NAVIGATION 7857 About Me
const aboutMe = document.querySelector(".about")
aboutMe.addEventListener("click", () => {

    foreground.style.animation = "transition 1.2s";
    window.scrollTo({
        top: 7857,
        behavior: "smooth"
    })
})



function fadeBackgroundImage(direction) {
    switch(direction) {
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