/*Задача 1*/
let Radius = prompt ('Введите радиус');
const Pi = 3.14;
let circleLength = Radius*Pi;
alert (`Длина окружности ${circleLength}`);

/*Задача 2*/
const secondsInMinute = 60;
const MinutesInHour = 60;
let secondsInHour = secondsInMinute*MinutesInHour;
console.log  (`Секунд в часу: ${secondsInHour}`)

/*Задача 3, пример 1*/
let num = 47;
num += 7;
console.log (`Упрощение num = num + 7: ${num}`);
num -= 18;
console.log (`Упрощение num = num - 18;: ${num}`);
num *= 10;
console.log (`Упрощение num = num * 10;: ${num}`);
num /= 15;
console.log (`Упрощение num = num / 15;: ${num}`);
alert (`Ответ на первый пример: ${num}`);

/*Задача 3, пример 2*/
var num2 = 10;
num2++;
console.log (`Упрощение num = num2 + 1: ${num2}`);
num2++;
console.log (`Упрощение num = num2 + 1: ${num2}`);
num2--;
console.log (`Упрощение num = num2 - 1: ${num2}`);
alert (`Ответ на второй пример: ${num2}`);
