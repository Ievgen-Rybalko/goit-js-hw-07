console.log(`В списке ${categoriesList().length} категории.`);



function findCategoriesList() {
    return document.querySelector('ul#categories');
}

function categoriesList() {
    return findCategoriesList().querySelectorAll('li.item');   
}

const categoriesItemsList = categoriesList();

categoriesItemsList.forEach((item) => {
    console.log(`- Категория ${item.querySelector('h2').textContent}`);
    console.log(`- Количество элементов: ${item.querySelectorAll('ul > li').length}`);
});
