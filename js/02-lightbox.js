import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

const galleryContainerMarkup = 
    galleryItems.map(({ preview, original, description }) => {
      return   `
    <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
`;
    }).join("");

galleryContainer.insertAdjacentHTML('beforeend', galleryContainerMarkup);

galleryContainer.addEventListener('click', onLargeImage);

function onLargeImage(evt) {
    evt.preventDefault();
    if (!evt.target.classList.contains("gallery__image")) {
        return;
    }
}
let galleryLightBox = new SimpleLightbox('.gallery__item', {
    captionDelay: 250,
    captionsData: "alt",
});
