var search = document.querySelector("#search-input");
var select = document.querySelector("#format-input");
var btn = document.querySelector(".btn");
var resultsVar = "http://search-results.html?";
+"dogs&format=";
var example = document.querySelector(".example");

for (i = 0; i < 0; i++) {
  var formatVal = select.childElementCount[i].value;
}

var displayData = function (data) {
  example.textContent = data.description;
  example.textContent = data.context;

  for (var i = 0; i < 10; i++) {
    var picture = document.createElement("img");
    picture.src = data.results[i].image_url[0];
    example.appendChild(picture);
  }
};

var searchResult = function () {
  //fetch libraryURL
  var searchInput = search.value;
  var formatValue = select.value;
  var libraryUrl =
    "https://www.loc.gov/" + formatValue + "/?q=" + searchInput + "&fo=json";
  console.log(libraryUrl);

  fetch(libraryUrl)
    .then(function (libraryResponse) {
      console.log(libraryResponse);
      return libraryResponse.json();
    })
    .then(function (libraryData) {
      console.log(libraryData); 
      displayData(libraryData);
    });
};

btn.addEventListener("click", function (event) {
  event.preventDefault();

  searchResult();
  console.log(formatVal);
  console.log(search.textContent);
  console.log(example);

  example.textContent = "Example";
  console.log(example);
  window.location.href = "./search-results.html";
});
