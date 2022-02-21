var student = document.getElementById("student-names");
var grade = document.getElementById("grades");
var comment = document.getElementById("msg");
var saveButton = document.getElementById("save");
var savedName = document.getElementById("saved-name");

saveButton.addEventListener("click", function(event) {
event.preventDefault();

//constructing an object
var studentGrade = {
  student: student.value,
  grade: grade.value,

  //will remove all white space before and after
  comment: comment.value.trim()
};
//                                    turns object into string
localStorage.setItem("studentGrade", JSON.stringify(studentGrade));
renderMessage();

});

function renderMessage() {

  // retrieving data from localStorage
  //              .parse turns JSON.stringify back into an Object
  var lastGrade = JSON.parse(localStorage.getItem("studentGrade"));

  
  if (lastGrade !== null) {
    document.querySelector(".message").textContent = lastGrade.student + 
    " received a/an " + lastGrade.grade
  }
}
