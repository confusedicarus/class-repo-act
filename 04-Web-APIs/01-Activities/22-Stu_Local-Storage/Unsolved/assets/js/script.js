//variable declarations

var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#sign-up");
var msgDiv = document.querySelector("#msg");
var userEmailSpan = document.querySelector("#user-email");
var userPasswordSpan = document.querySelector("#user-password");

renderLastRegistered();

//functions

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}

function renderLastRegistered() {
  // TODO: Retrieve the last email and password and render it to the page

  //retrival
  var email = localStorage.getItem("email");
  var password = localStorage.getItem("password");

  //render to the page (html line 31)
  userEmailSpan.textContent = email;
  //html line 32
  userPasswordSpan.textContent = password;
}

//event listeners

signUpButton.addEventListener("click", function (event) {
  event.preventDefault();

  //html line 17/18
  var email = document.querySelector("#email").value;
  var password = document.querySelector("#password").value;

  if (email === "") {
    displayMessage("error", "Email cannot be blank");
  } else if (password === "") {
    displayMessage("error", "Password cannot be blank");
  } else {
    displayMessage("success", "Registered successfully");

    // TODO: Save email and password to localStorage and render the last registered user
    //                     key     value line 38
    localStorage.setItem("email", email);
    //                               value line 39
    localStorage.setItem("password", password);

    renderLastRegistered();
  }
});

