gi/*Задание 1.

В прошлом модуле в разделе «Циклы» вы выполняли следующее задание:
Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве.
Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
При выполнении задания необходимо учесть, что массив может содержать не только числа, 
но и, например, знаки, null и так далее. На этот раз оформите решение в виде функции, 
постарайтесь дать этой функции корректное название, вызовите функцию, проанализируйте синтаксис.
*/

let arrMixFunc = [0, 1, -3, 'awesome', null, NaN, 236, true, '$', 4, false];
let zeroCount = 0;
let evenCount = 0;
let oddCount = 0;
let filterCount = 0;

function countEvenOddNumbers(array) {

    for (let i = 0; i < array.length; i++) {
        if (Number.isNaN(array[i]) == true || typeof(array[i]) != 'number') {
            filterCount++;
        } else if (array[i] === 0) {
            zeroCount++;
        } else if (array[i] % 2 == 0) {
            evenCount++;
        } else if (array[i] % 2 != 0) {
            oddCount++; 
        }
    }
    
    console.log(`This array contains ${evenCount} even numbers, not counting ${zeroCount} zero(s).`);
    console.log(`This array contains ${oddCount} odd numbers.`);
    console.log(`*The count has filtered out ${filterCount} non-numbers from this array.`);

    return;

}

countEvenOddNumbers(arrMixFunc);

