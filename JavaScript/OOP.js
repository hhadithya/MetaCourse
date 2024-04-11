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