const result = document.querySelector(".result");
let operation = false;

function insert(inputValue) {
  const o = inputValue === "/" || inputValue === "*" || inputValue === "-" || inputValue === "+";
  if (result.innerHTML[(result.innerHTML.length) - 1] === "." && inputValue === ".") {
    return;
  }
  if (o && operation) {
    return;
  }
  if (o) {
    operation = true;
  }
  result.innerHTML += inputValue;
}

function clearDisplay() {
  result.innerHTML = "";
  operation = false;
}

function calculate() {
  if (result.innerHTML) {
    result.innerHTML = eval(result.innerHTML);
  }
  else {
    result.innerHTML = "Nada...";
  }
  operation = false;
}

function lessMore() {
  let number = Number(result.innerHTML) * -1;
  result.innerHTML = number.toString();
}

function percentage() {
  let percentage = Number(result.innerHTML) / 100;
  result.innerHTML = percentage.toString();
}