let door = document.querySelector(".door")
let doorText = document.querySelector(".door-text")
let background = document.querySelector(".background")
let introduction = document.querySelector(".introduction")
let navbar = document.querySelector(".nav-bar")
let backgroundImage = document.body.style.backgroundImage

// ----DEV BUTTONS

// document.querySelector(".fade-in").addEventListener("click", () => {
//     fadeBackgroundImage("in")
// })
// document.querySelector(".fade-out").addEventListener("click", () => {
//     fadeBackgroundImage("out")
// })
// document.querySelector(".to-top").addEventListener("click", () => {
//     window.scrollTo(0, 0)
// })

// ^^^^ DEV BUTTONS


// ==========DEV OPTIONS===========
// fadeBackgroundImage("in")
// setBackgroundImage('./img/textures/background-morning.png')
// navbar.classList.add("show")
// ================================





door.addEventListener("mouseover", () => {
    fadeBackgroundImage("in")
    doorText.setAttribute("class", "door-text-animation")
    door.style.animation = "door-hover 8s infinite alternate none ease-in-out";
})

// DOOR CLICK EVENT
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
        setBackgroundImage('./img/textures/background-morning.png');
        navbar.classList.add("show")
       }
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