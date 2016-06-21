/**
 * Created by subs on 16.06.20.
 */
/*
 Tasks 2
 Требуется: Создать двумерный массив элементов размерностью 5х5 и заполнить его произвольными целочисленными значениями.
 По главной диагонали все числа со знаком (-) заменить на 0, а числа со знаком (+) на число 1.
 */
function getRandomInt(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;

}


var N = 5;
var arrayN = [];


for (var i = 0; i < N; i++) {
    arrayN [i] = [];
    for (var j = 0; j < N; j++) {
        //arrayN[i][j] = Math.round(10 * (Math.random() - 0.5));
        arrayN[i][j] = getRandomInt(-10, 10);
    }
}
for (i = 0; i < N; i++) {
    console.log(arrayN[i]);
}

for (i = 0; i < N; i++) {
    if (arrayN[i][i] > 0)
        arrayN[i][i] = 1;
    else if (arrayN[i][i] < 0)
        arrayN[i][i] = 0;
}
console.log('result');
for (i = 0; i < N; i++) {
    console.log(arrayN[i]);
}


