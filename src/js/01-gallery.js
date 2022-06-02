// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";


const containerGalleryEl = document.querySelector('.gallery');

const listItemsMarkup = createGalleryItems(galleryItems);
containerGalleryEl.insertAdjacentHTML('beforeend', listItemsMarkup);

function createGalleryItems(items) {
    return items.map(({ preview, original, description }) => `
    <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>`
    ).join('');
};

var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

console.log(galleryItems);
