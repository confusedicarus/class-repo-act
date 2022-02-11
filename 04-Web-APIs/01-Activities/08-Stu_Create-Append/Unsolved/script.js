var body = document.body;
var h1El = document.createElement("h1");
var infoEl = document.createElement("div");
var imgEl = document.createElement("img");
var kittenEl = document.createElement("div");
var nameEl = document.createElement("div");
var favoriteEl = document.createElement("div");
// Create ordered list element
var listEl = document.createElement("ol");
// Create ordered list items
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

h1El.textContent = "Welcome to my page";
kittenEl.textContent = "This is my kitten 🐱.";
nameEl.textContent = "His name is Jax.";
favoriteEl.textContent = "My favorite foods are:";

body.appendChild(h1El); //attach to the body element this new h1 element i created on line 4
body.appendChild(infoEl); //infoEl represent a div
infoEl.appendChild(imgEl);//append the img to this div 
infoEl.appendChild(kittenEl); //kittenEl represents a div
infoEl.appendChild(nameEl);
body.appendChild(favoriteEl);
favoriteEl.appendChild(listEl);
// Append ordered list 
favoriteEl.appendChild(listEl);

h1El.setAttribute("style", "margin:auto; width:50%; text-align:center;");
infoEl.setAttribute("style", "margin:auto; width:50%; text-align:center;");
imgEl.setAttribute("src", "http://placekitten.com/200/300");
nameEl.setAttribute("style", "font-size:25px; text-align:center;");
kittenEl.setAttribute("style", "font-size:25px; text-align:center;");
favoriteEl.setAttribute("style", "font-size:20px;");

// TODO: Add ordered list items containing four favorite foods
listEl.appendChild(li1)
listEl.appendChild(li2)
listEl.appendChild(li3)
listEl.appendChild(li4)
li1.textContent = "Tuna"
li2.textContent = "String"
li3.textContent = "Chicken"
li4.textContent = "Whatevers in the dog's bowl"

// listEl.children[0].textContent = "Tuna"
// listEl.children[1].textContent = "String"
// listEl.children[2].textContent = "Chicken"
// listEl.children[3].textContent = "Whatevers is in the dog's bowl"
listEl.setAttribute("style", "background-color: #333333; padding: 20px")
li1.setAttribute("style", "color: white; padding: 5px; margin-left: 35px; background-color: green")
li2.setAttribute("style", "color: white; padding: 5px; margin-left: 35px; background-color: purple")
li3.setAttribute("style", "color: white; padding: 5px; margin-left: 35px; background-color: brown")
li4.setAttribute("style", "color: white; padding: 5px; margin-left: 35px; background-color: blue")
// var olE1 = document.querySelectorAll("ol")
// ol[0].setAttribute("style", "background-color: #333333; padding: 20px")

// var liE1 = document.querySelectorAll("li")
// for (var i = 0; i < liE1.length; i++) {
//     liE1[i].setAttribute("style", "color: white; padding: 5px; margin-left: 35px")
// }