let boxes = document.querySelectorAll(".box");
let spans = document.querySelectorAll(".span span");

spans.forEach((span, index) => {
  span.addEventListener("click", () => {
    boxes.forEach((box) => {
      box.classList.remove("active");
    });
    spans.forEach((span) => {
      span.classList.remove("dot");
    });
    boxes[index].classList.add("active");
    span.classList.add("dot");
    // Scroll to the clicked box
    boxes[index].scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
