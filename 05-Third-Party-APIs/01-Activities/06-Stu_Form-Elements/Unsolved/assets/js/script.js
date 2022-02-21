var shoppingFormEl = $("#shopping-form");
var shoppingListEl = $("#shopping-list");

// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`
function handleFormSubmit(event) {
  event.preventDefault();
  //captures input
  var item = $('input[name="shopping-input"]').val();
  console.log(item);
  //creating li element
  shoppingListEl.append("<li>" + item + "</li>");
  //clear input field
  $('input[name="shopping-input"]').val("");
}
shoppingFormEl.on("submit", handleFormSubmit);

// TODO: Add an event listener to the `shoppingFormEl` to handle submission

//event listening with submit to add item button. this function will be responsible for capturing user input, create an element dynamicly so i can attach some text, and append to the dom.
//make sure to clear input fields once user submits
