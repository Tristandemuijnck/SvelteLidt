document.documentElement.classList.add("javascriptEnabled");


// Desktop collapse navigation enhancement

const desktopNav = document.querySelector('nav')
const collapseButton = document.querySelector('.desktop-nav-button')

collapseButton.addEventListener('click', () => {
    desktopNav.classList.toggle('to-the-left')
});

// Wum soundeffect
const wumAudio = new Audio('https://cdn.discordapp.com/attachments/1148257851664511019/1148351815784616008/wum-v2.mp3');

window.addEventListener('load', function () {
    const audio = wumAudio;
    audio.play();
});