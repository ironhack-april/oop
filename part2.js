console.log("welcome to oop part 2")






class Animal {
  constructor(name,mainColor,sound){
    this.name = name;
    this.mainColor = mainColor;
    this.sound = sound;
  }
  scream(intensity) {
    console.log(`${this.sound} ${'!'.repeat(intensity)}`);
  }
}


class Hamster extends Animal {
  constructor(n, c, s, wheelSpeed){
    super(n, c, s)
    this.wheelSpeed = wheelSpeed; 
  }

}

const lemmiwinks = new Hamster('LemmingWinks', 'brown', 'squeak', 1000 )





// The class Cat has, by default, all the same attributes and methods as Animal but it will have some that just belong to the cat
class Cat extends Animal {
  constructor(name,mainColor,sound, nbOfLegs){
    // `super` refers to the constructor of the parent (Animal)
    // with super Cat gets all the attributes and methods of the Animal class
    super(name,mainColor,sound);
    this.nbOfLegs = nbOfLegs; // <== a new attribute, just for cats
  }
}

const garfield = new Cat('Garfield','orange', 'Meow', 4);
console.log(garfield);



// {
//   name: 'Garfield',
//   mainColor: 'orange',
//   sound: 'Meow',
//   nbOfLegs: 4
// }

garfield.scream(2); // <== Meow !!
garfield.scream(5); // <== Meow !!!!!






// // Example of a VERY simple Monopoly game simulation using CLASS 
 
// let squares = [100,-10,0,0,-40,-10,-10,5,0,-10,-50,-10,0,0,-50,-10]

// // Creation of the class
// class Player {

//   // The constructor is the method triggered with the `new` keyword 
//   constructor(name, color) {
//     this.name = name;
//     this.color = color;
//     this.position = 0;
//     this.cash = 1000;
//   }
  
//   // Method move
//   move() {
//     let dice = 1+Math.floor(6*Math.random());
//     this.position = (this.position + dice) % squares.length;
//     this.cash += squares[this.position];
//     if (this.cash < 0) {
//       console.log(`Game over for ${this.name}.`);
//     }
//   }
  
//   // Method displayInfo
//   displayInfo() {
//     console.log(`${this.name} is at position ${this.position} and has $${this.cash}`);
//   }
  
// }

// // --- Initialisation of players ---
// let player1 = new Player('Joaquim', 'red');
// let player2 = new Player('Maxence', 'blue');
// let player3 = new Player('Mostafa', 'black');

// // --- Turn 1  ---
// player1.move();
// player2.move();
// player3.move();

// // --- Turn 2  ---
// player1.move();
// player2.move();
// player3.move();

// player1.displayInfo();
// player2.displayInfo();
// player3.displayInfo();





