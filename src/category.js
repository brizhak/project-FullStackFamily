const categoryEl = document.querySelector('.category-list');
const booksCategoryEl = document.querySelector('.books-category');
const h1El = document.querySelector('.title-category')

function fetchCategorys() {
  return fetch("https://books-backend.p.goit.global/books/category-list")
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
}

addCategorys();

function addCategorys() {
  fetchCategorys()
    .then((categorys) => {
      console.log(categorys);
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
  categoryEl.innerHTML = markup;
}

categoryEl.addEventListener('click', onSelectCategory);

function onSelectCategory(evt) {
  let category = evt.target.textContent;
  h1El.innerHTML = category;
  fetchCategory(category)
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

function fetchCategory(category) {
  return fetch(`https://books-backend.p.goit.global/books/category?category=${category}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
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