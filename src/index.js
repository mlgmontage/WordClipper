import data from "./data";

// Train page
const train_word = document.querySelector("#train_word");
const train_description = document.querySelector("#train_description");
const control_previous = document.querySelector("#control_left");
const control_next = document.querySelector("#control_right");

let ind = 0;

// setup
train_word.innerHTML = data[ind].word;
train_description.innerHTML = data[ind].description;

function previous() {
  if (ind <= 0) return;
  ind -= 1;
  train_word.innerHTML = data[ind].word;
  train_description.innerHTML = data[ind].description;
}

function next() {
  if (ind >= data.length - 1) return;
  ind += 1;
  train_word.innerHTML = data[ind].word;
  train_description.innerHTML = data[ind].description;
}

control_next.addEventListener("click", next);
control_previous.addEventListener("click", previous);
