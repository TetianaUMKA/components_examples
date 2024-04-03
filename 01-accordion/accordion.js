'use strict';

const accordionBtns = document.querySelectorAll('.accordion-btn');
const accordionItems = document.querySelectorAll('.item');
const accordionIcon = document.querySelectorAll('.icon');

for (let i = 0; i < accordionBtns.length; i++) {
  accordionBtns[i].addEventListener('click', function () {
    if (!accordionItems[i].classList.contains('open')) {
      accordionItems[i].classList.add('open');
      accordionIcon[i].style.transform = 'rotate(180deg)';
    } else {
      accordionItems[i].classList.remove('open');
      accordionIcon[i].style.transform = 'rotate(0deg)';
    }
  });
}
