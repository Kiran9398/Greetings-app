let greetingParaEl = document.getElementById("greeting-para");
let incrementEl = document.getElementById("increment");
let countEl = document.getElementById("count");
let decrementEl = document.getElementById("decrement");

let countValueStrToInt = parseInt(countEl.textContent);

incrementEl.onclick = function () {
  countValueStrToInt = countValueStrToInt + 1;
  let greeingValue = (countEl.textContent = countValueStrToInt);
  if (greeingValue === 1) {
    greetingParaEl.textContent = "Have a nice Sleep!";
  } else if (greeingValue === 6) {
    greetingParaEl.textContent = "Good Morning!";
  } else if (greeingValue === 12) {
    greetingParaEl.textContent = "Good Ofternoon!";
  } else if (greeingValue === 16) {
    greetingParaEl.textContent = "Good Evening!";
  } else if (greeingValue === 20) {
    greetingParaEl.textContent = "Good Night!";
  } else if (greeingValue === 24) {
    greetingParaEl.textContent = "Mid Night!";
  } 
};

decrementEl.onclick = function () {
  countValueStrToInt = countValueStrToInt - 1;
  let greeingValue = (countEl.textContent = countValueStrToInt);
  if (greeingValue < 6) {
    greetingParaEl.textContent = "Have a nice Sleep!";
  } else if (greeingValue < 12) {
    greetingParaEl.textContent = "Good Morning!";
  } else if (greeingValue < 16) {
    greetingParaEl.textContent = "Good Ofternoon!";
  } else if (greeingValue < 20) {
    greetingParaEl.textContent = "Good Evening!";
  } else if (greeingValue < 23) {
    greetingParaEl.textContent = "Good Night!";
  } else if (greeingValue === 24) {
    greetingParaEl.textContent = "Mid Night!";
  }
};
