const bgAnimations = document.getElementById("bg-animations");

const numberOfColorBoxes = 400;

for (let i = 0; i < numberOfColorBoxes; i++) {
  const colorBox = document.createElement("div");

  colorBox.classList.add("color-box");
  bgAnimations.append(colorBox);
}
