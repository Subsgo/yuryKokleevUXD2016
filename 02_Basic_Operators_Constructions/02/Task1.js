/**
 * Created by subs on 16.06.20.
 */
/*
task 1

 Дано два числа A и B где (A<B).  
 Выведите на экран суму всех чисел расположенных в числовом промежутке от А до В.  
 Выведите на экран все нечетные значения, расположенные в числовом промежутке от А до В. 
*/
var arrayResult = [], Sum = 0;
var A = 4, B = 3;
//A = ParseInt(prompt("Введите A"));
//B = ParseInt(prompt("Введите B"));

if (A<B){
    while (A <= B){
        Sum+=A;
        if (A%2 === 0) arrayResult.push(A);
        A++;
    }
    console.log(Sum);
    console.log(arrayResult);
} else console.log('%s<%s numbers does not meet requirements', A, B); //alert