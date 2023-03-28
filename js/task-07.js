const range = document.getElementById("font-size-control");
const text = document.getElementById("text");
const defaultSize = range.value;

text.style.fontSize = defaultSize + "px";

range.addEventListener("input", (event) => {
  const size = event.currentTarget.value;
  text.style.fontSize = size + "px";
});
