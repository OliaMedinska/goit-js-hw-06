const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const listEl = document.querySelector('#ingredients');
let newEl = [];

for (let ingredient of ingredients) {
  const ingredientsList = document.createElement('li');
  ingredientsList.textContent+=ingredient;
  ingredientsList.classList.add('item');

  newEl.push(ingredientsList);
}

listEl.append(...newEl); 


/*
const listEl = document.querySelector('#ingredients');
const newEl = ingredients.map((ingredient) => `<li class='item'>${ingredient}</li>`).join('');
listEl.insertAdjacentHTML('afterbegin', newEl); */