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

// const forms = [
//   'width: 100px; height: 100px; border-width: 1px; border-color: #000000',
//   'width: 100px; height: 100px; border-radius: 50%; border-width: 1px; border-color: #000000',
//   'width: 150px; height: 100px; border-width: 1px; border-color: #000000',
//   'width: 200px; height: 100px; border-radius: 100px / 50px;',
//   'width: 150px; height: 100px; transform: skew(20deg);',
// ];
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
// const randomither = (max) => {
//   return Math.floor(Math.random() * max);
// };
// const shapeEl = document.createElement('div');

// // shapeEl.style.cssText = forms[randomither(forms.length - 1)];
// // shapeEl.style.backgroundColor = getRandomHexColor();
// const positionEl = () => {
//   shapeEl.style.cssText = forms[randomither(forms.length - 1)];
//   shapeEl.style.backgroundColor = getRandomHexColor();
//   shapeEl.style.position = 'absolute';
//   let top =
//     100 - (shapeEl.clientHeight * 100) / document.documentElement.clientHeight;
//   let left =
//     100 - (shapeEl.clientWidth * 100) / document.documentElement.clientWidth;
//   shapeEl.style.top = `${randomither(top)}%`;
//   shapeEl.style.left = `${randomither(left)}%`;
// };
// positionEl();
// shapeEl.addEventListener('click', positionEl);
// const containerEl = document.querySelector('.container');
// containerEl.append(shapeEl);


const mediaPlayer = document.querySelector(`.player`)
const toggleBtn = mediaPlayer.querySelector(`.toggle`)
const video = mediaPlayer.querySelector(`.viewer`)
const skipBtns = mediaPlayer.querySelectorAll(`[data-skip]`)
const playerSlider = mediaPlayer.querySelectorAll(`.player__slider`)
const progress = mediaPlayer.querySelector(`.progress`)
const progressBar = mediaPlayer.querySelector(`.progress__filled`)

let mousedown = false

// console.log(toggleBtn)
video.addEventListener(`play`, updateBtn)
video.addEventListener(`pause`, updateBtn)
video.addEventListener(`click`, togglePlay)
video.addEventListener(`timeupdate`, hundleProgress)

skipBtns.forEach(btn => btn.addEventListener(`click`, skip))
playerSlider.forEach(slider => slider.addEventListener(`input`, handleChangeUpdate))
progress.addEventListener(`click`, scrab)

progress.addEventListener(`mousedown`, () => mousedown = true)
progress.addEventListener(`mouseup`, () => mousedown = false)
progress.addEventListener(`mousemove`, event => mousedown && scrab(event) )

toggleBtn.addEventListener(`click`, togglePlay)

function togglePlay() {
  const method = video.paused ? "play" : "pause";
  video[method]()
}

function updateBtn() {
  const icon = this.paused ? '▶' : '❚ ❚'
  toggleBtn.textContent = icon
}

function skip() {
  video.currentTime += Number(this.dataset.skip)
}

function handleChangeUpdate() {
  video[this.name] = this.value
}

function scrab(event) {
  const scrabTime = (event.offsetX / progress.offsetWidth) * video.duration
  video.currentTime = scrabTime
}

function hundleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`
}

const a = [121, 144, 19, 161, 19, 144, 19, 11];
const b = [121, 14641, 20736, 361, 25921, 361, 20736, 361];

function comp(a, b) {
  if (!a || !b) return false;
  if (a.length !== b.length) return false;
  const sortA = [...a].sort((pre, next) => pre - next);
  const sortB = [...b].sort((pre, next) => pre - next);
  console.log(sortA);
  console.log(sortB);
  const aPow = sortA.map((e) => Math.pow(e, 2));
  for (let i = 0; i < aPow.length; i += 1) {
    if (aPow[i] !== sortB[i]) {
      return false;
    }
  }
  console.log(aPow);
  return true;
}

console.log(comp(a, b));
