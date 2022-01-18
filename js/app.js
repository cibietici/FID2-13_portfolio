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

const workListEL = document.querySelector('#worklist')
const cdnUrl = 'https://cdn.sanity.io/images/p5snqp28/production/'

async function getposts() {
    const posts = await fetch(`https://p5snqp28.api.sanity.io/v1/data/query/production?query=*
    [_type == "post"]`
    )
    const { result } = await posts.json()
    result.forEach(res => {
        const cover = res.mainImage.asset._ref.split('-')

        const workBlock = document.createElement('div')
        workBlock.classList.add('work')
        const workTitle = document.createElement('h2')
        workTitle.classList.add('work-title')
        workTitle.innerText = res.title
        workBlock.append(workTitle)
        const workCover = document.createElement('img')
        workCover.setAttribute('src', `${cdnUrl}${cover[1]}-${cover[2]}.${cover[3]}`)
        workCover.classList.add('work-cover')
        workBlock.append(workCover)
        workListEL.append(workBlock)
        console.log(workListEL)
    })
}

init ();