/**
 * Created by subs on 16.07.08.
 */

/*
 Task 2. FDE Create function comp which should compare two parameters a and b and return 1 if a equal b and -1 if a not equal b using Function Definition Expression (FDE). Call this function before its declaration. Test Data: a = “abc”, b = “abc”, result = 1 a = “abC”, b = “abc”, result = -1  

 */

console.log(comp ('abc','abC'));
var comp =( function (a, b) {
    if (a == b) return 1; else return -1;
});

console.log(comp ('abc','abc'));