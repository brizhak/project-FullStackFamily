let theme = localStorage.getItem('theme') || 'light';
let themeLibrary = localStorage.getItem('theme-library') || 'light-library';
const btnSwitch = document.querySelector('.toggle-switch');
btnSwitch.addEventListener('click', function () {
    if (theme === 'dark') {
        document.querySelector('body').classList.remove('dark');
        theme = 'light';
        themeLibrary = 'light-library';
    } else {
        document.querySelector('body').classList.add('dark');
        theme = 'dark';
        themeLibrary = 'dark-library';
    }
    localStorage.setItem('theme', theme);
    localStorage.setItem('theme-library', themeLibrary);
});
if (theme === 'dark') {
    document.querySelector('body').classList.add('dark');
}