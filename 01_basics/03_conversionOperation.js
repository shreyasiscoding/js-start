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