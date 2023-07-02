// // const menuBtn = document.getElementById('btn-hamburger');
// // menuBtn.onclick = function (e) {
// //     animatedMenu(this);
// //     e.preventDefault();
// // };
// // function animatedMenu(x) {
// //     x.classList.toggle('animeOpenClose');
// }

// Отримати посилання на кнопку "Sign Up" та контейнер для оновлення розмітки
const signUpButton = document.querySelector('.sign-up');
const headerContainer = document.querySelector('.header-container');

// Оновити розмітку після авторизації
function updateUIOnLogin() {
  // Заміна кнопки "Sign Up" на "Username"
  const usernameButton = document.createElement('button');
  usernameButton.classList.add('username');
  usernameButton.textContent = 'Username';
  headerContainer.replaceChild(usernameButton, signUpButton);

  // Додавання кнопок "Home", "Shopping List" та "Logout"
  const homeButton = document.createElement('li');
  homeButton.classList.add('nav-item');
  homeButton.innerHTML = '<a class="nav-link" href="./index.html">Home</a>';
  const shoppingListButton = document.createElement('li');
  shoppingListButton.classList.add('nav-item');
  shoppingListButton.innerHTML = `
    <a class="nav-link" href="./shopping-list.html">Shopping List</a>
    <svg class="nav-link-icon" width="20" height="20">
        <use href="/src/img/icons.svg#icon-lock"></use>
    </svg>
  `;
  const logoutButton = document.createElement('button');
  logoutButton.classList.add('log-btn', 'hidden');
  logoutButton.innerHTML = `
    <span>Logout</span>
    <svg class="login-logout">
        <use href="./img/icons.svg#icon-align-left"></use>
    </svg>
  `;

  const navList = document.querySelector('.nav-list');
  navList.appendChild(homeButton);
  navList.appendChild(shoppingListButton);
  navList.appendChild(logoutButton);

  // Додавання слухача для кнопки "Logout"
  logoutButton.addEventListener('click', updateUIOnLogout);
}

// Оновити розмітку після виходу з системи
function updateUIOnLogout() {
  // Заміна кнопки "Username" на "Sign Up"
  const signUpButton = document.createElement('a');
  signUpButton.classList.add('sign-up');
  signUpButton.href = '#';
  signUpButton.textContent = 'Sign Up';
  signUpButton.innerHTML += `
    <svg class="arrow-right" width="20" height="20">
        <use href="./img/icons.svg#icon-arrow-right"></use>
    </svg>
  `;
  headerContainer.replaceChild(signUpButton, usernameButton);

  // Видалення кнопки "Logout" та його слухача
  const logoutButton = document.querySelector('.log-btn');
  logoutButton.removeEventListener('click', updateUIOnLogout);
  logoutButton.parentNode.removeChild(logoutButton);
}

// Приклад виклику функції updateUIOnLogin() після успішної авторизації користувача
updateUIOnLogin();
