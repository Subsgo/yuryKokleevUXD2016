/**
 * Created by subs on 16.06.27.
 */

/*
 4. Write a script that finds the maximal increasing sequence in an array.

 **Example:** [3, 2, 3, 4, 2, 2, 4] -> [2, 3, 4].
 */

var inputArr = [3, 2, 3, 4, 2, 2, 4];

function maxIncSequence(arr) {

    var resultArr = [],
        tmp = [],
        j = 0;

    tmp [j] = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > tmp [j]) {
            tmp[++j] = arr[i];
        } else {
            if (tmp.length >= resultArr.length) {
                resultArr = tmp.concat();
                tmp.length = 0;
                j=0;
                tmp[j] = arr[i];
            } else {
                tmp.length = 0;
                j=0;
                tmp[j] = arr[i];
            }
        }
        console.log('i='+i+'!tmp='+tmp+'!resultarr='+resultArr);
    }
    
    return (tmp.length >= resultArr.length)?tmp:resultArr;
}
console.log(maxIncSequence(inputArr));
