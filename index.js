document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const closeToggle = document.querySelector(".close-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (menuToggle && closeToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.add("active");
      menuToggle.classList.add("active");
      closeToggle.classList.add("active");
    });

    closeToggle.addEventListener("click", () => {
      navMenu.classList.remove("active");
      menuToggle.classList.remove("active");
      closeToggle.classList.remove("active");
    });
  } else {
    console.error(
      "One or more elements (.menu-toggle, .close-toggle, .nav-menu) not found in the DOM."
    );
  }
});
