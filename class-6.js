// Creating Elements

const label = document.createElement("label");
label.innerText = "My label Tag";

document.body.appendChild(label);

// Manipulation Elements using Query Selection
/**
 * CSS Selectors: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors
 * Query Selector: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
 */
document.querySelector("label").style.fontSize = "5rem";
document.querySelector("label").style.color = "purple";
document.querySelector("label").style.backgroundColor = "#333";
document.querySelector("label").style.padding = "10px";

// Events Handlers

function changeButtonColor() {
  document.querySelector("button#my-button").style.backgroundColor = "#333";
  document.querySelector("button#my-button").style.color = "white";
}
