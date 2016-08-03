/**
 * Created by subs on 16.06.27.
 */
/*
 2. Write a script that compares two char arrays lexicographically (letter by letter).
 */
//we asume that lexicographically is : 
var inputArr1 = ['a', 'b', 'c'], inputArr2 = ['a', 'b', 'C'];

function compareArrs(a, b) {
    let l = 0;
    a = a.join('');
    b = b.join('');
    a = a.toLowerCase();
    b = b.toLowerCase();
    a = Array.from(a);
    b = Array.from(b);


    (a.length <= b.length) ? l = a.length : l = b.length;
    for (let i = 0; i < l; i++) {
        console.log('eq' + a[i] > b[i]);
        if (a[i] != b[i]) {
            if (a[i] > b[i]) {
                return ('b is earlier');
            } else {
                return ('a is earlier');
            }
        }
    }
    return 'equal';
}


console.log(compareArrs(inputArr1, inputArr2));
