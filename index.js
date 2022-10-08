let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let counterAlert = document.getElementById("counter-alert");

let count = 0;

function increment() {
  count += 1;
  countEl.innerText = count;
  if (count >= 1) {
    counterAlert.textContent = "";
  }
}

function decrement() {
  if (count >= 1) {
    count -= 1;
    countEl.innerText = count;
  }
  if (count === 0) {
    counterAlert.textContent = "You cannot decrease less than 0";
  }
}

function save() {
  if (count >= 1) {
    let currentCount = count + " - ";
    saveEl.textContent += currentCount;
  }
  if (count === 0) {
    counterAlert.textContent = "Please increase counter before save it.";
  }
  count = 0;
  countEl.textContent = count;
}

// change the count-el in the HTML to reflect the new count
