var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var result = add(number1, number2);
    $("#addoutput").text(result);
  });


  $("form#subtract").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#subtract1").val());
    var number2 = parseInt($("#subtract2").val());
    var result = subtract(number1, number2);
    $("#subtractoutput").text(result);
  });


  $("form#multiply").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#multiply1").val());
    var number2 = parseInt($("#multiply2").val());
    var result = multiply(number1, number2);
    $("#multiplyoutput").text(result);
  });


  $("form#divide").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#divide1").val());
    var number2 = parseInt($("#divide2").val());
    var result = divide(number1, number2);
    $("#divideoutput").text(result);
  });
});
//var BMI = function(userweight, userheight){
//  return userweight/Math.pow(userheight, 2);
//};
// var weight = parseInt(prompt("Enter a weight number:"));
// var height = parseInt(prompt("Enter a height number:"));
//
// var result = BMI(weight, height);
// alert(result);
//
// var temp = function(usertemp){
//   return usertemp * 1.8 + 32
// }
//
//  var celc = parseInt(prompt("Enter Celcium:"));
//
//
//  var result = temp(celc);
//  alert("Faringeit temp" + result);
//
//  var volGal = function(userLit){
//   return userLit /4
// }
//
//  var Gal = parseInt(prompt("Enter volume in liters:"));
//
//
//  var result = volGal(Gal);
//  alert("Volume in gallons is equal to: " + result);
