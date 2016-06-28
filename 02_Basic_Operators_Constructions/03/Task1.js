/**
 * Created by subs on 16.06.20.
 */
/*
 Task 1
 Требуется: Создать массив размерностью N элементов, заполнить его произвольными целыми значениями. Вывести наибольшее значение массива, наименьшее значение массива, общую сумму элементов, среднее арифметическое всех элементов, вывести все нечетные значения. 
*/

var N = 10;
var arrayN = new Array (N);

for (var i=0; i < arrayN.length;i++){
    arrayN[i] = Math.round(10*Math.random());
    console.log(arrayN[i]);
}

console.log("Perm Results");
var min = 0, max = 0, sum =0, avg = 0;
for (var i=0; i < arrayN.length;i++){
    (min > arrayN[i])?min=arrayN[i]:console.log(arrayN[i]);
    (max < arrayN[i])?max=arrayN[i]:i;
    sum+=arrayN[i];

    console.log(min,max,sum);
}
console.log("Results");
console.log("min,max,sum,avg");
console.log(min,max,sum,sum/N);
