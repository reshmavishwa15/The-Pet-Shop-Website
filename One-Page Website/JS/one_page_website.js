const images = document.querySelectorAll("img");

const lightbox = document.createElement("div");
lightbox.id = "lightbox";

lightbox.innerHTML = `
<span id="close">&times;</span>
<img id="lightbox-img" alt="Enlarged image">
<button id="prev">&#10094;</button>
<button id="next">&#10095;</button>
`;

document.body.appendChild(lightbox);

let currentIndex = 0;

function showImage(index) {
currentIndex = (index + images.length) % images.length;
const image = images[currentIndex];
document.getElementById("lightbox-img").src =
image.dataset.full || image.src;
document.getElementById("lightbox-img").alt = image.alt;
lightbox.style.display = "flex";
}
images.forEach((image, index) => {
image.addEventListener("click", () => {
showImage(index);
});
});

document.getElementById("close").onclick = () => {
lightbox.style.display = "none";
};

document.getElementById("prev").onclick = () => {
showImage(currentIndex - 1);
};

document.getElementById("next").onclick = () => {
showImage(currentIndex + 1);
};

lightbox.addEventListener("click", (event) => {
if (event.target === lightbox) {
lightbox.style.display = "none";
}
});

document.addEventListener("keydown", (event) => {
if (event.key === "Escape") {
lightbox.style.display = "none";
}
});
