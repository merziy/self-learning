// Function that displays the value
function dis(val) {
  document.getElementById("result").value += val;
}

// Function that evaluates the digit and returns results
function solve() {
  let x = document.getElementById("result").value;
  let y = eval(x);

  document.getElementById("result").value = y;
}

// Function that clears the display
function clr() {
  document.getElementById("result").value = "";
}
