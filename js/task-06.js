// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur),
// перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість смиволів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

const inputEl = document.getElementById("validation-input");

inputEl.addEventListener("blur", (event) => {
  if (inputEl.value.length == inputEl.dataset.length) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  }
  if (inputEl.value.length != inputEl.dataset.length) {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
  if (inputEl.value.length === 0) {
    inputEl.classList.remove("invalid");
    inputEl.classList.remove("valid");
  }
});
