const container = document.querySelector("[data-container]");
const close_icon = document.querySelector("[data-close-icon]");
const hamburger_icon = document.querySelector("[data-hamburger-icon]");
const cards = document.querySelector("[data-cards]");

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

const arrImages = [
     "images/desktop/image-curiosity.jpg",
     "images/desktop/image-deep-earth.jpg",
     "images/desktop/image-fisheye.jpg",
     "images/desktop/image-from-above.jpg",
     "images/desktop/image-grid.jpg",
     "images/desktop/image-night-arcade.jpg",
     "images/desktop/image-pocket-borealis.jpg",
     "images/desktop/image-soccer-team.jpg",
];

const arrText = [
     "deep earth",
     "night arcade",
     "soccer team vr",
     "the grid",
     "from up above vr",
     "rocket boreals",
     "the curiosity",
     "make it fisheye",
];

for (i = 0; i < arrImages.length; i++) {
     const card = document.createElement("div");
     card.style.backgroundImage = `url(${arrImages[i]})`;
     card.classList.add("card");
     card.innerHTML = `
     <h3>${arrText[i]}</h3>
     `;
     cards.appendChild(card);
}
