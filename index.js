
/*
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
}*/
/*
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
}*/
/*
const posts = [
    {id: 1, text: "Love this product"},
    {id: 2, text: "This is the worst. DON'T BUY!"},
    {id: 3, text: "So glad I found this. Bought four already!"}
  ]
for(let i=0;i<posts.length;i++){
    if(posts[i].id == 2){
        posts.splice(i,1);
    }
}*/
/*
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
console.log(posts)*/
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