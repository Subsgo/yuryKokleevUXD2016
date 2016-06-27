/**
 * Created by subs on 16.06.21.
 */
/*
 Task 2 
 Напишите программу, которая будет рассчитывать и выводить на экран количество возможных вариантов доставки товара.
 Для решения задачи, используйте факториал N!, рассчитываемый с помощью цикла do-while . 
 */

var n = 4, sum = 1, i = n;
n = parseInt(prompt("Enter N"));
if (n > 0) {
    i = n;
    do {
        sum *= i;
        i--;
    }
    while (i > 0);
    console.log('%s! = %s', n, sum);
} else console.log("0! = 0 or negative int %s", n);
