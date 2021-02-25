// how to USE a function: functionName();
console.log("Whats cooking?");
console.log("Nothing good, at least yet!");

// Variables

// Defining a Variable in our programs.
var VariableNameHere;

myFirstVariable = "I like to cook.";
mySecondVariable = "What do you like?" ;

console.log(myFirstVariable);
console.log(mySecondVariable);

// The 3 most common Datatypes

// Strings
"I like to cook.";
"What do you like?";

// Number
10;
9;
20;
0;
1000000;
10.5;
-10.5;
"10"; // NOT A NUMBER, it is a String instead.

// Boolean
true;
false;


// Mathematical Operators
(10 + 10); // 20 Addition -> Sum
(5 - 10); // -5 Subtraction -> Difference
(2 / 5); // .40 Division -> Quotient
(10 * 5); // 50 Multiplication -> Product
(10 % 3) // 1 Modulus -> Modulo

// 105 % 2 == 1; IS ODD NUMBER
// 104 % 2 == 0; IS EVEN NUMBER





var myMostImportantNumber = (50 - 10);

console.log(myMostImportantNumber);

var currentCTemp = 2800;

var cToF = ( (currentCTemp * (9/5) ) + 32) ;

console.log(cToF);

// Logical Operators

// == Equal to

(100 == 100); // becomes a true
(101 == 100); // becomes a false
(101.1 == 101.2); // different values, so becomes false
("raining" == "sunny"); // becomes a false
("raining" == "raining"); // becomes a true
("Raining" == "raining"); // becomes false because of different character
(" raining" == "raining"); // false because of extra character "space"
(true == true); // true
(true == false); // false
(false == false); // true

// >, <, >=, <=   Greater Than, Lesser Than, Greater than or Equal to, Lesser than or Equal to

(100 > 40); // true
(100 < 40); // false
(-100 < 40); // true
(100 <= 100); // true
(99 <= 100); // true

// != Not Equal to
(100 != 100); // false
(100.1 != 100); // true

// Boolean Operator 
!false; // true
!true; // false

(mySecondVariable == "Different"); // False

// Boolean Operators

// || means OR 

(true || false); // true
(false || true); // true
(false || false); //false

// && AND operator

(true && false); // false
(true && true); // true

(false || true || false);
// becomes the following
(true || false); 
// then it becomes
true;

(100 == 100 || 50 == 90 || mySecondVariable == "Different");
// this becomes
true || mySecondVariable == "Different"; 
// is true because first line about 100 being the same is true, ignoring rest of line

var someData = "useful";
somedata = "not very useeful.";

// Arrays & Objects -Used for organizing data-

// Creating an array and storing them within a variable
var myFirstArray = ["useful", "not very useful."];

var daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday"
];

console.log(myFirstArray[0]);

console.log(daysOfWeek[4]);

daysOfWeek[5] = "Saturday";

daysOfWeek[3] = "Thurzdey";

console.log(daysOfWeek);

// Array Functions

// array.push() Adds the value to the end of the array.

myFirstArray.push("Spasiba!");

console.log(myFirstArray);

// array.pop() will remove the last value of an array.

myFirstArray.pop();

console.log(myFirstArray);

// array.unshift() add the value to the START of the array.

myFirstArray.unshift("Green Star"); 
console.log(myFirstArray);

// array.shift() will REMOVE the FIRST part of the array.

myFirstArray.shift("Green Star");
console.log(myFirstArray);

// array.splice() 
daysOfWeek.splice(3, 0, "Grocery Day");

console.log(daysOfWeek);

// Objects
var Applicant1 = {
    "value1" : "Danny Boy",
    "value2" : "Home", 
    "value3" : "31" 
};

console.log(Applicant1["value1"]);

//Another way of logging OBJECTS ONLY is below

console.log(Applicant1.value3);

Applicant1.job = "Accountant";
Applicant1.favFood = "Enchiladas";

console.log(Applicant1);

// Removes the key-value pair from the object
delete Applicant1.job

console.log(Applicant1.job);

console.log(typeof []);


// Conditional statements: If statement needs to be a true value in order to run/execute the code in its code block.
// Code block is anything within the curly braces usually
// code will not run if set to false, or if the condition "true" is not met.

if (Applicant1.value2 == "Home") {
    console.log("This was true");
    console.log("everything is good");
}

var numberToCheck = "0";

if (numberToCheck > 0) {
    console.log("The number is positive");
} else {
    console.log("The number is not positive");
}

if (numberToCheck == 0 ) {
    console.log("The number is zero"); 
} else {
    console.log("The number is not a zero");
}

if (numberToCheck < 0 ) {
    console.log("The number is negative");
} else {
    console.log("The number is NOT negative");
}

var personAge;

personAge = 26;

if (personAge >= 21 && personAge <= 25) {
    console.log("You can kick it");
}

else if (personAge >= 26 && personAge <=30) {
console.log("All right, thank you, enjoy");
}


else {
    console.log("Go home kid, it's not your time yet.");
}

var loopRun = true;
while (loopRun) {
    console.log("Go for a lap");

    loopRun = false;
}

var continueLoop = 0;
while (continueLoop < 10 ) {
    console.log("Go for a lap");

    continueLoop = continueLoop + 1;
}


var response = "no";


// Do While Loop


do {
    console.log("Ran single instance");

    response = prompt("Keep it going?");
} while (response == "yes");

//Missing content here 
// 
//


// FOr Loop condition, area has three parts.
// Syntax : for (counter; contdition; iterator) {}

for (var continueLoop = 0; continueLoop <10; continueLoop = continueLoop + 1) {
    console.log("This ran just the one time.");
}

for (var i=0; i <10; i++) {}

// double plus, adds a 1 to the variable.
// double minus, removes a 1 from the variable.
// i++ is the same as i = i + 1