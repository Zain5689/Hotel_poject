// let arr = ["images/slider-1.jpg", "images/slider-2.jpg", "images/slider-4.jpg"];

// Toggle Menu
let toggleBtn = document.querySelector(".toggle-menu");
let tLinks = document.querySelector(".links ul");

toggleBtn.onclick = function (e) {
  e.stopPropagation();
  this.classList.toggle("menu-active");
  tLinks.classList.toggle("open");
};

document.addEventListener("click", (e) => {
  if (e.target !== toggleBtn && e.target !== tLinks) {
    if (tLinks.classList.contains("open")) {
      toggleBtn.classList.toggle("menu-active");
      tLinks.classList.toggle("open");
    }
  }
});
tLinks.onclick = function (e) {
  e.stopPropagation();
};

// slidShow
let landing = document.querySelector(".landing");
let arr = ["images/slider-1.jpg", "images/slider-2.jpg", "images/slider-4.jpg"];

let i = 0;

function slideShow() {
  landing.style.backgroundImage = `url(${arr[i]})`;
  if (i == arr.length - 1) {
    i = 0;
  } else {
    i++;
  }
  setTimeout(slideShow, 5000);
}

slideShow();
