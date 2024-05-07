const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const navMenu = document.querySelectorAll(".nav-menu")

let isOpen = false;

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");

  isOpen = !isOpen;
  console.log(isOpen);


  isOpen
    ? (navLinks.style.display = "block")
    : (navLinks.style.display = "none");
});


let typed = new Typed("#element", {
  strings: ["Frontend Developer", "Backend Developer", "Full Stack Developer"],
  typeSpeed: 100,
});

document.addEventListener("DOMContentLoaded",()=>{
  navMenu.addEventListener("click",()=>{
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
      effect;
    }
  })
})