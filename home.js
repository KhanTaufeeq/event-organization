const menuIcon = document.getElementById('menu-icon');
const menuDiv = document.querySelector('.menu-links');
const mainBackground = document.querySelector('.main-background');

menuIcon.addEventListener('click', () => {
    if (menuDiv.style.display === 'block') {
        menuDiv.style.display = 'none';
        mainBackground.style.display = 'block';
    } else {
        menuDiv.style.display = 'block';
        mainBackground.style.display = 'none';
    }
})
