const originalArray = [1, 3, 2, 5, 10];

// doubledArray is equal to a new array of numbers multiplied by 2 and returned by map(). map() will use an anonymous function as a condition.
const doubledArray = originalArray.map(function (data) {
  // The anonymous function returns each number multiplied by 2. The returned result is added to a new array.
  return data * 2;
});

console.log(doubledArray);
console.log(originalArray);

// TODO: Describe how map is working in the example below. What will the value of tripledArray be?
//.map will take each item in the array and pass it through the funtion and multiply it creating a new array
const tripledArray = originalArray.map((data) => data * 3);

// TODO: Describe how map is working in the example below. What will the value of oddOrEven be?
//.map passing the value of the array into the if logigic then pass the results into a new array
const oddOrEven = originalArray.map((num) => {
  if (num % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
});
console.log(oddOrEven);
