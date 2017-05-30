var add = function(number1, number2) {
  return number1 + number2;
};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = add(number1, number2);
alert(result);

var subtract = function(number1, number2) {
  return number1 - number2;
};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = subtract(number1, number2);
alert(result);

var multiply = function(number1, number2) {
  return number1 * number2;
};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = multiply(number1, number2);
alert(result);

var divide = function(number1, number2) {
  return number1 / number2;
};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = divide(number1, number2);
alert(result);


var BMI = function(userweight, userheight){
  return userweight/Math.pow(userheight, 2);
};
var weight = parseInt(prompt("Enter a weight number:"));
var height = parseInt(prompt("Enter a height number:"));

var result = BMI(weight, height);
alert(result);

var temp = function(usertemp){
  return usertemp * 1.8 + 32
}

 var celc = parseInt(prompt("Enter Celcium:"));


 var result = temp(celc);
 alert("Faringeit temp" + result);

 var volGal = function(userLit){
  return userLit /4
}

 var Gal = parseInt(prompt("Enter volume in liters:"));


 var result = volGal(Gal);
 alert("Volume in gallons is equal to: " + result);
