
const myStaff = ["a","b","c"];

//myStaff.push(myStaff[0]);
//myStaff.unshift(myStaff[myStaff.length-2])
//myStaff.push(...myStaff)
//console.log(myStaff)

//const newStaff = ["clouds", "sky", "birds", "worms", "earth", "dirt", "clothes", "human", "life"]
//newStaff.splice(0,newStaff.length-1)
//console.log(newStaff)
const genes = ["ACADM", "GLMN", "RLF", "AZIN2", "CRYZ",["a","b"]]
const newgenes = [...genes]
newgenes.splice(2,0,"CRYZ",)
newgenes.splice(newgenes.length-1,1,"AZIN2")
newgenes.unshift('FXT')
console.log(newgenes)
console.log(genes)

let car ={
 color:"brown",
 numWheels: 4,
 isFancy: true   
}
console.log("The "+car.color+ " car has "+car.numWheels+" wheels.")
if(car.isFancy){
    console.log("It is fancy")
  }
  else{
    console.log("It is not fancy")
  }

let something = {
    item:"a",
    toBeginning: false,
    items: ["b","c","d"]
}
if(something.toBeginning){
    something.items.unshift(something.item)
}else{
    something.items.push(something.item)
}
console.log(something.items)

const human = {
    age: 0
}

const babyNameKey = "name"
const babyNameValue = "Goojibear"
human["name"] = babyNameValue;
human.name= "idan"
console.log(human.name)

const p1 = {
    name:"Jill",
    age:22,
    city: "Tel-Aviv"
} 
const p2 ={
    name: "Robert",
    age: 22,
    city: "Netanya"
}
if(p1.age == p2.age){
    if(p1.city == p2.city){
      console.log(p1.name +" wanted to date "+p2.name)
    }else{
        console.log(p1.name +" wanted to date " +p2.name+ ", but couldn't")
    }
}

const myList =[
    {obj1:"Yay!"},
    {obj2:"banana"},
    {obj3: true}
]
myList[0].obj1 = "WOW!"
myList.splice(1,1)
console.log(myList)

const newList =[
    {obj4:"haha"},
    {obj5:"Yas"}
]
myList.push(...newList)
console.log(myList)

const libray = {
    book: [
        {title: "Tmol Shilshom", author:"Shai Agnon"},
        {title: "My Michael", author: "Amos Oz"}
    ]
}
myList.push(...libray.book)
console.log(myList)
/*
const reservations = {
    bob: { claimed: false },
    ted: { claimed: true }
  }
  
  const name = prompt('Please enter the name for your reservation')
  let user = name.toLowerCase()
if(reservations[user]){
    if(reservations[user].claimed){
        console.log("Hmm, someone already claimed this reservation")
    }else{
        console.log("Welcome,"+ user)
    }
}else{
    reservations[user]= {claimed: true}
}*/

const date = 3

const kitchen = {
    owner: "Geraldine",
    hasOven: false, 
    fridge: {
        price: 500,
        works: false, 
        items: [
            { name: "cheese", expiryDate: 7 },
            { name: "raddish", expiryDate: 2 },
            { name: "bread", expiryDate: 1 }
        ]
    }
}
let hasOven = kitchen.hasOven
let works = kitchen.fridge.works
let expiryDate = kitchen.fridge.items[1].expiryDate;
let reddish = kitchen.fridge.items[1].name
let price = kitchen.fridge.price
    if(hasOven && works){
    expiryDate =-1
    console.log("she has an oven to cook the" + reddish +" in.")
  } else if(!(hasOven) && works){
    expiryDate =-1
    console.log("she doesn't have an oven to cook the " + reddish + " in.")
  } else if(hasOven && !(works)){
    expiryDate =-1
    price +=250
    console.log("she has an oven to cook the " + raddish + " in. And she'll have to pay 250 to fix the fridge.")
  } else{
    price +=250
    console.log("Too bad she doesn't have an oven to cook the " + raddish + " in. And she'll have to pay 250 to fix the fridge.")
  }
   