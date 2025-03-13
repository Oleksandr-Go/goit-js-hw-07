const categoriesE = document.querySelector('#categories');

const itemsE = categoriesE.querySelectorAll('.item');

console.log(`Number of categories: ${itemsE.length}`);

itemsE.forEach(item => {
  const title = item.querySelector('h2').textContent;

  const items = item.querySelectorAll('ul li').length;

  console.log(`Category: ${title}`);
  console.log(`Elements: ${items}`);
});
