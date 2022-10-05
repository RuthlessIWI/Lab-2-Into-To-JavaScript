console.log("====Part 1 Variables====");
//Variables
console.log("====Task 1====");

//Explain the 3 keywotrks const, let, variable below
//Const is the default option when i dont need to reassign the variable
//Let is used when I need to reassign the variable to something else
//Var is the variable used after being declared by either const or let

console.log("====Task 2====");
//Assume you have the follow array:
const numbers = [1, 20, 5];
//Would this create an error?
numbers[2] = 100;

//Answer:
//I'd say yes this would casue an error. With the variable numbers being declared as const the numbers in the array cannot be different.

//Would the following statement create an error?
numbers = [1, 20, 100]

//Answer:
//No this would not create an error as the variable is never declared.

console.log("====Task 3====");

//For task 2 assume you have the following variables:
let x = 5;
var y = "Hello";
const z = 25;
//Would the following statement create an error? Why or Why Not?
//x = 10.5
/*
    No this would not create an error as X is declared with let allowing it to change
*/
//Would the following statement create an error? Why or Why Not?
//y = 25
/*
    No this would not create an error as variables can be numbers or letters 
*/
//Would the following statement create an error? Why or Why Not?
//z = "20" + 5
/*
    Yes this would cause an error as the "20" would now be considered a word and the const variable cannot be changed
*/
//Would the following statement create an error? Why or Why Not?
//x = "20" + 5
/*
    No this would not cause an error as the variable is declared as let allowing it to be changed
*/


console.log("====Task 4====");









console.log("====Task 5====");
//Reference variables vs Value variables. Assume you have the following variables for this excercise
let text = "Hello"
let text2 = text
let array = [10, 5, 2]
let array2 = array
let person = {
    firstName: "William",
    lastName: "Cram"
}
let person2 = person;

//If I change the value of the text variable what will be the value of the text2 variable? Why?
/*
    The value of text2 will be whatever the value of text is because text2 = text
*/
//If I change array[0] to 100 what will be the value of array2[0]? Why?
/*
    array2[0] will now be array2[100] because array2 = array
*/
//If I change person2.firstName to "Mohamed" what will be the value of person.firstName Why?
/*
    The new value will be Mohamed because person2 = person
*/




console.log("==================== PART 2 LOOPS/CONDITIONALS =========================");

//Loops
console.log("====TASK 6====");

//Iterate through this array using each a for, foreach, and while loop
//Print out each element in the array as well as the index
let newArray = ["foo", "fooBar", "bar", "BarFoo"];

//Using a for loop
for(let i = 0; i < newArray; i++){
    console.log('the element ' + newArray[i]);
}
//Using a foreach loop
newArray.forEach(display);

function display(element){
    console.log(element);
}
    

//Using a while loop
let counter = 0;
while(counter < newArray){
    console.log('The element ' + newArray[counter]);
    counter++;
}

console.log("====TASK 7====");

///Assume you have the following variables for this exercise
let a = 20;
let b = "20";
let c = null;
let d;

//Will the below comparisons be True or False. Explain Why?
// if(a == b)
/*
    False because in Javascript you use === for equality
*/
// if(a === b)
/*
    True because you use === for equality
*/
// if(a)
/*
    True
*/
// if(c)
/*
    True
*/
// if(c === d)
/*
    True because both variables equal nothing
*/
// if(c == 0)
/*
    False because 0 and null are two different values
*/
// if(c == d)
/*
    False because we use === for quality in javascript
*/