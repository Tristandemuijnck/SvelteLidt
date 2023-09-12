const desktopNav = document.querySelector('nav')
const collapseButton = document.querySelector('button')

collapseButton.addEventListener('click', () => {
    desktopNav.classList.toggle('to-the-left')
});