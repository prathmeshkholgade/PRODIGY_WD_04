const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

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
