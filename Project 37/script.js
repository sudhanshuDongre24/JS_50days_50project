const container = document.querySelector(".container");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");

console.log(container, btn, input);

btn.addEventListener("click", () => {
  input.value = "";
  container.classList.toggle("active");
  input.focus();
});
