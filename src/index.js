// This file is soo messy

// Main element and variables

let data = [];
const host = `http://localhost:8000/api/words`;

// Train page
const train_word = document.querySelector("#train_word");
const train_description = document.querySelector("#train_description");
const control_previous = document.querySelector("#control_left");
const control_next = document.querySelector("#control_right");
let ind = 0;

async function load() {
  const response = await fetch(host);
  const json = await response.json();
  data = json;
  // setup
  train_word.innerHTML = data[ind].word;
  train_description.innerHTML = data[ind].description;

  console.log(json);
}

load();

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

// YouTube style key-bindings
document.addEventListener("keypress", (event) => {
  if (event.key == "j") {
    previous();
  }

  if (event.key == "l") {
    next();
  }
});
