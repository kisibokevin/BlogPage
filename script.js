
const openMenu = document.querySelector('.ri-menu-line');
const closeMenu = document.querySelector('.ri-close-line');

const menuIsOpen = document.querySelector('.menu');


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

const postsContainer = document.querySelector('.posts-container');

function slidePosts() {

    // clone the first post and append it to the end
    const firstPost = postsContainer.firstElementChild.cloneNode(true);
    postsContainer.appendChild(firstPost);

    //animate the sliding effect
    postsContainer.style.transition = "transform 0.5s ease-in-out";

    //calculate the distance the posts should slide
    const posts = postsContainer.querySelectorAll('.post');
    const postsWidth = posts[0].offsetWidth;
    postsContainer.style.transform = `translateX(-${postsWidth}px)`;

    // remove first post after animation ends
    setTimeout(() => {
        postsContainer.style.transition = "none";
        postsContainer.style.transform = `translateX(0)`;
        postsContainer.removeChild(postsContainer.firstElementChild);
    }, 1000);
}
    // call the slidePosts function every 3 seconds
    setInterval(slidePosts, 3000);
    
    // you may adjust the time interval as needed
