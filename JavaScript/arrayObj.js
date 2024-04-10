// var user = {}; // empty object literal

// var employee = {
//     fname: "John",
//     dob: "2008/05/15",
//     address: "No92J, Temple Road, Kandy"
// };

// // add new trait 
// employee.lname = "Mayer";
// console.log(employee);

// // update a trait
// employee.dob = "2005/05/15";
// console.log(employee);

// // square bracket notation
// employee["tel-number"] = "+90777888999";
// console.log(employee);

// employee["telNumber"] = "+90777888999";
// console.log(employee);

// const traits = ["fname", "lname", "tel-number"];

// traits.forEach(trait => {
//     console.log(trait + ": " + employee[trait]);
// });

// var evenArr = [2, 4, 6, 8];

// evenArr.push(10);
// evenArr.push(12);
// evenArr.push(14);

// console.log(evenArr);

// console.log(evenArr.pop());
// console.log(evenArr);

// function evenArrBuilder(limit){
//     var start = 12;
//     while (limit > 0){
//         start += 2;
//         evenArr.push(start);
//         limit--;
//     }
//     return evenArr;
// }

// // console.log(evenArrBuilder(10));
// var answer = evenArrBuilder(10);
// console.log(answer);

// console.log(Math.PI);
// console.log(Math.E);

// console.log(Math.max(10, 15, 12));
// console.log(Math.min(10, 15, 12));
// console.log(Math.cos(Math.PI/3));

// for (var i = 0; i < 5; i++){
//     var randomVal = Math.random();
//     console.log(Math.floor(randomVal));
// }


// var clothes = [];

// var fav = ["shirt", "trousher", "t-shirt", "hoody", "bottom"];

// fav.forEach(cloth => {
//     clothes.push(cloth);
// });

// clothes.pop();
// clothes.push("belt");

// console.log("3rd Item: " + clothes[2]);

// var favCar = {};

// favCar.color = "blue";
// favCar.covertible = true;
// console.log(favCar);

// object method define

var car = {};

car.color = "blue";
car.model = "civic";

car.lightsOn = function (){
    console.log("Lights turned on");
}

car.lightsOn();