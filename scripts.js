const saved = document.getElementById("saved");
const clear = document.getElementById("clear");
const saveButton = document.getElementById("save-button");
const savedDiv = document.getElementById("saved-div");
const colorDiv = document.getElementById("random-color-box");
const r = document.getElementById("range-red");
const g = document.getElementById("range-green");
const b = document.getElementById("range-blue");
const btned = document.createElement("button");

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
  savedDiv.innerText = "";

  // Get color string from local storage
  const colorString2 = JSON.stringify(localStorage.getItem("colors"));

  // Convert string to array of objects
  const colorArray = JSON.parse(colorString2);

  // Iterate on the array
  for (let i = 0; i < colorsArray.length; i++) {
    const color = colorsArray[i]; // {r: 1, g: 2, b: 10}

    // Now render this color

    // Create a new div
    // Set background color
    // Append
  }
  /*
  [{r: 1, g: 2, b: 10}, {r: 100, g: 20, b: 200}, ....]
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

const deleteColorFromLocalStorage = (index) => {
  // Test if index is not null or undefined

  if (index === null || index === undefined || index.trim() === null) {
  } else {
    // Get color string from local storage
    const colorString = JSON.stringify(localStorage.getItem("colors"));

    // Convert color string to an array
    const colorArray = JSON.parse(colorString);

    // Check if color array is null
    if (colorArray === null) {
      colorArray === null;
    }

    // delete color at index from color array

    // convert color array to color string

    // save color string in local storage

    // Call render colors ui from local storage here
  }
};
