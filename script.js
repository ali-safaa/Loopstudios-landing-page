const container = document.querySelector("[data-container]");
const close_icon = document.querySelector("[data-close-icon]");
const hamburger_icon = document.querySelector("[data-hamburger-icon]");

hamburger_icon.addEventListener("click", () => {
     container.style.display = "block";
});

close_icon.addEventListener("click", () => {
     container.style.display = "none";
});

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
