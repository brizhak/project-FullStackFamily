const loader = document.getElementById('loader');

// import { showLoader } from '../js/loader.js';
// import { hideLoader } from '../js/loader.js';

export function showLoader() {
  loader.classList.remove('hide-loader');
}

export function hideLoader() {
  loader.classList.add('hide-loader');
}
