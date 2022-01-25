function init() {
    const burgerIcon = document.querySelector('.burger-icon');
    const mobileNav = document.querySelector('.mobile-nav');
    burgerIcon.addEventListener('click', () => {
        mobileNav.classList.toggle('mobile-nav-hide');
        burgerIcon.classList.toggle('burger');
        burgerIcon.classList.toggle('closemobilemenu');
    });
    getPosts();
}

async function getPosts() {
    const posts =  await fetch(`https://p5snqp28.api.sanity.io/v1/data/query/production?query=*
    [_type == "post"]
    `);
    const { result } = await posts.json();

    const worksList = document.querySelector('.workslist');

    const cdnUrl = 'https://cdn.sanity.io/images/p5snqp28/production/';

    result.forEach(post => {
        const cover = post.mainImage.asset._ref.split('-');

        const workBlock = document.createElement('a');
        workBlock.classList.add('work');
        workBlock.setAttribute('href', `./work.html?page=${post.slug.current}`);
        const workTitle = document.createElement('h2');
        workTitle.classList.add('work-title');
        workTitle.innerText = post.title;
        workBlock.append(workTitle);
        const workMask = document.createElement('div');
        workMask.classList.add('work-mask');
        workBlock.append(workMask);
        const workCover = document.createElement('img');
        workCover.setAttribute('src', `${cdnUrl}${cover[1]}-${cover[2]}.${cover[3]}`);
        workCover.classList.add('work-cover');
        workBlock.append(workCover);
        worksList.append(workBlock);
    });

}

init();
