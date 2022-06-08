// all code written here is accessible in the browser console through the connection to our index.html file

//let cohort = "no name :(";

// let header = document.querySelector("h1");

// console.log(header);

// function goToSleep(bedTime = "10pm"){
//     console.log(`I want to go to bed at ${bedTime}`)
// }
// const time = "11pm"
// goToSleep(time);
// goToSleep();

// function multiplyByTwo(number){
//     console.log(number *2)
// }
// multiplyByTwo(6);
// multiplyByTwo(12);

// function eatCarrots(number = "44"){
//     console.log(`I want to eat ${number} carrots today!`)
// }
// let howMany = 55
// eatCarrots(howMany);

// function favoritePlaces(unitedStates, europe, newZealand){
//     console.log(`My favorite cities are ${unitedStates}, ${europe}, ${newZealand}.`)
// }
// const home = "Austin"
// const pond = "Edinburgh"
// const island = "Queenstown"
// favoritePlaces(home, pond, island);

// const myCat = 'rose'

// function isCute(){
//     let age = 9
//     console.log(age)
//     if(myCat === 'rose'){
//     }
// }
// isCute()

// //console.log(age)

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// function square(array){
//     array.forEach(item){
//        return console.log(item**)
//     }
// }

let names = [
    "Adriana",
    "Chase",
    "Edmund",
    "Hannah",
    "Kunj",
    "Ric",
    "Jamie",
    "Kelsey",
    "Steven",
    "Braylan",
    "JaiVon",
    "John",
    "Kristina",
    "Ryan",
    "Faith",
    "Marcus",
    "Spencer",
    "Sam",
    "Zach",
  ];

  let greeting = names.map((name) => {
      return 'Hello' + name})
  
console.log(greeting);

let greetings = names.map((name)=>{
    return `Hello ${name}`;
})