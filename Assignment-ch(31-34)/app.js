

// var date = new Date ()
// console.log(date);
//+++++++++++++++++++++++________________Q2
// var months = ["jan","Feb","March","Apr","May","June","July","Aug","Sep","oct","Nov","Dec"]
// var today = new Date()
// var month = today.getMonth()
// console.log(months[month]);
//+++++++++++++++++++++++________________Q3

// var months = ["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"]
// var today = new Date()
// var month = today.getDay()
// console.log(months[month]);
//+++++++++++++++++++++++________________Q4

// var months =["Mon","Tues","Wed",]
// var today = new Date()
// var month = today.getDay()
// if(month===0 || month===5){
//     console.log("Its Funday");
// }

//+++++++++++++++++++++++________________Q5

// var months = prompt("Enter date mm-dd-yyyy");
// var today = new Date();
// var day = parseInt(months.split('-')[1]);  // Extract the day from the input

// if (day < 16) {
//     console.log("First fifteen days of the month");
// } else {
//     console.log("Last days of the month");
// }

//+++++++++++++++++++++++________________Q6
// var date = new Date()
// var time = date.getTime()
// var minutes = time/(1000*60)
// console.log("current date : " + date +  " \nElapsed miliseconds since january : " + time + "\nElapsed minutes since january : " + minutes )
//+++++++++++++++++++++++________________Q7

// var date = new Date()
// var time = date.getHours()
// if(time < 12){
//     console.log("Its AM"); //0 - 11 → AM & //12 - 23 → PM
// }else{
//     console.log("Its PM");
// }
//+++++++++++++++++++++++________________Q8

// var date = new Date("Dec 31 2020")
// console.log(date);
//+++++++++++++++++++++++________________Q9

// var today = new Date("June 18, 2015");
// var ramazanStart = new Date("feb 17, 2026");
// var diff = ramazanStart - today;

// var daysLeft = Math.ceil(diff / (1000 * 60 * 60 * 24));

// console.log( daysLeft + " days pass since first Ramazan of 2015");
//+++++++++++++++++++++++________________Q-10

// Create a Date object for the reference date (Dec 5, 2015, 22:50:16 GMT+0500)
// var referenceDate = new Date("Dec 05, 2015 22:50:16 GMT+0500");

// // Create a Date object for the beginning of 2015 (Jan 1, 2015, 00:00:00)
// var beginningOf2015 = new Date("Jan 01, 2015 00:00:00 GMT+0500");

// // Calculate the difference in milliseconds
// var diffInMillis = referenceDate - beginningOf2015;

// // Convert milliseconds to seconds
// var diffInSeconds = diffInMillis / 1000;

// // Display the result in the browser
// console.log("On reference date " + referenceDate.toString() + ", " + diffInSeconds + " seconds had passed since beginning of 2015.");

//________Question__11____________________________//

// var now = new Date()
// now.setHours(now.getHours()+1)
// alert("Current date: " + now + "\n1 hour ago, it was " + now)

//________Question__12____________________________//

// var now = new Date()
// now.setFullYear(now.getFullYear()-100)
// console.log("current date: " + new Date() + "\n100 years back, it was " + now);

//________Question__13____________________________//
// var age = prompt ("enter your age")
// var day = new Date()
// var year = day.getFullYear()-age
// alert("your age is "+ age + " \nyour birthyear is " +year)

//________Question__14____________________________//

// var userName = prompt("Enter your name")
// var month = prompt ("enter month")
// var numberOfUnit = +prompt("enter number of unit")
// var chargesOfUnit = 16
// var netAmount = numberOfUnit * chargesOfUnit
// var latPayment = 350
// var grossPayment = netAmount + latPayment
// document.write("<h1>K-Electric Bill </h1>");
// document.write(("cutumer Name <b>" + userName + "</b> br"));document.write("billing moth <b> " + month + " </b> <br>");
// document.write("number Of unit <b>" + numberOfUnit + "</b> <br>" );
// document.write("Charges of perUnit <b>"  + chargesOfUnit + "</b> <br> <br> ");
// document.write("net Amount Payable (within Due date) <b>"  + netAmount.toFixed(2) + "</b> <br> ");
// document.write("Late Payment amount :  <b>"  + latPayment.toFixed(2) + "</b> <br> ");document.write("Grous Amount Payable (After Due Date) :  <b>"  + grossPayment.toFixed(2) + "</b> <br> ");
