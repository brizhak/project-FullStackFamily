export const loader = document.getElementById('loader');

// import { showLoader, hideLoader, loader } from './loader';

export function showLoader() {
  loader.classList.remove('hide-loader');
}

export function hideLoader() {
  loader.classList.add('hide-loader');
}
