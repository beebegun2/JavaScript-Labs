// create a variable called speedLimit and another called mySpeed
// set their values to numbers between 1 and 100
var speedLimit = 65;
var mySpeed = 65;

// using a conditional, determine if mySpeed is greater than the speedLimit
if (mySpeed > speedLimit){
    // if true, print "Slow Down! Mom is mad!" to the console
    console.log ('Slow Down! Mom is mad!')
} else if (mySpeed = speedLimit){
    // if mySpeed is equal to the speedLimit, print "Everyone is happy!" to the console
    console.log ('Everyone is happy!');
     
}else {
    // if mySpeed is less than the speedLimit, print "Speed up! Dad is mad!"
    console.log ('Speed up! Dad is mad!');
}


// create two variables, one named alarmSet, the other openDoor
// set them to a boolean value
var alarmSet = true;
var openDoor = false;

// using a conditional, determine if alarm is set. 
if (alarmSet && openDoor){
    // if alarm is set and door is set to open, print "Sound Alarm!" to the console
    console.log ('Sound Alarm!');
}else {
    // otherwise, print "Everything is fine." to the console.
    console.log ('Everything is fine.');
}


// create two variables, username and password
var username = "beebegun2";
var password = "12345";
// create a conditional, if the username is "Tommy123" and the password is "12345"
// or the username is "Timmy456" and the password is "6789", print "Admin Login Successful" to the console
// otherwise, print "Admin Access Denied"


if((username === "beebegun2" && password === "12345") || (username === "Shannon" && "password" === "6789")){
console.log ('Admin Login Successful');
}
else {
    console.log ('Admin Access Denied')
} 

// write code that will set the value of studentClass based on studentGrade
// studentGrade will be K-12
// K-6 will be Elementary
// 7-8 will be Middle
// 9 will be Freshman, 10 Sophomore, 11 Junior, 12 Senior
// Anything other than these values will return "Error" to the console
var studentGrade = 9;
var studentClass;

switch(studentGrade){
    case 'K':
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        studentClass = "Elementary";
        break;
    case 7:
    case 8:
        studentClass = "Middle";
        break;
    case 9:
        studentClass = "Freshman";
        break;
    case 10:
        studentClass = "Sophmore";
        break;
    case 11:
        studentClass = "Junior";
        break;
    case 12:
        studentClass = "Senior";
        break;
    default:
        console.log("Error");
}
console.log(studentClass)


// write a for loop that will iterate backwards from 10 to -10
for(var i = 10; i >= -10; i--){
    console.log(i);
}


// write a do/while loop that prints 1 through 50
var iterator = 1;
do {
    console.log(iterator);
    iterator++;
//always start with the while
}while(iterator <= 50);


// edit the previous do/while loop so that it prints the remainder when the loop number is divided by 4

do {
    console.log(iterator % 4);
    iterator++;
} while (iterator <= 50);


// Someone messed up the following for loop
// fix the following infinite loop, uncomment to test
/* 
    for(let i = 1; i < 10; i++){
        console.log(i);
    } 
*/
//before uncommenting - make sure loop is correct or it will go forever and "break"
for(let i = 1; i < 10; i++){
    console.log(i);
} 

for(let i = 11; i < 100; i++){
    console.log(i);
} 

for(let i = 110; i > 10; i--){
    console.log(i);
} 



// assign a number and if equal or less than zero show true otherwise show false
var num = 3

if(num <=0){
    console.log ('true');
}
    else {
        console.log ('false');
    }

/* mastery quiz - question 1
 Write a switch statement to check the value of monthNumber and then when the match is made, print out that month in a string (i.e. "July").
*/
For example, if the monthNumber is 5, the console should print out "May". If the number is not 1 through 12, print out "Invalid Month".

var fs = require("fs");
var input = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");
var monthNumber = parseInt(input[0]);


//Write your code here
var monthNumber;
var month;

switch(monthNumber){
    case 1:
        month = "January";
        break;
    case 2:
        month = "February";
        break;
    case 3:
        month = "March";
        break;
    case 4:
        month = "April";
        break;
    case 5:
        month = "May";
        break;
    case 6:
        month = "June";
        break;
    case 7:
        month = "July";
        break;
    case 8:
        month = "August";
        break;
    case 9:
        month = "September";
        break;
    case 10:
        month = "October";
        break;
    case 11:
        month = "November";
        break;
    case 12:
        month = "December";
        break;
    default:
        console.log("Invalid Month");
}
console.log(month)

/* mastery quiz  number 2
Create a nested if statement (the second if statement will only run if the first one evaluates to true) that checks to see if num1 is greater than or equal to num2.
If true then check to see if num3 is greater than or equal to num4. If both conditions are true print "Both statements are true." If the first condition is true but the second isn't, print "The first statement is true, but the second is not."
After the outer if statement, print "Program ended."
*/

// my answer
var fs = require("fs");
 var input = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");
 var num1 = parseInt(input[0]);
 var num2 = parseInt(input[1]);
 var num3 = parseInt(input[2]);
 var num4 = parseInt(input[3]);
 
   //write your code here
 
 if (num1 >= num2){
    if(num3 >= num4){
     console.log('Both statements are true.');
} else {
    console.log ("The first statement is true, but the second is not.");
}
}
console.log("Program ended.");
 
// instructor answer
var fs = require("fs");
 var input = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");
 var num1 = parseInt(input[0]);
 var num2 = parseInt(input[1]);
 var num3 = parseInt(input[2]);
 var num4 = parseInt(input[3]);
 
 
 
 //write your code here
 if ( num1 >= num2 ) {
     if ( num3 >= num4 ) {
         console.log("Both statements are true.");
     } else {
         console.log("The first statement is true, but the second is not.");
     }
 }
 console.log("Program ended.");

 /* question 3 - 
 Write a series of IF/ELSE IF statements that check the numberGrade and assign letterGrade to a string of the corresponding letter grade. Print the letter grade to the console.

A: 90+
B: 80-89
C: 70-79
D: 60-69
F: 0-59

Make sure to use a capital letter for the grade.
*/

// - my answer - correct also
var fs = require("fs");
var input = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");
var numberGrade = parseInt(input[0]);
var letterGrade;

//write your code here
if (numberGrade >= '90'){
    console.log("A");
} else if (numberGrade > '80' && numberGrade < '89'){
    console.log("B");
} else if (numberGrade > '70' && numberGrade < '79'){
    console.log("C");
} else if (numberGrade > '60' && numberGrade < '69'){
    console.log("D");
}else if (numberGrade <='59'){
    console.log("F");



    //mastery quiz question 3 - instructor code
    var fs = require("fs");
    var input = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");
    var numberGrade = parseInt(input[0]);
    var letterGrade;
    
    //write your code here
     if(numberGrade >= 90){
         letterGrade = 'A';
     } else if(numberGrade >= 80){
         letterGrade = 'B';
     } else if(numberGrade >= 70){
         letterGrade = 'C';
     } else if(numberGrade >= 60){
         letterGrade = 'D';
     } else {
         letterGrade = 'F';
     }
     
     console.log(letterGrade);


/*question 4 -Write an if statement that compares num1 to num2 and prints the larger of the two. If they are equal, print "Num1 is equal to Num2".*/

//my answer 
var fs = require("fs");
var input = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");
var num1 = parseInt(input[0]);
var num2 = parseInt(input[1]);

//write your code here
if (num1 > num2){
    console.log(num1);
}
else if(num1 < num2){
        console.log(num2);
} 
else {
        console.log("Num1 is equal to Num2");
}

//instructor answer
var fs = require("fs");
var input = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");
var num1 = parseInt(input[0]);
var num2 = parseInt(input[1]);

//write your code here
if(num1 == num2){
 console.log("Num1 is equal to Num2");
}
else if(num1 < num2){
 console.log(num2)
} else {
 console.log(num1)
}

/* Question 5 Write an IF statement that checks to see if there is enough money to cover the cost of a soda. If so, print "I can buy a soda!".
If not, print "I need to earn some more money!"

my answer */
var fs = require("fs");
var input = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");
var money = parseInt(input[0]);
var costOfSoda = parseInt(input[1]);

//write your code here
if (costOfSoda <= money){
    console.log("I can buy a soda!")
}   else {
    console.log("I need to earn some more money!");
}

//instructors response
var fs = require("fs");
var input = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");
var money = parseInt(input[0]);
var costOfSoda = parseInt(input[1]);

//write your code here
if(money >= costOfSoda){
    console.log("I can buy a soda!");
} else {
    console.log("I need to earn some more money!")
}

/*question 6 - Write an if statement that compares num1 to num2. If they are equal, print "Num1 is equal to Num2." 

my answer */
var fs = require("fs");
var input = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");
var num1 = parseInt(input[0]);
var num2 = parseInt(input[1]);

if (num1 == num2){
    console.log("Num1 is equal to Num2.");
}else {}

//instructor answer
var fs = require("fs");
var input = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");
var num1 = parseInt(input[0]);
var num2 = parseInt(input[1]);

if(num1 == num2){
    console.log("Num1 is equal to Num2.")
}

/*question 7 - Write an IF/ELSE statement that prints the smaller of the two given inputs, num1 and num2. If they are the same, print "same".
my answer */
var fs = require("fs");
var input = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");
var num1 = parseInt(input[0]);
var num2 = parseInt(input[1]);

//write your code here
if (num1 < num2){
    console.log(num1)
}else if(num1> num2){
    console.log(num2);
}else{
    console.log("same");
}

//instructor answer
var fs = require("fs");
 var input = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");
 var num1 = parseInt(input[0]);
 var num2 = parseInt(input[1]);
 
 //write your code here
 if(num1 == num2){
     console.log("same");
 }
 else if(num1 < num2){
     console.log(num1)
 } else {
     console.log(num2)
 }

 /*question - 8 - Write an IF statement that checks if the given age is greater than or equal to 16. If it is, set canDrive to true and print it's value to the console.
 my answer - 
*/
var fs = require("fs");
var input = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");
var age = parseInt(input[0]);
var canDrive = false;

//Write your code here

if ((age > 16) || (age === 16)){
  console.log(!canDrive);
}
//instructor answer

var fs = require("fs");
 var input = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");
 var age = parseInt(input[0]);
 var canDrive = false;
 
 //Write your code here
 if(age >= 16 ){
     canDrive = true;
     console.log(canDrive)
 }