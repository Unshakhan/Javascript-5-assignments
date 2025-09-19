// ________________Ch-21____________________
//___________Q1____________
//_________Without Loop____________
// var firstName = prompt("Enter your firstname")
// var lastName = prompt("Enter your lastname")
//  if(!firstName.trim()|| !lastName.trim()){
// console.log("plz enter FirstName or LastName");

//  }else{
//   fullName = firstName.trim().charAt(0).toUpperCase() +
//  firstName.slice(1).toLowerCase()
//   +" "+
//    lastName.trim().charAt(0).toUpperCase() +
//  lastName.slice(1).toLowerCase()
//  console.log("Assalamualikum" + fullName );
//  }
//___________With Loop___________


//____________Q2___________
//_____With Loop_____________
// var Model = prompt("Enter your favourite mobile phone model ")
// var tiltcase = Model.trim().charAt(0).toUpperCase() + Model.trim().slice(1)
//  if(!Model.trim()){
//     alert("Enter Model Name")
//   }
// for(i=0;i<Model.length;i++){

// }
// document.write("Your favourite phone is " + tiltcase)
// document.write("<br>" +"The Length of your Model name is " + i)
//___________Without Loop _______________-

// if (!Model.trim()) {
//   alert("Please enter a model name");
// } else {
//   // Step 1: Trim + split into words
//   var words = Model.trim().split(" ");

//   // Step 2: Capitalize each word (without using loop)
//   var titleCaseModel = words.map(function(word) {
//     return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
//   }).join(" ");

//   // Step 3: Output
//   console.log("Your Model name is " + titleCaseModel + 
//               " \nAnd length of string is " + titleCaseModel.length);
// }
//____________Q3___________
// var country = "Pakistani"
// console.log("String:" + 
// country + "<br> Index Of 'n':" + country.indexOf("n"));
//____________Q4___________
//_________________-with loop______________-
// var greetings = "“Hello World”"
// for(i=greetings.length;i>0;i--){
// if (greetings[i] === 'l') {
//         console.log("Last 'l' found at index:", i);
//         break; // stop after finding the last one
//     }
// }
//_________________-without loop______________-
// var greetings = "“Hello World”"
// var  lastletter = greetings.lastIndexOf("l")
// console.log(lastletter);
//____________Q5___________
//____with loop 
// var userCountry = prompt("Enter any country name")
// for(i=0;i<userCountry.length;i++){
//    if(i == "3"){
//     console.log(userCountry.charAt(i));
//     break;
//    }
// }
//_________________-without loop______________-
// var userCountry = prompt("Enter any country name")
// var thirdLetter = userCountry.charAt(3)
// console.log(thirdLetter);
//____________Q6___________
// Repeat Q1
//____________Q7___________
// var city = "Hyderabad"
// // var updatedName = city.replace("Hyder","Islam") 
// _______________OR
// var city = "Hyderabad"
// document.write("City : "+ city + "<br>After Replacement : " +  city.replace("Hyder","Islam"));
//____________Q8___________
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// document.write( message.replace(/and/g,"&"));
//____________Q9___________
// var num = "472"
// console.log(typeof(num));
// ___________________Coverted to num____________
// var converted = parseInt(num);
// _______________OR
// var converted = Number(num);
// _______________OR
// var converted = +num;
// console.log(typeof converted);

//____________Q-10___________
// var userfruit = prompt("Enter your favourite fruit name").toUpperCase()
// console.log(userfruit);
// ______________Or
// var userfruit = prompt("Enter your favourite fruit name")
//  toggledFruit = ""
//   if (userfruit === userfruit.toUpperCase()) {
//         toggledFruit += userfruit.toLowerCase();
//         console.log(toggledFruit);
        
//     } else if (userfruit === userfruit.toLowerCase()){
//         toggledFruit += userfruit.toUpperCase();
//         console.log(toggledFruit);
//     }else {
//     // Mixed case → do nothing
//     console.log(userfruit.charAt(0).toUpperCase() + userfruit.slice(1).toLowerCase());
// }
//____________Q-11___________

// var sentence = prompt("Enter a sentence:")// i am student of smit
// var result = ""; //"I Am"
// var makeUpper = true; //false true,false

// for(var i=0; i<sentence.length;i++){ //1 2 3
//     if(makeUpper){
//         result += sentence[i].toUpperCase();
//         makeUpper=false; 
//     }else{
//         result += sentence[i].toLowerCase();
//     }
//     if(sentence[i] === " "){
//         makeUpper= true
//     }
// }
// console.log(result);
//___________OR
// var userfruit = prompt("Enter your favourite fruit name")
// toggledFruit = userfruit.split(" ")
// var tiltcase = []
// for(i = 0 ; i <  toggledFruit.length ;i++){
//     var words = toggledFruit[i]
//    var finalWord = words.charAt(0).toUpperCase() + words.slice(1).toLowerCase();
//    tiltcase.push(finalWord);
// }
// var finalResult = tiltcase.join(" ");
// console.log(finalResult);
//_______________Q12____________-
// var num = 35.36;
// var numStr = num.toString()
// var result = numStr.replace(".","")
// console.log("Number: " + num  + " Result: " + result);
//_______________Q13____________-
// var userName = prompt("Enter your name")
// var isValid = true
// for(i=0;i<userName.length;i++){
//     var word = userName.charCodeAt(i)
//     if(word === 64 || word === 44 || word === 46||word === 33){
//        isValid = false;
//         alert("Plz Enter a valid username");
//         break;
//     }
// }
// if (isValid) {
//     alert("Username is valid: " + userName);}
// _______________OR
// var username = prompt("Enter your username");

// // Flag to check if invalid symbol found
// var isValid = true;

// // Loop through each character in username
// for (var i = 0; i < username.length; i++) {
//     var charCode = username.charCodeAt(i);  // ASCII code of character
    
//     if (charCode === 64) {  // 64 is ASCII for '@'
//         isValid = false;
//         break;  // Stop loop as invalid symbol found
//     }
// }

// if (isValid) {
//     alert("Username is valid: " + username);
// } else {
//     alert("Please enter a valid username without '@' symbol.");
// }
//_______________Q14____________-
// A = ["cake", "apple pie", "cookie", "chips","patties"]
// B = prompt("Welcome to ABC Bakery !!! \n What do you want to order Sir/Mam ???")
// var flag = false
// for(i=0; i<A.length; i++){
//     if(A[i] === B){
//         flag = true
//         alert(B + " is available in our bakery at index " + i)
//         break;
//     }
// }
// if(!flag){
//      alert(B + " is not available in our bakery at ") 
// }