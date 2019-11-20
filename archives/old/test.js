
const contactBtn = document.getElementById("contact");
contactBtn.addEventListener("mouseover", () => {
    let contactDrop = document.getElementById("contact-drop")
    contactDrop.style.display = 'block';
});    
contactBtn.addEventListener("mouseout", () => {
    let contactDrop = document.getElementById("contact-drop")
    contactDrop.style.display = 'none';   
});