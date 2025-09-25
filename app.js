// ************Chapter 01************

// **Question#1**

// alert("Welcome to our website!");


// **Question#2**

// alert("Error! Please enter a valid password.");


// **Question#3**

// alert("Welcome to JS Land...\nHappy Coding!");


// **Question#4**

// alert("Welcome to JS Land...");
// alert("Happy Coding!\nPrevent this page from creating additional dialogs.");


// **Question#5**

// console.log("Hello... I can run JS through my web browser's console");


// **Question#6**

//done in index.html file


// **Question#7**

//done in index.html file


// ************Chapter 02************

// **Question#1**

// var username = prompt("Enter your username");
// console.log("Username: " + username);


// **Question#2**

// var myName = "John Doe";
// console.log("My name is " + myName);


// **Question#3**

// var message = "Hello World";
// alert(message);


// **Question#4**

// var studentName = "Jhone Doe";
// var studentAge = "15 years old";
// var studentCourse = "Certified Mobile Application Development";
// alert(studentName);
// alert(studentAge);
// alert(studentCourse);


// **Question#5**

// var pizza = "PIZZA\nPIZZ\nPIZ\nPI\nP";
// alert(pizza);


// **Question#6**

// var email = "example@example.com";
// alert("Email: " + email);


// **Question#7**

// var book = "A smarter way to learn JavaScript";
// alert("I am trying to learn from the book " + book);


// **Question#8**

// document.write("<h1>Yah! I can write HTML content through JavaScript</h1>");


// **Question#9**




// ************Chapter 03************


// **Question#1**

// var age = 15;
// alert ("I am " + age + "years old")


// **Question#2**

// var visit = 14;
// alert("You have visited this site " + visit + " times");


// **Question#3**

// var birthYear = 1990;
// document.write("<h1> My birth year is " + birthYear + "<br> Data type of my declared variable is number</h1>");



// **Question#4**

// var visitorName = "Jhon Doe";
// var productTitle = "T-shirt";
// var quantity = 5;
// document.write("<h1>" + visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing store</h1>");




// ************Chapter 04************


// **Question#1**

// var var1 = "Hello", var2 = "World", var3 = 2023;
// console.log(var1 + " " + var2 + " " + var3);


// **Question#2**

////legal///
// var Name1 = "Muhamamd Anas";
// var $ohk = "done";
// var stdName ="Muhamamd Anas";
// var roll_no = 5469;
// var school = "FAS";

////illegal///
// var 12name = "Muhamamd Anas"
// var name-std = "Muhamamd Anas"
// var &name = "Muhamamd Anas"
// var name@ = "Muhamamd Anas"
// 


// **Question#3**

// document.write("<h1>a.Rules for naming JS variables</h1><br>");
// document.write("b.Variable names can only contain numbers, $, and _. <br> <br>");
// document.write("c.Variables must begin with a letter, $ or _. <br><br> For example $name, _name or name <br> <br>");
// document.write("d.Variable names are case sensitive <br> <br>");
// document.write("e.Variable names should not be JS keywords<br>");




// ************Chapter 05************


// **Question#1**

// var num1 = +prompt("Enter first number");
// var num2 = +prompt("Enter second number");
// var sum = num1 + num2;
// alert("The sum of " + num1 + " and " + num2 + " is " + sum);

// **Question#2**

// var num1 = +prompt("Enter first number");
// var num2 = +prompt("Enter second number");
// var subtract = num1 - num2;
// alert("The subtraction of " + num1 + " and " + num2 + " is " + subtract);


// var num1 = +prompt("Enter first number");
// var num2 = +prompt("Enter second number");
// var product = num1 * num2;
// alert("The product of " + num1 + " and " + num2 + " is " + product);



// var num1 = +prompt("Enter first number");
// var num2 = +prompt("Enter second number");
// var division = num1 / num2;
// alert("The division of " + num1 + " and " + num2 + " is " + division);



// var num1 = +prompt("Enter first number");
// var num2 = +prompt("Enter second number");
// var remainder = num1 % num2;
// alert("The remainder of " + num1 + " and " + num2 + " is " + remainder);



// **Question#3**

// var variable;
// document.write("Value after variable declaration is " + variable + "<br>");
// variable = 5;
// document.write("Initial value: " + variable + "<br>");
// variable++;
// document.write("Value after increment is " + variable + "<br>");
// variable += 7;
// document.write("Value after addition is " + variable + "<br>");
// variable--;
// document.write("Value after decrement is " + variable + "<br>");
// document.write("The remainder is " + (variable % 3) + "<br>");


// **Question#4**

// var ticketPrice = 600;
// var numberOfTickets = 5;
// var totalCost = ticketPrice * numberOfTickets;
// document.write("Total cost to buy " + numberOfTickets + " tickets to a movie is " + totalCost + " PKR");


// **Question#5**

// var number = +prompt("Enter a number to show its multiplication table");
// document.write("<h1>Multiplication Table of " + number + "</h1>");

// for (var i = 1; i <= 10; i++) {
//     document.write(number + " x " + i + " = " + (number * i) + "<br>");
// }


// **Question#6**

// var celsius = 25;
// var fahrenheit = (celsius * 9/5) + 32;
// document.write(celsius + "°C is " + fahrenheit + "°F<br>");

// var fahrenheit2 = 70;
// var celsius2 = (fahrenheit2 - 32) * 5/9;
// document.write(fahrenheit2 + "°F is " + celsius2 + "°C");



// **Question#7**

// var item1Price = 650;
// var item2Price = 100;
// var item1Quantity = 3;
// var item2Quantity = 7;
// var shippingCharges = 100;
// var totalCost = (item1Price * item1Quantity) + (item2Price * item2Quantity) + shippingCharges;
// document.write("<h1>Shopping Cart</h1><br>");
// document.write("Price of item 1 is " + item1Price + "<br>");
// document.write("Quantity of item 1 is " + item1Quantity + "<br>");
// document.write("Price of item 2 is " + item2Price + "<br>");
// document.write("Quantity of item 2 is " + item2Quantity + "<br>");
// document.write("Shipping Charges: " + shippingCharges + "<br> <br>");
// document.write("Total Cost: " + totalCost + "<br>");



// **Question#8**

// var totalMarks = 980;
// var obtainedMarks = 804;
// var percentage = (obtainedMarks / totalMarks) * 100;

// document.write("<h1>Marks Sheet</h1><br>");
// document.write("Total Marks: " + totalMarks + "<br>");
// document.write("Obtained Marks: " + obtainedMarks + "<br>");
// document.write("Percentage: " + percentage + "%<br>");



// **Question#9**

// var usDollarToPKR = 104.80;
// var saudiRiyalToPKR = 28;
// var usDollars = 10;
// var saudiRiyals = 25;

// var totalPKR = (usDollars * usDollarToPKR) + (saudiRiyals * saudiRiyalToPKR);
// document.write("<h1>Currency Converter</h1><br>");
// document.write("Total PKR: " + totalPKR + "<br>");



// **Question#10**

// var number = 10;
// var result = ((number + 5) * 10) / 2;
// alert("The result is " + result);



// **Question#11**

// var currentYear = 2025;
// var birthYear = +prompt("Enter your birth year");
// var age = currentYear - birthYear;
// document.write("<h1>Age Calculator</h1><br>");
// document.write("Current Year: " + currentYear + "<br>");
// document.write("Birth Year: " + birthYear + "<br>");
// document.write("Your Age is: " + age + "<br>");



// **Question#12**

// var radius = "20";
// var circumference = 2 * 3.142 * radius;
// var area = 3.142 * radius * radius;

// document.write("<h1>The Geometrizer</h1><br>");
// document.write("Radius: " + radius + "<br>");
// document.write("Circumference: " + circumference + "<br>");
// document.write("Area: " + area + "<br>");



// **Question#13**

// var favoriteSnack = "Chocolate Chip";
// var currentAge = 15;
// var maxAge = 65;
// var amountPerDay = 3;
// var totalNeeded = (maxAge - currentAge) * amountPerDay;

// document.write("<h1>The Snack Calculator</h1><br>");
// document.write("Favorite Snack: " + favoriteSnack + "<br>");
// document.write("Current Age: " + currentAge + "<br>");
// document.write("Estimated Maximum Age: " + maxAge + "<br>");
// document.write("Amount of Snack per Day: " + amountPerDay + "<br>");
// document.write("You will need " + totalNeeded + " chocolate chips to last you until the age of " + maxAge + "<br>");




// ************Chapter 06-09************


// **Question#1**

// var a = 10;
// document.write("Result:<br>");
// document.write("The value of a is: " + a + "<br><br>");
// document.write("<h2>...................................</h2><br><br>");
// document.write("The value of ++a is: " + (++a) + "<br>");
// document.write("Now the value of a is: " + a + "<br><br>");

// document.write("The value of a++ is: " + (a++) + "<br>");
// document.write("Now the value of a is: " + a + "<br><br>");
// document.write("The value of --a is: " + (--a) + "<br>");
// document.write("Now the value of a is: " + a + "<br><br>");
// document.write("The value of a-- is: " + (a--) + "<br>");
// document.write("Now the value of a is: " + a + "<br>");


// **Question#2**

// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Step 1: --a = 1 (decrement a by 1, so a becomes 1)
// Step 2: --a - --b = 1 - 0 = 1 (decrement b by 1, so b becomes 0)
// Step 3: --a - --b + ++b = 1 + 1 = 2 (increment b by 1, so b becomes 1)
// Step 4: --a - --b + ++b + b-- = 2 + 1 = 3 (use current value of b which is 1, then decrement b by 1, so b becomes 0)
// document.write("a is " + a + "<br>");
// document.write("b is " + b + "<br>");
// document.write("result is " + result + "<br>");


// **Question#3**

// var username = prompt("Enter your name");
// alert("Welcome " + username + "!");



// **Question#4**

// var number = +prompt("Enter a number to show its multiplication table");
// if (number === 0) {
//     number = 5;
// }

// document.write("<h1>Multiplication Table of " + number + "</h1>");
// for (var i = 1; i <= 10; i++) {
//     document.write(number + " x " + i + " = " + (number * i) + "<br>");
// }



// **Question#5**

// var English = +prompt("Enter obtained marks in English");

// var Urdu = +prompt("Enter obtained marks in Urdu");

// var Math = +prompt("Enter obtained marks in Math");
// var english = 100;
// var urdu = 100;
// var math = 100;
// var totalMarks = 300;
// var obtainedMarksenglish = english-English;
// var obtainedMarksurdu = urdu-Urdu;
// var obtainedMarksmath = math-Math;
// var obtainedMarks = obtainedMarksenglish + obtainedMarksurdu + obtainedMarksmath;
// var totalobtainedMarks = English + Urdu + Math;
// var totalpercentage = (totalobtainedMarks / totalMarks) * 100;
// var percentage = (obtainedMarks / totalMarks) * 100;

// document.write("<h1>Subject Total Marks Obtained Marks Percentage</h1><br>");
// document.write("<h3>English " + english + "-----------" + English + "-----------" + percentage +"%</h3>");
// document.write("<h3>Urdu " + urdu + "-----------" + Urdu + "-----------" + percentage + "%</h3>");
// document.write("<h3>Math " + math + "-----------" + Math + "-----------" + percentage + "%</h3>");
// document.write("Total Marks: " + totalMarks +  "-----------" + " Obtained Marks: " + totalobtainedMarks + "-----------" + " Percentage: " + totalpercentage + "% ");




// ************Chapter 09-11************

// **Question#1**

// var city = prompt ("Enter city name").toUpperCase();
// if (city == "KARACHI") {
//     alert("Welcome to city of lights");
// } else {
//     alert("Welcome to " + city);
// }


// **Question#2**

// var gender = prompt("Enter your gender (male/female)").toLowerCase();
// if (gender == "male") {
//     alert("Good Morning Sir");
// } else if (gender == "female") {
//     alert("Good Morning Ma'am");
// } else {
//     alert("Invalid input");
// }


// **Question#3**

// var color = prompt("Enter traffic signal color (red/yellow/green)").toLowerCase();
// if (color == "red") {
//     alert("Must Stop");
// }
// else if (color == "yellow") {
//     alert("Ready to move");
// }
// else if (color == "green") {
//     alert("Move now");
// }


// **Question#4**

// var fuel = prompt("Enter remaining fuel in car in litres").toLowerCase();
// if ("fuel < 0.25 litres") {
//     alert("please refill the fuel in your car");
// }


// **Question#5**

// var a=4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

// var b=82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }

// var c=12;
// if (c++ === 13){
// alert("condition 1 is true");
// }

// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

// if (true){
// alert("True");
// }
// if (false){
//     alert("false");
//     }  

// if("car" < "cat"){
// alert("car is smaller than cat");
// }


// **Question#6**

// var marks1 = +prompt("Enter subject 1 marks");
// var marks2 = +prompt("Enter subject 2 marks");
// var marks3 = +prompt("Enter subject 3 marks");
// var totalMarks = 300;
// var obtainedMarks = marks1 + marks2 + marks3;
// var percentage = (obtainedMarks / totalMarks) * 100;


// if (percentage >= 80) {
//     document.write("<h1>Marks Sheet</h1><br>");
//     document.write("<h3>Total-marks: 300 <br> obtained-marks: " + obtainedMarks + "<br> percentage: " + percentage + "% <br> Grade: A-One <br> Remarks: Excellent</h3>");
// } else if (percentage >= 70) {
//      document.write("<h1>Marks Sheet</h1><br>");
//     document.write("<h3>Total-marks: 300 <br> obtained-marks: " + obtainedMarks + "<br> percentage: " + percentage + "% <br> Grade: A <br> Remarks: Good</h3>");
// } else if (percentage >= 60) {
//      document.write("<h1>Marks Sheet</h1><br>");
//     document.write("<h3>Total-marks: 300 <br> obtained-marks: " + obtainedMarks + "<br> percentage: " + percentage + "% <br> Grade: B <br> Remarks: Needs Improvement</h3>");
// } else if (percentage < 60) {
//      document.write("<h1>Marks Sheet</h1><br>");
//     document.write("<h3>Total-marks: 300 <br> obtained-marks: " + obtainedMarks + "<br> percentage: " + percentage + "% <br> Grade: C <br> Remarks: Fail</h3>");
// }


// **Question#7**

// var secretNumber = 3;
// var guess = +prompt("Guess the secret number (between 1 and 10)");

// if (guess == secretNumber) {
//     alert("Bingo! Correct answer");
// } else if (guess == secretNumber + 1) {
//     alert("Close enough to the correct answer");
// }
// else {
//     alert("Wrong answer, try again!");
// }


// **Question#8**

// var number = +prompt("Enter a number to check if it's divisible by 3");
// if (number % 3 == 0) {
//     alert(number + " is divisible by 3");
// } else {
//     alert(number + " is not divisible by 3");
// }


// **Question#9**

// var number = +prompt("Enter a number to check if it's even or odd");
// if (number % 2 == 0) {
//     alert(number + " is an even number");
// } else {
//     alert(number + " is an odd number");
// }


// **Question#10**

// var temperature = +prompt("Enter the temperature");
// if (temperature > 40) {
//     alert("It is too hot outside.");
// }else if (temperature > 30) {
//     alert("The weather today is normal.");
// }else if (temperature > 20) {
//     alert("Todays weather is cool.");
// }else if (temperature > 10) {
//     alert("OMG! todays weather is so cool.");
// }
// else {
//     alert("It's very cold outside.");
// }


// **Question#11**

// var firstNumber = +prompt("Enter first number");
// var secondNumber = +prompt("Enter second number");
// var operation = prompt("Enter operation (+, -, *, /, %)");
// var percentage = (firstNumber / secondNumber) * 100;
// if (operation == "+") {
//     var result = firstNumber + secondNumber;
//     alert(firstNumber + " + " + secondNumber + " = " + result);
// }else if (operation == "-") {
//     var result = firstNumber - secondNumber;
//     alert(firstNumber + "-" + secondNumber + "=" + result);
// }else if (operation == "*") {
//     var result = firstNumber * secondNumber;
//     alert(firstNumber + "*" + secondNumber + "=" + result);
// }else if (operation == "/") {
//     var result = firstNumber / secondNumber;
//     alert(firstNumber + "/" + secondNumber + "=" + result);
// }else if (operation == "%") {
//     alert(percentage + " % ");
// }


// ************Chapter 12-13************


// **Question#1**

// var character = prompt("Enter a character (number, uppercase letter, or lowercase letter)");
// var string = prompt ("Enter a character (number, uppercase letter, or lowercase letter)");
// var ASCII = "A=65 , Z=90 , a=97 , z=122 , 0=48 , 9=57";
// var code = string.charCodeAt();
// if (code === 65) {
//     alert("Variable A and its ASCII code is 65");
// }else if (code === 90) {
//     alert("Variable Z and its ASCII code is 90");
// }else if (code === 97) {
//     alert("Variable a and its ASCII code is 97");
// }else if (code === 122) {
//     alert("Variable z and its ASCII code is 122");
// }else if (code === 48) {
//     alert("Variable 0 and its ASCII code is 48");
// }else if (code === 57) {
//     alert("Variable 9 and its ASCII code is 57");
// }else{
//     alert("no")
// }


// **Question#2**

// var int1 = +prompt("Enter first integer");
// var int2 = +prompt("Enter second integer");
// if (int1 > int2) {
//     alert(int1 + " is greater than " + int2);
// } else if (int1 < int2) {
//     alert(int1 + " is less than " + int2);
// } else {
//     alert(int1 + " is equal to " + int2);
// }


// **Question#3**

// var number = +prompt ("Enter a number");
// if (number > 0) {
//     alert(number + " is a positive number");
// } else if (number < 0) {
//     alert(number + " is a negative number");
// } else {
//     alert(number + " is zero");
// }


// **Question#4**

// var vowel = prompt("Enter a character");
// vowel = vowel.toLowerCase();
// if(vowel === "a" || vowel === "e" || vowel === "i" || vowel === "o" || vowel === "u") {
//     alert(vowel + " is a vowel");
// }else {
//     alert(vowel + " is not a vowel");
// }


// **Question#5**

// var correctPassword = "password123";
// var userPassword = prompt("Enter your password");
// if (userPassword === "") {
//     alert("Please enter your password");
// } else if (userPassword === correctPassword) {
//     alert("Correct password!");
// } else {
//     alert("Incorrect password...");
// }


// **Question#6**

// var greeting;
// var hour = 13;
// if (hour < 18) { greeting = "Good day"; }
// else { greeting = "Good evening"; }


// **Question#7**

// var time = +prompt("Please Enter time:"," Format Like: 1900 ");
// if (time >= 0000 && time < 1200) {
//     alert("Good morning!");
// } else if (time >= 1200 && time < 1700) {
//     alert("Good afternoon!");
// } else if (time >= 1700 && time < 2100) {
//     alert("Good evening!");
// } else if (time >= 2100 && time < 2400) {
//     alert("Good night!");
// }else {
//     alert("Please enter a correct time");
// }




// ************Chapter 14-16************


// **Question#1**

// var studentNames = []; 


// **Question#2**

// var studentNames = new Array();



// **Question#3**

// var stringArray = ["mango", "banana", "cherry"];
// alert(stringArray);



// **Question#4**

// var numberArray = [1, 2, 3, 4, 5];
// alert(numberArray);



// **Question#5**

// var booleanArray = [true, false, true];
// alert(booleanArray);



// **Question#6**

// var mixedArray = ["apple", 1, true, "banana", 2, false];
// alert(mixedArray);


// **Question#7**

// var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"];
// document.write("<h1>Qualifications:</h1><br>");
// for (var i = 0; i < qualifications.length; i++) {
//     document.write((i + 1) + ") " + qualifications[i] + "<br>");
// }



// **Question#8**

// var studentNames = ["Michael", "John", "Tony"];
// var studentScores = [320, 230, 480];
// var totalMarks = 500;

// for (var i = 0; i < studentNames.length; i++) {
//     var percentage = (studentScores[i] / totalMarks) * 100;
//     document.write("<h2>Score of " + studentNames[i] + " is " + studentScores[i] + ". Percentage: " + percentage + "%</h2><br>");
// }


// **Question#9**

// var colorNames = ["Red", "Green", "Blue"];
// // a. Add a color to the beginning
// var colorToAddBeginning = prompt("Enter a color to add to the beginning:");
// colorNames.unshift(colorToAddBeginning);
// document.write("<h2>After adding " + colorToAddBeginning + " to the beginning:</h2>");
// document.write(colorNames + "<br><br>");

// b. Add a color to the end
// var colorToAddEnd = prompt("Enter a color to add to the end:");
// colorNames.push(colorToAddEnd);
// document.write("<h2>After adding " + colorToAddEnd + " to the end:</h2>");
// document.write(colorNames + "<br><br>");

// c. Add a color at a specific index
// var colorToAddIndex = prompt("Enter a color to add at a specific index:");
// var index = prompt("Enter the index at which to add the color:");
// colorNames.splice(index, 0, colorToAddIndex);
// document.write("<h2>After adding " + colorToAddIndex + " at index " + index + ":</h2>");
// document.write(colorNames + "<br><br>");

// d. Remove the first color
// colorNames.shift();
// document.write("<h2>After removing the first color:</h2>");
// document.write(colorNames + "<br><br>");

// e. Remove the last color
// colorNames.pop();
// document.write("<h2>After removing the last color:</h2>");
// document.write(colorNames + "<br><br>");

//f. Add a color from a specific index
// var indexToAdd = prompt("Enter the index of the color to add:");
// var colorTo = prompt("Enter the color to add:");
// colorNames.splice(indexToAdd, 0, colorTo);
// document.write("<h2>After adding the color at index " + indexToAdd + ":</h2>");
// document.write(colorNames + "<br><br>");

// g. Remove a color from a specific index
// var indexToRemove = prompt("Enter the index of the color to remove:");
// colorNames.splice(indexToRemove, 1);
// document.write("<h2>After removing the color at index " + indexToRemove + ":</h2>");
// document.write(colorNames + "<br><br>");


// **Question#10**

// var studentScores = [320, 230, 480, 120];
// studentScores.sort();
// document.write("<h2>Scores of Students: " + studentScores + "</h2><br>");
// document.write("<h2>Ordered Scores of Students: " + studentScores + "</h2><br>");


// **Question#11**

// var cities = ["Quetta", "Lahore", "Islamabad", "Karachi", "Peshawar"];
// var selectedCities = cities.slice(2, 4);
// document.write("<h2>Cities List:</h2>");
// document.write(cities + "<br><br>");
// document.write("<h2>Selected Cities List:</h2>");
// document.write(selectedCities + "<br>");


// **Question#12**

// var arr = ["This", "is", "my", "Tom"];
// var str = arr.join(" ");
// document.write("<h1>Array:</h1>");
// document.write("<h3>" + arr + "</h3><br><br>");
// document.write("<h1>String:</h1>");
// document.write("<h3>" + str + "</h3><br>");



// **Question#13**

//FIFO (First In First Out)

// var devices = ["Keyboard", "Mouse", "Printer", "Monitor"];
// document.write("<h2>Devices:</h2>");
// document.write(devices + "<br><br>");
// for (var i = 0; i < devices.length; i++) {
//     document.write("<h3>Out:</h3>");
//     document.write(devices[i] + "<br>");
// }


// **Question#14**

//LIFO (Last In First Out)

// var devices = ["Keyboard", "Mouse", "Printer", "Monitor"];
// document.write("<h2>Devices:</h2>");
// document.write(devices + "<br><br>");
// for (var i = devices.length - 1; i >= 0; i--) {
//     document.write("<h3>Out:</h3>");
//     document.write(devices[i] + "<br>");
// }


// **Question#15**

// var phoneManufacturers = [ "phoneManufacturers","Realmea", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// document.write("<select style='padding: 10px; font-size: 16px; margin: 90px auto; display: flex;'>");
// for (var i = 0; i < phoneManufacturers.length; i++) {
//     document.write("<option>" + phoneManufacturers[i] + "</option>");
// }
// document.write("</select>");





// ************Chapter 17-20************

// **Question#1**

//  var multiArray = [[]];


// **Question#2**

// var multiArray = new Array(3);
// multiArray[0] = new Array(0,1,2,3)
// multiArray[1] = new Array(1,0,1,2)
// multiArray[2] = new Array(2,1,0,1)
// document.write(multiArray[0].join(" ") + "<br />")
// document.write(multiArray[1].join(" ") + "<br />")
// document.write(multiArray[2].join(" ") + "<br />")


// **Question#3**

// for(var i = 1 ; i<=10 ; i++){
//         document.write(i + "<br />")
// }


// **Question#4**

//  var number = +prompt("Enter a number to show its multiplication table");
//  var length = +prompt("Enter the length of the table");

// document.write("<h1>Multiplication Table of " + number + "</h1>");
// document.write("<h1>Length of the Table is " + length + "</h1>");
// for (var i = 1; i <=length; i++) {
//     document.write(number + " x " + i + " = " + (number * i) + "<br>");
// }


// **Question#5**

// let fruit = ["Mango", "graps", "pineapple", "banana", "apple"]

//  for(var value of fruit){
//         document.write(value + "<br />" )
// }
// for(var prop in fruit){
//         document.write(`Element at index ${prop} is ${fruit[prop]} <br/>`
//         )
// }


// **Question#6**

// var Counting = ["1,2,3,4,5,6,7,8,9,10,11,12,13,14,15"];
// var Reversecounting = ["10,9,8,7,6,5,4,3,2,1"];
// var Even = ["0,2,4,6,8,10,12,14"];
// var Odd = ["1,3,5,7,9,11,13,15"];
// var Series = ["2k,4k,6k,8k,10k,12k,14k,16k,18k,20k"];

// document.write("Counting"+Counting + "<br>");
// document.write("Reversecounting"+ Reversecounting + "<br>");
// document.write("Even"+Even + "<br>");
// document.write("Odd"+Odd + "<br>");
// document.write("Series"+Series + "<br>");


// **Question#7**

// var A = ["bread", "jem jelly", "biscuits", "snacks", "cake"];

// var search = prompt("Welcome to Memons Bakers!").toLowerCase()
// var match = "false"
// for (var i = 0; i < A.length; i++) {
//         if (search === A[i]) {
//                 var match = "true"
//                 alert( search + " is Available at index " + i + " in our bakery")
//         }

//  else
//         alert(`We are sorry. ${search} is  not Available  in our Bakery`)
// }



// **Question#8**


// let A = [24, 53, 78, 91, 12];
// let largest = Math.max(...A);

// document.write("The largest number is: " + largest);



// **Question#9**

// let A = [24, 53, 78, 91, 12];
// let largest = Math.min(...A);

// document.write("The Smallest number is: " + largest);



// **Question#10**

//  var number = ("5")

// for (var i = 1; i<=20; i++) {
//     document.write( (number *  i) + " ");
// }


// ************Chapter 21-25************


// **Question#1**

// var firstname = prompt("Enter your first name").toUpperCase();
// var lastname = prompt("Enter your last name").toUpperCase();

// alert(firstname + " " + lastname + " Welcome to our web");


// **Question#2**

// var mobile = prompt("Enter your favorite mobile").toUpperCase();
// var stringlength = (mobile.length)

// document.write("My favorite mobile is: " + mobile + "<br>");
// document.write("Length of string is: " + stringlength)




// **Question#3**

// var word = "Pakistani";
// var index = word.indexOf("n");
// document.write("string: " + word + "<br>" + "index of 'n': " + index )


// **Question#4**

// var word = "Hello World!";
// var index = word.lastIndexOf("l");
// document.write("string: " + word + "<br>" + "index of 'l': " + index )


// **Question#5**

// var word = "Pakistani";
// document.write("string: " + word + "<br>" + "Character at index 3: " + word [3])



// **Question#6**

// var firstname = prompt("Enter your first name").toUpperCase();
// var lastname = prompt("Enter your last name").toUpperCase();

// alert(firstname.concat( lastname, " Welcome to our website"));



// **Question#7**


// var word = "Hyderabad";

// document.write("City: " , word , "<br>")

// document.write("After replacement: " , word.replace("Hyder" , "Islam"))



// **Question#8**

// var word = "Ali and Sami are best friends. They play cricket and football together ";

// document.write("Var message- " + word , "<br>")

// document.write("After replacement: " , word.replaceAll("and" , "&"))


// **Question#9**

// var value = "472"
// document.write( "Value: " , value , "<br>" , "Type: " , typeof value , "<br>")

// var value = +"472"
// document.write( "Value: " , value , "<br>" , "Type: " , typeof value)


// **Question#10**

// var word = "Peanuts";
// var upper = word.toUpperCase();

// document.write("User input: " , word , "<br>")
// document.write("User input: " , upper)



// **Question#11**

// var userInput = prompt("Enter any word:");

// var titleCase = userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();

// document.write("User input: " + userInput + "<br>" + "Title case: " + titleCase);



// **Question#12**

// var num = 35.36
// var convert = num.toString( ).replace("." , "");
// document.write("Number: " , num + "<br>")
// document.write("Result: " , convert)


// **Question#13**

// var user = prompt("Enter userName:")
// for(var i=0;i<user.length;i++){
//         if(user[i].charCodeAt("!") === 33 || user[i].charCodeAt(",") === 44 || user[i].charCodeAt(".") === 46 || user[i].charCodeAt("@") === 64 ){
//                 alert("Please enter a valid userName")
//         }
// }
// alert(user)



// **Question#14**

// var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// var userInput = prompt("Welcome! What do you want to order?").toLowerCase();

// if (A.includes(userInput)) {
//     alert(userInput + " is available at index " + A.indexOf(userInput) + " in our bakery.");
// } else {
//     alert("We are sorry, " + userInput + " is not available in our bakery.");
// }



// **Question#15**

// let password;
// let isValid = false;

// while (!isValid) {
//     password = prompt("Enter your password:\n(At least 6 characters, must contain letters and numbers, and cannot start with a number)");

//     let hasAlphabet = false;
//     let hasDigit = false;

//     if (password.length >= 6) {

//         if (isNaN(password.charAt(0))) {

//             for (let i = 0; i < password.length; i++) {
//                 let ch = password.charAt(i);
//                 if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')) {
//                     hasAlphabet = true;
//                 }
//                 if (ch >= '0' && ch <= '9') {
//                     hasDigit = true;
//                 }
//             }

//             if (hasAlphabet && hasDigit) {
//                 isValid = true;
//                 alert("Password accepted!");
//             }
//         }
//     }

//     if (!isValid) {
//         alert("Invalid password. Try again.");
//     }
// }



// **Question#16**

//  var str = "University of Karachi";
//         var letters = str.split("");

//         for (let i = 0; i < letters.length; i++) {
//             document.write(letters[i] + "<br>");
//         }



// **Question#17**

// var userInput = prompt("Enter a word..")
// var lastcharacter = userInput.charAt(userInput.length - 1);

// document.write("User Input: " , userInput , "<br>" , "Last character of input: " , lastcharacter)



// **Question#18**

// var str = "The quick brown fox jumps over the lazy dog";

// var lowerStr = str.toLowerCase();

// var words = lowerStr.split(" ");

// var count = 0;

// for (let i = 0; i < words.length; i++) {
//     if (words[i] === "the") {
//         count++;
//     }
// }

// document.write("Text: " + str , "<br>");
// document.write("There are " + count + " occurrence's of 'the'");






// ************Chapter 26-30************



// **Question#1**

// var user = prompt("Enter a positive integer in decimal");

// document.write("Number: " , user , "<br>" , "Round off value: " , Math.round(user) , "<br>" , "ceil value: " , Math.ceil(user) , "<br>" , "floor value: " , Math.floor(user))



// **Question#2**


// var user = prompt("Enter a nagative integer in decimal");

// document.write("Number: " , user , "<br>" , "Round off value: " , Math.round(user) , "<br>" , "ceil value: " , Math.ceil(user) , "<br>" , "floor value: " , Math.floor(user))




// **Question#3**

// let input = prompt("Enter a number:");

// let number = Number(input);

// let absoluteValue = Math.abs(number);

// document.write("The absolute value of " + number + " is: "  + absoluteValue);



// **Question#4**

// document.write("Random Dice Value: " + Math.round( Math.random() *6) + "<br>" + "<br>")

// document.write("Random Dice Value: " + Math.round( Math.random() *6))



// **Question#5**

// document.write(Math.floor( Math.random() *2) + 1 + "<br>" + "Random Coin Value: Heads " +  "<br>")

// document.write(Math.floor( Math.random() *2) + 1 + "<br>" + "Random Coin Value: Tails " +  "<br>")



// **Question#6**

// document.write( "Random Number Between 1 - 100:  " + Math.round( Math.random() *100)  +  "<br>")



// **Question#7**

// var weight = parseFloat(prompt("Enter Your Weight in kgs.."))

// document.write ("The Weight of the user is " , weight , " Kilograms")



// **Question#8**

// var secret = +"6"

// var user = +prompt("Guess and Enter the secret number between 1-10")

// if(user === secret){
//     alert("Wohooo! you guessed the correct Number...")
// }else{
//     alert("Try Again!!")
// }




// ************Chapter 31-34************



// **Question#1**

// var date = new Date();

// document.write(date + "<br>")


// **Question#2**

// var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// var date = new Date();
// var currentMonth = month[date.getMonth()];
// document.write("Current Month: " + currentMonth + "<br>");



// **Question#3**

// var day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// var date = new Date();
// var currentDay = day[date.getDay()];
// document.write("Today is: " + currentDay + "<br>");


// **Question#4**

// var message;

// var day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var date = new Date();
// var currentDay = day[date.getDay()];
// if (currentDay === "Sun" || currentDay === "Sat") {
//     message = "It's Fun day";
//     alert(message);
// }   else {
//     message = "It's a working day";
//     alert(message);
// }


// **Question#5**

// var date = new Date();
// var currentDate = date.getDate();
// if (currentDate < 16) {
//     document.write("First fifteen days of the month" + "<br>");
// }
// else {
//     document.write("Last days of the month" + "<br>");
// }


// **Question#6**

// var date = new Date();
// var milliseconds = date.getTime();
// var minutes = milliseconds / (1000 * 60);
// document.write("Current Date: " + date + "<br>");
// document.write("Elapsed milliseconds since January 1, 1970: " + milliseconds + "<br>");
// document.write("Elapsed minutes since January 1, 1970: " + minutes + "<br>");


// **Question#7**

// var date = new Date();
// var hours = date.getHours();
// if (hours < 12) {
//     alert("It's AM");
// } else {
//     alert("It's PM");
// }


// **Question#8**

// var laterDate = new Date("December 31, 2020");
// document.write("Later Date: " + laterDate + "<br>");


// **Question#9**

// var ramadanDate = new Date("June 18, 2015");
// var currentDate = new Date();
// var timeDiff = currentDate - ramadanDate;
// var daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
// document.write(daysDiff + " days have passed since 1st Ramadan, 2015" + "<br>");


// **Question#10**

// var referenceDate = new Date("December 5, 2015");
// var currentDate = new Date();
// var timeDiff = currentDate - referenceDate;
// var secondsDiff = Math.floor(timeDiff / 1000);
// document.write("On reference date " + referenceDate + ",<br>" + secondsDiff + " seconds had passed since beginning of 2015" + "<br>");


// **Question#11**

// var currentDate = new Date();
// var currenthours = currentDate.getHours();
// currentDate.setHours(currenthours - 1);
// document.write("Current date: " + new Date() + "<br>");
// document.write("1 hour ago, it was " + currentDate + "<br>");


// **Question#12**

// var currentDate = new Date();
// var currentyear = currentDate.getFullYear();
// currentDate.setFullYear(currentyear - 100);
// alert("Current date: " + new Date());
// document.write("100 years back, it was " + currentDate + "<br>");



// **Question#13**

// var age = +prompt("Enter your age..")

// var date = new Date();
// var currentyear = date.getFullYear();
// var birthyear = currentyear - age;
// document.write("Your age is " + age + "<br>" + "Your birth year is " + birthyear + "<br>");



// **Question#14**

// document.write("<h1>K-Electric Bill</h1>" + "<br>");

// // Asking customer name
// var costname = prompt("Enter your name..");
// var upper = costname[0].toUpperCase() + costname.slice(1).toLowerCase();
// document.write("Customer Name: " + upper + "<br>");

// // Getting current month
// var currentdate = new Date();
// var month = currentdate.getMonth(); // Months start from 0
// var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// document.write("Month: " + months[month] + "<br>");

// // Units and charges
// var units = 410;
// document.write("Number of units: " + units + "<br>");

// var chargesperunit = 16;
// document.write("Charges per unit: " + chargesperunit + "<br><br>");

// // Calculations
// var netamount = units * chargesperunit;
// document.write("Net Amount Payable (within Due Date): " + netamount + "<br>");

// var latepayment = 350;
// document.write("Late Payment Surcharge: " + latepayment + "<br>");

// var lateamount = netamount + latepayment;
// document.write("Gross Amount Payable (after Due Date): " + lateamount + "<br>");



// ************Chapter 35-38************



// **Question#1**

// function date(){
//     var date = new Date();
//     document.write(date)
// }
// date ()


// **Question#2**

// function greet(){
//     var firstname = prompt("Enter your first name").toUpperCase();
//     var lastname = prompt("Enter your last name").toUpperCase();
//     document.write("Welcome " + firstname + " " + lastname + " to our website")
// }
// greet()



// **Question#3**

// function add(){
//     var num1 = +prompt("Enter first number");
//     var num2 = +prompt("Enter second number");
//     var sum = num1 + num2;
//     alert("The sum is: " + sum);
// }
// add()



// **Question#4**

// function calc(){
//     var num1 = +prompt("Enter first number");
//     var operator = prompt("Enter operator (+, -, *, /, %)");
//     var num2 = +prompt("Enter second number");
//     var result;
//     if(operator === "+"){
//         result = num1 + num2;
//         alert("The result is: " + result);
//     } else if(operator === "-"){
//         result = num1 - num2;
//         alert("The result is: " + result);
//     } else if(operator === "*"){
//         result = num1 * num2;
//         alert("The result is: " + result);
//     } else if(operator === "/"){
//         result = num1 / num2;
//         alert("The result is: " + result);
//     } else if(operator === "%"){
//         result = num1 % num2;
//         alert("The result is: " + result);
//     } else{
//         alert("Invalid operator");
//         return;
//     }
// }
// calc()


// **Question#5**

// function square(){
//     var num = +prompt("Enter a number for squaring");
//     var square = num * num;
//     alert("The square of " + num + " is: " + square);
// }
// square()


// **Question#6**

// function factorial(){
//     var num = +prompt("Enter a number to find its factorial");
//     var fact = 1;
//     for(var i = 1; i<= num; i++){
//         fact = fact*i;

//     }
//     alert("The factorial of " + num + " is: " + fact);
// }
// factorial()



// **Question#7**

// function count(){
//     var start = +prompt("Enter starting number");
//     var end = +prompt("Enter end number");

//     for (var i = start; i<=end; i++){
//         document.write(i + "<br>")
//     }
// }
// count()

// **Question#8**

// function hypotenuse(base, perpendicular) {
//     function square(x) { return x * x; }
//     return Math.sqrt(square(base) + square(perpendicular));
// }
// var base = parseInt(prompt("Enter base:"));
// var perpendicular = parseInt(prompt("Enter perpendicular:"));

// var result = parseInt(hypotenuse(base, perpendicular));
// alert("The Hypotenuse is: " + result);


// **Question#9**

// function area(width, height) {
//     return width * height;
// }

// // i. Passing arguments as values
// console.log("Area (values):", area(5, 10));  

// // ii. Passing arguments as variables
// let w = 7;
// let h = 4;
// console.log("Area (variables):", area(w, h));



// **Question#10**

// function palindrome(str) {
//     var cleaned = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
//     var reversed = cleaned.split('').reverse().join('');
//     return cleaned === reversed;
// }
// var userInput = prompt("Enter a word or phrase:");
// if (palindrome(userInput)) {
//     alert(userInput + " is a palindrome.");
// } else {
//     alert(userInput + " is not a palindrome.");
// }



// **Question#11**

// function upper(str) {
//     var words = str.toLowerCase().split(" ");
//     for (var i = 0; i < words.length; i++) {
//         words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
//     }
//     return words.join(" ");
// }
// var userInput = prompt("Enter a sentence:");
// var result = upper(userInput);
// document.write("Original String: " + userInput + "<br>");
// document.write("Upper Case: " + result + "<br>");



// **Question#12**

// function longestWord(str) {
//     var words = str.match (/\w[a-z]{0,}/gi);
//     var longest = "";
//     for (var i = 0; i < words.length; i++) {
//         if (words[i].length > longest.length) {
//             longest = words[i];
//         }
//     }
//     return longest;
// }
// var userInput = prompt("Enter a sentence:");
// var result = longestWord(userInput);
// document.write("Original String: " + userInput + "<br>");
// document.write("Longest Word: " + result + "<br>");



// **Question#13**

// function countLetter(str, letter) {
//     var count = 0;
//     for (var i = 0; i < str.length; i++) {
//         if (str.charAt(i).toLowerCase() === letter.toLowerCase()) {
//             count++;
//         }
//     }
//     return count;
// }
// var userInput = prompt("Enter a sentence:");
// var letter = prompt("Enter a letter to count its occurrences:");
// var result = countLetter(userInput, letter);
// document.write("Original String: " + userInput + "<br>");
// document.write("Letter to count: " + letter + "<br>");
// document.write("Number of occurrences of letter '" + letter + "': " + result + "<br>");



// **Question#14**

// function calcCircumference(radius) {
//     let circumference = 2 * Math.PI * radius;
//     let area = Math.PI * radius * radius;
//     alert("The area is " + area.toFixed(2) + "\n" + "The circumference is " + circumference.toFixed(2));
// }

// let radius = parseFloat(prompt("Enter the radius of the circle:"));

// calcCircumference(radius);




// ************Chapter 39-42************

// **Question#1**

// function power(a, b) {
//     let result = 1;

//     for (let i = 1; i <= b; i++) {
//         result = result * a;
//     }

//     return result;
// }

// alert(power(2, 3));  
// alert(power(5, 2));  
// alert(power(7, 0));  



// **Question#2**

// function LeapYear(year) {
//     switch (true) {
//         case (year % 400 === 0):
//             return true;
//         case (year % 100 === 0):
//             return false;
//         case (year % 4 === 0):
//             return true;
//         default:
//             return false;
//     }
// }

// let year = parseInt(prompt("Enter a year:"));

// if (LeapYear(year)) {
//     alert(year + " is a leap year.");
// } else {
//     alert(year + " is not a leap year.");
// }


// **Question#3**
function removeVowels(sentence) {
    let result = "";
    let vowels = "aeiouAEIOU";

    for (let i = 0; i < sentence.length; i++) {
        if (!vowels.includes(sentence[i])) {
            result += sentence[i]; // add non-vowel characters
        }
    }

    return result;
}

// Example usage
let sentence = prompt("Enter a sentence (max 25 characters):");
if (sentence.length > 25) {
    alert("Sentence is too long! Please enter 25 characters or less.");
} else {
    let noVowels = removeVowels(sentence);
    alert("Sentence without vowels: " + noVowels);
}




// **Question#4**

// function calculateAverage(subject1, subject2, subject3) {
//     return (subject1 + subject2 + subject3) / 3;
// }

// function calculatePercentage(subject1 , subject2 , subject3) {
//     let totalMarks = 300; 
//     let obtainedMarks = subject1 + subject2 + subject3;
//     return (obtainedMarks / totalMarks) * 100;
// }

// function mainFunction() {
//     let subject1 = parseFloat(prompt("Enter marks of subject 1:"));
//     let subject2 = parseFloat(prompt("Enter marks of subject 2:"));
//     let subject3 = parseFloat(prompt("Enter marks of subject 3:"));

//     let avg = parseInt(calculateAverage(subject1 , subject2 , subject3));
//     let perc = calculatePercentage(subject1 , subject2 , subject3);

//     alert("Average marks: " + avg + "\nPercentage: " + perc.toFixed(2) + "%");
// }

// mainFunction();



// **Question#5**
function countDoubleVowels(text) {
    let count = 0;
    text = text.toLowerCase(); // convert to lowercase for simplicity

    for (let i = 0; i < text.length - 1; i++) {
        let first = text[i];
        let second = text[i + 1];

        // check if both characters are vowels using switch
        switch (true) {
            case (first === 'a' || first === 'e' || first === 'i' || first === 'o' || first === 'u'):
                switch (true) {
                    case (second === 'a' || second === 'e' || second === 'i' || second === 'o' || second === 'u'):
                        count++;
                        break;
                }
                break;
        }
    }

    return count;
}

// Example usage
let sentence = prompt("Enter a line of text:");
let doubleVowels = countDoubleVowels(sentence);
alert("Number of occurrences of two vowels in succession: " + doubleVowels);




// **Question#6**

// function removeVowels(sentence) {
//     var result = "";
//     var vowels = "aeiouAEIOU";

//     for (let i = 0; i < sentence.length; i++) {
//         if (!vowels.includes(sentence[i])) {
//             result += sentence[i]; // add non-vowel characters
//         }
//     }

//     return result;
// }

// // Example usage
// var sentence = prompt("Enter a sentence (max 25 characters):");
// if (sentence.length > 25) {
//     alert("Sentence is too long! Please enter 25 characters or less.");
// } else {
//     var noVowels = removeVowels(sentence);
//     alert("Sentence without vowels: " + noVowels);
// }



// **Question#7**

// function countDoubleVowels(text) {
//     let count = 0;
//     text = text.toLowerCase(); 

//     for (let i = 0; i < text.length - 1; i++) {
//         let first = text[i];
//         let second = text[i + 1];

//         switch (true) {
//             case (first === 'a' || first === 'e' || first === 'i' || first === 'o' || first === 'u'):
//                 switch (true) {
//                     case (second === 'a' || second === 'e' || second === 'i' || second === 'o' || second === 'u'):
//                         count++;
//                         break;
//                 }
//                 break;
//         }
//     }

//     return count;
// }

// let sentence = prompt("Enter a line of text:");
// let doubleVowels = countDoubleVowels(sentence);
// alert("Number of occurrences of two vowels in succession: " + doubleVowels);



// **Question#8**

// function tometers(km) {
//     return km * 1000;
// }


// function tofeets(km) {
//     return km * 3280;
// }


// function toinches(km) {
//     return km * 39370.1;
// }


// function tocentimeters(km) {
//     return km * 100000;
// }

// var km = prompt("Enter the distance B/W to cities in km: ");
// console.log("The distane between two cities are: " + km );
// console.log("Distane in meters: " + tometers(km) );
// console.log("Distane in feets: " + tofeets(km) );
// console.log("Distane in inches: " + toinches(km) );
// console.log("Distane in centimeters: " + tocentimeters(km) );



// **Question#9**

// function calovertimepay(workedhours) {
//     const normalhours = 40;
//     const overtimerate = 12;
//     var overtimepay = 0;

//     if (workedhours > normalhours) {
//         var overtimehours = workedhours - normalhours;  
//        overtimepay = overtimehours * overtimerate
//     }
//     return overtimepay
// }
// var workedhours = 45
// var overtimepay = calovertimepay(workedhours);

// alert("Worked Hours: " + workedhours);
// alert("Overtime pay: " + overtimepay +  " Rs")


// **Question#10**

// var amount = parseInt(prompt("Enter amoount tp withdraw: "));

// var fivethousands = 0 , thousands = 0 , fivehundreds = 0 , hundreds = 0 , fifties = 0 , tens = 0;

// fivethousands = Math.floor(amount/5000)
// amount = amount % 5000;

// thousands = Math.floor(amount/1000)
// amount = amount % 1000;

// fivehundreds = Math.floor(amount/500)
// amount = amount % 500;

// hundreds = Math.floor(amount/100)
// amount = amount % 100;

// fifties = Math.floor(amount/50)
// amount = amount % 50;

// tens = Math.floor(amount/10)
// amount = amount % 10;

// var result = " You will have "

// var remaining = "<br>" + "The Remaining amount that can not be withdrawn: "

// if (fivethousands > 0) result += fivethousands + " Fivethousands notes "

// if (thousands > 0)  result += thousands + " thousands notes " 

// if (fivehundreds > 0) result += fivehundreds + " fivehundreds notes "

// if (hundreds > 0) result += hundreds + " hundreds notes "
    
// if (fifties > 0) result += fifties + " fifties notes "

// if (tens > 0) result += tens + " tens notes "

// if  (amount > 0) remaining += amount 

// document.write(result)

// document.write(remaining)
