function toggleMobileMenu(e) {
  e.preventDefault();
  $("nav").toggleClass("visible");
}

$(".hamburger").click(toggleMobileMenu);
