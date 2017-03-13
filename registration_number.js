var text = document.getElementById('regNo')
var regNumber = document.createElement("li")
var outputReg = document.getElementById('outputReg');

function regFunc() {
  outputReg.appendChild(regNumber)
  regNumber.textContent = text.value
  document.getElementById("regNo").value = "";

  return;
}
