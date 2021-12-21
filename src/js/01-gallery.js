import { galleryItems } from './gallery-items.js';      
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';


console.log(galleryItems);

const galleryDiv = document.querySelector('.gallery');

console.log(galleryDiv);

galleryItems.forEach(item => {
  galleryDiv.insertAdjacentHTML(
    'afterbegin',
    `
  <a class="gallery__item" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.original}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
`,
  );
  const link = document.querySelector('.gallery__item');

  link.addEventListener('click', function (e) {
    e.preventDefault();
  });
});

let lightbox = new SimpleLightbox('.gallery a', {
  captions: 'true',
  captionSelector: 'img',
  captionType: 'string',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: '250',
});