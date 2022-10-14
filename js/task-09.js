// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color
// і виводить значення кольору в span.color.
// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

const body = document.querySelector("body");
const btnEl = document.querySelector(".change-color");
const spanColorEl = document.querySelector(".color");

btnEl.addEventListener("click", () => {
  body.style.backgroundColor = getRandomHexColor();
  spanColorEl.textContent = getRandomHexColor();
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
