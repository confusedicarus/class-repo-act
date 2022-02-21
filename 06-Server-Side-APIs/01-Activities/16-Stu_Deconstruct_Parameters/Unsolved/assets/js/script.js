fetch(
  // Explain each parameter in comments below.
  'https://api.github.com/repos/nodejs/node/issues?per_page=10&state=open&sort=created&direction=desc'
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
// Parameter explanation.
//per_page will limit based per page
//state - current status of the issue. it can be open, closed or all
//sort = will order the resuslts based on parameter given, created, updated, or commented
//direction - decending or assending order