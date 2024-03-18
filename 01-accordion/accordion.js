"strict";

const accordionBtns = document.querySelectorAll(".accordion-btn");
const accordionItems = document.querySelectorAll(".item");

for (let i = 0; i < accordionBtns.length; i++) {
  accordionBtns[i].addEventListener("click", function () {
    if (!accordionItems[i].classList.contains("open"))
      accordionItems[i].classList.add("open");
    else accordionItems[i].classList.remove("open");
  });
}
