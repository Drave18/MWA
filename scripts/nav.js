let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("open");
};

document.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  const whiteLogo = document.querySelector(".white-logo");
  const logoOriginal = document.querySelector(".logo-original");
  if (window.scrollY>0){
    header.classList.add("scrolled");
    logoOriginal.style.display = "none";
    whiteLogo.style.display = "block";

  } else{
    header.classList.remove("scrolled");
    logoOriginal.style.display = "block";
    whiteLogo.style.display = "none";
  }
})