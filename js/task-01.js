const categoryEl = document.querySelectorAll(".item");
console.log(`У списку ${categoryEl.length} категорії.`);

// const categoryName = document.querySelectorAll("h2");
// categoryName.forEach((el) => console.log(`Категорія: ${el.textContent}`));

const categoryName = document.querySelectorAll("li.item");
categoryName.forEach(
  (el) =>
    console.log("Категорія:", el.firstElementChild.textContent) +
    console.log("Кількість елементів:", el.lastElementChild.children.length)
);
