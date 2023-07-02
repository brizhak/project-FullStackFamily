import Notiflix from 'notiflix';
const axios = require('axios').default;


//Копіюйте собі ці імпорти якщо потрібнні запити (перевіряйте путі до свого файлу js)

// import { fetchCategoryList } from './js/api_request';
// import { fetchTopBooks } from './js/api_request';
// import { fetchCertainCategory } from './js/api_request';
// import { fetchSelectedBook } from './js/api_request';



export async function fetchCategoryList() {

    try {
        const { data } = await axios.get('https://books-backend.p.goit.global/books/category-list');

        return data;

    } catch (error) {
        Notiflix.Notify.failure('Something went wrong. Please try again');
    } finally {
    }
}


export async function fetchTopBooks() {
    try {
        const { data } = await axios.get('https://books-backend.p.goit.global/books/top-books');
        let books = await data.map(category => category.books);

        return books;
    } catch (error) {
        Notiflix.Notify.failure('Something went wrong. Please try again');
    }
}


export async function fetchCertainCategory(selectedCategory) {
    try {
        let { data } = await axios.get('https://books-backend.p.goit.global/books/category', {
            params: {
                category: selectedCategory,
            }
        })
        return data;
    } catch (error) {
        Notiflix.Notify.failure('Something went wrong. Please try again');
    }
}


export async function fetchSelectedBook(bookId) {
    try {
        let resp = await axios.get(`https://books-backend.p.goit.global/books/${bookId}`)
        let book = await resp.data;
        return book;
    } catch (error) {
        Notiflix.Notify.failure('Something went wrong. Please try again');
    }
}