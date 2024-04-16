var student = {
    name : "John Steve",
    age : 24,
    country : "United States",
    credits : 10,
    specialize : "Chemistry",

    creditsUpdate : function() {
        this.credits += 10;
    }
    
}

student.creditsUpdate();
console.log(student.credits);

var jsonStr = JSON.stringify(student);
console.log(jsonStr);

// methods will be omitted. Since it has been omiited you can not get it again
console.log(JSON.parse(jsonStr));