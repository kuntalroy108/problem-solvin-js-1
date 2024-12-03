
// Problem__1

// Create a variable called carName, assign the value Volvo to it.

let carName = "Volvo" ;
console.log(carName);


// ****


// Problem__2

// On one single line, declare three variables with the following names and values:


// So What Will Be The 1st Variable Name, Then 2nd Variable Values & 
// 3rd Variable Name And Values Both! 

let firstName = "John"; 
let lastName = "Doe" 
let age = 35 ; 

let fullInfo = `${firstName} ${lastName} ${age}`;
console.log(fullInfo);


//*** 

// Problem___3

// Use the correct assignment operator that will 
// result in x being 50 (same as x = x * y). 

let x = 10;
let y = 5;
let result = x * y;
console.log(result);


//***


// Problem__4

// Use comments to describe the correct data type of the following variables:


let length = 16; // This is a Number data type  
let LastName = "Johnson"; // This is a String data type ? 

const X = {
  firstName: "John",  
  lastName: "Doe"
};    // This is a Object data type ? 



// ***


// Problem___5


// Execute the function named myFunction.
 
 function myFunction() {
  alert("Hello World!");
}

// call the function and see the output 

myFunction();




// ***


// Problem___6


// 1. Create an object called person with name = John, age = 50, Then,
//    access the object to alert("John is 50").


const person = {
    name : 'John',
    age : 50,
};

console.log(`${person['name']} is ${person['age']}` );



// ***


// Problem__7


// 1. The <button> element should do something when someone clicks on it. Try to fix it!

const button = document.getElementById('btn');

button.onclick = function(){
    alert('Thanks for clicking')
};




// ***


// Problem__8


// 1. Alert the number of items in an array, using the correct Array property: 

const cars = ["Volvo", "Jeep", "Mercedes"];
alert(cars.length);

// 2. Change the first item of Brand to "Ford".

	const Brand = ["Volvo", "Jeep", "Mercedes"]; 

    Brand[0] = 'Ford';

    console.log(Brand);




    
// ***


// Problem__9


// 1. Use the correct Math method to create a random number.

console.log(Math.random());



// 2. Use the correct Math method to return the largest number of 10 and 20.

let a = Math.max(10, 20);
console.log(a);

// 3. Use the correct Math method to get the square root of 9.

const Sqroot = Math.sqrt(9);
console.log(Sqroot);





// ***

// Problem__10


// 1. Choose the correct comparison operator to alert true, when x is greater than y.

x1 = 10;
y1 = 5;

console.log(x1 > y1); 



// 2. Choose the correct conditional (ternary) operator to alert "Too young" if age is less than 18, otherwise alert "Old enough".



let Age = 16;
let message;
message = Age <= 18 ? 'too young' : 'Old enough'; 
console.log(message);






