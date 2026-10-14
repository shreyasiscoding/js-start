// data types - primitive and non primitive 

//javascript doesnt need to declare types (Dynamically typed language)

//           Primitive (call by value)
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.232

const isLoggedIn = false
const outsideTemp = null
let userEmail; //undefined

const id = Symbol('234')
const anotherId = Symbol('234')

console.log(id === anotherId); //false as symbol are unique 

const bigNumber = 20498208023n
// n lagane pe big int ho jayega

//           Refernce type( Non primitive )
// Array, Objects. functions 

const heros = ["ironman","superman","hulk"] //arrays
let myObject = {
    name : "shreyas",
    age : 19,
}//object 

const myFunction = function(){
    console.log("hello world ");
}

console.log(typeof bigNumber)
//saare datatypes ke typeof yaad rakhna

//lec 10 

// Stack (Primitive) , Heap (Non-Primitive)
let myName = "shreyas"

let anotherName = myName // a copy of myname is stored in anotherName
anotherName = "hiroshima" //the copy is getting changed not actual Myname

console.log(anotherName)
console.log(myName)//this is primitive (basically works like call by value)

let userOne = {
    userEmail: "shreyas@gmail.com",
    userAddress: "moti bagh"
}

let userTwo = userOne// a reference of userOne is copied here so
//if something is changed in this actual value is changed

userTwo.userEmail = "hiroshima@gmail.com"

console.log(userOne.userEmail)
console.log(userTwo.userEmail)//Non primitive (works like call by reference)






