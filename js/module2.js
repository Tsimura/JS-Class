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

// function findSmallerNumber(numbers) {
//     // let smallestNumber = Math.min(...numbers);
//     return Math.min(...numbers)
// }

// console.log(findSmallerNumber([2, 5, 35, 56, 12, 24, 7, 80, 3]));

//Напиши функцию caculculateAverage()
//которая принимает произвольное количество
//аргументов и возвращает их среднее значение.
//Добавить проверку, что аргументы это числа.

// function caculculateAverage(...args) {
//     let total = 0;
//     let count = 0;
//     for (const arg of args) {
//         if (typeof arg !== `number`) {
//           console.log(`${arg} это не число`)
//             continue
//         }

//         total += arg
//         count += 1
//     } return Math.round(total / count)

// }

// console.log(caculculateAverage(2, 5, 35, 56, 12, 24, 7, 80, 3));

//Напиши функцию findLongestWord(string)
//которая принимает произвольную строку
//состоящую только из слов разделенных
//пробелом (параметр string)
//и возвращает самое длинное слово в этой строке

// function findLongestWord(string) {
//     const stringToArray = string.split(' ');
//     let longestWord = stringToArray[0];
//     for (let i = 0; i < stringToArray.length; i++) {
//         if (longestWord.length < stringToArray[i].length) {
//             longestWord = stringToArray[i];
//         }

//     }
//     return longestWord;

// }
// console.log(findLongestWord('которая принимает произвольную строку'));

// function findSmallestWord(string) {
//         const stringToArray = string.split(' ');
//     let smallestWord = stringToArray[0];
//     for (let i = 0; i < stringToArray.length; i++) {
//         if (smallestWord.length > stringToArray[i].length) {
//             smallestWord = stringToArray[i];
//         }

//     }
//     return smallestWord;

// }
// console.log(findSmallestWord('которая принимает произвольную строку'));

//Напишиет функцию findTheColor()
//которая принимает название цвета
//определяет его наличие в массиве
//если цвет есть, усталавливет его как фон документа
//если цвета нет выводит console.error('Такой цвет не найден');
//и устанавливает цвет документа красный
// document.body.style.background = 'red';
// const colors = ["blue", "yellow", "olive", "fuchsia", "lime", "aqua", "maroon"];

// function findTheColor(color) {
//   if (colors.includes(color)) {
//     document.body.style.background = color;
//   } else {
//     document.body.style.background = "red";
//   }
// }

// console.log(findTheColor("lime"));

// function findTheColor(color) {
//   document.body.style.background = "red";
//   if (colors.includes(color)) {
//     document.body.style.background = color;
//   }
// }

// console.log(findTheColor("gblue"));

// function findTheColor(color) {
//   document.body.style.background = colors.includes(color) ? color : "red";
// }

// console.log(findTheColor("fuchsia"));

//Напишите функции для работы с массивом
//add(name) добавляет курс в конец коллекции
//removeCourse(name) удаляет курс из коллекции
//updateCourse(oldName, newName) изменяет имя на новое

// const course = [];
// function addCourse(name) {
//   course.push(name)

// }
// function removeCorse(name) {
//   const indexOfName = course.indexOf(name)

// course.splice(indexOfName, 1)
// }
// function updateCourse(oldName, newName) {

//   const indexOfName = course.indexOf(oldName)
//   course.splice(indexOfName, 1, newName)
// }

// addCourse("HTML")
// addCourse("JS")
// addCourse("CSS")
// removeCorse("CSS")
// updateCourse("HTML", "React")
// console.log(course)

// Напишите скрипт который заменяет регистр каждого символа
//в стороке на противоположный
//Например 'JavaScript' должен вернуть 'jAVAsCRIPT'

function updateRegister(string) {
  const stringLetters = string.split('');
  let reversLetter = [];

  for (let stringLetter of stringLetters) {
    let newLetter;

    if (stringLetter !== stringLetter.toLowerCase()) {
      newLetter = stringLetter.toLowerCase();
      // console.log(newLetter);
      reversLetter.push(newLetter);
      continue;
    }
    newLetter = stringLetter.toUpperCase();
    reversLetter.push(newLetter);
    // console.log(newLetter);
  }
  console.log(reversLetter);
  console.log(reversLetter.join(' '));
  return reversLetter.join(' ');
}
updateRegister('JavaScript');
