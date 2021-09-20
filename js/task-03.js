const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const listImages = document.querySelector("#gallery");

const createItemLi = (obj) => {
  return `<li><img class = gallery__img src = '${obj.url}' alt = '${obj.alt} '></img></li>`;
};
const allListEl = images.map(createItemLi).join("");

listImages.insertAdjacentHTML("afterbegin", allListEl);

// const galleryImg = (document.querySelector(".gallery__img").style.width =
//   "640px");
// gallery__img.style.width = "640px";
// gallery__img.style.height = "640px";

// const imageEl = document.querySelectorAll(".gallery__img");
// imageEl.style.width = "50%";
// imageEl.style.height = auto;
// listImages.classList.add("gallery__items");

console.log(allListEl);
