const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.getElementById("ingredients");

ingredients.forEach((item) => {
  let ingredient = document.createElement("li");
  ingredient.textContent = item;
  list.append(ingredient);
  ingredient.classList.add("item");
});
