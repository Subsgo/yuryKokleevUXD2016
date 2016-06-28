/**
 * Created by subs on 16.06.22.
 */
/*Arrays

 1. Write a script that allocates array of 20 integers and initializes each element by its index multiplied by 5.
 Print the obtained array on the console.

 */

var resultArr = [], N = 20;

for (let i = 0; i < N; i++) {

    resultArr[i] = i * 5;
}

console.log(resultArr);
console.log(resultArr.length);
