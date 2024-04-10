var str = "Good Morning!";

console.log(str.charAt(1));
console.log("Hey Sunshine. ".concat(str));
console.log(str.indexOf('o')); // first position
console.log(str.indexOf('k')); // -1, since it is not a character of the given string
console.log(str.lastIndexOf('o'));

var words = str.split(" ");
console.log(words);

console.log(str.toUpperCase());
console.log(str.toUpperCase());