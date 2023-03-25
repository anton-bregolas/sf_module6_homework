/*Задание 2. (6.4-2)

Написать функцию, которая принимает на входе любое число 
(но не больше 1 000), определяет, является ли оно простым, 
и выводит простое число или нет. Если введено больше 1 000, 
то выводится сообщение, что данные неверны. Обратите внимание 
на числа 0 и 1. */

let userNumber = Number(prompt('Input a number between 0 and 1000'));

function checkIfPrimeNumber(num) {
    if (Number.isNaN(num) || !Number.isInteger(num) || num < 0 || num > 1000) {
        console.log('This is not a valid number. Only integers between 0 and 1000 are accepted.');
        return;
    } else if (num === 0 || num === 1) {
        console.log('This number is not a prime number!');
        return;
    } else {
        for (let i = 2; i <= (Math.sqrt(num)); i++) {
            if (num % i == 0) {
                console.log(num + " is divisible by " + i);
                console.log('This number is not a prime number!');
                return;
            }
        }
        console.log(num + ': Prime number detected!');
        return;
    }
}

checkIfPrimeNumber(userNumber);