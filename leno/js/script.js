document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector(".navbar__toggle");
  const mobileMenu = document.querySelector(".navbar__menu--mobile");
  const backdrop = document.querySelector(".navbar__backdrop");
  const menuIcon = document.querySelector(".navbar__toggle i");
  const mobileLinks = document.querySelectorAll(".navbar__menu--mobile a");
  const videoButton = document.querySelector(".preview__video-button");
  const modal = document.getElementById("videoModal");
  const videoPlayer = document.getElementById("videoPlayer");
  const closeButton = document.querySelector(".modal__close-button");
  const scrollTopBtn = document.querySelector(".scroll-top");

  toggleButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
    backdrop.classList.toggle("active");
    menuIcon.classList.toggle("fa-bars");
    menuIcon.classList.toggle("fa-xmark");
  });

  backdrop.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
    backdrop.classList.toggle("active");
    menuIcon.classList.toggle("fa-bars");
    menuIcon.classList.toggle("fa-xmark");
  });

  mobileLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      mobileMenu.classList.remove("active");
      backdrop.classList.remove("active");
      menuIcon.classList.add("fa-bars");
      menuIcon.classList.remove("fa-xmark");
    });
  });

  videoButton.addEventListener("click", function () {
    modal.style.display = "flex";
  });
  closeButton.addEventListener("click", function () {
    modal.style.display = "none";
  });
  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });

  window.addEventListener("scroll", () => {
  if (window.scrollY > 600) {
    scrollTopBtn.classList.add("scroll-top--show");
  } else {
    scrollTopBtn.classList.remove("scroll-top--show");
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

});

// change navbar background on scroll
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 0) {
    navbar.classList.add("navbar-scroll");
  } else {
    navbar.classList.remove("navbar-scroll");
  }
});


