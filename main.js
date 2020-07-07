let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = "Mayo"

condiments = ["Mayo"]

utensils[3] = "Spoon"

const objectives = ['Learn a new languages', 'Read 52 books', 'Run a marathon'];

// .push()- add item to end of array
objectives.push("build online platform", "release newsletter")

const chores = ['wash dishes', 'do laundry', 'take out trash'];

chores.push("sleep", "sleep more")

// .pop()- removes last item from array

chores.pop()

const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift()


// .unshift()- add to the beginning of an array

groceryList.unshift("popcorn")

//console.log(groceryList)

// .slice()- slice elements and return a new array



let goalsOf2020 = ["Secure a new role", "deliver the next few conference talks", "create a revenue stream"]

goalsOf2020[3] = "Learn how to garden"



// .length()- returns the number of items in array

//console.log(goalsOf2020.length);

// .push() - to add items to array

goalsOf2020.push("Use Scarbill's name in my code", "Build full stack web app")

// remove items from an array
goalsOf2020.pop()

//console.log(goalsOf2020)

// .shift()- remove first item from an array

goalsOf2020.shift()

// .unshift()- add to the beginning of an array 

goalsOf2020.unshift("Build and release full stack web app with node express sql and react")

// .slice()- 

//const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

// slice elemenets from an array beginning and end + 1 
groceryList.slice(1, 4)

// indexOf- return the position of an element in an array

const pastaIndex = groceryList.indexOf("pasta")

//console.log(pastaIndex)

const goals = ["Build app", "stream every day", "release monthly newsletter"]

function newGoal(arr) {
    arr.push("Learn something new")
}

newGoal(goals)

//console.log(goals)

// if the arrow func is only returning one statement, you dont have to explicitly state the kw
// one parameter makes the parenthesis optional

const greeting = user => `Hello have a good day ${user}`

//console.log(greeting("Tae'lur"))



/*

Pass by reference- what you pass the functi0on is a reference to where the variable
memory is stored and changing the memory
ex. within a function you change the values of an array defined outside of it and
in the process it permanently changes its value

*/

const concept = ['arrays', 'can', 'be', 'mutated'];

// creates a function that modifies an existing element in an array
function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);

// creates a function that deletes the last element of whatever array is passed in as an argument
function removeElement(newArr) {
    newArr.pop()
}

removeElement(concept)

console.log(concept)



