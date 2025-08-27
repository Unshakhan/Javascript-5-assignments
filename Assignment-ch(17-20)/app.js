//_____________Q1______________
//var arrayofarrays = [];  // Completely empty — you can add rows later
//_____________OR___________
//var arrayofarrays = [[], [], []];  // 3 rows, currently empty
//_____________Q2______________
// let arrayofarrays = [
//      [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]
// ]
// for(let i = 0 ; i < arrayofarrays.length ; i++){
//     document.write( "<h1>" + arrayofarrays[i].join() +"<br>")
// }
//___________________Q3_______________________-
// for (number=1 ; number <=10; number++){
//     document.write(number + "<br>")
// }
//___________________Q4_______________________-
// let usernum = +prompt("Enter any number for table")||"5"
// let length = +prompt("Select length of table")||"10"
// for(let i=1; i<=length; i++ ){
//     document.write( "<br>" +usernum + " x " + i + " = "+ usernum*i)
// }
//___________________Q5_______________________-
// let fruits = ["apple","banana","mango","orange","strawberry"]
// console.log(fruits)
// for(i=0; i<fruits.length; i++){
//     console.log("Elements at " + i + " is " + fruits[i])
// }
//___________________Q6_______________________-
// document.write("<h1> Forward Counting: </h1>")
// for (counting=1 ; counting<=15; counting++){
//     if (counting ===15) {
//         document.write(counting + " ."); // Last number – no comma
//     } else {
//        console.log(counting)
//   document.write(counting + " , ")
//     }
// }
//  document.write("<h1>Reverse Counting: </h1>")
// for (let counting = 15; counting >= 1; counting--) {
//      if (counting ===1) {
//         document.write(counting + " ."); // Last number – no comma
//     } else {
//        console.log(counting)
//   document.write(counting + " , ")
//     }
// }
// document.write("<h1>Even numbers:</h1>")
// for (counting=2; counting<=20; counting+= 2){
//    if (counting === 20) {
//         document.write(counting + " ."); // Last number – no comma
//     } else {
//        console.log(counting)
//   document.write(counting + " , ")
//     }}
// document.write("<h1>Odd numbers:</h1>")
// for (counting=1; counting<=20; counting+= 2){
//      if (counting === 19) {
//         document.write(counting + "k ."); // Last number – no comma
//     } else {
//        console.log(counting)
//   document.write(counting + "k , ")
//     }
// }
// document.write("<h1>Series:</h1>")
// for (counting=2; counting<=20; counting+= 2){
//        if (counting === 20) {
//         document.write(counting + "k ."); // Last number – no comma
//     } else {
//        console.log(counting)
//   document.write(counting + "k , ")
//     }
// }
//___________________Q7_______________________-

// var A = ["cake","apple pie","cookie", "chips","patties"]
// var B = prompt("Welcome to the ABC Bakery what do you want to order from here Sir/Mam?").toLowerCase()
// flag=false
// for(i=0; i<A.length; i++){
//     if(B===A[i]){
        
//         document.write(B + " is available at index " + i + " in our bakery") 
//           flag=true
//     }
//     else if(B == null || B.trim() === ""){
// document.write("Enter somethiong ") 
//  flag=true
//  break;
//     }
// }
// if(!flag){
//       document.write("We are sorry," + B +  " is not available in our bakery ")}
//___________________Q8_______________________-
var A = [24, 53, 78, 91, 12]
var largest = A[0]
for(i=1 ; i<A.length; i++){
    if (A[i]>largest){
        largest=A[i]
    }
}
document.write("Array items: " + A.join(", ") + "<br>");
document.write("The largest number is: " + largest);
