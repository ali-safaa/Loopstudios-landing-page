window.addEventListener("scroll", function () {
     const header = document.querySelector("[data-header]");
     if (window.scrollY >= 600) {
          // Check if scroll position is greater or equal to 100
          header.style.backgroundColor = "rgba(23, 23, 23, 0.7)";
          header.style.backdropFilter = "blur(10px)";
     } else {
          header.style.backgroundColor = "transparent";
          header.style.backdropFilter = "blur(0)";
     }
});
