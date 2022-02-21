//declared variables
//'finds element in html and assigns them variables
var counter = document.querySelector("#counter");
var addButton = document.querySelector("#add");
var subtractButton = document.querySelector("#subtract");

//store "count" string into the local memeory. only strings can be placed into localStorage. as a default the value is 0
var count = localStorage.getItem("count");

//changes the count var to be .textContent
counter.textContent = count;

addButton.addEventListener("click", function() {
  if (count < 24) {
    count++;
    counter.textContent = count;
    localStorage.setItem("count", count);
  }
});

subtractButton.addEventListener("click", function() {
  if (count > 0) {
    count--;
    counter.textContent = count;
    localStorage.setItem("count", count);
  }
});
