const listOfCategory = document.querySelector('ul#categories');
const listOfCategoryItem = listOfCategory.querySelectorAll('li.item');
console.log(`Number of categories: ${listOfCategoryItem.length}`);

listOfCategoryItem.forEach((item) => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`);
});