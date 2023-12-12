let button = document.querySelector("button");

button.addEventListener("click", (e) => {
  e.target.previousElementSibling.classList.toggle("d-none");
});
