/**
 * Created by subs on 16.06.20.
 */
/*﻿
 Task 3

 Напишите программу расчета объема - V и площади поверхности - S цилиндра.
 Объем V цилиндра радиусом - r и высотой – h, вычисляется по формуле: V = πr 2 h.
 Площадь S поверхности цилиндра вычисляется по формуле: S = 2π rh + 2π r 2 = 2π r (r+ h).
 Результаты расчетов выведите на экран. 
 */

var r = 10, h = 15;

console.log('V='+(Math.PI*r*2*h));
console.log('S='+(2*Math.PI*r*h + 2*Math.PI*r*r));
console.log('S='+(2*Math.PI*r*(h + r)));

