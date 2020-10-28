
/* $$$ Im finish this Exrsices in 26/10 $$$

let companies = ["Tesla", "Amazon", "Google", "Microsoft"]
for(company of companies){
    console.log("One day i will work at " + company )
}*/
/*
let names = ["Avi","Dani","Yoni"]
let ages = [22,25,28]
for(let i =0 ;i <names.length&&ages.length;i++){
  
        console.log(names[i] + " is " + ages[i] + " years old.")
}

let numbers = [1,2,3,4]
let sum = 0;
for(let i=0;i<numbers.length;i++){
    sum +=numbers[i];
    console.log(sum);
}
let average = sum/numbers.length;
console.log(average)

let nums = [];
let j=1;
while(j<=100){
    nums.push(j)
    j++;
}
for(i=0 ; i<nums.length;i++){
   if(nums[i]%2==0){
   console.log(nums[i])
   }    
}

let nums = [773, 414, 213, 374, 434, 700, 506, 495, 852, 585, 271, 198, 689, 248, 708, 197, 96, 260, 921, 834, 258, 662, 501, 632, 715, 503, 538, 289, 596, 381, 817, 280, 968, 877, 431, 146, 491, 724, 83, 841, 174, 21, 460, 25, 785, 539, 291, 404, 903, 278, 159, 229, 216, 683, 84, 87, 879, 406, 661, 537, 890, 394, 382, 477, 271, 373, 82, 104, 709, 723, 333, 958, 95, 983, 732, 917, 324, 785, 754, 23, 659, 551, 408, 442, 766, 242, 611, 846, 802, 866, 817, 848, 227, 349, 243, 837, 21, 954, 146, 11]
for(let i=0;i<nums.length;i++){
    if(nums[i] == 709){
        console.log(i)
    }
}
const names = ["Ashley", "Donovan", "Lucas"]
const ages = [23, 47, 18]
const people = []

for(i=0;i<names.length;i++){
    people.push({name: names[i],age: ages[i]});
}
for(i=0;i<people.length;i++){
    console.log(people[i].name + " is " + people[i].age + " years old.")
}

const posts = [
    {id: 1, text: "Love this product"},
    {id: 2, text: "This is the worst. DON'T BUY!"},
    {id: 3, text: "So glad I found this. Bought four already!"}
  ]
for(let i=0;i<posts.length;i++){
    if(posts[i].id == 2){
        posts.splice(i,1);
    }
}

const posts = [
    {
      id: 1, 
      text: "Love this product",
      comments: []
    },
    { 
      id: 2, 
      text: "This is the worst. DON'T BUY!", 
      comments: [
                  {id: 1, text: "Idiot has no idea"}, 
                  {id: 2, text:"Fool!"}, 
                  {id: 3, text: "I agree!"}
                ]
     },
     {
      id: 3, 
      text: "So glad I found this. Bought four already!",
      comments: []
     }
  ]
for(let i=0;i<posts.length;i++){
    if(posts[i].id == 2){
      for(let j=0;j<posts[i].comments.length;j++){
        if(posts[i].comments[j].id == 3){
            posts[i].comments.splice(j,1);
        }
      }        
    }
}  
console.log(posts)
const dictionary = {
    "A": ["Aardvark", "Abacus", "Actually", "Atomic"],
    "B": ["Banana", "Bonkers", "Brain", "Bump"],
    "C": ["Callous", "Chain", "Coil", "Czech"]
  }
let letters = Object.keys(dictionary);
for(let i=0; i<letters.length;i++){
    console.log("words that begin with " +letters[i]+ " :")
    let key = letters [i]
    for(let j=0;j<dictionary[key].length;j++){
        console.log(dictionary[key][j])
    }
}  
console.log("The end of Loops")*/
/*
const person = {
    name: "Julius",
    speak: function(food) {
      console.log("I like " +food)
    }
  }
  person.speak("cheese")
*/
/*
  const calcAge = function(nowYear,brithYear){
    return nowYear-brithYear;
  }
  
  let age = calcAge(2017, 1989)
  console.log(age)

  const calcAge2 = function(nowYear,brithYear){
      let ageOfperson = nowYear-brithYear;
      let otherOption = ageOfperson-1;

      console.log("You are either "+ otherOption + " or " + ageOfperson)
  }
let action = calcAge2(2018,2015)

function isEven(number) {
if(number %2 == 0){
    return true;
}else{
    return false
}
}
//console.log(isEven(4))

const printOddnumbers = function(numbers) {
    for(let i=0;i<numbers.length;i++){
        if(isEven(numbers[i]) == false){
            console.log(numbers[i])
        }
    }
}

let numArray = [1,2,3,4,5,6,7,8]
printOddnumbers(numArray);
*/
/*
function checkExists(numbers,number) {
    for(let i=0; i<numbers.length;i++){
        if(numbers[i] == number){
            return true;
        }
        if(numbers[i] != number && i == numbers.length-1){
            return false
        }
    }
}
let arrayOfnumbers = [1,2,3]
console.log(checkExists(arrayOfnumbers,3))

const calculator = {
 add: function(numberOne,numberTwo) {
      return numberOne+numberTwo
  },
 subtract: function(numberOne,numberTwo) {
     return numberOne-numberTwo;
 }
}
const result1 = calculator.add(20, 1)
const result2 = calculator.subtract(30, 9)

console.log(calculator.add(result1, result2)) //should print 42

const turnToKing = function(name, money){
    name = name.toUpperCase()
    money = increaseByNameLength(money, name)
    name = makeRegal(name)

    console.log(name + " has " + money + " gold coins")
}

turnToKing("martin luther", 100) // should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"

function increaseByNameLength(money,name) {
    return name.length*money
}
function makeRegal(name) {
    return "His Royal Highness, "+name;
}*/


// $$$ The Amazing Funtion! $$$
/*
const splice = function(array, ...numer) {
   return array.splice(...numer);    
}

Array.prototype.Splice = function( start, toRemove, ...item ) {
    let remove = this.slice( start, start + toRemove ); //cut the elements from start to howmany you want
    let temp = this.slice(0,start).concat( ...item, this.slice( start + toRemove ) ); // make a new array when is start in 0 index to start index and continu after the start and remove
   //and put the items you want
    this.length = 0; // reset the array
    this.push.apply( this, temp ); // put in the array the new array with all your actions
    return remove;
}

// returns an array of the deleted element (1 element)
arr = [1,2,3]
deleted = arr.splice(1,1); 
console.log(deleted); //should be [2] 

people_info = [
    {
      name: "guido",
      profession: "bungalow builder",
      age: 17,
      country: "canaland",
      city: "sydurn",
      catchphrase: "what a piece of wood!"
    },
    {
      name: "petra",
      profession: "jet plane mechanic",
      age: 31,
      country: "greenmark",
      city: "bostork",
      catchphrase: "that's my engine, bub"
    },
    {
      name: "damian",
      profession: "nursery assistant",
      age: 72,
      country: "zimbia",
      city: "bekyo",
      catchphrase: "with great responsibility comes great power"
    }
  ]
  
const capitalize = function(str){
 let capital = ""
 capital += str[0].toUpperCase();
 capital += str.slice(1)
 return capital
}

const cityAndcountry = function(Country,City){
let living = ""
living += capitalize(City) + " , " + capitalize(Country)
return living
}
const definitionlAge = function(age){
    if(age < 21){
        return "Underage"
    }
    else if(age >55){
        return "55+"
    }
    else{
        return age
    }
}

const catchphrasesin = function(string){
    let str = ""
    str += '"'+capitalize(string) + '"'
    return str
}

const getSummary = function(person){
   let summary = ""
    summary +=  capitalize(person.name)
    summary += ` is an ${definitionlAge(person.age)} `
    summary +=  capitalize(person.profession)
    summary += ` from ${cityAndcountry(person.country,person.city)} `
    summary +=  `${capitalize(person.name)} love to say ${catchphrasesin(person.catchphrase)}`
    return summary
}


console.log(getSummary(people_info[0]))
*/

//$$$ its work its amazing function!!

const cleanText = function(str){
    for(let i=0 ;i<str.length;i++){
        str = str.toLowerCase()
    }
    const specialChars = [",", ".", "'", '"',"?", "!", ";"]
    for(let i=0;i<specialChars.length;i++) {
        str = str.split(specialChars[i]).join("")
    } return str
    
}

const equalWords = function(str){
 str = cleanText(str)
 let container =  str.split(" ") 
 let count = 1
 let temp = {}

for(let i=0; i < container.length ; i++){
 for(let j = container.length-1; j > i ; j--){
      if(container[i] == container[j]){
        delete container[j]
        count++
      }
  } 
    if(container[i]!= undefined){
    temp[container[i]] = count,
    count = 1
    }
 }
  return temp
}

const story = "In the beginning there was light. Then there were wolves. Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, the fire caused one heck of a lot of damage."

console.log(equalWords(story))




