//______________Q1
// function power(a,b){
//     console.log(a**b);
// }
// power(2,3)
//__________OR
// function power (a,b){
//     return a**b
// }
// console.log(power(2, 3));
//______________Q2
// function leapYear(a){
//     if(a % 4 === 0 && a % 100 !== 0 || a % 400 === 0){
//         console.log(a + " is a leapyear");
//     }else{
//         console.log(a + " is not a leapyear");
        
//     }
// }
// var userYear = prompt("Enter a leapyear")
// leapYear(userYear)
//______________Q3
// function semiPerimeter(a, b, c) {
//     return (a + b + c) / 2;
// }

// function triangleArea(a, b, c) {
//     let S = semiPerimeter(a, b, c);
//     let area = Math.sqrt(S * (S - a) * (S - b) * (S - c));
//     return area;
// }

// console.log(triangleArea(3,4,5));

//______________Q4
// var eng = Number(prompt("Enter your English  marks"))
// var urdu = Number(prompt("Enter your Urdu marks"))
// var math = Number(prompt("Enter your Math marks"))

// function Average(eng,urdu,math){
//     return (eng+urdu+math)/3
// }
// function Percentage(eng,urdu,math){
//     return ((eng+urdu+math)/300)*100
// }
// function mainfunction(){
//     console.log("your average marks is " + Average(eng,urdu,math) + "\n your percentage is " + Percentage(eng,urdu,math)+"%");
    
// }
// mainfunction()
//______________Q5
// function myIndexOf(str,char){
//     for(i=0; i < str.length; i++){
//         if(str[i]=== char){
//             return i;
//         }
//     }
//     return -1
// }
// var userString = prompt("Enter any word")
// var userChar = prompt("Enter char whose index you want to find")
// console.log(myIndexOf(userString,userChar));
//______________Q6
// function removeVowels(sentence){
//     vowels = "aeiouAEIOU"
//     result= "";
//     for(i=0;i < sentence.length; i++){
//         if(!vowels.includes(sentence[i]))
//             result +=sentence[i]
//     }
//     return result
// }
// var input = prompt("Enter a max 25 characters sentence")
// if(input.length<=25){
//     console.log("Sentence without vowels is " + removeVowels(input))
// }else{
//         console.log("pls enter a sentence with no more than 25 characters");  
//     }
//______________Q7
// function countSuccessiveVowels(text) {
//     let count = 0;
//     let vowels = "aeiouAEIOU";

//     for (let i = 0; i < text.length - 1; i++) {
//         let first = text[i];
//         let second = text[i + 1];

//         // Check if both characters are vowels
//         switch (true) {
//             case (vowels.includes(first) && vowels.includes(second)):
//                 count++;
//                 break;
//             default:
//                 // Do nothing
//                 break;
//         }
//     }

//     return count;
// }
//______________Q8
// 1. Take input from user
// let km = prompt("Enter distance between two cities (in km):");

// // Convert input (string) into number
// km = Number(km);

// // 2. Functions to convert distance
// function toMeters(km) {
//   return km * 1000;   // 1 km = 1000 meters
// }

// function toFeet(km) {
//   return km * 3280.84; // 1 km = 3280.84 feet
// }

// function toInches(km) {
//   return km * 39370.1; // 1 km = 39370.1 inches
// }

// function toCentimeters(km) {
//   return km * 100000;  // 1 km = 100000 cm
// }

// // 3. Print results
// document.write("<h2>Distance Conversions</h2>");
// document.write("Kilometers: " + km + " km <br>");
// document.write("Meters: " + toMeters(km) + " m <br>");
// document.write("Feet: " + toFeet(km) + " ft <br>");
// document.write("Inches: " + toInches(km) + " in <br>");
// document.write("Centimeters: " + toCentimeters(km) + " cm <br>");
//______________Q9
// Function to calculate overtime pay
// function calculateOvertimePay(hoursWorked) {
//   const regularHours = 40;
//   const overtimeRate = 12;

//   let overtimeHours = 0;
//   let overtimePay = 0;

//   // Check if employee worked more than regular hours
//   if (hoursWorked > regularHours) {
//     overtimeHours = hoursWorked - regularHours;
//     overtimePay = overtimeHours * overtimeRate;
//   } else {
//     overtimePay = 0;
//   }

//   console.log(`Total hours worked: ${hoursWorked}`);
//   console.log(`Overtime hours: ${overtimeHours}`);
//   console.log(`Overtime pay: Rs. ${overtimePay}`);
// }

// // Example: Let's test the function with 45 hours
// calculateOvertimePay(45);
//______________Q10
// function giveNotes(inputInHundreds) {
//   var amount = inputInHundreds * 100;

//   var note100 = 0;
//   var note50 = 0;
//   var note10 = 0;

//   // 100 ke notes
//   note100 = Math.floor(amount / 100);
//   amount = amount % 100;

//   // 50 ke notes
//   note50 = Math.floor(amount / 50);
//   amount = amount % 50;

//   // 10 ke notes
//   note10 = Math.floor(amount / 10);
//   amount = amount % 10;

//   console.log("100 Rs notes: " + note100);
//   console.log("50 Rs notes: " + note50);
//   console.log("10 Rs notes: " + note10);

//   // Agar amount 10 ke multiples ka nahi hai
//   if (amount > 0) {
//     console.log("Remaining Rs: " + amount + " (cannot be given in available denominations)");
//   }
// }

// // Example: Rs. 880 => input = 8.8 (but we need whole hundreds), so let's try 9 = Rs. 900
// giveNotes(9);





