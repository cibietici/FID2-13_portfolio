function init() {

    const burgerIcon = document.querySelector('.burger-icon')
    const mobileNav = document.querySelector('.main-menu-mobile')
    burgerIcon.addEventListener('click', () => {
        mobileNav.classList.toggle('hidemobileview')
    })

    const closeMobileNav = document.querySelector('.close-mobile-nav')
    closeMobileNav.addEventListener('click', () => {
        mobileNav.classList.toggle('hidemobileview')
    })
}

init ();