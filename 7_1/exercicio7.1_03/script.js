let clickCount = 0;
let textToDisplay = document.getElementById("text");

document.getElementById("buttonCont") .addEventListener("click", () => textToDisplay.innerHTML = clickCount += 1);
