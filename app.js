/*
Exercise 1: maxOfTwoNumbers()

In this exercise, create a function named maxOfTwoNumbers. 
It should take two numbers as inputs and return the larger number. 
If they're equal, return either one.

Exercise 1 has been completed for you:
*/

const maxOfTwoNumbers = (x, y) => {
  if (x >= y) {
    return x;
  } else {
    return y;
  }
}

console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));


/*
Exercise 2: isAdult()

Write a function named isAdult. It should take an age (number) 
and return 'Adult' if the age is 18 or over and 'Minor' otherwise.

Example: isAdult(21) should return 'Adult'.

Complete the exercise in the space below:
*/
function isAdult(age){
    return age >= 18 ? 'Adult' : 'Minor';
}

console.log('Exercise 2 Result:', isAdult(18))


/*
Exercise 3: isCharAVowel()

Write a function named isCharAVowel that takes a single character as 
an argument. It should return true if the character is a vowel and 
false otherwise. For the purposes of this exercise, the character 
y should not be considered a vowel.

Example: isCharAVowel('a') should return true.

Complete the exercise in the space below:
*/

function isCharAVowel(char){
    return char === 'a';
}

console.log('Exercise 3 Result:', isCharAVowel("a"));
console.log('Exercise 3 Result:', isCharAVowel("y"));


/*
Exercise 4: generateEmail()

Create a function named generateEmail. It should take two strings: 
a name and a domain. It should return a simple email address.

Example: generateEmail('johnsmith', 'example.com') 
should return 'johnsmith@example.com'.

Complete the exercise in the space below:
*/

function generateEmail(name, domain){
      return `${name}@${domain}`;
}

console.log('Exercise 4 Result:', generateEmail("harry.ra", "gmail.com"));


/*
Exercise 5: greetUser()

Define a function called greetUser. It should take a name and a 
time of day (morning, afternoon, evening) and return a personalized 
greeting.

Example: greetUser('Sam', 'morning') should return "Good morning, Sam!"

Complete the exercise in the space below:
*/

function greetUser(timeOfDay, name){
  return `Good ${timeOfDay}, ${name}`;
}

console.log('Exercise 5 Result:', greetUser("morning", "Sam!"));


/*
Exercise 6: maxOfThree()

Define a function, maxOfThree. It should accept three numbers 
and return the largest among them.

Example: maxOfThree(17, 4, 9) should return 17.

Complete the exercise in the space below:
*/

/*pseudocode
1. define a function call maxOfThree
2. comparing 3 numbers so 3 arguments (a, b, c)
3. start if statement to say if a (the largest nunber) is great than equal to b and c, it's true
4. do if for b and c
5. make sure to write return
6. consol.log it
*/

function maxOfThree(a, b, c){
if (a >= b && a>= c){
  return a;
} else if (b >= a && b >= c){
  return b;
} else if (c >= a && c >= c){
  return c;
}
}

console.log('Exercise 6 Result:', maxOfThree(30, 20, 10));


/*
Exercise 7: calculateTip()

Create a function called calculateTip. It should take two arguments: 
the bill amount and the tip percentage (as a whole number). 
The function should return the amount of the tip.

Example: calculateTip(50, 20) should return 10.

Complete the exercise in the space below:
*/

/*pseudocode
1. write a function call calculateTip with two argument (billAmount and tipPercentage)
2. we need to return the amount of tip
3. return billAmount * tipPercentage / 100 - basic calculation
4. console.log it

*/

function calculateTip(billAmount, tipPercentage){
  return billAmount * (tipPercentage /100);
}

console.log('Exercise 7 Result:', calculateTip(100, 10));


/*
Exercise 8: convertTemperature()

Write a function named convertTemperature. 
It takes two arguments: a temperature and a string representing the 
scale ('C' for Celsius, 'F' for Fahrenheit). 
Convert the temperature to the other scale.

Example: convertTemperature(32, 'C') should return 89.6 (Fahrenheit).
Example: convertTemperature(32, 'F') should return 0 (Celsius).

Complete the exercise in the space below:
*/

/*pseudocode
1. write a function call convertTemprature with 2 arguments (temprature and scale)
2. IF to delcare that scale is 'C'
3. return (show) what temprature it is when converted to F
4. return (show) what temprature is is when converted c
5. delcare the temprature in the console.log
6. console.log it

*/

function convertTemperature(temperature, scale){
  if(scale === 'C'){
    return(temperature * 9/5) + 32
  } else if (scale === 'F'){
    return (temperature - 32) * 5/9
  }
}

console.log('Exercise 8 Result:', convertTemperature(32, "C"));
console.log('Exercise 8 Result:', convertTemperature(32, "F"));


/*
Exercise 9: basicCalculator()

Create a function named basicCalculator. 
It should take three arguments: two numbers and a string representing 
an operation ('add', 'subtract', 'multiply', 'divide'). 
Perform the provided operation on the two numbers. 
In operations where the order of numbers is important, 
treat the first parameter as the first operand and the 
second parameter as the second operand.

Example: basicCalculator(10, 5, 'subtract') should return 5.

Complete the exercise in the space below:
*/

/*pseudocode
1. create a function named basicCalculatot with 3 arguments (David, I honestly thought I had to put
1, 2 insead of num1 num 2, and subtract instead of operation. I couldn't figure it out so I used GPT at the end.)
2. So operation is either subtract, add, multiply, or divide
3. If on the operations with two numbers


*/

function basicCalculator(num1, num2, operation){
  if (operation === 'add'){
    return num1 + num2
  } else if (operation === 'subtract'){
    return num1 - num2
  } else if (operation === 'multiply'){
    return num1 * num2
  } else if (operation ==='divide'){
    return num1 / num2
  } else {
    return null;
  }
}

console.log('Exercise 9 Result:', basicCalculator(10, 5, "add"));
console.log('Exercise 9 Result:', basicCalculator(10, 5, "subtract"));
console.log('Exercise 9 Result:', basicCalculator(10, 5, "multiply"));
console.log('Exercise 9 Result:', basicCalculator(10, 5, "divide"));
