// TODO: Which element is the following line of code selecting?
var carousel = document.querySelector(".carouselbox");
// TODO: Which element is the following line of code selecting?
var next = carousel.querySelector(".next");
var prev = carousel.querySelector(".prev");
var index = 0;
var currentImage;

var images = [
  "https://picsum.photos/300/200",
  "https://picsum.photos/300/201",
  "https://picsum.photos/300/202",
  "https://picsum.photos/300/203",
];

carousel.style.backgroundImage = "url('https://picsum.photos/300/200')";

function navigate(direction) {
  //initial value of direction set in the execute fuction "navigate(0)" at the bottom
  index = index + direction;
  //changes the global var index

  //the condition keeping the index in bounds
  if (index < 0) {
    index = images.length - 1;
  } else if (index > images.length - 1) {
    index = 0;
  }

  //how it changes the image
  currentImage = images[index];
  carousel.style.backgroundImage = "url('" + currentImage + "')";
}

// TODO: Describe the functionality of the following event listener.
//sets click listener so that when the user clicks the image the url of the photo is launched
carousel.addEventListener("click", function () {
  window.location.href = images[index];
});

// TODO: Describe the functionality of the following event listener.
next.addEventListener("click", function (event) {
  // TODO: What is the purpose of the following line of code?
  //this like stops the bubbling effect of js for the eventListener
  event.stopPropagation();
  //this changes the index to adjust the page direction
  navigate(1);
});

// TODO: Describe the functionality of the following event listener.
prev.addEventListener("click", function (event) {
  // TODO: What would happen if we didn't add the following line of code?
  //if this .stopPropagation wasn't included the carousel click listen condition would be met and a new tab would be opened to the image url
  event.stopPropagation();

  //this reverse navigates the image order direction in the carosel
  navigate(-1);
});

navigate(0);
