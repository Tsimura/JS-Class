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