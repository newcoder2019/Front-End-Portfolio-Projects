// create a variable called number dynamically
const number = document.createElement("h1");
// create a variable called number holder dynamically
const numberHolder = document.createElement("div");
// create a variable called startNumber
let startNumber = 0;
// give the number life
number.textContent = startNumber;
//button and give it life
const button = document.querySelector("button");
// append div to the dom
document.body.appendChild(numberHolder);
//append number to the dom
numberHolder.appendChild(number);
//create the event handler button
button.addEventListener("click", () => {
  number.textContent = startNumber++;
});
