/**
 * Created by subs on 16.07.12.
 */
/*
 Task 10. Function as a Result Create function copyright which return another function with one parameter. Returned function adds sign © (“\u00A9”) at the beginning of its parameter. Declare copyright sign in outer function. Test Data console.log( copyright()(“EPAM”) ); result = © EPAM.

*/

function copyright() {
    let sign = '\u00A9'
    return function (input) {
        return (sign + input);
    }

}

console.log( copyright()('EPAM'));