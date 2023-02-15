////////////////////////////////
// *Easy Going
//Write a for loop that will log the numbers 1 through 20.
for (let i = 1; i <= 20; i++) {
  console.log(i);
}

////////////////////////////////
//* Get Even
//Write a for loop that will log only the even numbers in 0 through 200.
for (let i = 0; i <= 200; i += 2) {
  console.log(i);
}

////////////////////////////////
//* Fizz Buzz
/*Write a javascript application that logs all numbers from 1 - 100.
If a number is divisible by 3 log "Fizz" instead of the number.
If a number is divisible by 5 log "Buzz" instead of the number.
If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.*/

for (let num = 1; num <= 100; num++) {
  if (num % 3 === 0 && num % 5 === 0) {
    console.log("FizzBuzz");
  } else if (num % 3 === 0) {
    console.log("Fizz");
  } else if (num % 5 === 0) {
    console.log("Buzz");
  }
}

////////////////////////////////
//* Wild Wild Life

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
const sharky = ["Sharky", "shark", 20, "Left Coast"];
const plantee = ["Plantee", "plant", 5000, "Mordor"];
const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"];

//Plantee just had her birthday; change Plantee's array to reflect her being a year older.
plantee[2] += 1;
console.log(plantee);

//Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
wolfy[3] = "Gotham City";
console.log(wolfy);

//Give D'Art a second hometown by adding "Hawkins"
dart.push("Hawkins");
console.log(dart);

//Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfyarray and replace it with "Gameboy".
wolfy.shift();
console.log(wolfy);
wolfy.unshift("Gameboy");
console.log(wolfy);
////////////////////////////////
//* Yell at the Ninja Turtles
//Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)
const ninja_turtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

//Use a for of loop(not a typo - try it out! Try a for ofloop) to call toUpperCase()on each of them and print out the result.
for (let ninja_turtle of ninja_turtles) {
  console.log(ninja_turtle.toUpperCase());
}

////////////////////////////////
// *Methods, Revisited
const favMovies = [
  "Jaws",
  "The Fellowship of the Ring",
  "Howl's Moving Castle",
  "Django Unchained",
  "Cloud Atlas",
  "The Usual Suspects",
  "Toy Story",
  "Conan the Barbarian",
  "Titanic",
  "Harry Potter",
  "Fried Green Tomatoes",
  "Volver",
  "Oculus",
  "Seven",
  "Black Panther",
  "Harry Potter",
  "Imitation of Life",
  "Snatch",
  "Fast and Furious",
];
//Console log: the index of Titanic
console.log(favMovies.indexOf("Titanic"));
//use the .sort method
favMovies.sort();
console.log(favMovies);

//Use the method pop
favMovies.pop();
console.log(favMovies);

//push"Guardians of the Galaxy"
favMovies.push("Guardians of the Galaxy");
console.log(favMovies);

//reverse the array
favMovies.reverse();
console.log(favMovies);

//Use the shift method
favMovies.shift();
console.log(favMovies);

//unshift
favMovies.unshift();
console.log(favMovies);
//splice"Django Unchained" and add "Avatar" (try finding the index of "Django Unchained", instead of counting it yourself)

let idx = favMovies.indexOf("Django Unchained");
favMovies.splice(idx, 0, "Avatar");
console.log(favMovies);

/*slice the last half of the array (challenge yourself and try to programatically determine the middle of the array rather than counting it and hard coding it) - Thought question: did this permanently alter our array?*/

const half = Math.ceil(favMovies.length / 2);
//store the value of your slicein a variable, console.log it

const firstHalf = favMovies.slice(0, half);
console.log(firstHalf);
const secondHalf = favMovies.slice(half);
console.log(secondHalf);
//console.log your final results
console.log(favMovies);
/*After running the above tasks, console.log the index of "Fast and Furious" -We removed it from the array, what value do we get when we look for the index of something that is not in the array?*/
console.log(favMovies.indexOf("Fast and Furious"));
////////////////////////////////
//* Where is Waldo
const whereIsWaldo = [
  ["Timmy", "Frank"],
  "Eggbert",
  ["Lucinda", "Jacc", "Neff", "Snoop"],
  ["Petunia", ["Baked Goods", "Waldo"]],
];
//Remove Eggbert (hint look at the slice/splice method(s))
whereIsWaldo.splice(1, 1);
console.log(whereIsWaldo);

//Change "Neff" to "No One"
whereIsWaldo[1][2] = "No One";
console.log(whereIsWaldo);

//Access and console.log "Waldo"
console.log(whereIsWaldo[2][1][1]);
////////////////////////////////

////////////////////////////////
// * Excited Kitten
//Write code that logs "Love me, pet me! HSSSSSS!" 20 times.
const kittenTalks = [
  "...human...why you taking pictures of me?...",
  "...the catnip made me do it...",
  "...why does the red dot always get away...",
];

//console.log(meow);
for (let i = 1; i <= 20; i++) {
  /*For every even number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.*/
  let meow = Math.floor(Math.random(0, 1) * 3);
  if (i % 2 === 0) {
    console.log(kittenTalks[meow]);
  } else {
    console.log("Love me, pet me! HSSSSSS!");
  }
}
////////////////////////////////
//*  Find the Median
//Find the median number in the following nums array, then console.log that number.
const nums = [
  14, 11, 16, 15, 13, 16, 15, 17, 19, 11, 12, 14, 19, 11, 15, 17, 11, 18, 12,
  17, 12, 71, 18, 15, 12,
];
nums.sort();
console.log(nums);
let median = nums[Math.ceil(nums.length / 2)];
console.log(median);
////////////////////////////////
