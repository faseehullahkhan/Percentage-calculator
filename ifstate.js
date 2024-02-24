alert("Do you want to continue");
var English = +prompt("Enter Your English Marks");
var Maths = +prompt("Enter Your Maths Marks");
var Chemistry = +prompt("Enter Your Chemistry Marks");
var Physics = +prompt("Enter Your Physics Marks");
var Urdu = +prompt("Enter Your Urdu Marks");

var subjectsmarks =
  "Your English Marks is " +
  English +
  " Your Maths Marks is " +
  Maths +
  " Your Chemsitry Marks is " +
  Chemistry +
  " Your Physics Marks is " +
  Physics +
  " Your Urdu Marks is " +
  Urdu;
alert(subjectsmarks);

var obtainedmarks = English + Maths + Chemistry + Physics + Urdu;
alert("your total marks is = " + obtainedmarks + " Out of 500");
var totalmarks = 500;
var percentage = (obtainedmarks / totalmarks) * 100;
alert("Your Percentage is = " + percentage);

if (percentage >= 90) {
  alert("Congrats you got A1")
} else if (percentage >= 80) {
  alert("Great Work You got A")
} else if (percentage >= 70) {
  alert("Good You got B")
} else if (percentage >= 60) {
  alert("Not Impressive you Should really do some hard work!!!! :( ")
} else if (percentage <= 50) {
  alert("You Are Going To repeat Your class For The Whole year again")
}


