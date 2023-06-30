//selectors
const themeToggleBtn = document.querySelector('.switch');
//state
const theme = localStorage.getItem('theme');
//on mount
theme && document.body.classList.add('dark-mode');
//handlers
handleThemeToggle = () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark-mode');
    } else {
        localStorage.removeItem('theme', '')
    }
}
//events
themeToggleBtn.addEventListener('click', handleThemeToggle); 