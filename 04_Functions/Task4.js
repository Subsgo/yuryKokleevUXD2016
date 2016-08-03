/**
 * Created by subs on 16.07.12.
 */

/*
 Task 4. NFE Create function fibo to calculate fibonachi numbers using named function expression


 */

var fibo = function fb(n) {
    if (n > 2) {
        return (fb(n-1)+fb(n-2));
    } else {
        return 1;
    }

}

console.log(fibo(15));