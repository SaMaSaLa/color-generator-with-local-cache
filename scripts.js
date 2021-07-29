let saved = document.getElementById("saved");
let clear = document.getElementById("clear");
let saveButton = document.getElementById("save-button");
let savedDiv = document.getElementById("saved-div");
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

const renderColorsFromLocalStorage = () => {
  savedDiv.innerText = "";
  let stringedColor = localStorage.getItem("colors");
  let parsedColor = JSON.parse(stringedColor);
  if (parsedColor === null) {
    parsedColor = [];
  }

  for (let i = 0; i < parsedColor.length; i++) {
    const eachColor = parsedColor[i];

    let divTwo = document.createElement("div");
    divTwo.style.backgroundColor = `rgb(${eachColor.red}, ${eachColor.green}, ${eachColor.blue})`;
    divTwo.classList.add("saved-color-div");
    savedDiv.appendChild(divTwo);
  }

  // Make sure you empty existing colors.
  // Get color string from local storage
  // Convert string to array of objects
  // Iterate on the array
  /*
    [{r: 1, g: 2, b: 10}, {r: 100, g: 20, b: 200}, ....]
    for (let i = 0; i < colors.length; i++) {
      const color = colors[i]; // {r: 1, g: 2, b: 10}

      // Now render this color
        // Create a new div
        // Set background color
        // Append
    }
  */
};

saveButton.addEventListener("click", function () {
  let colors = localStorage.getItem("colors");
  if (colors) {
    colors = JSON.parse(colors);
  } else {
    colors = [];
  }

  const newColor = { red: r.value, green: g.value, blue: b.value };

  colors.push(newColor);

  let stringColors = JSON.stringify(colors);

  localStorage.setItem("colors", stringColors);

  renderColorsFromLocalStorage();
});

clear.addEventListener("click", () => {
  localStorage.clear();
  renderColorsFromLocalStorage();
});

// After first load, render existing colors
renderColorsFromLocalStorage();
