// slideShow
let landing = document.querySelector(".land");
let arr = [
  "images/restorant-1.jpg",
  "images/restorant-2.jpg",
  "images/restorant-3.jpg",
];

let i = 0;

function slideShow() {
  landing.style.backgroundImage = `url(${arr[i]})`;
  if (i == arr.length - 1) {
    i = 0;
  } else {
    i++;
  }
  setTimeout(slideShow, 3000);
}

slideShow();
// restaurant
const menuCategories = document.querySelectorAll(".menu .categeories li");
const menuProducts = document.querySelectorAll(".menu .boxs .box");

menuCategories.forEach((category) => {
  category.addEventListener("click", () => {
    const valueAttr = category.getAttribute("data-filter");

    menuProducts.forEach((product) => {
      product.style.display = "none";

      if (
        product.getAttribute("data-filter").toLowerCase() ===
        valueAttr.toLowerCase()
      ) {
        product.style.display = "grid";
      }
    });

    menuProducts.forEach((product) => {
      product.classList.remove("actives");
    });
    menuCategories.forEach((product) => {
      product.classList.add("actives");
    });

    menuCategories.forEach((category) => {
      category.classList.remove("active");
    });
    category.classList.add("active");
  });
});
