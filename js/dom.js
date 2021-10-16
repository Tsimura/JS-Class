//Создать маркированный список.
//Создать кнопки "Add" "Remove", которые будут менять состав списка
//Создать input с которого будем получать значение, которое будет в li
//* Четным li указать красный фон, нечетным -- синим
//Для выполнения задания используйте createElement

// const listRef = document.createElement("ul");
// const inputRef = document.createElement("input");
// const addBtnRef = document.createElement("button");
// addBtnRef.textContent = "add";
// const removeBtnRef = document.createElement("button");
// removeBtnRef.textContent = "remove";
// const containerRef = document.querySelector(".container");
// console.log(listRef);
// console.log(inputRef);
// console.log(addBtnRef);
// console.log(removeBtnRef);
// console.log(containerRef);
// containerRef.append(inputRef, addBtnRef, removeBtnRef, listRef);

// const createItem = () => {
//     const itemRef = document.createElement("li");
//     itemRef.textContent = inputRef.value ? inputRef.value : "nothing";
//     listRef.append(itemRef);
//     console.log(listRef.children.length);
//     const isItemRefEvent = listRef.children.length % 2 === 0
//     itemRef.classList.add(isItemRefEvent ? "even" : "odd");
//     inputRef.value = "";
// }
// addBtnRef.addEventListener('click', createItem)
// removeBtnRef.addEventListener('click', () => {
//     if (listRef.children.length === 0) {
//         console.log("Все элементы были удалены")
//         return;
//     }
//     listRef.removeChild(listRef.lastElementChild);
//  })

//Создать небольшую игру:)
// - Изначально на экране пользователя будет отображаться
//какая - то форма (круг, квадрат, прямоулольник)
// - При нажатии на нее в рандомном порядке форма должна
//меняться на другую
// - Форма каждый раз должна появляться в разных местах на странице
// - Цвет формы в рандомном порядке меняется,
//используя цвета из заранее подготовленного массива

const forms = [
  'width: 100px; height: 100px; border-width: 1px; border-color: #000000',
  'width: 100px; height: 100px; border-radius: 50%; border-width: 1px; border-color: #000000',
  'width: 150px; height: 100px; border-width: 1px; border-color: #000000',
  'width: 200px; height: 100px; border-radius: 100px / 50px;',
  'width: 150px; height: 100px; transform: skew(20deg);',
];
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const randomither = (max) => {
  return Math.floor(Math.random() * max);
};
const shapeEl = document.createElement('div');

// shapeEl.style.cssText = forms[randomither(forms.length - 1)];
// shapeEl.style.backgroundColor = getRandomHexColor();
const positionEl = () => {
  shapeEl.style.cssText = forms[randomither(forms.length - 1)];
  shapeEl.style.backgroundColor = getRandomHexColor();
  shapeEl.style.position = 'absolute';
  let top =
    100 - (shapeEl.clientHeight * 100) / document.documentElement.clientHeight;
  let left =
    100 - (shapeEl.clientWidth * 100) / document.documentElement.clientWidth;
  shapeEl.style.top = `${randomither(top)}%`;
  shapeEl.style.left = `${randomither(left)}%`;
};
positionEl();
shapeEl.addEventListener('click', positionEl);
const containerEl = document.querySelector('.container');
containerEl.append(shapeEl);
