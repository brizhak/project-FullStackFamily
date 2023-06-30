import { fetchCategoryList, fetchTopBooks, fetchCertainCategory } from "./api_request";

const categoryEl = document.querySelector('.category-list');
const booksCategoryEl = document.querySelector('.books-category');
const h1El = document.querySelector('.title-category');

allCategorys();

function allCategorys() {
fetchTopBooks().then((topBooks) => {
  topBooks.map(({ books }) => { 
    renderTopBooks(books)
  })
    }).catch((error) => {
      console.log(error);
      errorShow();
    })
    .finally(() => {
    }); 
};

addCategorys();

function addCategorys() {
  fetchCategoryList()
    .then((categorys) => {
      renderCategorys(categorys);

    }).catch((error) => {
      console.log(error);
      errorShow();
    })
    .finally(() => {

    });
};

function renderCategorys(arr) {
  const markup = arr
    .map(({list_name}) => {
      return `
      <li>
                <a href="#" class="category-link">${list_name}</a>
            </li>
      `;
    })
    .join("");
  categoryEl.insertAdjacentHTML("beforeend", markup);
}

categoryEl.addEventListener('click', onSelectCategory);

function onSelectCategory(evt) {
  let category = evt.target.textContent;
  if (category === 'All categories') {
    allCategorys();
}

  h1El.innerHTML = category;
  fetchCertainCategory(category)
    .then((books) => {
      console.log(books);
      renderBooks(books)
  
    }).catch((error) => {
      console.log(error);
      errorShow();
    })
    .finally(() => {
    });
}

function renderBooks(arr) {
  const markup = arr
    .map(({book_image, author, title}) => {
      return `
      <div class="book-carts"> 
      <img src="${book_image}" alt="${title}" class="book-img">
      <div class="book-title"> 
      <p>${title}</p>
        <p>${author}</p>
        </div>
        </div>
      `;
    })
    .join("");
  booksCategoryEl.innerHTML = markup;
}

function renderTopBooks(arr) {
  const markup = arr
    .map(({ book_image, title, author, list_name}) => {
      return `
      <div class="book-carts"> 
      <p>${list_name}</p>
      <img src="${book_image}" alt="${title}" class="book-img">
      <div class="book-title"> 
      <p>${title}</p>
        <p>${author}</p>
        </div>
        </div>
         <button>see more</button>
      `;
    })
    .join("");
  booksCategoryEl.innerHTML = markup;
  
}
