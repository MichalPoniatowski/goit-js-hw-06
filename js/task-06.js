const input = document.getElementById("validation-input");

input.addEventListener("blur", () => {
  const length = input.dataset.length;
  const text = input.value.length;

  if (text === Number(length)) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
});
