var storeList = [];
var textInput = document.querySelector('#regNo');
var addBtn = document.querySelector('#btn');
var textOutput = document.querySelector('#outputReg');
var dropDown = document.querySelector('#dDown');
addBtn.addEventListener("click", function() {
  if (textInput.value.length > 0) {

    var newReg = document.createElement('li');
    newReg.classList.add('numberPlate');
    newReg.innerHTML = textInput.value;
    textOutput.appendChild(newReg);
    textInput.value = "";
    //console.log(newReg);
    return;
  }
});
dropDown.addEventListener("change", function() {
  var selectedTown = dropDown.options[dropDown.selectedIndex].value;
  //alert(selectedTown);

  var addedPlates = document.querySelectorAll('.numberPlate')

  for(var i=0;i<addedPlates.length;i++){
    var nrPlate = addedPlates[i];
    nrPlate.classList.remove('hidden');
  }
  if(selectedTown !== 'All'){
  for(var i=0;i<addedPlates.length;i++){
    var nrPlate = addedPlates[i];
    if (!nrPlate.innerHTML.startsWith(selectedTown)) {
      nrPlate.classList.add('hidden');
    }
  }
}
});
