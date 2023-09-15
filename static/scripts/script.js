document.documentElement.classList.add("javascriptEnabled");

const desktopNav = document.querySelector('.desktop-nav')
const collapseButton = document.querySelector('.desktop-nav-button')

collapseButton.addEventListener('click', () => {
    desktopNav.classList.toggle('to-the-left')
});