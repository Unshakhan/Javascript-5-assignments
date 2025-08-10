// _________________ch6________________

// ___________Q1______________
// var a =10
// document.write("<h1>Result</h1>" + "The value of a is :" + a )
// document.write("<br>.........................................<br>")

// ++a
// document.write("<br>The value of ++a is :" + a + "<br>") //preincrement
// document.write("Now the value of a is :" + a + "<br>") 

// document.write("<br>The value of a++ is :" + a++ + "<br>") //postincrement
// document.write("Now the value of a is :" + a + "<br>") 

// --a
// document.write("<br>The value of --a is :" + a + "<br>") //predecrement
// document.write("Now the value of a is :" + a + "<br>") 

// document.write("<br>The value of a-- is :" + a-- + "<br>") //postincrement
// document.write("Now the value of a is :" + a + "<br>") 

// ___________Q2______________
// var a=2 , b=1

// document.write("a ="+a+  "<br>b =" +b)
// document.write("<br>The value of --a is :"+ --a )

// document.write("<br>The value of --b is :"+ --b)
// var num=a-b
// document.write("<br>The value of --a - --b is :" + num)
// var formula3=a-b+ ++b
// document.write("<br>The value of --a - --b + ++b is : " + formula3)
// var formula4=formula3+b--
// document.write("<br>The value of --a - --b + ++b + b-- is : " + formula4)
// document.write("<br> Now a =" + a + "<br> b =" + b + "<br> result is  = " + formula4)
// ___________Q3______________
// var name = prompt(" Welcome! to the page","Enter your name:");
// console.log(name)
//__________Q5___________
//   var num = prompt("Enter a number:");

//   // If user enters nothing, use 5
//   if (num === "" || num === null) {
//     num = 5;
//   } else {
//     num = +num; // Convert string to number
//   }

//   document.write("<h3>Multiplication Table of " + num + "</h3>");

//   // Display table from 1 to 10
//   for (var i = 1; i <= 10; i++) {
//     document.write(num + " × " + i + " = " + (num * i) + "<br>");
//   }
//__________Q6___________
 // a) Take subject names from user
//   let sub1 = prompt("Enter name of first subject:");
//   let sub2 = prompt("Enter name of second subject:");
//   let sub3 = prompt("Enter name of third subject:");

//   // b) Total marks per subject
//   let totalMarksPerSubject = 100;

//   // c & d) Take obtained marks for each subject
//   let marks1 = +prompt("Enter obtained marks for " + sub1 + ":");
//   let marks2 = +prompt("Enter obtained marks for " + sub2 + ":");
//   let marks3 = +prompt("Enter obtained marks for " + sub3 + ":");

//   // e) Calculate total & percentage
//   let totalMarks = totalMarksPerSubject * 3;
//   let obtainedMarks = marks1 + marks2 + marks3;
//   let percentage = (obtainedMarks / totalMarks) * 100;

//   // Show result in table format
//   document.write("<h2>Marks Sheet</h2>");
//   document.write("<table border='1' cellspacing='0' cellpadding='5'>");
//   document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
//   document.write("<tr><td>" + sub1 + "</td><td>100</td><td>" + marks1 + "</td></tr>");
//   document.write("<tr><td>" + sub2 + "</td><td>100</td><td>" + marks2 + "</td></tr>");
//   document.write("<tr><td>" + sub3 + "</td><td>100</td><td>" + marks3 + "</td></tr>");
//   document.write("<tr><th colspan='2'>Total Marks</th><td>" + obtainedMarks + "</td></tr>");
//   document.write("<tr><th colspan='2'>Percentage</th><td>" + percentage.toFixed(2) + "%</td></tr>");
//   document.write("</table>");
 //___________________________ch7__________________________
 //____________Q1_________________
