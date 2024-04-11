function letterFinder(word, match){
    for (var i = 0; i < word.length; i++){
        if (word[i] == match)
            console.log('Found the', match, 'at', i);
        else    
            console.log("---No match found at", i);
    }
    return null;
}

letterFinder("test", "t");


/* In javascript functionas are first class citizens. Means they can be used as other data types
like strings, numbers to store a function into another variable*/

var find = letterFinder;

console.log(find);  // output : [Function: letterFinder]
console.log(find("test", "t")); // here it's returning null 

// higher order functions. Means we can pass functions as arguments
function getRandom(){
    return Math.random() * 10;
}

function add(a, b){
    var num1 = a;
    var num2 = b();
    console.log(num1, num2);
    return num1 + num2;
}

var random = getRandom;
console.log(add(random(), random));


function consoleStyler(color, background, fontSize, txt){
    var message = "%c" + txt;
    var style = `color: ${color};background: ${background};font-size: ${fontSize};`; 
    console.log(message, style);
}

function celebrateStyler(reason){
    var fontStyle = "color: tomato; font-size: 50px;";
    if (reason == 'birthday')
        console.log("%cHappy birthday", fontStyle);
    else if (reason == 'champions')
        console.log(`%cCongrats on the title!`, fontStyle);
    else    
        console.log(message, style);

}


consoleStyler('#1d5c63', '#ede6db', '40px', 'Congrats!');
celebrateStyler('birthday')

function styleAndCelebrate(color, background, fontSize, txt, reason){
    consoleStyler(color, background, fontSize, txt);  
    celebrateStyler(reason);
}

styleAndCelebrate('ef7c8e', 'fae8e0', '30px', 'You made it!', 'champions');
