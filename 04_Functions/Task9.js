/**
 * Created by subs on 16.07.12.
 */
/*
 Task 9. Function as a Parameter Create the function toConsole with one parameter, which display the value of its parameter in console.log Create the function toAlert with one parameter, which display the value of its parameter using alert() Create the function splitToWords with two parameters: msg and callback. This function splits msg into words and using callback displays words in console or by alert. If the second parameter is omitted, return the array of words. Test Data: splitToWords("My very long text msg", toConsole);  result  My  very  long  text  msg splitToWords("My very long text msg", toAlert);
 result = alert(My), …. console.log( splitToWords("My very long text msg") ); result = [“My”, “very”, “long”, “text”, “msg”]

 */

function toConsole(param) {
    console.log(param);
}

function toAlert() {
    alert(param);
}

function splitToWords(msg, callback) {
    switch (callback) {
        case toConsole:
        {
            toConsole(msg.split(' '));
            break;
        }
        case toAlert:
        {
            toAlert(msg.split(' '));
            break;
        }
        default:
            return msg.split(' ');
    }
}

splitToWords('My very long text msg', toConsole);
splitToWords('My very long text msg', toAlert);
var result = splitToWords('My very long text msg');
console.log(result);
