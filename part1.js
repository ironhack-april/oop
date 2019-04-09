console.log("welcome to oop")




// TODO: write the methods .getAge(), .addJoke() and .getRandomJoke()

let chuck = {
    firstName: 'Chuck',
    lastName: 'Norris',
    birthDate: new Date('1940-03-10'),
    jokes:[
      'Chuck Norris counted to infinity... Twice.',
      'Chuck Norris is the only man to ever defeat a brick wall in a game of tennis',
    ],
    displayInfo: function() {
      console.log('My name is ' + this.firstName + ' ' + this.lastName + ' and I have ' + this.jokes.length + ' jokes!')
    },
    getAge: function() {
        let mSeconds = new Date() - this.birthDate
        console.log(        Math.floor(mSeconds / 31536000000)        )
      // TODO
      // Hint: to get the current time, you can do: new Date()
      // Hint: to get the birthDate, you can do: this.birthDate
      // Hint: you can subtract 2 dates and you get the number of milliseconds
    },
    addJoke: function(){
      // TODO (don't return anything)
    },
    getRandomJoke: function() {
      // TODO
      fetch('https://api.chucknorris.io/jokes/random')
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            console.log(myJson.value);
        });
    },
  }
  
  chuck.displayInfo();
  
  console.log('getAge', chuck.getAge()) ; // Should return 79 if you are in 2019
  
  chuck.addJoke('Chuck Norris can divide by zero.');
  console.log('getRandomJoke', chuck.getRandomJoke());
  chuck.addJoke('Chuck Norris kills flies with his gun.');
  console.log('getRandomJoke', chuck.getRandomJoke());
  chuck.addJoke('Chuck Norris was once in a knife fight, and the knife lost.');
  console.log('getRandomJoke', chuck.getRandomJoke());
  
  chuck.displayInfo();
  





// /**THIS IS WITH THE MOVE INSIDE THE OBJECT */
// // Example of a VERY simple Monopoly game simulation
 
// let squares = [100,-10,0,0,-40,-10,-10,5,0,-10,-50,-10,0,0,-50,-10]

// // --- Initialization with methods ---

// let player1 = {
//   name: 'Joaquim',
//   color: 'red',
//   position: 0,
//   cash: 1000,
//   move: function() { //is now inside 
//     let dice = 1+Math.floor(6*Math.random());
//     this.position = (this.position + dice) % squares.length;
//     this.cash += squares[this.position];
//     if (this.cash < 0) {
//       console.log(`Game over for ${this.name}.`);
//     }
//     console.log(this)
//   },
//   displayInfo: function() {
//     console.log(`${this.name} is at position ${this.position} and has ${this.cash}`);
//   }
// }


// // --- Turn 1  ---
// player1.move();


// // --- Turn 2  ---
// player1.move();


// // --- Display info  ---
// player1.displayInfo();



















/***THIS IS WITH THE MOVE FUNCTION OUTSIDE OF THE OBJECT 

// Example of a VERY simple Monopoly game simulation
 
// Each square represents the cash earned when a player is on it. For example:
// - If a user is at position 0, the cash will increase by 100€
// - If a user is at position 4, the cash will decrease by 40€
const squares = [100,-10,0,0,-40,-10,-10,5,0,-10,-50,-10,0,0,-50,-10]

// --- Initialization ---

let player1 = {
  name: 'Joaquim',
  color: 'red',
  position: 0,
  cash: 1000
}

// --- Turn of Player 1 ---
// The dice is a random integer between 1 and 6
var dice = 1+Math.floor(6*Math.random());
// The position is always between 0 and 15 (the numbers of squares - 1)
player1.position = (player1.position + dice) % squares.length;
// The cash is updated based on the values of squares and player1.position
player1.cash += squares[player1.position];
// If the player doesn't have anymore cash, player is out of game
if (player1.cash < 0) {
  console.log(`Game over for ${player1.name}.`);
}


// --- Display info  ---
console.log(player1);
*/