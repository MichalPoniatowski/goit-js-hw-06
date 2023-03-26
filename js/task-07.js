const range = document.getElementById("font-size-control");
const text = document.getElementById("text");

range.addEventListener("input", (event) => {
  const size = event.currentTarget.value;
  text.style.fontSize = size + "px";
});
