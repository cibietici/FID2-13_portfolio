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

    getposts()
}

async function getposts() {
    const posts = await fetch(`https://p5snqp28.api.sanity.io/v1/data/query/production?query=*
    [_type == "post"]`
    )
    const { result } = await posts.json()
    result.forEach(res => {
        console.log(res)
    })
    console.log(result)
}

init ();