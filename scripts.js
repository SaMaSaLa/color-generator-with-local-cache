const saved = document.getElementById("saved");
const clear = document.getElementById("clear");
const saveButton = document.getElementById("save-button");
const savedDiv = document.getElementById("saved-div");
const colorDiv = document.getElementById("random-color-box");
const r = document.getElementById("range-red");
const g = document.getElementById("range-green");
const b = document.getElementById("range-blue");
const btned = document.createElement("button");

function updateColorOfDemoBox() {
  const red = r.value;
  const green = g.value;
  const blue = b.value;

  colorDiv.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

r.addEventListener("input", updateColorOfDemoBox);
g.addEventListener("input", updateColorOfDemoBox);
b.addEventListener("input", updateColorOfDemoBox);

// Remove this one. We should always add styles in CSS file.
// Neither in HTML nor in JS.
colorDiv.style.border = "3px solid black";

const renderColorsFromLocalStorage = () => {
  // Empty saved colors container
  savedDiv.innerText = "";

  // Get colors string from local storage
  let colorsString = localStorage.getItem("colors");

  // Convert colors string into an array of objects
  let colorsArray = JSON.parse(colorsString);

  // If colors array is null, make sure it contains an empty array.
  if (colorsArray === null) {
    colorsArray = [];
  }

  // Iterage on colors array
  for (let i = 0; i < colorsArray.length; i++) {
    // Get each color
    const color = colorsArray[i];

    // Add a div to append the color div to
    let savedColorDiv = document.createElement("div");

    // Add a class
    savedColorDiv.classList.add("each-color-div");

    // Append div to savedDiv container
    savedDiv.appendChild(savedColorDiv);

    // Create a new saved color div
    let savedColorBox = document.createElement("div");
    savedColorBox.style.backgroundColor = `rgb(${color.red}, ${color.green}, ${color.blue})`;
    savedColorBox.classList.add("saved-color-div");

    // Append to savedColorDiv
    savedColorDiv.appendChild(savedColorBox);

    // Create a new button
    let btn = document.createElement("button");
    btn.textContent = "Delete";
    btn.setAttribute("data-index", i);

    // Create a new div for button
    let btnDiv = document.createElement("div");
    savedColorDiv.appendChild(btnDiv);

    // Append to btnDiv
    btnDiv.appendChild(btn);

    // inline block
    btnDiv.style.display = "inline-block";
    btnDiv.classList.add("btn-div");
  }
};

saveButton.addEventListener("click", function () {
  // Get colors string from local storage
  let colorsString = localStorage.getItem("colors");

  // Parse colors string into array of objects
  let colorsArray = JSON.parse(colorsString);

  // If colors array contains null, assign an empty array
  if (colorsArray === null) {
    colorsArray = [];
  }

  // Create new color object
  const newColor = { red: r.value, green: g.value, blue: b.value };

  // Add new color to existing colors array
  colorsArray.push(newColor);

  // Convert colors array to colors string
  colorsString = JSON.stringify(colorsArray);

  // Save colors string into local storage
  localStorage.setItem("colors", colorsString);

  renderColorsFromLocalStorage();
});

clear.addEventListener("click", () => {
  localStorage.clear();
  renderColorsFromLocalStorage();
});

const deleteColorFromLocalStorage = (index) => {
  // Test if index is not null or undefined

  if (index === null || index === undefined || index.trim() === null) {
  } else {
    // Get color string from local storage
    const colorString = localStorage.getItem("colors");

    // Convert color string to an array
    const colorArray = JSON.parse(colorString);

    // Check if color array is null
    if (colorArray === null) {
      colorArray = [];
    }
    // delete color at index from color array
    colorArray.splice(index, 1);

    // convert color array to color string
    let colorsStringed = JSON.stringify(colorArray);

    // save color string in local storage
    localStorage.setItem("colors", colorsStringed);

    // Call render colors ui from local storage here
    for (let i = 0; i < 1; i++) {
      renderColorsFromLocalStorage(i);
      i++;
    }
  }
};

savedDiv.addEventListener("click", function (e) {
  if (e.target.textContent === "Delete") {
    let dataIndex = e.target.getAttribute("data-index");
    deleteColorFromLocalStorage(dataIndex);
  }
});

// After first load, render existing colors
renderColorsFromLocalStorage();
