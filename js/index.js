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

let loggin = prompt("Введи логин!");

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

switch (loggin) {
  case "Админ":
    const pass = prompt("Введите пароль!");
    switch (pass) {
      case "Я главный":
        console.log("Здравствуйте");
        break;
      case null:
        console.log("Отменено!");
        break;
      default:
        console.log("Неверный пароль!");
    }
    break;
  case null:
    console.log("Отменено!");
    break;
  default:
    console.log("Я вас не знаю");
}
