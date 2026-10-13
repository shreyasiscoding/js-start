
let score = "33abc" 
score = null
score = undefined

console.log(typeof score); //string
console.log(typeof (score));
/*
when taken from frontend the score can be anything 
that is why knowing type is necessary
*/

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)

// "33" => 33
// "33abc" => NaN (not a number)
// true => 1 false => 0
// undefined => NaN 
// null => 0

let isLoggedIn = 1 

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// Type conversion of boolean 
// 1 => true 0 => false 
// "" => false 
// "shreyas" => true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);


// ***************** Operations ***************

let value = 3
let negValue = -value
console.log(negValue);

console.log(2+3);
console.log(2%3); //etc etc

let str1 = "hello"
let str2 = "hitesh"

let str3 = str1 + str2
console.log(str3);

console.log("1" + 2) // 12
console.log("1" + 2 + 2) // 122
console.log(2 + 2 + "1") // 41

console.log(3+4*32%3) // use paranthesis as this type of code is shit

console.log(+true); //no need as its shit
console.log(+""); //no need as its shit

let num1, num2, num3

num1 = num2 = num3 = 2 + 2; //no need

let gameCounter = 100
gameCounter++;
++gameCounter;
console.log(gameCounter)

//link to study : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment









