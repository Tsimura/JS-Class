//Создайте массив styles с элементами «Джаз» и «Блюз».
//Добавьте «Рок-н-ролл» в конец.
//Замените значение «Блюз» на «Классика».
//Удалите первый элемент массива и выведите его в консоль.
//Вставьте «Рэп» и «Регги» в начало массива.

// const styles = ["Джаз", "Блюз"];
// styles.push("Рок-н-ролл");
// styles.splice(1, 1, "Классика");
// console.log(styles.shift())
// styles.unshift("Рэп", "Регги");
// console.log(styles);


//Напиши функцию min(a, b), которая возвращает
//меньшее из чисел a, b
//нужно добавить проверку, что функция получает числа

// function min(a, b) {
//     let c = 0;
    
//     return Math.min(a, b);
// }
// console.log(min(3, 5));

// function min(a, b) {
//     if (a > b) {
//         return b;
//     }

//     return a;
// }
// console.log(min(3, 5));

// function min(a, b) {
//     if (typeof a !== 'number' || typeof b !== 'number') {
//         return 'передали не число';
//     }
// // console.log (typeof a)
//     return a > b ? b : a;
// }
// console.log(min(3, 5));




// /Напишите функцию logItems(array) которая принимает
//массив и использует цикл for, который для каждого
//элемента массива будет выводить сообщение в формате
//<номер элемента> - <значение элемента>
//Нумерация элементов должна начинаться с 1.
//['Джаз', 'Блюз', 'Рок-н-ролл', 'Регги', 'Рэп']



// function logItems(array) {
   
// for (let i = 0; i < array.length; i++) {
 
//     console.log(`${i + 1} - ${array[i]}`)
    
// }

// }
// logItems(['Джаз', 'Блюз', 'Рок-н-ролл', 'Регги', 'Рэп'])



//Напиши функцию findSmallerNumber(numbers)
//которая ищет самое маленькое число в массиве
//Добавь проверку что функция получает массив
//const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

// function findSmallerNumber(numbers) {
//     let smallestNumber = numbers[0];
//     for (let i = 0; i < numbers.length; i++) {
//         if (smallestNumber > numbers[i]) {
//             smallestNumber = numbers[i]
//         }
//       } return smallestNumber
// }

// console.log(findSmallerNumber([2, 5, 35, 56, 12, 24, 7, 80, 3, -1]));

function findSmallerNumber(numbers) {
    // let smallestNumber = Math.min(...numbers);
    return Math.min(...numbers)
}


console.log(findSmallerNumber([2, 5, 35, 56, 12, 24, 7, 80, 3]));