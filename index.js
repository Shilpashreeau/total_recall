// Example of What your JS File in VS Code should look like


/*
	Remember!!! Once you’ve completed a problem,
	COMMENT OUT YOUR WORK before moving on to the next one.
	This makes it easier to read and debug the current 
	Solution you are working on.
*/


// I. Variables & Data Types
// A. Q + A
/*How do we assign a value to a variable?
A: Using an assignment operator

How do we change the value of a variable?
A: first we have to assign the value to a variable using "var " or "let" keywords then we can change value of that variable just assigning the variable name to new value.
Example:
let a=10;
a=20;


How do we assign an existing variable to a new variable?
A: First we have to create a variable and assign to a value using var or let keywords then assign first variable to second using assignment operator.
 Example: let a=10;
    let b=a;


Remind me, what are declare, assign, and define?
A: Creating a variable in JavaScript is called "declaring" a variable. 
Storing a value to a declared variable using assignment operator is called "assign".
Creating a name for block of code is called "define"

What is pseudocoding and why should you do it?
A: Easy to understand text description that has only logic but not actual code written in any language.

What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
A:  I would take 80% to think and 20% to type.

// B. Strings
Create a variable called firstVariable
Assign it the value of the string "Hello World"
Change the value of this variable to some number
Store the value of firstVariablein a new variable called secondVariable
Change the value of secondVariableto any string.
What is the value of firstVariable?
Create a variable called yourName and set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourName so that it returns a new string with them concatenated.
ex: Hello, my name is Jean Valjean
A:
let firstVariable="Hello World";
firstVariable=100;
let secondVariable=firstVariable;
secondVariable="Welcome";
console.log(firstVariable);
let yourName="Shilpa";
let expression="Hello, my name is ";
console.log(expression+yourName);


// C. Booleans
  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a < b);
  console.log(c > d);
  console.log('Name' === 'Name');
  // FOR THE NEXT TWO, USE ONLY && OR ||
  console.log(true || false);
  console.log(false || false || false || false || false || true);
  console.log(false && false && false && false && false || true);
  console.log(false == false)
  console.log(e === 'Kevin');
  console.log(a + b == c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
  console.log(a * a == d); // note: the answer is a simple arithmetic equation, not something "weird"
  console.log(48 == '48');
 

// D. The Farm
Declare a variable animal. Set it to be either "cow" or something else
Write code that will print out "mooooo" if the it is equal to cow
Change your code so that if the variable animal is anything other than a cow, it will print "Hey! You're not a cow."
Commit
let animal="cat";
if(animal==="cow"){
console.log("moooo");
}else{
    console.log("Hey! You're not a cow.");
}



// E. Driver's Ed
//Make a variable that holds a person's age; be semantic
Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."


let age=20;
if(age>=16){
console.log("Here are the keys!");
}else {
    console.log("Sorry, you're too young.")
}


//------------------------------------------------------------------------------------

// II. Loops
// A. The Basics
/*Write a loop that will print out all the numbers from 0 to 10, inclusive
for(let i=0;i<=10;i++){
    console.log(i);
}

Write a loop that will print out all the numbers from 10 up to and including 400
for(let i=10;i<=400;i++){
    console.log(i);
}
//Write a loop that will print out every third number starting with 12 and going no higher than 4000
for(let i=12;i<4000;i+=3){
    console.log(i);
}
// B. Get even
//Print out the numbers that are within the range of 1 - 100
for(let i=2;i<=100;i+=2){
console.log(i);
}
//Adjust your code to add a message next to even numbers only that says: "<-- is an even number"
for(let i=2;i<=100;i+=2){
    console.log(`${i} is an even number`);
    }*/
// C. Give me Five
//For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
// for(let i=0;i<=100;i++){
//     if(i===0){
//     continue;
//     }
// if(i%5==0){
// console.log(`I found a ${i}. High five!`);
// }

// }
/*Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three


    for (let i = 0; i <= 100; i++){
        if (i % 5 === 0 && i % 3 === 0) {
         console.log(`I found a ${i}. High Five! Three is a crowd`)
        } else if (i % 3 === 0) {
         console.log(`I found a ${i}. Three is a crowd`)
        } else if (i % 5 === 0) {
         console.log(`I found a ${i}. High Five!`)
        }
       }
    
*/

// D. Savings account
/*Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
Check your work! Your bank_account should have $55 in it.
let bank_account=0;
for(i=1;i<=10;i++){
    bank_account+=i;

}
console.log(bank_account);*/


/*You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
Check your work! Your bank_account should have $10,100 in it.

let bank_account=0;
for(i=1;i<=100;i++){
    bank_account+=i;

}
console.log(bank_account*2);*/

//_____________________________________________________________


// III. Arrays & Control Flow
// A. Talk about it:
/*What are the things in an array called?
Answer:Array elements

Do Arrays guarantee those things will be in order?
Answer: Yes elements in arrays are ordered can be referred by their indexes.

What real-life thing could you model with an array?
Answer:Shopping cart*/

// B. Easy Does It
//Create an array that contains three quotes and store it in a variable called quotes
//let quotes=["Live","Love","Care"];

// C. Accessing elements
// const randomThings = [1, 10, "Hello", true]
// //How do you access the 1st element in the array?
// randomThings[0];
// //Change the value of "Hello"to "World"
// randomThings[2]="World";
// //Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
// console.log(randomThings);

// // D. Change values
// const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
// //What would you write to access the 3rd element of the array?
// ourClass[2];
// //Change the value of "Github" to "Octocat"
// ourClass[4]="Octocat";
// //Add a new element, "Cloud City" to the array

// ourClass.push("Cloud City");
// console.log(ourClass);
// // E. Mix It Up
// const myArray = [5, 10, 500, 20];
// //Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
// myArray.push('Aegon');
// myArray.push("Lotus");
// console.log(myArray);

// //Remove the 5from the beginning of the array.
// myArray.shift()
// console.log(myArray);

// //Add the string "Bob Marley"to the beginning of the array.
// myArray.unshift("Bob Marley");
// console.log(myArray);

// //Remove the string of your choice from the end of the array.
// myArray.pop();
// console.log(myArray);
// //Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?
// myArray.reverse();
// console.log(myArray);
// // Answer: changing the order in an array is mutate . reverse() method returned opposite direction of original array

// // F. Biggie Smalls
// let a=prompt("Please enter the number");

// //console.log()s "little number" if the number is entered is less than 100
// if(Number(a)){
// if(a<100){
// console.log("little number");
// }
// //console.log()s big number if the number is greater than or equal to 100.

// else{
//     console.log("big number");
// }
// }else{
// console.log("Please enter number");
// }

// // G. Monkey in the Middle
// //console.log()little number if the number entered is less than 5.
// //If the number entered is more than 10, log big number.
// //Otherwise, log "monkey".
// let b=prompt("Please enter the number");

// if(Number(b)){
//     if(b<5){
//     console.log("little number");
//     }
//     else if(b>10){
//         console.log("big number");
//     }
//     else{
//         console.log("monkey");
//     }
// }else{
//     console.log("Please enter number");
// }
// H. What's in Your Closet?

const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];
  /*What's Kristyn wearing today? Using bracket notation to access items in kristyns Closet, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.*/

console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");

/*Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".*/
kristynsCloset.splice(6,0,"raybans")
console.log(kristynsCloset);

//Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.

//Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.

console.log(thomsCloset[0][0]);

// access one item from Thom's pants array.
console.log(thomsCloset[1][1]);

//Access one item from Thom's accessories array.
console.log(thomsCloset[2][1]);

//Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
console.log(`Thom is looking fierce in a ${thomsCloset[0][0]},${thomsCloset[1][1]} and ${thomsCloset[2][1]}!`);


//Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.

thomsCloset[1][2]="Footie Pajamas";
console.log(thomsCloset);
//_____________________________________________________________

// IV. Functions
// A.write a function called printGreeting with a parameter name that returns a greeting with the argument interpolated into the greeting
function printGreeting(name){

return `Hello ${name}`
}
console.log(printGreeting("Shilpa"));
// B.Write a function printCool that accepts one parameter, name as an argument. The function should print the name and a message saying that that person is cool.
function printCool(userName){
return `${userName} is cool!`
}
console.log(printCool("Shree"));
// C.Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.
function calculateCube(num){
return num*num*num;
}
console.log(calculateCube(5));
// D.Write a function isVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case. Test your function on every vowel and make sure it's working.
function isVowel(char){
if(char.toUpperCase==='a'||char.toUpperCase==='e'||char.toUpperCase==='i'||char.toUpperCase==='o'|char.toUpperCase==='u'){
return true;
}else{
return false;
}
}
console.log(isVowel('B'));

// E.Write a function getTwoLengths that accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.
function getTwoLengths(string1,string2){
let arr=[];
let numberOfChar=0;
for(let i=0; i<arguments.length;i++){

numberOfChar=arguments[i].length;
arr.push(numberOfChar);
}
return arr;
}
console.log(getTwoLengths("Hank", "Hippopopalous"));
// F.Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.
let array=[];
function getMultipleLengths(arrayOfStrings){
 
for(let i=0;i<arrayOfStrings.length;i++){
array.push(arrayOfStrings[i].length);
}
return array;
}
console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

// G.Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned. Be sure to test it with larger values in each of the three locations.
function maxOfThree(num1,num2,num3){
if(num1>=num2 && num1>=num3){
return num1;
}else if(num2>=num3 && num2>=num1){
return num2;
}else if(num3>=num1 && num3>=num2){
  return num3;
}
}

console.log(maxOfThree(6,6,6));

// H.Write a function printLongestWord that accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.


//let resultArray = [];
let resultArrayMax=0;
function printLongestWord(argArray) {
  for (let i = 0; i < argArray.length; i++) {
    if (argArray[i].length > resultArrayMax) {
      resultArrayMax=argArray[i].length;
      maxString=argArray[i];

    }
   
  }
  return maxString;
}
 

console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));




//_____________________________________________________________






// V. Objects
// A.Create an object called user.
const user={
  name:"Shilpa",
  email:"sss@gmail.com",
  age:12,
  purchased:[]
  

};


// B.Update the user
// Our user has changed his or her email address. Without changing the original userobject, update the emailvalue to a new email address.
user.email="shilpa@gmail.com"
console.log(user);
//Our user has had a birthday! Without changing the original userobject, increment the agevalue using the postfix operator. Hint: age++
user.age++;
//user.age=user.age+2;
console.log(user);

// C.Without changing the original userobject, add a new key locationto the object, and give it a value or some-or-other location (a string).
user.location="Singapore";
console.log(user);
// D.Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchased array.
user.purchased.push("carbohydrates");
console.log(user);
//Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchased array.
user.purchased.push("peace of mind");
console.log(user);
//Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchasedarray.
user.purchased.push("Merino jodhpurs");
console.log(user);
//Console.log just the "Merino jodhpurs" from the purchased array.
console.log(user.purchased[2]);

// E.Write a friendobject into your userobject and give the friend a name, age, location, and purchased array (empty for now)
user.friend = {
  name: "Grace Hopper",
  age: 85,
  location: "Pittsburgh",
  purchased:[]
};
//Console.log just the friend's name
console.log(user.friend.name);
//Console.log just the friend's location
console.log(user.friend.location);
//CHANGE the friend's age to 55
user.friend.age=55;
console.log(user.friend);

//The friendhas purchased "The One Ring". Use .push()to add "The One Ring" to the friend's purchasedarray.
user.friend.purchased.push("The One Ring");
//The friendhas purchased "A latte". Use .push()to add "A latte" to the friend's purchasedarray.
user.friend.purchased.push( "A latte");
console.log(user.friend);
console.log(user);
//Console.log just "A latte" from the friend's purchasedarray.
console.log(user.friend.purchased[1]);
// F.Write a for loop that iterates over the User's purchasedarray (NOT the friend's purchased array), and prints each element to the console.
for(let i=0;i<user.purchased.length;i++){
console.log(user.purchased[i]
  );
}
//Write a for loop that iterates over the Friend's purchasedarray, and prints each element to the console.
for(let i=0;i<user.friend.purchased.length;i++){
  console.log(user.friend.purchased[i]
    );
  }


// G.Write a single function updateUser that takes no parameters. When the function is run, it should:
//it should increment the user's age by 1
//make the user's name uppercase

function updateUser(){
user.age++;
user.name=user.name.toUpperCase();
}
updateUser();
console.log(user);

/*Write a function oldAndLoud that performs the exact same tasks as updateUser, but instead of hard-coding it to only work on our user object, make it take a parameter person, and have it modify the object that is passed in as an argument when the function is called. Call your oldAndLoud function with user as the argument.*/

function oldAndLoud(person){
  person.age++;
  person.name=person.name.toUpperCase();
  console.log(person);
  }
  oldAndLoud(user);
  //console.log(user);



//_____________________________________________________________


// Extra
