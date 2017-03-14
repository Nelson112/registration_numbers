const textInput = document.querySelector('#regNo');
const addBtn = document.querySelector('#btn');
const textOutput = document.querySelector('#outputReg');
// const newReg = document.createElement('li');
// const newReg = document.querySelector('.sample').cloneNode();
// console.log(newReg);
addBtn.addEventListener("click",function(){
  const newReg = document.querySelector('.sample').cloneNode();
  newReg.innerHTML = textInput.value;
  textOutput.appendChild(newReg);
  textInput.value = "";

  return
});



/*

// var regStore = {};

var text = document.getElementById('regNo')
var regNumber = document.createElement("li")
var outputReg = document.getElementById('outputReg');

function regFunc() {

  // if (regStore[regNo.value] === undefined) {
  //
  //   regStore[regNo.value] = true;
  // } else if (regStore[regNo.value] !== undefined) {
  //   regStore[regNo.value] = " ";
  // }

   outputReg.appendChild(regNumber)

  regNumber.textContent = regNo.value;
  // emtying the textbox
  document.getElementById("regNo").value = "";

  return;
}
 */
