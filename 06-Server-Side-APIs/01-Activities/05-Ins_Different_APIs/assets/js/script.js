var requestUrl = 'https://api.github.com/users';

//Browser XMLHttpRequest, built in the browser and require more code.


// AJAX call requires a third party library, jQuery
$.ajax({
  url: requestUrl,
  method: 'GET',
}).then(function (response) {
  console.log('Ajax Reponse \n-------------');
  console.log(response);
});




