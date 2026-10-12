const accountId = 12323
let accountEmail = "shreyas@google.com"
var accountPassword = "010506"
accountCity = "Rajasthan" //this way variable can be declared but not good

let accountState;

//const ka matlab ki memory allote krdo and usme value add
//krdo and it cant change

//accountId = 2 //not allowed

//javascript had scope issue thats why use let instead of var 
//both does the same work(var and let)
/*
prefer not to use var
*/

accountEmail="bruh@google.com"
accountPassword = "2324232"
accountCity = "Bengaluru"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword,accountCity,accountState])