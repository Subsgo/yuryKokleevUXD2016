/**
 * Created by subs on 16.06.21.
 */
/*
 Task 3 
 Используя циклы нарисуйте в браузере с помощью пробелов (&nbsp) и звездочек (*): 
 · Прямоугольник 
 · Прямоугольный треугольник  
 · Равносторонний треугольник 
 · Ромб. 
 */

var n = 7, m = 20;
document.write('rectangle<br><br>');
for (var i = 1; i <= n; i++) {
    for (var j = 1; j <= m; j++) {
        document.write('*');
    }
    document.write('<br>');
}

document.write('right triangle  <br><br>');

for (var i = 1; i <= n; i++) {
    for (var j = 1; j <= i; j++) {
        document.write('*');

    }
    document.write('<br>');
}


document.write('equilateral triangle<br><br>');
var k = n*2 -1;
for (var i = 1; i <= n; i++) {
    for (var j = 1; j <= k; j++) {
        if (j <= i + Math.floor(k/2) && j>=(n * 2 - 1) - (i + Math.floor(k/2))+1 ) document.write('*'); else document.write('&nbsp');
    }
    document.write('<br>');
}


document.write('rhombus<br><br>');


for (var i = 1; i <= n; i++) {
    for (var j = 1; j <= k; j++) {
        if (j <= i + Math.floor(k/2) && j>=(n * 2 - 1) - (i + Math.floor(k/2))+1 ) document.write('*'); else document.write('&nbsp');
    }
    document.write('<br>');
}
for (var i = n-1; i >= 1; i--) {
    for (var j = k; j >= 1; j--) {
        if (j <= i + Math.floor(k/2) && j>=(n * 2 - 1) - (i + Math.floor(k/2))+1 ) document.write('*'); else document.write('&nbsp');
    }
    document.write('<br>');
}


document.write('right triangle in rectangle (simplified) <br><br>');

//
for (var i = 1; i <= n; i++) {
    for (var j = 1; j <= Math.floor((m / n) * i); j++) {
        document.write('*');

    }
    document.write('<br>');
}

