let colorDiv = document.getElementById("random-color-box");

let r = document.getElementById("range-red");
let g = document.getElementById("range-green");
let b = document.getElementById("range-blue");

function updateColor() {
  const red = r.value;
  const green = g.value;
  const blue = b.value;

  colorDiv.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

r.addEventListener("input", updateColor);
g.addEventListener("input", updateColor);
b.addEventListener("input", updateColor);

colorDiv.style.border = "3px solid black";
