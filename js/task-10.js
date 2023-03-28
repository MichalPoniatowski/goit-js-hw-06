// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// const create = document.querySelector("button[data-create]");
// const input = document.querySelector("#controls input");
// const destroy = document.querySelector("button[data-destroy]");
// const boxes = document.getElementById("boxes");

// function createBoxes(amount) {
//   let boxChildren = boxes.children;
// let size =
//   boxChildren.length === 0 ? 30 : parseInt(boxes.lastChild.style.width) + 10;

//   for (let i = 0; i < amount; i++) {
//     size += i * 10;
//     const box = document.createElement("div");
//     boxes.append(box);
//     box.style.width = size + "px";
//     box.style.height = size + "px";
//     box.style.backgroundColor = getRandomHexColor();
//     box.style.marginBottom = "10px";
//   }
// }

// create.addEventListener("click", () => {
//   let amount = input.value;
//   createBoxes(amount);
// });

// destroy.addEventListener("click", (event) => {
//   boxes.innerHTML = "";
// });

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const divBox = document.querySelector("#boxes");
const firstdiv = document.createElement("div");

let size = 20;

firstdiv.style.backgroundColor = getRandomHexColor();

const getInputValue = () => {
  for (let i = 0; i < document.querySelector("input").value; i++) {
    const divEl = document.createElement("div");
    divBox.append(divEl);
    divEl.setAttribute(
      "style",
      "width: " +
        (size += 10) +
        "px;" +
        " height: " +
        size +
        "px;" +
        " background-color: " +
        getRandomHexColor()
    );
    console.log(size);
  }
};

const removeAct = () => {
  const list = document.getElementById("boxes");
  const input = document.querySelector('input[type="number"]');
  // while (list.hasChildNodes()) {
  //   list.removeChild(list.firstChild);
  list.innerHTML = "";
  size = 20;
  input.value = "";
};

createBtn.addEventListener("click", getInputValue);
destroyBtn.addEventListener("click", removeAct);
