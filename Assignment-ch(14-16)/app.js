//__________Ch-14 to Ch - 16_____________
//_______Q1_______
// var studentName = [] //JS literal notation
//_______Q2_______
// var studentNames = new Array();//JS object notation
//_______Q3_______
// var fruits = ["Apple", "Banana", "Mango", "Orange"];
//_______Q4_______
// var scores = [90, 75, 88, 100];
//_______Q5_______
// var flags = [true, false, true, false];
//_______Q6_______
// var mixedArray = ["Ali", 25, true, null];
//_______Q7_______
//  var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
// document.write("<h2>Qualifications:</h2>");
//     document.write("<ol>");
//     document.write("<li>) " + qualifications[0] + "<br>");
//     document.write("<li>) " + qualifications[1] + "<br>");
//     document.write("<li>) " + qualifications[2] + "<br>");
//     document.write("<li>) " + qualifications[3] + "<br>");
//     document.write("<li>) " + qualifications[4] + "<br>");
//     document.write("<li>) " + qualifications[5] + "<br>");
//     document.write("<li>) " + qualifications[6] + "<br>");
//     document.write("<li>) " + qualifications[7] + "<br>");
//     document.write("</ol>");
//_______Q8_______
// var students = ["Michael", "John", "Tony"];
// var scores = [320, 230, 480];
// var totalMarks = 500;
// document.write("Score of " + students[0] + " is " + scores[0] + ". Percentage: " + scores[0]/totalMarks*100 + "%<br>")
// document.write("Score of " + students[1] + " is " + scores[1] + ". Percentage: " + (scores[1] / totalMarks * 100) + "%<br>");
// document.write("Score of " + students[2] + " is " + scores[2] + ". Percentage: " + (scores[2] / totalMarks * 100) + "%<br>");
//_________Q9__________
//  var colors = ["Red", "Green", "Blue", "Yellow"];
//     document.write("<h3>Original Array:</h3>" + colors + "<br><br>");

//     // a. Add color to beginning
//     var colorStart = prompt("a) Which color do you want to add at the beginning?").toLowerCase();
//     colors.unshift(colorStart);
//     document.write("a) After adding at beginning: " + colors + "<br><br>");
//     var colorend = prompt("a) Which color do you want to add at the ending?").toLowerCase();
//     colors.push(colorend);
//     document.write("a) After adding at ending: " + colors + "<br><br>");
//     colors.unshift("Purple", "Peach");
//     document.write("c) After adding 2 more colors at beginning: " + colors + "<br><br>");
//     colors.shift();
//     document.write("d) After deleting first color: " + colors + "<br><br>");
//     colors.pop();
//     document.write("e) After deleting last color: " + colors + "<br><br>");

//     // f. Add color at user-defined index
//     var addIndex = +prompt("f) At which index do you want to add a color?");
//     var addColor = prompt("f) What color do you want to add?");
//     colors.splice(addIndex, 0, addColor);//kis index se add krni hay , kitni values delete krni hay,jo cheez add krani hay
//     document.write("f) After adding at index " + addIndex + ": " + colors + "<br><br>");
//_________Q10__________
//____________practice
// var scores = ['a','m','g','i','n','w','v','b'];
//by default make alphabets ascending
// scores.sort();
// console.log(scores);
//_________Q10____
// var ScoreOfStdents = [320, 230, 480,120];
// console.log("Scores of Students: " +ScoreOfStdents);
// //to make order ascending
// ScoreOfStdents.sort(
//     function(a,b){
//         return a-b
//     }
// );
// console.log("Ordered Scores of Students: " + ScoreOfStdents);

// var ScoreOfStdents = [320, 230, 480,120];
// console.log("Scores of Students: " +ScoreOfStdents);
// //to make order descending
// ScoreOfStdents.sort(
//     function(a,b){
//         return b-a
//     }
// );
// console.log("Ordered Scores of Students: " + ScoreOfStdents);
//_________Q11________

// var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// console.log('Cities List ' + cities)
// var selectedCities = cities.slice(2, 4); 
// console.log("Selected cities list: " + selectedCities);
 //_________Q12________
//  var arr = ["This", "is", "my", "cat"];

// // Show as array
// console.log("Array:\n" + arr);

// // Convert array to string using join with spaces
// var str = arr.join(" ");
// console.log("String:\n" + str);
 //_________Q13________
//  Devices = []
// Devices.push("Keyboard")
// Devices.push("mouse")
// Devices.push("printer")
// Devices.push("monitor")
// console.log("Out:\n" + Devices.shift().toUpperCase());
// console.log("Out:\n" + Devices.shift().toUpperCase());
// console.log("Out:\n" + Devices.shift().toUpperCase());
// console.log("Out:\n" + Devices.shift().toUpperCase());
 //_________Q14________

//  Devices = []
// Devices.push("Keyboard")
// Devices.push("mouse")
// Devices.push("printer")
// Devices.push("monitor")
// console.log("Out:\n" + Devices.pop().toLowerCase());
// console.log("Out:\n" + Devices.pop().toLowerCase());
// console.log("Out:\n" + Devices.pop().toLowerCase());
// console.log("Out:\n" + Devices.pop().toLowerCase());

 //_________Q15________
//  var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
//  document.write("<center><select style='width: 200px;'>")
//  for(i=0; i < manufacturers.length; i++){
//      document.write("<option>" + manufacturers[i] + "</option>");
//  }
//   document.write("</select>");
