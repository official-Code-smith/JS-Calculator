var string = "";
// Button Functions
$(".Button").on("click", function (e) {
  if (e.target.innerHTML == "=") {
    var evalu = eval(string);
    document.querySelector("input").value = evalu;
    string = evalu;
    console.log(string);
  } else if (e.target.innerHTML == "X") {
    string = string + "*";
    document.querySelector("input").value = string;
  } else if (e.target.innerHTML == "%") {
    string = string + "/100";
    document.querySelector("input").value = string;
  } else if (e.target.innerHTML == "÷") {
    string = string + "/";
    document.querySelector("input").value = string;
  } else if (e.target.innerHTML == "←") {
    string = string.slice(0, string.length - 1);
    document.querySelector("input").value = string;
  } else if (e.target.innerHTML == "AC") {
    string = "";
    document.querySelector("input").value = string;
  } else {
    string = string + e.target.innerHTML;
    document.querySelector("input").value = string;
  }
});
// Overflow Y
document.querySelector("#myDIV").style.overflowX = "scroll";
// Keyboard Functions
document.addEventListener("keydown",keydown);
function keydown(e){
  a=e.key;
  if (e.key == "Enter") {
    var evaluated = eval(string);
    document.querySelector("input").value = evaluated;
    string = evaluated;
  } else if (e.key == "x" || e.key == "*") {
    string = string + "*";
    document.querySelector("input").value = string;
  } else if (e.key == "%") {
    string = string + "/100";
    document.querySelector("input").value = string;
  } else if (e.key == "/") {
    string = string + "/";
    document.querySelector("input").value = string;
  } else if (e.key == "Backspace") {
    string = string.toString();
    string = string.slice(0,-1);
    // alert(string2);
    // string = string.replace(`${string}`,`${string2}`);
    document.querySelector("input").value = string;
  } else if (e.key == "Control") {
    string = "";
    document.querySelector("input").value = string;
  } 
   else if (e.key == "-" || e.key == "+" || e.key == "9" || e.key == "8"||e.key == "7" || e.key == "6" || e.key == "5" || e.key == "4" || e.key == "3" || e.key == "2" || e.key == "1" || e.key == "0") {
    string = string + e.key;
    document.querySelector("input").value = string;
  } 
}
$(".Button").on("click", function (e) {
  var element = document.getElementById("simple");
  element.classList.add("simple");
})
