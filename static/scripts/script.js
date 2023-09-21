document.documentElement.classList.add("javascriptEnabled");

const sectionMembers = document.querySelector('.section-members')
const desktopNav = document.querySelector('.desktop-nav')
const collapseButton = document.querySelector('.desktop-nav-button')

collapseButton.addEventListener('click', () => {
    desktopNav.classList.toggle('to-the-left')
    sectionMembers.classList.toggle('to-the-left')
});