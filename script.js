
// const toggleIcons = document.querySelector('.toggle-icons');

const openMenu = document.querySelector('.ri-menu-line');
const closeMenu = document.querySelector('.ri-close-line');

const menuIsOpen = document.querySelector('.menu');


// menuIsOpen = false;
/*
toggleIcons.addEventListener('click', function() {

    if(menuIsOpen) {
        menuOpen.style.display="none"
        menuClose.style.display="inline-block"
        menuIsOpen.classList.toggle('active');
    }
    else
    {
        menuOpen.style.display="inline-block"
        menuClose.style.display="none"
        menuIsOpen.classList.remove('active');
    }
});
*/

openMenu.addEventListener('click', () => {
    openMenu.style.display="none"
    closeMenu.style.display="inline-block"
    menuIsOpen.classList.toggle('active');
})

closeMenu.addEventListener('click', () => {
    closeMenu.style.display="none"
    openMenu.style.display="inline-block"
    menuIsOpen.classList.remove('active');
})