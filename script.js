'use strict';
const previewOpenBtns = document.querySelectorAll('.preview-open-btn');
const previewCloseBtn = document.querySelector('.preview-close-btn');
const previewModal = document.querySelector('.preview-modal');
const overlay = document.querySelector('.overlay');
const previewImg = document.querySelector('.preview-img');

const closeModal = function () {
  previewModal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Opening the modal with different content

// way #1

// for (let i = 0; i < previewOpenBtns.length; i++) {
//   previewOpenBtns[i].addEventListener('click', function () {
//     previewImg.srcset = `images/component-${i + 1}.jpg 1x, images/component-${
//       i + 1
//     }-2x.jpg 2x`;
//     previewImg.src = `images/component-${i + 1}.jpg`;
//     previewModal.classList.remove('hidden');
//     overlay.classList.remove('hidden');
//   });
// }

// way #2

// for (let [i, previewOpenBtn] of previewOpenBtns.entries()) {
//   previewOpenBtn.addEventListener('click', function () {
//     previewImg.srcset = `images/component-${i + 1}.jpg 1x, images/component-${
//       i + 1
//     }-2x.jpg 2x`;
//     previewImg.src = `images/component-${i + 1}.jpg`;
//     previewModal.classList.remove('hidden');
//     overlay.classList.remove('hidden');
//   });
// }

// way #3

// previewOpenBtns.forEach(function (previewOpenBtn, i) {
//   previewOpenBtn.addEventListener('click', function () {
//     previewImg.srcset = `images/component-${i + 1}.jpg 1x, images/component-${
//       i + 1
//     }-2x.jpg 2x`;
//     previewImg.src = `images/component-${i + 1}.jpg`;
//     previewModal.classList.remove('hidden');
//     overlay.classList.remove('hidden');
//   });
// });

previewOpenBtns.forEach(function (previewOpenBtn, i) {
  previewOpenBtn.addEventListener('mouseover', function () {
    setTimeout(function () {
      previewImg.srcset = `images/component-${i + 1}.jpg 1x, images/component-${
        i + 1
      }-2x.jpg 2x`;
      previewImg.src = `images/component-${i + 1}.jpg`;
      previewModal.classList.remove('hidden');
      overlay.classList.remove('hidden');
    }, 600);
  });
});

previewCloseBtn.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  // console.log(e.key);
  if (e.key === 'Escape' && !previewModal.classList.contains('hidden')) {
    closeModal();
  }
});

overlay.addEventListener('click', closeModal);
