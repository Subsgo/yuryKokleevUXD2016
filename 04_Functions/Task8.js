/**
 * Created by subs on 16.07.12.
 */
/*
 Task 8. Function as an Object Create the function str which takes one parameter and alert(“String is non empty”) if string is non empty and alert(String is empty) otherwise. Use following funtion to check this condition. Create the function isNonEpmtyStr as a property of function str. This function takes one parameter and return true if its parameter is NonEmptyStr. Test Data: str.isNonEmptyStr(), result = false str.isNonEmptyStr(“”), result = false str.isNonEmptyStr(“a”), result = true str.isNonEmptyStr(1), result = false str(), alert(“String is empty”) str(“a”), alert(“String is non empty”)
 */

var str = function (param) {
    if (typeof param === 'undefined'){
        this.NonEmptyStr = '';
    } else {
        this.NonEmptyStr = param;
    }
    if (this.NonEmptyStr !== '') {
        console.log('String is non empty');
    } else {
        console.log('String is empty');
    }
    this.isNonEmptyStr = function (msg) {
        if (msg == this.NonEmptyStr) {
            return true;
        } else {
            return false;
        }
    }
};
str();
str('');
str('a');
var str = new str('a');

console.log(str.isNonEmptyStr());
console.log(str.isNonEmptyStr(''));
console.log(str.isNonEmptyStr(1));
console.log(str.isNonEmptyStr('a'));