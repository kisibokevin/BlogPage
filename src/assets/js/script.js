
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
const navDots = document.querySelectorAll('.nav-dot');

function slidePosts(index) {

    // clone the first post and append it to the end
    const firstPost = postsContainer.firstElementChild.cloneNode(true);
    postsContainer.appendChild(firstPost);

    //animate the sliding effect
    postsContainer.style.transition = "transform 0.5s ease-in-out";

    //calculate the distance the posts should slide
    const posts = postsContainer.querySelectorAll('.post');
    const postsWidth = posts[0].offsetWidth;
    postsContainer.style.transform = `translateX(-${postsWidth}px)`;

    if (index >= posts.length) {
        trendIndex = 0;
    } else if (index < 0) {
        trendIndex = posts.length - 1;
    }
    navDots.forEach(navDot => navDot.classList.remove('active'));
    navDots[slideIndex].classList.add('active');

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


let slideIndex = 0;
const slidesContainer = document.querySelector('.slides')
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let slideInterval;

function showSlides(index) {
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    }

    const firstSlide = slidesContainer.firstElementChild.cloneNode(true);
    slidesContainer.appendChild(firstSlide);
    //.forEach(slide => slide.style.display = 'none');
    //slides[slideIndex].style.display = 'block';

    dots.forEach(dot => dot.classList.remove('active'));
    dots[slideIndex].classList.add('active');
    //calculate the distance the posts should slide
    //const posts = postsContainer.querySelectorAll('.post');
    //const postsWidth = posts[0].offsetWidth;
    //postsContainer.style.transform = `translateX(-${postsWidth}px)`;

    const slideWidth = slides[0].offsetWidth;
    //const slideOffset = -slideWidth * slideIndex;
    slidesContainer.style.transform = `translateX(-${slideWidth}px)`;
    //document.querySelector('.slides').style.transform = `translateX(${slideOffset}px)`;
}



function slideNext() {
    showSlides(slideIndex += 1);
}

function slidePrevious() {
    showSlides(slideIndex -= 1);
}

function startSlide() {
    slideInterval = setInterval(slideNext, 3000); // Change the interval time here (in milliseconds)
}

function stopSlide() {
    clearInterval(slideInterval);
}

showSlides(slideIndex);
startSlide();

// Functionality for clicking pagination dots
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        stopSlide();
        showSlides(slideIndex = index);
        startSlide();
    });
});

// Functionality for previous and next buttons
prevButton.addEventListener('click', () => {
    stopSlide();
    slidePrevious();
    startSlide();
});

nextButton.addEventListener('click', () => {
    stopSlide();
    slideNext();
    startSlide();
});

