console.log("2">1); //automatically converts 2 string to number but not recommended 
console.log("02">1);

console.log(null > 0); //false
console.log(null == 0); //false
console.log(null <= 0 ); //true

/*the reason is == and < >= works diffrentily
comparision converts null to number treating it as zero 
thats why null <= 0 is true and null > 0 is false */

console.log(undefined == 0); 
console.log(undefined > 0 );
console.log(undefined <= 0); //always false

// === strict check (also checks datatype)

console.log("2" === 2); // false since datatype are diff

//always prefer to have same datatype in comparision

