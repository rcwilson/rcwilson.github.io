const Slideshow = require("./components/Slideshow")
let door = document.querySelector(".door")
let doorText = document.querySelector(".door-text")
let background = document.querySelector(".background")
let foreground = document.querySelector(".foreground")
let introduction = document.querySelector(".introduction")
let navbar = document.querySelector(".nav-bar")
let backgroundImage = document.body.style.backgroundImage

let INTRO = 2690
let ABOUT_ME = 5130
let PROJECTS = 7710

const DEV_MODE = true

    

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
let scrollDisplay = document.querySelector(".scrolly-display")
    window.addEventListener("scroll", (e)=>{
        scrollDisplay.innerHTML = scrollY;})


// ===================== DEVELOPMENT MODE ======================
if (DEV_MODE === true) {
    fadeBackgroundImage("in")
    // setBackgroundImage('./docs/img/textures/background-morning.png')
    navbar.classList.add("show")
    document.body.style.overflow = "scroll"
    doorText.setAttribute("class", "door-text-animation")
    door.style.animation = "door-hover 8s infinite alternate none ease-in-out";
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
// INTRO------
door.addEventListener("click", () => {
    fadeBackgroundImage("out");
    screenTransition(1)
    window.scroll({
        top: INTRO,
        behavior: 'smooth',
    })

})
window.addEventListener("scroll", () => {
    console.log(scrollY)

    if (scrollY > (INTRO - 1000) && scrollY < (ABOUT_ME + 1000)) {
        // fadeBackgroundImage("in")
        setBackgroundImage('./docs/img/textures/background-morning.png');
        navbar.classList.add("show")
    }

    if (scrollY > (PROJECTS - 1000) && scrollY < (PROJECTS + 1000)) {
        
        setBackgroundImage("./docs/img/textures/background-night2.png")
    }
})

// =====================NAVIGATION=========================
const AboutMe = document.querySelectorAll(".about.link")
const Projects = document.querySelectorAll(".projects.link")
let ContactDropDown = document.querySelector(".contact-dropdown")

// ABOUT ME ===========
AboutMe.forEach(about => {
    about.addEventListener("click", () => {
        screenTransition(.9)
        window.scrollTo({
            top: ABOUT_ME,
            behavior: "smooth"
        })
    })
}) 

// CONTACT ME ==========
document.addEventListener("click", event => {
    if (ContactDropDown.classList.contains("show")) {    
        ContactDropDown.classList.remove("show")    
    } else if(event.target.closest(".contact.link")) {
        ContactDropDown.classList.add("show")
    }
})

// PROJECTS ==========
Projects.forEach(projects => {
    projects.addEventListener("click", () => {
        screenTransition(1.2)
        window.scrollTo({
            top: PROJECTS,
            behavior: "smooth"
        })
    })
})



// ==================ABOUT ME SECTION====================
const aboutMeSlideArray = document.querySelectorAll(".content-container-slide");
let currentSlideIndex = 1;
let maxSlideIndex = aboutMeSlideArray.length - 1;
let leftBubbleText = document.querySelector(".left-bubble-1.about").children.item(0)
let rightBubbleText = document.querySelector(".right-bubble-1.about").children.item(0)
leftBubbleText.innerHTML = aboutMeSlideArray[currentSlideIndex - 1].id

document.querySelector(".left-bubble-1.about").onclick = onClickLeft;
document.querySelector(".right-bubble-1.about").onclick = onClickRight;
function handleBubbleText() {
    if(currentSlideIndex === 0) {
        leftBubbleText.innerHTML = aboutMeSlideArray[maxSlideIndex].id
        rightBubbleText.innerHTML = aboutMeSlideArray[1].id

    } else {
        leftBubbleText.innerHTML = aboutMeSlideArray[currentSlideIndex - 1].id
        if(currentSlideIndex === maxSlideIndex) {
            rightBubbleText.innerHTML = aboutMeSlideArray[0].id
        } else {
            rightBubbleText.innerHTML = aboutMeSlideArray[currentSlideIndex + 1].id
        }
    }
}
function handleSlideChange(action, callback) {
    aboutMeSlideArray[currentSlideIndex].classList.remove("active")
    switch (action) {
        case "right": 
                    if(currentSlideIndex < maxSlideIndex) { 
                        currentSlideIndex ++ ;
                        
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
        handleBubbleText()
    })

}
function onClickLeft() {
    handleSlideChange("left", () => {
        aboutMeSlideArray[currentSlideIndex].classList.add("active")
        handleBubbleText()
    })
}

// ==================PROJECTS SECTION=================

const galleryImages = document.querySelectorAll(".project-gallery > img")
const tooltip = document.querySelector(".tooltip")
let projectSlideArray = document.querySelectorAll(".content-container-slide-projects")
let currentProjectSlideIndex = 0;
const maxProjectSlideIndex = projectSlideArray.length - 1;
document.querySelector(".left-bubble-1.projects").onclick = onClickLeftProject;
document.querySelector(".right-bubble-1.projects").onclick = onClickRightProject;
let leftProjectBubbleText = document.querySelector(".left-bubble-1.projects").children.item(0)
let rightProjectBubbleText = document.querySelector(".right-bubble-1.projects").children.item(0)
leftProjectBubbleText.innerHTML = projectSlideArray[maxProjectSlideIndex].id
rightProjectBubbleText.innerHTML = projectSlideArray[currentProjectSlideIndex + 1].id

function onClickLeftProject() {
    handleProjectSlideChange("left", () => {
        projectSlideArray[currentProjectSlideIndex].classList.add("active")
        handleProjectBubbleText()
    })
}
function onClickRightProject() {
    handleProjectSlideChange("right", () => {
        projectSlideArray[currentProjectSlideIndex].classList.add("active")
        handleProjectBubbleText()
    })
}

function handleProjectSlideChange(action, callback) {
    projectSlideArray[currentProjectSlideIndex].classList.remove("active")
    switch (action) {
        case "right": 
                    if(currentProjectSlideIndex < maxProjectSlideIndex) { 
                        currentProjectSlideIndex ++ ;
                    }else {
                        currentProjectSlideIndex = 0;
                    } 
                    break;  
        case "left":
                    if(currentProjectSlideIndex > 0) { 
                        currentProjectSlideIndex -- 
                    }else {
                        currentProjectSlideIndex = maxProjectSlideIndex;
                    } 
                    break;              
        }
        callback();
}

function handleProjectBubbleText() {
    if(currentProjectSlideIndex === 0) {
        leftProjectBubbleText.innerHTML = projectSlideArray[maxProjectSlideIndex].id
        rightProjectBubbleText.innerHTML = projectSlideArray[1].id

    } else {
        leftProjectBubbleText.innerHTML = projectSlideArray[currentProjectSlideIndex - 1].id
        if(currentProjectSlideIndex === maxProjectSlideIndex) {
            rightProjectBubbleText.innerHTML = projectSlideArray[0].id
        } else {
            rightProjectBubbleText.innerHTML = projectSlideArray[currentProjectSlideIndex + 1].id
        }
    }
}

// ====================THUMBNAIL TOOLTIP==================
galleryImages.forEach(img => {
    img.addEventListener("mouseenter", () => {
        tooltip.style.display = "block";
    })
    img.addEventListener("mouseout", () => {
        tooltip.style.display = "none";
    })
    img.addEventListener("mousemove", (e) => {
        
        tooltip.style.left = `${e.pageX + 40}px`;
        tooltip.style.top = `${e.pageY}px`;
    })
})

// --------------------SLIDESHOWS----------------------//
const BringItSlideshow = new Slideshow(
    document.querySelector(".slideshow-container"),
    document.querySelector(".slideshow-container-images.bring-it"),
    document.querySelectorAll(".slideshow-container-images.bring-it > img"))
const BlackjackSlideshow = new Slideshow(
    document.querySelector(".slideshow-container"),
    document.querySelector(".slideshow-container-images.blackjack"),
    document.querySelectorAll(".slideshow-container-images.blackjack > img"))

let currentSlideshow = BringItSlideshow

let slideshowButtonRight = document.querySelector(".slideshow-button.right")
slideshowButtonRight.addEventListener("click", () => {
    currentSlideshow['onClickRight']()   
})
let slideshowButtonLeft = document.querySelector(".slideshow-button.left")
slideshowButtonLeft.addEventListener("click", () => {
    currentSlideshow['onClickLeft']()    
})
let slideshowButtonClose = document.querySelector(".slideshow-button.close")
slideshowButtonClose. addEventListener("click", (e) => {
    currentSlideshow['onClickClose']()
} )

const bringItThumbnails = document.querySelectorAll(".project-gallery.bring-it > img")
bringItThumbnails.forEach(thumbnail => {
    thumbnail.addEventListener("click", (e) => {       
        currentSlideshow = BringItSlideshow;
        BringItSlideshow.onOpenSlideshow(e.target.id)
    })
})
const blackjackThumbnails = document.querySelectorAll(".project-gallery.blackjack > img")
blackjackThumbnails.forEach(thumbnail => {
    thumbnail.addEventListener("click", (e) => {       
        currentSlideshow = BlackjackSlideshow;
        BlackjackSlideshow.onOpenSlideshow(e.target.id)
    })
})

// ===========REUSED FUNCTIONS=========
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