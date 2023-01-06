const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');

const liArray = ingredients.map(ingredient => {
	const item = document.createElement('li')
	item.className= 'item'
	item.textContent = ingredient
	return item
});
list.append(...liArray);

console.log(list)
// const liArray = ingredients
// .map(ingredient => `<li class="item">${ingredient}</li>`)
// .join("")
// list.insertAdjacentHTML('beforeend',liArray)