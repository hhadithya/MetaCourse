// try{
//     var x 5;
// }catch(err){
//     console.log(err);
// }

//  var x 5;
//       ^

// SyntaxError: Unexpected number
// There's an interesting caveat regarding the SyntaxError in JavaScript: it cannot be caught using the try-catch block.  

var arr = [1, 3, 2, 3]

console.log(arr[14]); // I thought this might print out of rannge. But got undefined

// they given this example for range error
try{
    console.log((10).toString(100));
}catch(err){
    console.log(err);
}

var noise;

console.log(noise); // undefined

// null -> absence of any object value
var str = "Good Morning";
console.log(str.match(/a/)); //null

function addTwoNums(a, b){
    try{
        // console.log(a + b);
        if (typeof(a) != 'number')
            throw new ReferenceError("the first argument is not a number");
        else if (typeof(b) != 'number')
            throw new ReferenceError("the second argument is not a number");
        else
            console.log(a+b);
    } catch(err){
        console.log("Error!", err);
    }
}

addTwoNums(5, "5");
console.log("It still works");


// Defencive Programming

// function letterFinder(word, match) {
//     try{
//         if (typeof(word) != 'string')
//             throw new ReferenceError("first argument is not a string");
//         else if (typeof(match) != 'string')
//             throw new ReferenceError("second argument is not a string");
//         else if (word.length < 2)
//             throw new ReferenceError("first argument length must be greater than 2");
//         else if (match.length != 1)
//             throw new ReferenceError("second argument must be one character");
//         else{
//             for(var i = 0; i < word.length; i++) {
//                 if(word[i] == match) {
//                     //if the current character at position i in the word is equal to the match
//                     console.log('Found the', match, 'at', i)
//                 } else {
//                     console.log('---No match found at', i)
//                 }
//             }  
//         }   

//     }catch (err){
//         console.log("Error!\n", err);
//     }
// }

function letterFinder(word, match) {
    var condition1 = typeof(word) != 'string' || word.length < 2;
    var condition2 = typeof(match) != 'string'|| match.length != 1;

    try{
        if (condition1 || condition2)
            throw new ReferenceError("Please pass correct arguments to the function.");
        else{
            for(var i = 0; i < word.length; i++) {
                if(word[i] == match) {
                    //if the current character at position i in the word is equal to the match
                    console.log('Found the', match, 'at', i)
                } else {
                    console.log('---No match found at', i)
                }
            }  
        }   

    }catch (err){
        console.log("Error!\n", err);
    }
}

letterFinder("cat", "cq");

throw new Error();
console.log("Hello World");
