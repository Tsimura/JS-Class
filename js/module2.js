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