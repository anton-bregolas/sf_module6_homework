/*Задание 5. (6.8-5)

Напишите функцию, которая принимает два натуральных числа x и n 
и возвращает x в степени n. Иначе говоря, умножает x на себя n раз 
и возвращает результат. Используйте Arrow Function синтаксис.
Протестируйте функцию на любых значениях и выведите результат в консоль.*/

// 5(a) - fully written function, not using methods or ** operator, more mathematically accurate

const xToThePowerOfN = (x, n) => {
    let result = x;
    if (n !== 0 && typeof x === 'number' && typeof n === 'number' && !isNaN(x) && !isNaN(n)) {
        if (n < 0 && x === 0) {
            return console.log('You just tried to divide by 0!');
        }
        for (let i = 1; i <= Math.abs(n) - 1; i++) {
            result = result * x;
        }
        if (result > 1.797693134862315E+308) {
            return console.log('This value is too large for JavaScript to handle!');
        } else if (n < 0) {
            result = 1 / result;
            return console.log(result);
        } else {
            return console.log(result);
        }

    } else if (n === 0) {
        return console.log(1);

    } else {
        return console.log('Error!');
    }
}

console.log('This function does not use ** operator or Math.pow() method');

xToThePowerOfN(2, 3); // 8
xToThePowerOfN(2, -3); // 0.125
xToThePowerOfN(-2, 5); // -32
xToThePowerOfN(-2, -3); // -0.125
xToThePowerOfN(0, 3); // 0
xToThePowerOfN(0, 0); // 1
xToThePowerOfN(0, -3); // You just tried to divide by 0!
xToThePowerOfN(3, 3333); // This value is too large for JavaScript to handle!
xToThePowerOfN(3, true); // Error!
xToThePowerOfN("asf", 3); // Error!
xToThePowerOfN(NaN, null); // Error!

// 5(b) - using ** operator

const xPowN = (x, n) => {
    let result = x ** n;
    return console.log(result);
}

console.log('');
console.log('This function uses ** operator and no additional checks');

xPowN(2, 3); // 8
xPowN(2, -3); // 0.125
xPowN(-2, 5); // -32
xPowN(-2, -3); // -0.125
xPowN(0, 3); // 0
xPowN(0, 0); // 1
xPowN(0, -3); // Infinity
xPowN(3, 3333); // Infinity
xPowN(3, true); // 3
xPowN("asf", 3); // NaN
xPowN(NaN, null); // 1

// 5(c) - using Math.pow() method

const xMathPowN = (x, n) => {
    let result = x ** n;
    return console.log(result);
}

console.log('');
console.log('This function uses Math.pow() method and no additional checks');

xMathPowN(2, 3); // 8
xMathPowN(2, -3); // 0.125
xMathPowN(-2, 5); // -32
xMathPowN(-2, -3); // -0.125
xMathPowN(0, 3); // 0
xMathPowN(0, 0); // 1
xMathPowN(0, -3); // Infinity
xMathPowN(3, 3333); // Infinity
xMathPowN(3, true); // 3
xMathPowN("asf", 3); // NaN
xMathPowN(NaN, null); // 1