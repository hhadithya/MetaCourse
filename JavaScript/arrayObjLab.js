// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];

function logDiary() {
    for (var product of Object.values(dairy)){
        console.log(product);
    }
}

logDiary();

// Task 2
const animal = {
    canJump: true
};

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;

function birdCan() {
    for (var prop of Object.keys(bird)){
        console.log(`${prop}: ${bird[prop]}`);
    }
}

birdCan();

// Task 3
function animalCan() {
    for (var prop in bird){
        console.log(`${prop}: ${bird[prop]}`);
    }
}

animalCan();
