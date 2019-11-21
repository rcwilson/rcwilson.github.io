window.addEventListener("scroll", function(event) {
    console.log(window.scrollY)
    })

document.querySelector(".door").addEventListener("click", (event) => {
    console.log("HEY")
    console.log(event)
})
