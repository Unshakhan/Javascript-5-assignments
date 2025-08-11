//___________Ch12__________
//_____Q1______
// Step 1: Take input from the user
// var input = prompt("Enter a single character");

// // Step 2: Check if input is just 1 character
// if (input.length !== 1 || input.length === "") {
//   console.log("Please enter any one character.");
// } else {
//   var charCode = input.charCodeAt(0); // Get ASCII code of the character

//   // Step 3: Check using ASCII ranges
//   if (charCode >= 48 && charCode <= 57) {
//     console.log("You entered a NUMBER.");
//   } else if (charCode >= 65 && charCode <= 90) {
//     console.log("You entered an UPPERCASE letter.");
//   } else if (charCode >= 97 && charCode <= 122) {
//     console.log("You entered a LOWERCASE letter.");
//   } else {
//     console.log("You entered a special character or symbol.");
//   }
// }

//_____Q2______
//condition for alphabets and symbols in num1
// var num1 = +prompt("Enter a first number")
// while(isNaN(num1)){
//   alert("its not a number")
//   var input1 = +prompt("please! Enter a valid number")
//   num1 = input1
//   if(isNaN(num1)){
//     alert("Please!! Enter a valid number")
//     var finalNum = +prompt("Enter intigers not alphabets or symbols")
//   }
// }
// //condition for alphabets and symbols in num2
// var num2 = +prompt("Enter a second number")
// while(isNaN(num2)){
//   alert("its not a number")
//   var input2 = +prompt("please! Enter a valid number")
//   num1 = input2
//   if(isNaN(num2)){
//     alert("Please!! Enter a valid number")
//     var finalNum = +prompt("Enter intigers not alphabets or symbols")
//   }
// }
// //show which one is larger
// if (num1 > num2) {
//   alert(num1 + " is larger.");
// } else if (num2 > num1) {
//   alert(num2 + " is larger.");
// } else {
//   alert("Both numbers are equal.");
// }

//_____Q3______

// num = +prompt("Enter a number")
// if(isNaN(num)){
//   console.log("please Enter a valid number")
//   input1 = +prompt("Enter a valid number pls")
//   num = input1
//     if(num > 0){
//     alert("The number is positive")
//   }
//   else if(num < 0){
//     alert("The number is negative")
//   }
//   else if(num == ""){
//     alert("You are not entering any number")
//   }  
//   else if(num == 0){
//     alert("the number is zero")
//   }
//   else{
//     alert("This is not a number")
//   }
// }else{
//   if(num > 0){
//     alert("The number is positive")
//   }
//   else if(num < 0){
//     alert("The number is negative")
//   }
//   else if(num == ""){
//     alert("You are not entering any number")
//   } 
//    else if(num == 0){
//     alert("the number is zero")
//   }
//   else{
//     alert("The number is zero")
//   }
// }
//_________Q4__________
// let char = prompt("Enter a single character:");

// // Convert to lowercase to handle capital letters like 'A', 'E', etc.
// char = char.toLowerCase();

// // Check if it's exactly 1 character and a vowel
// if (char.length === 1) {
//   if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
//     alert(true);
//   } else {
//     alert(false);
//   }
// } else {
//   alert("Please enter exactly one character.");
// }
//OR
// let num = prompt("Enter a single character:")
// num = num.toLowerCase();
// // Check if it's exactly 1 character and a vowel
// if (num.length === 1) {
//   if (num === 'a' || num === 'e' || num === 'i' || num === 'o' || num === 'u') {
//     alert(true);
//   } else {
//     alert(false);
//   }
// } else {
//   alert("Please enter exactly one character.");
// }
//_________Q5__________
// var correctPassword = "abcd"
// var userPassword = prompt("Enter correct password").toLowerCase();
// //OR another way to make lowercase
// // userPassword = userPassword.toLowerCase();

// if(correctPassword == userPassword){
//     console.log("“Correct! The password you entered matches the original password”.")
// }
// else if(userPassword  == ""){
//     console.log("“ Please enter your password”")
   
//    }else{
//     console.warn("“Incorrect password”")
//    }
//_________Q6__________
//var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// alert(greeting);
// }else{
//     greeting = "Good evening";
//     console.log(greeting);
// }
//_________Q7_________
// var time = prompt("Enter time in 24-hour format (e.g. 1900 for 7PM):");

// if (time === null || time.trim() === "") {
//   alert("Please enter a valid time.");
// } else {
//   time = parseInt(time); // Convert string to number

//   if (time >= 0 && time < 1200) {
//     alert("Good morning!");
//   } else if (time >= 1200 && time < 1700) {
//     alert("Good afternoon!");
//   } else if (time >= 1700 && time < 2100) {
//     alert("Good evening!");
//   } else if (time >= 2100 && time <= 2359) {
//     alert("Good night!");
//   } else {
//     alert("Invalid time. Please enter time between 0000 and 2359.");
//   }
// }
