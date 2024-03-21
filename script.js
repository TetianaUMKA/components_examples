'use strict';

const previewOpenBtn = document.querySelector('.preview-open-btn');
const previewCloseBtn = document.querySelector('.preview-close-btn');
const previewModal = document.querySelector('.preview-modal');
const overlay = document.querySelector('.overlay');

previewOpenBtn.addEventListener('click', function () {
  previewModal.classList.remove('hidden');
  overlay.classList.remove('hidden');
});

previewCloseBtn.addEventListener('click', function () {
  previewModal.classList.add('hidden');
  overlay.classList.add('hidden');
});
