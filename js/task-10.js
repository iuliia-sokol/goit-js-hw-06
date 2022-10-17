// Напиши скрипт створення і очищення колекції елементів. Користувач вводить
//  кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція.
//  Натисненням на кнопку Очистити, колекція елементів очищається.

// Створи функцію createBoxes(amount), яка приймає один параметр - число.
//  Функція створює стільки < div >, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX.
// Використовуй готову функцію getRandomHexColor для отримання кольору.

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

const inputEl = document.querySelector("input");
const btnCreateEl = document.querySelector("[data-create]");
const btnDestroyEl = document.querySelector("[data-destroy]");

const boxesContainerEl = document.getElementById("boxes");
boxesContainerEl.style.display = "flex";
boxesContainerEl.style.flexWrap = "wrap";
boxesContainerEl.style.gap = "10px";
boxesContainerEl.style.marginTop = "20px";

btnCreateEl.addEventListener("click", () => {
  destroyBoxes();
  createBoxes(+inputEl.value);
});

btnDestroyEl.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  const divArray = [];
  const basicWidth = 30;
  const basicHeight = 30;
  for (let i = 0; i < amount; i++) {
    const divEL = document.createElement("div");
    divEL.style.backgroundColor = getRandomHexColor();
    divEL.style.width = `${basicWidth + 10 * i}px`;
    divEL.style.height = `${basicHeight + 10 * i}px`;
    divArray.push(divEL);
  }
  return boxesContainerEl.append(...divArray);
}

function destroyBoxes() {
  return (boxesContainerEl.innerHTML = "");
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
