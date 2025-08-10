//_______________Ch-9-Ch-11_________________
//____Q1_____
// var city = prompt("Your city name")
// if(city === "Karachi" || city === "karachi" ){
//     console.log("Welcome to the city of lights")
// }
//____Q2_____
// var gender = prompt("your gender ?")
// if(gender == "female" ||gender == "Female" ){
//     console.log("Good Morning Ma'am")
// }
// else if (gender == "male" || gender == "Male"){
//     console.log("Good Morning Sir")
// }
// else if (gender == "transgender" || gender == "other"){
//     console.log("Good Morning ")
// }else{
//     console.log("Invalid gender")
//     var gender = prompt("Type your gender again ?")
// if(gender == "female" ||gender == "Female" ){
//     console.log("Good Morning Ma'am")
// }
// else if (gender == "male" || gender == "Male"){
//     console.log("Good Morning Sir")
// }
// else if (gender == "transgender" || gender == "other"){
//     console.log("Good Morning ")}
// }


   // Show result in table format
//   document.write("<h2>Marks Sheet</h2>");
//   document.write("<table border='1' cellspacing='0' cellpadding='5'>");
//   document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
//   document.write("<tr><td>" + sub1 + "</td><td>100</td><td>" + marks1 + "</td></tr>");
//   document.write("<tr><td>" + sub2 + "</td><td>100</td><td>" + marks2 + "</td></tr>");
//   document.write("<tr><td>" + sub3 + "</td><td>100</td><td>" + marks3 + "</td></tr>");
//   document.write("<tr><th colspan='2'>Total Marks</th><td>" + obtainedMarks + "</td></tr>");
//   document.write("<tr><th colspan='2'>Percentage</th><td>" + percentage.toFixed(2) + "%</td></tr>");
//   document.write("</table>");


//______Q3______
// var Lightsignal = prompt("Whats's the color of road traffic signal ?")
// if(Lightsignal == "Red" ||Lightsignal == "red" ) {
//     console.log("Must stop")
// document.write("<center> <table border='1' cellspacing='0' cellpadding='8' style='border-color: #3399cc; margin-top:100px; width: 60%; font-family: Arial;'>");

// // Header row
// document.write("<tr style='background-color: #f5f9f8ff;'>");
// document.write("<th style='color: #336699; font-weight: bold; font-size: 16px;'>Signal color</th>");
// document.write("<th style='color: #336699; font-weight: bold; font-size: 16px;'>Message</th>");
// document.write("</tr>");

// // Red row
// document.write("<tr style='background-color: #f22929ff;'>");
// document.write("<td style='color: #f2f4f6ff; font-weight: bold;'>Red</td>");
// document.write("<td style='color: #f6fafeff;'>Must Stop</td>");
// document.write("</tr>");

// // Yellow row
// document.write("<tr style='background-color: #e6f0fa;'>");
// document.write("<td style='color: #336699; font-weight: bold;'>Yellow</td>");
// document.write("<td style='color: #336699;'>Ready to move</td>");
// document.write("</tr>");

// // Green row
// document.write("<tr style='background-color: #e6f0fa;'>");
// document.write("<td style='color: #336699; font-weight: bold;'>Green</td>");
// document.write("<td style='color: #336699;'>Move now</td>");
// document.write("</tr>");

// document.write("</table></center>");

// }
// else if(Lightsignal == "yellow" ||Lightsignal == "Yellow" ) {
//     console.log("Ready to move")
// document.write("<center> <table border='1' cellspacing='0' cellpadding='8' style='border-color: #3399cc; margin-top:100px; width: 60%; font-family: Arial;'>");

// // Header row
// document.write("<tr style='background-color: #f5f9f8ff;'>");
// document.write("<th style='color: #336699; font-weight: bold; font-size: 16px;'>Signal color</th>");
// document.write("<th style='color: #336699; font-weight: bold; font-size: 16px;'>Message</th>");
// document.write("</tr>");

// // Red row
// document.write("<tr style='background-color: #f5f9f8ff;'>");
// document.write("<td style='color: #f2f4f6ff; font-weight: bold;'>Red</td>");
// document.write("<td style='color: #f6fafeff;'>Must Stop</td>");
// document.write("</tr>");

// // Yellow row
// document.write("<tr style='background-color: #f9e508ff;'>");
// document.write("<td style=' font-weight: bold;'>Yellow</td>");
// document.write("<td >Ready to move</td>");
// document.write("</tr>");

// // Green row
// document.write("<tr style='background-color: #e6f0fa;'>");
// document.write("<td style='color: #336699; font-weight: bold;'>Green</td>");
// document.write("<td style='color: #336699;'>Move now</td>");
// document.write("</tr>");

// document.write("</table></center>");

// }
// else if(Lightsignal == "green" ||Lightsignal == "Green" ) {
//     console.log("Move now")
// document.write("<center> <table border='1' cellspacing='0' cellpadding='8' style='border-color: #3399cc; margin-top:100px; width: 60%; font-family: Arial;'>");

// // Header row
// document.write("<tr style='background-color: #f5f7f9ff;'>");
// document.write("<th style='color: #336699; font-weight: bold; font-size: 16px;'>Signal color</th>");
// document.write("<th style='color: #336699; font-weight: bold; font-size: 16px;'>Message</th>");
// document.write("</tr>");

// // Red row
// document.write("<tr style='background-color: #f5f9f8ff;'>");
// document.write("<td style='color: #f2f4f6ff; font-weight: bold;'>Red</td>");
// document.write("<td style='color: #f6fafeff;'>Must Stop</td>");
// document.write("</tr>");

// // Yellow row
// document.write("<tr style='background-color: #e6f0fa;'>");
// document.write("<td style=' font-weight: bold;'>Yellow</td>");
// document.write("<td >Ready to move</td>");
// document.write("</tr>");

// // Green row
// document.write("<tr style='background-color: #117e13ff;'>");
// document.write("<td style='color: #eef5fdff; font-weight: bold;'>Green</td>");
// document.write("<td style='color: #f3f4f6ff;'>Move now</td>");
// document.write("</tr>");

// document.write("</table></center>");

// }
//______Q4______
// var userFuel = prompt(" Your remaining fuel in car (in litres)")
// if(userFuel <= "0.25 litres"){
// document.write("<h1>“Please refill the fuel in your car”</h1>")
// }else{
//     document.write("<h1>That's great!!!</h1>")
// }
//______Q5______
//________condition-a_______

//  var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
//________condition-b_______

// var b = 83;
// if(b++ === 83){
//      alert("given condition for variable b is true"); //actually it is false
// }
//________condition-c_______

//  var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");//Its actually false 
// }
//  var c = 12;
// if (++c === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }if (++c < 14){
// alert("condition 3 is true");
// }

// if(c === 14){
// alert("condition 4 is true");
// }
//________condition-d_______
//  var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
//________condition-e_______
// if (true){
// alert("True");}
// //if (false) means you blocked it now it wont display
// if (false){
// alert("False");
// }
//alphabet se greater or less ka pta lge ga like hear r chota hay t bara but Only the first different character matters the most 
//if both spelling have greater letter one have in begining another have in end  java use unicode 
//  if("car" < "cat"){
// alert("car is smaller than cat");
// }
//_________Q6_________
// var obtMarks = +prompt("Enter your marks (Out of 100)")
// var totalMarks = 100
// var percentage = obtMarks / totalMarks * 100

// if (percentage >= 80 && percentage <= 100) {
//     console.log("A+");
// } else if (percentage >= 70 && percentage <= 79) {
//     console.log("A");
// } else if (percentage >= 60 && percentage <= 69) {
//     console.log("B");
// } else if (percentage >= 50 && percentage <= 59) {
//     console.log("C");
// } else if (percentage >= 40 && percentage <= 49) {
//     console.log("D");
// } else if (percentage >= 0 && percentage <= 39) {
//     console.log("Fail!");
// } else {
//     console.log("Invalid Marks!");
//     var obtMarks = +prompt("Enter your marks (Out of 100)")
//     var totalMarks = 100
//     var percentage = obtMarks / totalMarks * 100
//     if (percentage >= 80 && percentage <= 100) {
//         console.log("A+");
//     } else if (percentage >= 70 && percentage <= 79) {
//         console.log("A");
//     } else if (percentage >= 60 && percentage <= 69) {
//         console.log("B");
//     } else if (percentage >= 50 && percentage <= 59) {
//         console.log("C");
//     } else if (percentage >= 40 && percentage <= 49) {
//         console.log("D");
//     } else if (percentage >= 0 && percentage <= 39) {
//         console.log("Fail!");
//     } else {
//         console.log("Invalid Marks!");
//         var obtMarks = +prompt("Enter your marks (Out of 100)")
//     }
// }
//__________Q7___________
// // var Secretnum = 4
// // var guessnum = +prompt("guess the secret number from 1-10")
// // if(guessnum ==  Secretnum){
// //     console.log("“Bingo! Correct answer”")
// }
//  else if(Secretnum + 1 ){
//     console.log("“Close enough to the correct answer”")}
//_____OR_______
//  else if(Secretnum++ ){
//     console.log("“Close enough to the correct answer”")}
//__________Q8___________
// var num = +prompt("Enter a number")
// if (num % 3 === 0){
//      console.log("This number is divisible by 3.");
// }else{
//     console.log("This number is NOT divisible by 3")
// }
//__________Q9___________
//step 1:
// var Number = prompt("Enter a number")

// // Step 2: Input ko number mein convert karna
// Number = parseInt(Number);

// // Step 3: Check karna even hai ya odd
// if (Number % 2 === 0) {
//     alert("This is an even number.");
// } else {
//     alert("This is an odd number.");
// }
//__________Q10___________
// var Temperature = prompt("Enter a Temperature")
// if(Temperature > 40){
//    document.write("<center><h1 style='margin-top:100px;'>“It is too hot outside.” 🥵☀️🔥🌡️</h1></center>")
// }
// else if(Temperature > 30){
//    document.write("<center><h1 style='margin-top:100px;'>“The Weather today is Normal.” 🌈🌞🌼🍃</h1></center>")}
// else if(Temperature > 20){
//    document.write("<center><h1 style='margin-top:100px;'>“Today’s Weather is cool.” 🌥️❄️🧥 </h1></center>")}
// else if(Temperature > 10){
//    document.write("<center><h1 style='margin-top:100px;'>“OMG! Today’s weather is so Cool.” ❄️🥶🧣☃️</h1></center>")}
 
//__________Q11___________
// var FirstNumber = +prompt('Enter First Number')
// var SecondtNumber = +prompt('Enter Second Number')
// var Operation = prompt('Enter the operator "+","-","*","/","%"')
// if (isNaN(FirstNumber) || isNaN(SecondtNumber)) {
//   //console.log("Please enter valid numbers");
//   var FirstNumber = +prompt(' Please enter valid numbers!!! \n Enter Second Number Again')
// var SecondtNumber = +prompt('Enter Second Number')
// var Operation = prompt('Enter the operator "+","-","*","/","%"')
//  if(Operation === '-'){
//    console.log(FirstNumber - SecondtNumber)
//  }
//  else if(Operation === '/'){
//    console.log(FirstNumber / SecondtNumber)
// }
// else if(Operation === '+'){
//    console.log(FirstNumber + SecondtNumber)
// }
// else if(Operation === '*'){
//    console.log(FirstNumber * SecondtNumber)
// }
// else if(Operation === '%'){
//    console.log(FirstNumber % SecondtNumber)
// }else{
//    console.log("Invalid operation")
// }
// }
// else if(Operation === '-'){
//    console.log(FirstNumber - SecondtNumber)
//  }
//  else if(Operation === '/'){
//    console.log(FirstNumber / SecondtNumber)
// }
// else if(Operation === '+'){
//    console.log(FirstNumber + SecondtNumber)
// }
// else if(Operation === '*'){
//    console.log(FirstNumber * SecondtNumber)
// }
// else if(Operation === '%'){
//    console.log(FirstNumber % SecondtNumber)
// }else{
//    console.log("Invalid operation")
// }