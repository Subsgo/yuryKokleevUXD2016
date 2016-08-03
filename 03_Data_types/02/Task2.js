/**
 * Created by subs on 16.06.27.
 */
/*
    2. Write a function that reverses the digits of given decimal number. Example: 256 -> 652
*/

var k = 234;

console.log(revertNumber(k));

function revertNumber(a) {
    var b = [];
    if (Number.isInteger(a)){
        a = a.toString();
        for (let i =0; i < a.length;i++){
            b.unshift(a.charAt(i));
        }
        b = b.join('');
        return parseInt(b, 10);
    } else return false;
}
