const buttonMenu = document.getElementById('header__button');

buttonMenu.onclick = function() {
    let menuElements = document.querySelectorAll('.header__button, .header__nav__container');
    menuElements.forEach((menuElements) => {
        menuElements.classList.toggle('active');
    });
}