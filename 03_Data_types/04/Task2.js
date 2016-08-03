/**
 * Created by subs on 16.06.28.
 */
/*
 2. Write a JavaScript function to check if in a given expression the brackets are put correctly.
 * Example of correct expression: `((a+b)/5-d)`.
 * Example of incorrect expression: `)(a+b))`. 
*/

var str = `)(a+b))`;

function checkBrackets(str) {
    var opens = str.match(/\(/g),
        closes = str.match(/\)/g);
    return opens.length === closes.length;
}

console.log(checkBrackets(str)?'correct':'incorrect');



