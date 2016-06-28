/**
 * Created by subs on 16.06.20.
 */

/*
 Task 1

 Создайте 3 переменные   x = 6, y = 15, и z = 4:
 Выполните и отобразите результат следующих операций для этих переменных:
 · x += y - x++ * z ;
 · z = -- x - y * 5 ;
 · y /= x + 5 % z ;
 · z = x++ + y * 5 ;
 · x = y - x++ * z ;
*/

var x = 6, y = 15, z=4;

console.log(x += y - x++ * z);
console.log(z = -- x - y * 5);
console.log(y /= x + 5 % z);
console.log(z = x++ + y * 5);
console.log(x = y - x++ * z);