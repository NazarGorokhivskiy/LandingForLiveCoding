const OPEN_CLASSNAME = "open";
const navLinks = document.getElementById("nav-links");

function toggleMenu() {
  if (!navLinks.classList.contains(OPEN_CLASSNAME)) {
    navLinks.classList.add(OPEN_CLASSNAME);
  } else {
    navLinks.classList.remove(OPEN_CLASSNAME);
  }
}