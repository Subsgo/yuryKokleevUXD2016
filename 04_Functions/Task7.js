/**
 * Created by subs on 16.07.12.
 */
/*
 Task 7. Optional Arguments Create function find(testString, test) which should return the position of test string in testString. If you don’t pass the second parameter use test = testString. Use Function Definition Expression. Test Data: testString = “abc”, test =”b”, result = 1 testString = “abc”, result = 0 testString = ”abc”, test = “d”, result = -1 testString = “abc”, test=”a”, test2=”b”, result = 0
*/
var testString = 'abc',
    test = 'd',
    find = function (testString, test) {
        if (arguments.length < 2){
            test = testString;
            return testString.indexOf(test);
        } else {
            return testString.indexOf(test);
        }
    };

console.log(find (testString));
console.log(find (testString, test));