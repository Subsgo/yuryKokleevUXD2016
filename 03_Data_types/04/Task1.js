/**
 * Created by subs on 16.06.22.
 */
/*
    Strings

 1. Write a JavaScript function reverses string and returns it
 * Example: "sample" -> "elpmas".
*/
var stringText = 'sample'

function reverseString(a) {
    a = a.split('').reverse().join('');
    return a;
}

console.log(reverseString(stringText));