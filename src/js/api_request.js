import Notiflix from 'notiflix';
const axios = require('axios').default;


export async function fetchCategoryList() {

    try {
        const { data } = await axios.get('https://books-backend.p.goit.global/books/category-list');

        return data;

    } catch (error) {
        Notiflix.Notify.failure('Something went wrong. Please try again');
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

