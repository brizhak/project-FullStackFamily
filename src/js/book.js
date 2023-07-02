import './category';
import './modal-window';
import { fetchSelectedBook } from './api_request';
import Notiflix from 'notiflix';
let modalBodyCard = document.querySelector('.modal-body-card');
const booksCategoryEl = document.querySelector('.books-category');

booksCategoryEl.addEventListener('click', onSelectBook);

function onSelectBook(evt) {
  let touchTagA = evt.target.closest('a');

  if (!touchTagA) return;

  if (!booksCategoryEl.contains(touchTagA)) return;

  console.log(touchTagA.id);

  getBook(touchTagA.id);
}

async function getBook(id) {
  try {
    let book = await fetchSelectedBook(id);
    renderSelectedBook(book);
  } catch (error) {
    Notiflix.Notify.failure('Something went wrong. Please try again');
  }
}

function renderSelectedBook(book) {
  const markup = `
        <div class="modal-body-image">
            <img
                src="${book.book_image}"
                alt="${book.title}"
                class="modal-body-image-poster"
            />
        </div>
        <div class="modal-body-about-book">
            <h2 class="modal-body-title">${book.title}</h2>
            <h3 class="modal-body-autor">${book.author}</h3>
            <p class="modal-body-text">
                ${book.description}
            </p>
        </div>
        <div class="modal-body-logo">
            <ul class="modal-body-logo-list">
                <li class="modal-body-logo-item">
                <a
                    href="${book.buy_links[0].url}"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Amazon"
                    class="modal-body-logo-link"
                >
                    <picture>
                    <source srcset="./img/shopping/amazon.png" type="image/png" />
                    <img
                        class="modal-body-media-icon-amazon"
                        src="./img/shopping/amazon.png"
                        alt="Amazon logo"
                        width="32"
                        height="11"
                    />
                    </picture>
                </a>
                </li>
                <li class="modal-body-logo-item">
                <a
                    href="${book.buy_links[1].url}"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Apple Books"
                    class="modal-body-logo-link"
                >
                    <picture>
                    <source srcset="./img/shopping/apple.png" type="image/png" />
                    <img
                        class="modal-body-media-icon"
                        src="./img/shopping/apple.png"
                        alt="Apple book logo"
                        width="16"
                        height="16"
                    /> </picture
                ></a>
                </li>
                <li class="modal-body-logo-item">
                <a
                    href="${book.buy_links[4].url}"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Bookshop"
                    class="modal-body-logo-link"
                >
                    <picture>
                    <source
                        srcset="./img/shopping/bookshop.png"
                        type="image/png"
                    />
                    <img
                        class="modal-body-media-icon"
                        src="./img/shopping/bookshop.png"
                        alt="Book shop logo"
                        width="16"
                        height="16"
                    /> </picture
                ></a>
                </li>
            </ul>
        </div>`;

  console.log(markup);
}
