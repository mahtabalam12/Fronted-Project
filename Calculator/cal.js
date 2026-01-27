let currentInput = "";

function press(value) {
  if (currentInput === "0") currentInput = "";
  currentInput += value;
  document.getElementById("display").textContent = currentInput;
}

function calculate() {
  try {
    const result = eval(currentInput);
    document.getElementById("display").textContent = result;
    currentInput = result.toString();
  } catch (e) {
    document.getElementById("display").textContent = "Error";
    currentInput = "";
  }
}

// AC button – poora clear
function clearAll() {
  currentInput = "";
  document.getElementById("display").textContent = "0";
}

// Backspace (⌫) – ek-ek digit cut karega
function backspace() {
  currentInput = currentInput.slice(0, -1);
  if (currentInput === "") {
    document.getElementById("display").textContent = "0";
  } else {
    document.getElementById("display").textContent = currentInput;
  }
}
// Percentage button
function percentage() {
  if (currentInput !== "") {
    try {
      currentInput = (eval(currentInput) / 100).toString();
      document.getElementById("display").textContent = currentInput;
    } catch {
      document.getElementById("display").textContent = "Error";
      currentInput = "";
    }
  }
}

// Plus/Minus toggle
function toggleSign() {
  if (currentInput !== "") {
    if (currentInput.startsWith("-")) {
      currentInput = currentInput.slice(1);
    } else {
      currentInput = "-" + currentInput;
    }
    document.getElementById("display").textContent = currentInput;
  }
}
