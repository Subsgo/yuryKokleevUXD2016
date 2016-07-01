/**
 * Created by subs on 16.06.28.
 */
/*
 3. Write a JavaScript function that finds how many times a substring is contained in a given text
 (perform case insensitive search).

 **Example**: The target substring is **"in"**. The text is as follows:
 *  We are liv<b>in</b>g **in** an yellow submar<b>in</b>e. We don't have anyth<b>in</b>g else. **In**side the submar<b>in</b>e is very tight. So we are dr<b>in</b>k<b>in</b>g all the day. We will move out of it **in** 5 days.

 The result is: 9. 
 */
var str = "We are liv<b>in</b>g **in** an yellow submar<b>in</b>e. We don't have anyth<b>in</b>g else. **In**side the submar<b>in</b>e is very tight. So we are dr<b>in</b>k<b>in</b>g all the day. We will move out of it **in** 5 days.",
    subStr = /\**in\**/gi;

function matchCount(string, subString) {
    let tmpArr;
    if (typeof string == 'string' && typeof subString !== null) {
        tmpArr = string.match(subString);
        console.log(tmpArr);
        return tmpArr.length;
    }
}

console.log(matchCount(str, subStr));