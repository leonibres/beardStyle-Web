setTimeout(function () {
  window.onscroll = function () {
    scrollFunction();
    scrollFunctionBTT(); // back to top button
  };

  window.onload = function () {
    scrollFunction();
  };

  function scrollFunction() {
    const navbar = document.getElementById("navbarExample");
    if (!navbar) return; // Evita errores si el elemento no existe

    if (document.documentElement.scrollTop > 30) {
      navbar.classList.add("top-nav-collapse");
    } else {
      navbar.classList.remove("top-nav-collapse");
    }
  }

  // Navbar on mobile
  let elements = document.querySelectorAll(".nav-link:not(.dropdown-toggle)");

  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", () => {
      document.querySelector(".offcanvas-collapse").classList.toggle("open");
    });
  }

  document.querySelector(".navbar-toggler").addEventListener("click", () => {
    document.querySelector(".offcanvas-collapse").classList.toggle("open");
  });

  // Hover on desktop
  function toggleDropdown(e) {
    const _d = e.target.closest(".dropdown");
    if (!_d) return; // Evita errores si no hay dropdown
    let _m = _d.querySelector(".dropdown-menu");

    setTimeout(
      function () {
        const shouldOpen = _d.matches(":hover");
        _m.classList.toggle("show", shouldOpen);
        _d.classList.toggle("show", shouldOpen);

        _d.setAttribute("aria-expanded", shouldOpen);
      },
      e.type === "mouseleave" ? 300 : 0
    );
  }

  // On hover
  const dropdownCheck = document.querySelector(".dropdown");

  if (dropdownCheck !== null) {
    dropdownCheck.addEventListener("mouseleave", toggleDropdown);
    dropdownCheck.addEventListener("mouseover", toggleDropdown);

    // On click
    dropdownCheck.addEventListener("click", (e) => {
      const _d = e.target.closest(".dropdown");
      if (!_d) return; // Evita errores si no hay dropdown
      let _m = _d.querySelector(".dropdown-menu");
      if (_d.classList.contains("show")) {
        _m.classList.remove("show");
        _d.classList.remove("show");
      } else {
        _m.classList.add("show");
        _d.classList.add("show");
      }
    });
  }

  /* Card Slider - Swiper */
  var cardSlider = new Swiper(".card-slider", {
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  /* Image Slider - Swiper */
  var imageSlider = new Swiper(".image-slider", {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    loop: true,
    spaceBetween: 50,
    slidesPerView: 5,
    breakpoints: {
      // when window is <= 575px
      575: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      // when window is <= 767px
      767: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // when window is <= 991px
      991: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      // when window is <= 1199px
      1199: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });

  /* Back To Top Button */
  // Get the button
  myButton = document.getElementById("myBtn");

  // When the user scrolls down 20px from the top of the document, show the button
  function scrollFunctionBTT() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      myButton.style.display = "block";
    } else {
      myButton.style.display = "none";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  document.getElementById("myBtn").onclick = topFunction;
  function topFunction() {
    document.body.scrollTop = 0; // for Safari
    document.documentElement.scrollTop = 0; // for Chrome, Firefox, IE and Opera
  }
}, 500);

