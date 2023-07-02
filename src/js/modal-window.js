 import amazon from '../img/shopping/amazon.png';
 import apple from '../img/shopping/apple.png';
 import bookshop from '../img/shopping/bookshop.png';

 const MODAL_TEMPLATE = `<div class="modal-wrapper">
     <div class="modal-backdrop"></div>
     <div class="modal-body">
       <div class="modal-body-btn">
         <button type="button" class="modal-close-btn">
           <svg class="icon-close" width="24" height="24">
             <use href="./img/icons.svg#icon-x-close"></use>
           </svg>
         </button>
       </div>
       <div class="modal-body-card" value="${_id}>
         <div class="modal-body-image">
           <img
             src="${book_image}"
             alt="${title}"
             class="modal-body-image-poster"
             width="287"
             height="408"
           />
         </div>
         <div class="modal-body-about-book">
           <h2 class="modal-body-title">${title}</h2>
           <h3 class="modal-body-author">${author}</h3>
           <p class="modal-body-text">${list_name}</p>
         </div>
         <div class="modal-body-logo">
           <ul class="modal-body-logo-list">
             <li class="modal-body-logo-item">
               <a
                 href="#"
                 target="_blank"
                 rel="noopener noreferrer"
                 aria-label="Amazon"
                 class="modal-body-logo-link"
               >
                 <img
       class="modal-body-media-icon-amazon"
       srcset="${amazon}"
       src="${amazon}";
       alt="Amazon shop"
     />
               </a>
             </li>
             <li class="modal-body-logo-item">
               <a
                 href="#"
                 target="_blank"
                 rel="noopener noreferrer"
                 aria-label="Apple Books"
                 class="modal-body-logo-link"
               >
                <img
       class="modal-body-media-icon-apple"
       srcset="${apple}"
       src="${apple}";
       alt="Apple book logo"
     /></a>
             </li>
             <li class="modal-body-logo-item">
               <a
                 href="#"
                 target="_blank"
                 rel="noopener noreferrer"
                 aria-label="Bookshop"
                 class="modal-body-logo-link"
               >
                <img
       class="modal-body-media-icon-shop"
       srcset="${bookshop}"
       src="${bookshop}";
       alt="Bookshop logo"
     /></a>
             </li>
           </ul>
         </div>
         <div class="modal-body-container-btn">
           <button class="modal-body-add-btn" type="submit">
             add to shopping list
           </button>
         </div>
       </div>
       <div class="js-success">
         <button
           class="modal-body-add-btn btn-remove visually-hidden"
           data-action="remove"
           type="button"
         >
           remove from the shopping list
         </button>
         <p class="modal-congrats-text visually-hidden">
           Сongratulations! You have added the book to the shopping list. To
           delete, press the button “Remove from the shopping list”.
         </p>
       </div>
     </div>
   </div>`;

 let bodyEl = document.getElementById('modalId');
 let openModal = document.getElementById('openBtn');

 function openModalWindow() {
   bodyEl.insertAdjacentHTML('afterbegin', MODAL_TEMPLATE);
   let closeButton = document.querySelector('.modal-close-btn');
   let modalWrapper = document.querySelector('.modal-wrapper');
   closeButton.addEventListener('click', closeModal);
   modalWrapper.addEventListener('click', handleClickOutside);
   document.addEventListener('keydown', handleKeyDown);
 }

 function closeModal() {
   document.querySelector('.modal-wrapper').remove();
 }

 function handleKeyDown(event) {
   if (event.key === 'Escape') {
     closeModal();
   }
 }

 function handleClickOutside(event) {
   if (!event.target.closest('.modal-body')) {
     closeModal();
   }
 }
 
openModal.addEventListener('click', openModalWindow); 
