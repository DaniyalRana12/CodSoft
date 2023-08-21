let currentInput = '';
let currentOperator = '';
let currentResult = 0;
const displayElement = document.getElementById('display');

function appendToDisplay(value) {
  currentInput += value;
  displayElement.innerText = currentInput;
}

function operate(operator) {
if (currentInput !== '') {
  if (currentOperator !== '') {
    calculate();
  } else {
    currentResult = parseFloat(currentInput);
  }
  currentOperator = operator;
  currentInput = '';
}
}


function calculate() {
  if (currentInput !== '' && currentOperator !== '') {
    const inputValue = parseFloat(currentInput);
    switch (currentOperator) {
      case '+':
        currentResult += inputValue;
        break;
      case '-':
        currentResult -= inputValue;
        break;
      case '*':
        currentResult *= inputValue;
        break;
      case '/':
        currentResult /= inputValue;
        break;
    }
    currentInput = currentResult.toString();
    currentOperator = '';
    displayElement.innerText = currentInput;
  }
}

function clearDisplay() {
  currentInput = '';
  currentOperator = '';
  currentResult = 0;
  displayElement.innerText = '0';
}

document.addEventListener("keydown", function(event) {
  const key = event.key;
  if (/^[0-9]$/.test(key)) {
    appendToDisplay(key);
  } else if (key === "+" || key === "-" || key === "*" || key === "/") {
    operate(key);
  } else if (key === "=" || key === "Enter") {
    calculate();
  } else if (key === "c" || key === "C") {
    clearDisplay();
  }
});
