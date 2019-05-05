// What is a variable?
// I like explain the concept of variable like a space in the memory that we can use for save informations about something.

// How to declare/create a variable in JS?
// var/let/const

var firstName = 'Pedro';
let lastName = 'Souza';
const gender = 'Male';

// var was the main way of declare variables in JS but we had some problems with this method because the concept of hoisting.
// let is the new main way of declare variables implemented in ES6 if i remember well, the diference of var is that let don't have hoisting.
// const is the way of declare constants in JS, that is a variable that can't be changed.

// What kind of values i can save in a variable?
// Strings
// Numbers
// Objects
// Arrays
// Functions

let url = 'https://pedrossouza.com.br'; //String

let year = 2019; //Number

let computer = {
  memory: 8192,
  processor: 'Intel Core I5',
  motherboard: 'ASUS'
}; //Object

let friends = ['Bruno', 'Jonathan', 'Everton', 'José']; //Array

let sayHello = function(name){
  return console.log('Hello' + ' ' + name);
}; //Function Vanila Js

let sum = (number1, number2) => {
  const result = number1 + number2;
  return console.log(result);
}; //Arrow Function ES6

// Calling functions
sayHello('Pedro');
sum(10, 20);