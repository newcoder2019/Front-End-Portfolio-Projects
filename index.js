// create a number variable and make it equal to document.createElement("h1")
const number = document.createElement("h1");

// create a numberHolder variable and make it equal to document.createElement("div")
const numberHolder = document.createElement("div");

// create a startNumber variable and make it equal to 0
let startNumber = 0;

// take the number variable from line 2 and make it equal to textContent(start number) to give it life
number.textContent = startNumber;

// take the numberHolder variable from line 5 and append it as a child of document.body to give it life
document.body.appendChild(numberHolder);

// take the numberHolder variable and use appendChild and pass in the variable number to give it life
numberHolder.appendChild(number);

const button = document.querySelector("button");

// add event handler
button.addEventListener("click", () => {
  number.textContent = startNumber++;
});
