const myTimeout = setTimeout(myGreeting, 20000);

function myGreeting() {
document.getElementById("demo").style.display = "none";
document.getElementById("demo1").style.display = "block";

}

function myStopFunction() {
  clearTimeout(myTimeout);
}
