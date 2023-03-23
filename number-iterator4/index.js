const button = document.querySelector("button");

const numberHolder = document.createElement("div");
const number = document.createElement("h1");
let startNumber = 0;
number.textContent = startNumber;

document.body.appendChild(numberHolder);
numberHolder.appendChild(number);

button.addEventListener("click", () => {
  number.textContent = startNumber++;
});
