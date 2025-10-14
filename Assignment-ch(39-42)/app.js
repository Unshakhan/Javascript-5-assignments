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


