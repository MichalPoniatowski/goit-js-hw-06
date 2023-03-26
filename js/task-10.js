function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const create = document.querySelector("button[data-create]");
const input = document.querySelector("#controls input");
const destroy = document.querySelector("button[data-destroy]");
const boxes = document.getElementById("boxes");

// function createBoxes(amount) {
//   let boxChildren = boxes.children;

//   if (boxChildren.length === 0) {
//     for (let i = 0; i < amount; i++) {
//       let size = 30;
//       size += i * 10;
//       const box = document.createElement("div");
//       boxes.append(box);
//       box.style.width = size + "px";
//       box.style.height = size + "px";
//       box.style.backgroundColor = getRandomHexColor();
//       box.style.marginBottom = "10px";
//     }
//   } else {
//     let size = parseInt(boxes.lastChild.style.width) + 10;
//     for (let i = 0; i < amount; i++) {
//       size += i * 10;
//       const box = document.createElement("div");
//       boxes.append(box);
//       box.style.width = size + "px";
//       box.style.height = size + "px";
//       box.style.backgroundColor = getRandomHexColor();
//       box.style.marginBottom = "10px";
//     }
//   }
// }

function createBoxes(amount) {
  let boxChildren = boxes.children;
  let size =
    boxChildren.length === 0 ? 30 : parseInt(boxes.lastChild.style.width) + 10;

  for (let i = 0; i < amount; i++) {
    size += i * 10;
    const box = document.createElement("div");
    boxes.append(box);
    box.style.width = size + "px";
    box.style.height = size + "px";
    box.style.backgroundColor = getRandomHexColor();
    box.style.marginBottom = "10px";
  }
}

create.addEventListener("click", () => {
  let amount = input.value;
  createBoxes(amount);
});

destroy.addEventListener("click", (event) => {
  boxes.innerHTML = "";
});
