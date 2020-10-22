
const maxCapacity = 14
let surfTime = true
const myVariable = "Lets beggening to code" 
const result = (myVariable + " is the best thing ever")
console.log(result)
const password = "abcde"
const confirmPassword = "abcde"
const samePasswords = (password==confirmPassword)
console.log(samePasswords)
const multyplie = 432*12
const divide = 802/2
const sum = (5+6)*3
console.log(52 !== "52")
//let a = 3
//a = 4
//let c = 0
//let b = a
//b = 2
//a = b
//b = c
//c = a
//a = b
//console.log("a = " + a + " b = "+ b + " c = " +c )
//let username = prompt("What is your username?")
//console.log(username)
let performance = "stellar"
let salary = 10000
const goodBonus = 1000
const stellarBonus = 3000
const increaseSalary = salary + goodBonus + stellarBonus
console.log(increaseSalary)
const isVIP = false
let cash = 500
if(isVIP || cash > 300){
    console.log("You can enter to the club")
}else{
    console.log("Sorry you can't enter to the club")
}
const a = 3
let b = 2
let c = 0 || 12
let d

b = c
b++
if(d){
  b = a
}

d = a + (b * c)
d++
b += 2
console.log( "a= " + a + " b = " +b+ " c = " + c +" d= "+d )
const gender = "woman"
let profession = "business"
if(gender == "man"){
    profession +="man"
    console.log(profession)
} else if(gender == "woman"){
    profession +="woman"
    console.log(profession)
}else{
    console.log("You dont put your gender")
}
let boughtTesla = false
const yearOfTeslaPurchase = 2014
let isUSCitizen = true
let currentYear = 2018
if(boughtTesla){
    if(isUSCitizen){
        if((currentYear - yearOfTeslaPurchase) > 4){
         console.log(" Would you like an upgrade?")
        }else{
            console.log("You are satisfied with the car?")
        }
    }else{
        console.log("Would you like to move to the US?")
    }
}else{
    console.log("You are interested in buying one?")
}

