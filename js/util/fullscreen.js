function openFullscreen(imgElement) {
  const overlay = document.getElementById("fullscreen-overlay");
  const image = document.getElementById("fullscreen-image");
  image.src = imgElement.src;
  overlay.style.display = "flex";

  setTimeout(() => {
    overlay.classList.add("visible");
    image.classList.add("visible");
  }, 10);
}

function closeFullscreen() {
  const overlay = document.getElementById("fullscreen-overlay");
  const image = document.getElementById("fullscreen-image");

  overlay.classList.remove("visible");
  image.classList.remove("visible");

  setTimeout(() => {
    overlay.style.display = "none";
  }, 300);
}