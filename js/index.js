//3. Напишите цыкл, который выводит в консоль
//числа от max до min по убыванию

// const max = 50;
// const min = 23;
// let total = 0;
// // console.log(total);
// for (let i = max; i >= min; i -= 1) {
//   if (i % 2 !== 0) {
//     continue;
//   }
//   total += i;
//   console.log(i);
// }

// console.log(total);

//5. Напишите код, который будет спрашивать
//логин с помощью prompt и логировать результат
//в консоль браузера

//Если посетитель вводит "Админ",
//то prompt запрашивает пароль.
//Если ничего не ввели или нажата клавиша Esc
//вывести стороку "Отменено"
//В противном случае вывксти строку "Я вас не знаю"

//Пароль проверять так:
//Если введён пароль "Я главный",
//то вывести строку "Здравствуйте!"
//иначе выводить строку "Неверный пароль!"

// let loggin = prompt("Введи логин!");

// if (loggin === "Админ") {
//   console.log(loggin);
//   const pass = prompt("Введите пароль!");
//   if (pass === "Я главный") {
//     console.log("Здравствуйте");
//   } else if (pass === null) {
//     console.log("Отменено!");
//   } else console.log("Неверный пароль!");

// } else if (loggin === null) {
//   console.log("Отменено");
// } else {
//   console.log("Я вас не знаю");
// }

// switch (loggin) {
//   case "Админ":
//     const pass = prompt("Введите пароль!");
//     switch (pass) {
//       case "Я главный":
//         console.log("Здравствуйте");
//         break;
//       case null:
//         console.log("Отменено!");
//         break;
//       default:
//         console.log("Неверный пароль!");
//     }
//     break;
//   case null:
//     console.log("Отменено!");
//     break;
//   default:
//     console.log("Я вас не знаю");
// }

//6. При загрузке страницы пользователю предлагается
//в prompt ввести число. Ввод добавляется к начению
//переменной total.
//Операция ввода числа продолжается до тех пор,
//пока пользователь не нажмет кнопку Cancel в prompt.
//После того как пользователь прекратил ввод нажав на
//кнопку Cancel, показать alert со строкой "Общая сумма введенных чисел равна [число]."
//Делать проверку,что пользователь ввел именно число,
//а не произвольный набор символов, не нужно.


// let userNumber = prompt("Введите число!");
// let total = 0

// while (userNumber) {
//   total += Number(userNumber);
//   userNumber = prompt("Введите число!");
// }

// console.log(total) 

//7. Напишите цикл, который предлагает ввести
//число больше 100 через prompt.
//Если если посетитель ввёл другое число - попросить
//ввести ещё раз и так далее.
//Цикл должет спрашивать число, пока посетитель не
//введёт число больше 100, либо не нажмет кнопку
//Отмена в prompt

let userNumber = prompt("Введите число больше 100")
let check = false;

do {
    if (userNumber < 100) {
        check = true;
        userNumber = prompt("Введите число больше 100");
    } else {
        check = false;
    }
    
} while (check)

console.log(`Вы ввели ${userNumber}`)

// while (userNumber < 100) {
//     userNumber = prompt("Введите число больше 100");
// } console.log(`Вы ввели ${userNumber}`)

let userNumber = prompt("Введите число!");
let total = 0

while (userNumber) {
  total += Number(userNumber);
  userNumber = prompt("Введите число!");
}


console.log(total) 
