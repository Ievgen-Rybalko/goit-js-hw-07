const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


const ingredientsUL = document.querySelector('#ingredients');

const makeLiElems = items => {
    return items.map((item) => {
    const liElem = document.createElement('li');
    liElem.textContent = item;
    return liElem;
})
};

const allLiElements = makeLiElems(ingredients);

console.log(allLiElements);
ingredientsUL.append(...allLiElements);