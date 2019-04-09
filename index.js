console.log('welcome to prototypical inheritence')


class Animal  { //es6
  constructor(name, owner){
    this.name = name;
    this.owner = owner;
  }
}

// function Animal (name, owner) { es5 and before 
//   this.name = name;
//   this.owner = owner;
  
// }

var myAnimal   = new Animal("Arya", "Josephine");
var yourAnimal = new Animal("Max",  "Owen");

Animal.prototype.showOwnerName = function(){
  return "My owner is " + this.owner;
}


Animal.prototype.roar = function() {
  return "ROARRR!!!!!"
}



console.log(myAnimal.showOwnerName());    //=> "My owner is Josephine"
console.log(yourAnimal.showOwnerName());  //=> "My owner is Owen"


