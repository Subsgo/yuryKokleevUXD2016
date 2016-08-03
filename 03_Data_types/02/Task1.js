/**
 * Created by subs on 16.06.22.
 */
/*
 Functions

 1. Write a function that returns the last digit of given integer as an English word. 
 Examples: 512 -> "two", 1024 -> "four", 12309 -> "nine"
 */

var k = 101;

console.log(compareDigits(k));

function compareDigits(a) {
    a = a.toString(10);
    a = a [a.length - 1];
    console.log(a);

    switch (a) {
        case '0':
            return 'zero';
            break;
        case '1':
            return 'one';
            break;
        case '2':
            return 'two';
            break;
        case '3':
            return 'three';
            break;
        case '4':
            return 'four';
            break;
        case '5':
            return 'five';
            break;
        case '6':
            return 'six';
            break;
        case '7':
            return 'seven';
            break;
        case '8':
            return 'eight';
            break;
        case '9':
            return 'nine';
            break;
    }
}

