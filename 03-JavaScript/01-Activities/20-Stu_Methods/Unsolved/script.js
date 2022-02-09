var constellations = ["Orion", "Scorpius", "Lyra", "Ursa Major", "Ursa Minor"];
var planets = ["Earth", "Saturn", "Mars", "Jupiter", "Uranus", "Venus"];
var star = "polaris";

// WRITE YOUR CODE BELOW
//unshift adds an element to the beginning of an array
constellations.unshift("Canis Major")
console.log(constellations)

//pop removes the last element in the array
planets.pop()
console.log(planets)
//the original array is changed

//the concat method joins constellations and planets arry and returns new array
var galaxy = constellations.concat(planets)
//the galazy and planet arrays are unchanged
console.log(planets)
console.log(constellations)
console.log(galaxy)

//the toUpperCase method makes all the letters in the string "polaris" capital letters
star.toUpperCase()
console.log(star)