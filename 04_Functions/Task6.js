/**
 * Created by subs on 16.07.12.
 */
/*

 Task 6. Arguments Object Create function parts which takes several parameters. Each parameter is a group of sentences. This function should extract the substring from the sign “:”(colon) to the sign “.”(period) of each parameter and return the array of this substrings Use Function Definition Expression. Test Data: param1 = "This is the first sentence. This is a sentence with a list of items: cherries, oranges, apples, bananas." param2 = "This is the second sentence. This is a sentence with a list of items: red, blue, yellow, black." result = [“cherries, oranges, apples, bananas”, “red, blue, yellow, black”]



 */
var param1 = 'This is the first sentence. This is a sentence with a list of items: cherries, oranges, apples, bananas.',
    param2 = 'This is the second sentence. This is a sentence with a list of items: red, blue, yellow, black.',
    parts = function () {
        if (arguments.length != 0) {
            let cmp = /(:\s*)(.*)(?=\.)/i,
                res = [];
            for (let i = 0; i < arguments.length; i++) {
                if (typeof arguments[i] != 'undefined') {
                    res.push(cmp.exec(arguments[i])[2]);
                }
            }
            return res;
        }
    }

console.log(parts(param1, param2));