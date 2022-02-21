//how do i copture values based off keydown user action
//how do i display the 3 values to the webpage
function keydownAction(event) {
  //key pressed, key code, event status
  var keyPress = event.key;
  var keyCode = event.keyCode;
  console.log(keyPress);
  console.log(keyCode);
  document.querySelector("#key").textContent = keyPress;
  document.querySelector("#code").textContent = keyCode;
  document.querySelector("#status").textContent = "KEYDOWN Event";
}

function keyupAction(event) {
  console.log(event);

  //don't .innerHTML!!!! can be attacked easily with malicious code
  document.querySelector("#status").innerHTML = "KEYUP Event";
}

document.addEventListener("keydown", keydownAction);
document.addEventListener("keyup", keyupAction);
// TODO: Add Event Listener for "keydown" event
