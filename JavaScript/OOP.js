var certificate = {
    name: 'Data Science with Python',
    status: 'Pending',
    process: function(){
        this.status = 'Approved'
    }
};

console.log(certificate);
certificate.process();
console.log(certificate);

// inheritance 

class Bird{
    constructor(sound){
        this.sound = sound;
    }
    useWings(){
        console.log("Flying");
    }
}

class Eagle extends Bird{
    useWings(){
        super.useWings();
        console.log("Barely flapping!");
    }
}

class Penguine extends Bird{
    constructor(sound, type){
        super(sound);
        this.type = type;
    }
    useWings(){
        console.log("Diving!");
    }
}

let kingPenguine = new Penguine("honking", "Gentoo");
let baldEagle = new Eagle("scream");

console.log(kingPenguine);
console.log(baldEagle);

console.log(kingPenguine.useWings());
console.log(baldEagle.useWings());


// native objects
// Math, Date, Object, Function, Boolean, Symbol, Array, Map, Set, Promise, JSON
class Icecream{
    constructor (flavor){
        this.flavor = flavor;
        this.meltIt = function() {
            console.log(`The ${this.flavor} icecream has melted`);
        }
    }
}

let kiwiIcecream = new Icecream("kiwi");
let appleIcecream = new Icecream("apple");

console.log(kiwiIcecream);
kiwiIcecream.meltIt();


/*
            Animal
            /   \
          Cat   Bird
         /   \      \
    HouseCat Tiger  Parrot
*/

class Animal{
    constructor (color, energy){
        this.color = color;
        this.energy = energy;
    }
    
    isActive(){
        if (this.energy != 0)
            this.energy -= 20;
        else if (this.energy == 0)
            this.sleep();
    }

    sleep(){
        this.energy += 20;
    }

    getColor(){
        console.log(`Color of the ${this} is ${this.color}`);
    }
}

class Cat extends Animal{
    constructor (color, energy, sound, canJumpHigh, canClimbTrees){
        super(color, energy);
        this.sound = sound;
        this.canJumpHigh = canJumpHigh;
        this.canClimbTrees = canClimbTrees;
    }

    makeSound(){

    }
}

class HouseCat extends Cat{
    constructor (color, energy, sound, canJumpHigh, canClimbTrees, houseCatSound){
        super(color, energy, sound, canJumpHigh, canClimbTrees);
        this.houseCatSound = houseCatSound;
    }

    makeSound (option){
        if (option){
            super.makeSound();
        }else{
            console.log(this.houseCatSound);
        }
    }
}

class Tiger extends Cat{
    constructor (color, energy, sound, canJumpHigh, canClimbTrees, tigerSound){
        super(color, energy, sound, canJumpHigh, canClimbTrees);
        this.tigerSound = tigerSound;
    }

    makeSound (option){
        if (option){
            super.makeSound();
        }
        console.log(this.houseCatSound);
    }
}

// class Bird extends Animal{
//     constructor (color, energy, sound, canFly){
//         super(color, energy);
//         this.sound = sound;
//         this.canFly = canFly;
//     }

//     makeSound(){

//     }
// }

class Parrot extends Bird{
    constructor (color, energy, sound, canFly, canTalk){
        super(color, energy, sound, canFly);
        this.canTalk = canTalk;
    }
    makeSound (option){
        if (option && this.canTalk)
            console.log("Something");
    }
}

class Subject{
    constructor (code){
        this.code = code;
    }
}

let subject1 = new Subject("S1001");

console.log(Object.keys(subject1));
console.log(Object.values(subject1));
console.log(Object.entries(subject1));