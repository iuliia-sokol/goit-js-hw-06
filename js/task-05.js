// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input),
// підставляє його поточне значення в span#name - output.
// Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

const inputEl = document.getElementById("name-input");
const outputEl = document.getElementById("name-output");

inputEl.addEventListener("input", (event) => {
  if (inputEl.value === "") {
    return (outputEl.textContent = "Anonymous");
  }
  return (outputEl.textContent = inputEl.value);
});
