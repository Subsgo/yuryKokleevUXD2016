/**
 * Created by subs on 16.06.27.
 */

/*
 3. Write a script that finds the maximal sequence of equal elements in an array.

 **Example:** [2, 1, 1, 2, 3, 3, 2, 2, 2, 1] -> [2, 2, 2].
 */

var inputArr = [2, 1, 1, 2, 3, 3, 2, 2, 2, 1, 1, 1, 1],
    resultArr = [],
    j = 0;

resultArr [j] = inputArr[0];
for (let i = 1; i < inputArr.length; i++) {
    if (inputArr[i] === resultArr [j]) {
        resultArr[++j] = inputArr[i];
    } else if ((inputArr.length - i) > j) {
        resultArr.length = 0; // same as resultArr = [];
        j = 0;
        resultArr[j] = inputArr[i];
    }
}

console.log(resultArr);