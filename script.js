const grid = document.getElementById("grid");
let currentColor = "#000000";

// 32x32 = 1024 kutucuk oluştur
for (let i = 0; i < 1024; i++) {
  const pixel = document.createElement("div");
  pixel.classList.add("pixel");
  pixel.addEventListener("click", () => {
    pixel.style.backgroundColor = currentColor;
  });
  grid.appendChild(pixel);
}

// Renk seçme
document.querySelectorAll(".color").forEach((btn) => {
  btn.addEventListener("click", () => {
    currentColor = btn.dataset.color;
  });
});