var submitEl = document.querySelector("#submit");
var nameInput = document.querySelector("#name");
var emailInput = document.querySelector("#email");
var submissionResponseEl = document.querySelector("#response");

// Action to be performed on click store in named function
//parameter = event
// fuction showResponse(event.target) shows what target element triggered
function showResponse(event) {
  // Prevent default action
  //default of button element is to refresh page
  event.preventDefault();
  console.log(event);
  // every input has a .value by default
  var response = "Thank you for your submission " + nameInput.value + "! We will reach out to you at " + emailInput.value + ".";
  submissionResponseEl.textContent = response;
}
  
// Add listener to submit element
// showResponse function variable
submitEl.addEventListener("click", showResponse);
