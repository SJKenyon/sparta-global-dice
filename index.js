function randomizer(){
  var x = Math.floor((Math.random() * 6) + 1);
  console.log(x);
  return x;
}
var x = randomizer();

var dot1 = document.getElementById("circle1");
var dot2 = document.getElementById("circle2");
var dot3 = document.getElementById("circle3");
var dot4 = document.getElementById("circle4");
var dot5 = document.getElementById("circle5");
var dot6 = document.getElementById("circle6");
var dot7 = document.getElementById("circle7");
var dot8 = document.getElementById("circle8");
var dot9 = document.getElementById("circle9");

//RETURN ALL BACK TO WHITE COLOUR

if(x == 1){
  dot5.style.backgroundColor = "black";
}else if(x == 2){
  dot1.style.backgroundColor = "black";
  dot9.style.backgroundColor = "black";
}else if(x == 3){
  dot1.style.backgroundColor = "black";
  dot5.style.backgroundColor = "black";
  dot9.style.backgroundColor = "black";
}else if(x == 4){
  dot1.style.backgroundColor = "black";
  dot3.style.backgroundColor = "black";
  dot7.style.backgroundColor = "black";
  dot9.style.backgroundColor = "black";
}else if(x == 5){
  dot1.style.backgroundColor = "black";
  dot3.style.backgroundColor = "black";
  dot5.style.backgroundColor = "black";
  dot7.style.backgroundColor = "black";
  dot9.style.backgroundColor = "black";
}else if(x == 6){
  dot1.style.backgroundColor = "black";
  dot2.style.backgroundColor = "black";
  dot3.style.backgroundColor = "black";
  dot7.style.backgroundColor = "black";
  dot8.style.backgroundColor = "black";
  dot9.style.backgroundColor = "black";
}else{
  alert("What");
}
