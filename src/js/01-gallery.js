import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

const galleryContainerMarkup = 
    galleryItems.map(({ preview, original, description }) => {
      return   `
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

galleryContainer.addEventListener('click', onLargeImage);

function onLargeImage(evt) {
    evt.preventDefault();
    if (!evt.target.classList.contains("gallery__image")) {
        return;
}

const instance = basicLightbox.create(
    `<img src="${evt.target.dataset.source}" width="800" height="600"/>`, {
    onShow: () => document.addEventListener('keydown', onCloseModal),
    onClose: () => document.addEventListener('keydown', onCloseModal),
});

instance.show();

function onCloseModal(evt) {
    if (evt.code === "Escape") {
        instance.close();
    }
}
}