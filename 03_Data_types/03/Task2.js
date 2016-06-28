/**
 * Created by subs on 16.06.28.
 */
/*
2. Write a function that removes all elements with a given value
 * var arr = [1, 2, 1, 4, 1, 3, 4, 1, 111, 3, 2, 1, "1"];
 * arr.remove(1); // arr = [2, 4, 3, 4, 111, 3, 2, "1"];

 * Attach it to the array object
 * Read about `prototype` and how to attach methods
*/
var arr = [1, 2, 1, 4, 1, 3, 4, 1, 111, 3, 2, 1, "1"];
arr.remove = function(val){

    for (let i = 0; i < this.length; i++ ){
        if (this[i] === val) this.splice(i,1);
    }
    return this;
}
console.log(arr.remove(1));
// attached as a method but also as a property, why?