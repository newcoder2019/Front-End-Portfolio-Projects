const number = document.createElementI("h1");
const numberHolder = document.createElement("div");
let startNumber = 0;
number.textContent = startNumber;

document.body.appendChild(numberHolder);
numberHolder.appendChild(number);

const button = document.querySelector("button");
// add the event listener to the button object
button.addEventListener("click", () => {
  number.textContent = startNumber++;
});
