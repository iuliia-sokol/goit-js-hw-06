// Напиши скрипт, який реагує на зміну значення input#font - size - control(подія input)
// і змінює інлайн - стиль span#text, оновлюючи властивість font - size.
// В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const inputEl = document.getElementById("font-size-control");
const textEl = document.getElementById("text");

inputEl.addEventListener("change", () => {
  console.log(inputEl.value);
  textEl.style.fontSize = inputEl.value + "px";
});
