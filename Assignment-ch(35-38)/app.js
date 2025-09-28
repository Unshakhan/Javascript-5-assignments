

// function currentDate(){
//     console.log(new Date());
// }
// currentDate()
//______________Q2
// function userFulName (num1,num2){
//  console.log("Welcome to SMIT ! " + num1 + " " + num2);
// }
// var FirstName = prompt("Enter your First Name")
// var LastName = prompt("Enter your Last Name")
// userFulName (  FirstName , LastName)
//______________Q3

//  function sum (num1,num2){
//  console.log(num1 + num2);
// }
// var numa = +prompt("Enter your First num")
// var numb = +prompt("Enter your Last num")
// sum ( numa,numb)
// ______________Q4
// function userInput(num1, num2, operator) {
//     if (operator === "+") {
//         var sum = num1 + num2
//     }
//     else if (operator === "-") {
//         var sum = num1 - num2
//     }
//     else if (operator === "/") {
//         var sum = num1 / num2
//     }
//     else if (operator === "*") {
//         var sum = num1 * num2
//     }
//     else if (operator === "%") {
//         var sum = num1 % num2
        
//     } else {
//         sum ="Invalid Operation!";
//     }
//     return sum
// }
// var userFirstNum = Number(prompt("Enter your first num"))
// var userLastNum = Number(prompt("Enter your Last num"))
// var UserOperator = prompt("Enter an Operator")

// console.log(userInput(userFirstNum, userLastNum, UserOperator));
// ______________Q5
// function calculateSquare(x){
//     // return x*x
//     return x**2
// }
// console.log(calculateSquare(6));

// ______________Q6
// function factorial(n){
//     var result = 1
//     for(var i=1;i<=n;i++){
//         result *=i
//     }
//    return result
// }
// document.write(factorial(Number(prompt("Enter a number"))))
// ______________Q7

// function factorial(num1,num2){
//        result = ""
//         for(num1;num1<=num2;num1++){
//             result += num1
//         }
//         console.log(result + "<br>");
//        return result
//     }
//     var firstNum = Number(prompt("Enter a Number"))
//     var SecNum = Number(prompt("Enter a Sec Number"))
// factorial(firstNum,SecNum);
//______________OR
// function factorial(a,b){
//     for(i=a; i<=b;i++){
//         console.log(i);
//     }

// }
//     factorial(1,20)

// ______________Q8

// function calculateHyp(base,perp){
//     function calculateSquare(x){
//             // return x*x
//             return x**2
//         } 
//         var Hyp= calculateSquare(base)+calculateSquare(perp)
// return Hyp
// }
// console.log(calculateHyp(10,5));

// ______________Q9
// function calculateArea(w,h){
//     return w*h
// }
// console.log(calculateArea(10,5));//_______oR
// var width = 30
// height = 10
// console.log(calculateArea(width,height));
//_____________Q!0
// let userInput = prompt("Enter a word:");   // user se word lena
// userInput = userInput.toLowerCase();       // small letters me convert

// let reversed = userInput.split("").reverse().join("");  
// // word ko todna, ulta karna aur wapas jorna

// if (userInput === reversed) {
//   alert(userInput + " is a palindrome!");
// } else {
//   alert(userInput + " is NOT a palindrome!");
// }

//_______________Q11
// function parameter(a){
//     var flag = true
//     var titleCase = ""
//     for( var i=0;i<a.length;i++){
//         if(flag){
//             titleCase += a[i].toUpperCase()
//             flag= false
//         }
//          else if(a[i]=== " " ){
//             flag = true
//             titleCase+=" "
//         }else{
//             titleCase +=a[i].toLowerCase()
//         }

//     }
//     return titleCase
// }
// var userInput = prompt("Enter your sentence")
// var result = parameter(userInput)
// console.log(result);

//_______________Q12

// function userLargestWord(a){
// var userInput = a ;
// var userWords = userInput.split(" ");

// var longestWord = ""; // start with empty string

// for (var i = 0; i < userWords.length; i++) {
//     if (userWords[i].length > longestWord.length) {
//         longestWord = userWords[i]; // replace if longer
//     }
// }
// return longestWord

// }
// var userSentence = prompt("Enter a sentence")
// result = userLargestWord(userSentence)
// console.log(result);

//_______________Q13
// function countLetter(a,b){
// var count = 0
// for (let i = 0; i < a.length; i++) {
//     if (a[i] === b) {
//       count++;
//     }
//   }
//   return count;
// }
// var userString = prompt("Enter a string:");
// var userLetter = prompt("Enter the letter you want to count:");
// // Function call
// var result = countLetter(userString, userLetter);

// // Output show karna
// alert("The letter '" + userLetter + "' appears " + result + " times in your string.");
// console.log("The letter '" + userLetter + "' appears " + result + " times in your string.");
//______________Q14
// function calcCircumference(a){
//     var C = 2*Math.PI*a
//     return C
// }
// var radius = Number(prompt("Enter a radius"))
// result = calcCircumference(radius)
// console.log("The cicumference is : " + result);
// function calcArea(a){
//  var A = Math.PI*a**2
//  return A
// }
// area= calcArea(radius)
// console.log("The area is : " + area);