import {
  fetchCategoryList,
  fetchTopBooks,
  fetchCertainCategory,
} from './api_request';
import Notiflix from 'notiflix';

const categoryEl = document.querySelector('.category-list');
const booksCategoryEl = document.querySelector('.books-category');
const h1El = document.querySelector('.title-category');

allCategorys();

async function allCategorys() {

  await fetchTopBooks().then((topBooks) => {
    topBooks.map((books) =>
      renderTopBooks(books))
  });
};


addCategorys();

async function addCategorys() {
  await fetchCategoryList().then(categorys => renderCategorys(categorys));
}

function renderCategorys(arr) {
  const markup = arr
    .map(({ list_name }) => {
      return `
      <li>
                <a href="#" class="category-link">${list_name}</a>
            </li>
      `;
    })
    .join('');
  categoryEl.insertAdjacentHTML('beforeend', markup);
}

categoryEl.addEventListener('click', onSelectCategory);

function onSelectCategory(evt) {
  let category = evt.target.textContent;
  if (category === 'All categories') {
    allCategorys();
  }

  let AllTitle = category.split(" ");
  let lastWorld = AllTitle.pop();
  h1El.innerHTML = ` <h1 class="title-category"> ${AllTitle.join(" ")} <span class="title-secondary">${lastWorld}</span></h1>`;

  fetchCertainCategory(category)

     .then((books) => {

      renderBooks(books)

    }).catch((error) => {
      console.error(error);
      Notiflix.Notify.failure('Something went wrong. Please try again');

    });


}

function renderBooks(arr) {
  const markup = arr

    .map(({ book_image, author, title, _id }) => {

      return `
      <a href="#" class="book-card" id="${_id}">
        <div class="book-carts">
          <img src="${book_image}" alt="${title}" class="book-img" loading="lazy" width=335>
            <div class="book-title">
              <p>${title}</p>
              <p class="book-author">${author}</p>
            </div>
        </div>
      </a>
      `;
    })
    .join('');
  booksCategoryEl.innerHTML = markup;
}

function renderTopBooks(arr) {

  const markupBook = arr

    .map(({ book_image, title, author, list_name }) => {
      return `
      
      <li class="book-carts"> 
      <p>${list_name}</p>
      <img src="${book_image}" alt="${title}" class="book-img">
      <div class="book-title"> 
      <p>${title}</p>
        <p>${author}</p>
        </div>
        </li>
        
      `;
    })

   ;
  const markupBtn = `<button>see more</button>`;
  const screenWidth = window.screen.width;
  const markupMobile = markupBook.slice(0, 1).join("");
  const markupLaptop = markupBook.slice(0, 3).join("");
  const markupDesktop = markupBook.slice(0, 5).join("");
  console.log(markupLaptop);
  let markup = '';
  if (screenWidth < 767) {
    
    markup = `<ul class="category-item-list">${markupMobile} + ${markupBtn}</ul>`;
  }else if (screenWidth < 1440 && screenWidth>=768) {
    
    markup = `<ul class="category-item-list">${markupLaptop} + ${markupBtn}</ul>`;
  } else {
     markup = `<ul class="category-item-list">${markupDesktop} + ${markupBtn}</ul>`;
  }
  //  markup = markupBook + markupBtn;

  return booksCategoryEl.insertAdjacentHTML('beforeend', markup);


}



