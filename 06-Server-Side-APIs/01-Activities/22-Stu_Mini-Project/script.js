var libraryUrl = "https://www.loc.gov/";
var librarySearch = "https://www.loc.gov/search/?";
var search = document.querySelector("#search-input");
var select = document.querySelector("#format-input");
var btn = document.querySelector(".btn");
var resultsVar = "http://search-results.html?";
+"dogs&format=";

for (i = 0; i < 0; i++) {
  var formatVal = select.childElementCount[i].value;
}

btn.addEventListener("click", function (event) {
  event.preventDefault();
  fetch(librarySearch + search + formatVal);
  console.log(formatVal);
  console.log(search.textContent);
});
