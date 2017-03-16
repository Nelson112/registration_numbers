var storeList = [];
var textInput = document.querySelector('#regNo');
var addBtn = document.querySelector('#btn');
var textOutput = document.querySelector('#outputReg');
var dropDown = document.querySelector('#dDown');
addBtn.addEventListener("click", function() {
  if (textInput.value.length > 0) {

    var newReg = document.createElement('li');
    newReg.classList.add('sample');
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

  var items = document.querySelectorAll('.sample')

  for(var i=0;i<items.length;i++){
    var nrPlate = items[i];
    nrPlate.classList.remove('hidden');
  }
  if(selectedTown !== 'All'){
  for(var i=0;i<items.length;i++){
    var nrPlate = items[i];
    if (!nrPlate.innerHTML.startsWith(selectedTown)) {
      nrPlate.classList.add('hidden');
    }
  }
}
});
// im done
