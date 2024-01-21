
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



let trendIndex = 0;
const postsContainer = document.querySelector('.posts-container');
const navDots = document.querySelector('.nav-dots');


function slidePosts() {
    const firstPost = postsContainer.firstElementChild.cloneNode(true);
    postsContainer.appendChild(firstPost);

    postsContainer.style.transition = "transform 0.5s ease-in-out";

    const posts = document.querySelectorAll('.post');
    const postsWidth = posts[0].offsetWidth;
    postsContainer.style.transform = `translateX(-${postsWidth}px)`;

    // Update active dot
        const trendDots = Array.from(navDots.children);
        trendDots.forEach((trendDot, index) => {
            trendDot.classList.toggle('active', index === currentIndex);
        });

    setTimeout(() => {
        postsContainer.style.transition = "none";
        postsContainer.style.transform = `translateX(0)`;
        postsContainer.removeChild(postsContainer.firstElementChild);
    }, 1000);
}
    // call the slidePosts function every 3 seconds
    setInterval(slidePosts, 3000);



    const carousel = document.querySelector('.slides');
    const dotsContainer = document.querySelector('.dots-container');
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prevButton');
    const nextButton = document.querySelector('.nextButton');
    const totalPosts = slides.length;
    let currentIndex = 0;

    // Clone the last post and prepend it to the beginning
    const clonedPost = slides[totalPosts - 1].cloneNode(true);
    carousel.insertBefore(clonedPost, slides[0]);

    
    function updateCarousel() {
        carousel.style.transform = `translateX(${-currentIndex * 33.33}%)`;

        // Update active dot
        const dots = Array.from(dotsContainer.children);
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    function goToIndex(index) {
    currentIndex = index;
    updateCarousel();
    }


    function createPaginationDots() {
        for (let i = 0; i < totalPosts; i++) {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            dot.addEventListener('click', () => goToIndex(i));
            dotsContainer.appendChild(dot);
        }
    }

    
    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalPosts) % totalPosts;
        updateCarousel();
    }
    prevButton.addEventListener('click', prevSlide);

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalPosts;
        updateCarousel();
    }
    nextButton.addEventListener('click', nextSlide);

    function autoAdvance() {
        setInterval(() => {
            nextSlide();
        }, 3000);
    }

    createPaginationDots();
    updateCarousel();
    autoAdvance(); // Call autoAdvance to start automatic slide changes