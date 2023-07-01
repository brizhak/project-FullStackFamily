const $menuBtn = document.getElementById('btn-hamburger');
$menuBtn.onclick = function (e) {
    animatedMenu(this);
    e.preventDefault();
};
function animatedMenu(x) {
    x.classList.toggle('animeOpenClose');
}