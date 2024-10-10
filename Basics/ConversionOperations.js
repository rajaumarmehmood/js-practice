// Day 01 of Dealing with unexpecting behaviours of js. What's going on?

// Number
let score=50
console.log(typeof score)

// String
let score2="50"
console.log(typeof(score2))

// String to number check
let valInNumber=Number(score2)//also do this for string and numbers like String Number
console.log(typeof valInNumber)

// check conversion of alphanumeric string to number
let checkNumber="50percent"
let alphanumericVarInNumber=Number(checkNumber)
console.log(typeof alphanumericVarInNumber)
console.log(alphanumericVarInNumber)
console.log(typeof NaN)

// check null
console.log(typeof null)
let Null=null
console.log(Null)

// convert null to number check
let nullToNumber=Number(Null)
console.log(typeof nullToNumber)
console.log(nullToNumber)

// check undefined
let Undefined=undefined
console.log(typeof Undefined)
console.log(Undefined)

// convert undefined to Number
let undefinedToNumber=Number(Undefined)
console.log(typeof undefinedToNumber)
console.log(undefinedToNumber)

// check boolean
let isLoggedIn=true
console.log(isLoggedIn)
console.log(typeof isLoggedIn)

// conversion of bool
let boolToNumber=Number(isLoggedIn)
console.log(boolToNumber)
console.log(typeof boolToNumber)

// check Number to bool
let True=1
let numToBool=Boolean(True)
console.log(numToBool)
console.log(typeof numToBool)

// check Empty string to bool
let Empty=""
let emptyToBool=Boolean(Empty)
console.log(emptyToBool)
console.log(typeof emptyToBool)

// check string to bool
let name="Umar"
let stringToBool=Boolean(name)
console.log(stringToBool)
console.log(typeof stringToBool)

// Notes for BOOLEAN:
    // 1=>true, 0=>false
    // ""=>false
    // "Umar"=>true

