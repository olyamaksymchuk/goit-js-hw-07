import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

const galleryContainerMarkup = 
    galleryItems.map(({ preview, original, description }) => {
         `
    <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>

`;
    }).join("");

galleryContainer.insertAdjacentHTML('beforeend', galleryContainerMarkup);
