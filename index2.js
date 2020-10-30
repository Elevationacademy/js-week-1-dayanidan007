

/// $$# scope and this finish in 29/10
//===================================================================================
//Section 1
//===================================================================================
/*
const run = true

if (run) {
    let distance = 8
    for (var i = 0; i < distance; i++) {
        console.log("running") //print ruunig
    }
    console.log("Finished running " + distance + " miles")// print the string in the console.log
}


console.log("Damn, you see this gal? She ran " + distance + " miles")// make error becouse distance is
//in the scope    
//===================================================================================//Section 2//===================================================================================
if (13 == "space") {
    let cowSound = "moo"
}
else {
    console.log("Cow says " + cowSound)//make error becoues cowSound is in if 
}

//===================================================================================
//Section 3
//===================================================================================

const serveOrders = function (orders) {

    for (let order of orders) {
        let specialOrder = "special " + order
        console.log("Served a " + specialOrder)//work good
    }

    console.log("Finished serving all the orders: " + orders)//work good
}
const allOrders = ["fish", "lettuce plate", "curious cheese"]
serveOrders(allOrders)//work good

//===================================================================================
//Section 4
//===================================================================================

const pot = "red pot with earth in it"

const getSeed = function () {
    const seed = "brown seed"
}

const plant = function () {
    getSeed()
    console.log("Planting the " + seed + " inside a " + pot)//make error becouse seed is in getSeed
}

plant()//error

//===================================================================================
//Section 5 - Optional(if you have time)
//===================================================================================
const doesUserExist = function (name) {
    const users = [{ name: "Shapira", age: 19 }, { name: "Lucius", age: 23 }]
    for (let u of users) {
        if (u.name == name) {
            const found = true
        }
    }
    return found//make error becouse found is in if
}

const userExists = doesUserExist("Lucius")
if (userExists) {
    console.log("We found the ragamuffin!")
}
else {
    console.log("No idea where this person is.")
}

//===================================================================================
//Section 6 - Optional (if you have time)
//===================================================================================
const isEnough = false

const makeEnough = function () {
    for (let i = 0; i < 10; i++) {
        if (i > 5) {
            isEnough = true
        }
    }
}

makeEnough()
if (isEnough) {     //make a big boutifull error
    console.log("Finally, sheesh")
}
else {
    console.log("Here we go again...")
}

const person = {
    username: "Felicia",
    introduce: function(){
      console.log("Hi, I'm " + this.username)
    }
  }
  
  person.introduce() //prints "Hi, I'm Felicia"
*/
/*
const person = {
    hungry: true,
  
    feed: function () {
      if (this.hungry) {
        hungry = false;
        alert('Im no longer hungry!')
      }
    }
  }
  
  person.feed() //should alert "I'm no longer hungry"

const pump = function (amount) {
    this.liters += amount;
    console.log('You put ' + amount + ' liters in ' + this.name);
  };
  
  const garage = {
    car1: {
      name: 'Audi',
      liters: 3,
      fillTank: pump
    },
    car2: {
      name: 'Mercedes',
      liters: 1,
      fillTank: pump
    }
  };
  
  garage.car1.fillTank(2);
  console.log('Audi should have 5 liters: ',  garage.car1.liters);
  
  garage.car2.fillTank(30);
  console.log('Mercedes should have 31 liters: ', garage.car2.liters);
  
 const pumpFuel = function (plane) {
    plane.fuel += 1;
  };
  
  const airplane = {
    fuel:0,
    fly: function () {
      if (this.fuel < 2) {
        return 'on the ground!';
      }
      else {
        return 'flying!';
      }
    }
  };
  
  console.log('The plane should not be able to fly (yet): ' + airplane.fly());
  
  pumpFuel(airplane);
  console.log('The plane should STILL not be able to fly: ' + airplane.fly());
  
  pumpFuel(airplane);
  console.log('Take off! ' + airplane.fly());
  
 const tipJar = {
    coinCount: 20,
    tip: function () {
      this.coinCount += 1;
    },
    stealCoins: function(num) {
      this.coinCount -=num;
    }
  };
  
  tipJar.tip();
  console.log('Tip jar should have 21 coins: ' + tipJar.coinCount);
  
  tipJar.stealCoins(3);
  console.log('Tip jar should have 18 coins: ' + tipJar.coinCount);
  
  tipJar.stealCoins(10);
  console.log('Tip jar should have 8 coins: ' + tipJar.coinCount);
  
 const revealSecret = function () {
    return this.secret;
  };
  
  const shoutIt = function (person, func) {
    person.revealItAll = func;
    const result = person.revealItAll();
    alert(person.name + " said: " + result);
  };
  
  const avi = {
    name: "Avi",
    secret: "Im scared of snakes!"
  };
  
  const narkis = {
    name: "Narkis",
    secret: "I dont have secrets because I'm zen like that."
  };
  
  shoutIt(avi, revealSecret);
  shoutIt(narkis, revealSecret);
  */

 const coffeeShop = {
    beans: 40,

    money:100,
  
    drinkRequirements: {
        latte:{
          beansRequirement: 10,
          price:5
        },
        americano:{
          beansRequirement: 5,
          price: 10
        },
      doubleShot:{
          beansRequirement:15,
          price:10
        },
      frenchPress:{
          beansRequirement:12,
          price:10
        }
    },
    
/*
    makeDrink: function (drinkType) { ///makeDrink function to Exercise 6
     let drinks = Object.keys(this.drinkRequirements)
     let allBeans = Object.values(this.drinkRequirements)
     for(let i=0;i<drinks.length;i++){
        let cheks = cheker(this.beans,allBeans[i])
         if(drinks[i] == drinkType && cheks){
             this.beans -= allBeans[i];
                 return this.beans
             }else if (!(cheks)){
                 return alert("Sorry, we're all out of beans")
             }         
         }   return alert("Sorry, we don't make " + drinkType)  
   },*/

   makeDrink: function (drinkType) { /// makeDrink function to Extension 2 $$
     let runn
    for(let j=0; j< Object.keys(this.drinkRequirements).length;j++){
      if(drinkType == Object.keys(this.drinkRequirements)[j]){
         runn = Object.values(this.drinkRequirements);
         this.beans -= runn[j].beansRequirement 
         if(this.beans > 0){
           return this.beans
          }else {
           return alert("Sorry, we're all out of beans")
          }
        }
      } return alert("Sorry, we don't make " + drinkType) 
  },

       buyBeans: function(numBeans){
        const priceBeans = 2;
        this.money -= priceBeans*numBeans
        return this.money
    },
    
       increaseMoney: function(drinkType){
        let runn
        for(let j=0; j< Object.keys(this.drinkRequirements).length;j++){
          if(drinkType == Object.keys(this.drinkRequirements)[j]){
             runn = Object.values(this.drinkRequirements);
             this.money += runn[j].price
             return this.money
           }
         }
       }, 

       buyDrink: function(drinkType){
       this.increaseMoney(drinkType)
       this.makeDrink(drinkType)
     }
}
 


const cheker = function(num1,num2){ ///helping function for makeDrink function to Exercise 6
    if(num1 - num2 > 0){
    return true
    }else{
        return false
    }
  }


  coffeeShop.makeDrink("latte"); 
  coffeeShop.makeDrink("americano");
  coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
  coffeeShop.makeDrink("doubleShot");
  coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans" 
  coffeeShop.buyDrink("americano")
  coffeeShop.buyDrink("turkish")

