/*Задание 3. (6.5-3)

Написать функцию, которая принимает число как аргумент и 
возвращает функцию, которая также принимает число как аргумент 
и возвращает сумму этих двух чисел. Выведите в консоль результат. */

let numberOne = 2; //+prompt('Input a number');
let numberTwo = 3; //+prompt('Input another number');

function calcSum(num1) {
    return function getSum(num2) {
        return num1 + num2;
    }
}

console.log(calcSum(numberOne)(numberTwo)); //alert(calcSum(numberOne)(numberTwo));