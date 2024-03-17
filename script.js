"strict";

const accordionBtn = document.querySelector(".accordion-btn");

const accordionItem = document.querySelector(".item");

// const openHiddenInfo = function () {};

for (let i = 0; i < accordionBtn.length; i++) {
  accordionBtn[i].addEventListener("click", function () {
    console.log("ok");
    accordionItem.classList.add("open");
  });
}
// accordionBtn.addEventListener("click", function () {
//   console.log("ok");
//   accordionItem.classList.add("open");
// });
