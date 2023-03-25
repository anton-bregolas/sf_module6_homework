/* Задание 4. (6.7-4)

Напишите функцию, которая принимает два числа. Каждую секунду необходимо 
выводить в консоль, начиная от первого и заканчивая вторым. Используйте setInterval.
Например, пользователь ввёл числа 5 и 15. Каждую секунду в консоль должно печататься 
число, начиная с 5 и заканчивая 15 (всего 11 чисел: 5 6 7 8 9 10 11 12 13 14 15). */

// 4(a) - long way, but easy to understand

function printInterval(num1, num2) {
    let i = num1;
    let timerId = setInterval(function () {
        if (i <= num2) {
            console.log(i);
            i++;
        } else {
            clearInterval(timerId);
        }
    }, 1000);
}

// printInterval(5, 15);

/* 4(b) - shorter

function printInterval(num1, num2) {
    let i = num1;
    let timerId = setInterval(function () {
        console.log(i);    
        if (i == num2) {
            clearInterval(timerId);
        } 
        i++;
    }, 1000);
} 
*/

/*4(c) - even shorter

function printInterval(num1, num2) {
    let timerId = setInterval( () => {
        num1 <= num2 ? (console.log(num1), num1++) : clearInterval(timerId);
    }, 1000);
}

printInterval(5, 15);
*/