const input = document.getElementById("name-input");

const output = document.getElementById("name-output");

input.addEventListener("input", (event) => {
  if (event.currentTarget.value === "") {
    output.textContent = "Anonymous";
  } else {
    output.textContent = event.currentTarget.value;
  }
});
