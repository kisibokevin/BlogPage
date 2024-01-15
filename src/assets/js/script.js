
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


    function slidePopularPosts(index) {
        const slidesContainer = document.querySelector('.slides');
        const slides = document.querySelectorAll('.slide');
        //const dotsContainer = document.querySelector('.dots-container');
        let popularIndex = 0;

        // Clone the first slide and append it to the end
        const firstSlide = slidesContainer.firstElementChild.cloneNode(true);
        slidesContainer.appendChild(firstSlide);

        //const firstSlide = slides[0].cloneNode(true);
        //slidesContainer.appendChild(firstSlide);

        // Animate the sliding effect
        slidesContainer.style.transition = "transform 0.5s ease-in-out";
        slidesContainer.style.overflow = "hidden"; // Ensure overflow is hidden to clip the blur effect

        // Calculate the distance the slides should slide (half the width of the slide)
        const slideWidth = slides[0].offsetWidth / 2;
        slidesContainer.style.transform = `translateX(-${slideWidth}px)`;

        // Add a blur effect to the previous and next slides
        slides.forEach((slide, index) => {
            const distanceFromCenter = Math.abs(index - slides.length / 2 + 0.5);
            const blurAmount = distanceFromCenter * 2; // Adjust the multiplier for stronger/weaker blur
            slide.style.filter = `blur(${blurAmount}px)`;
        });

        // Remove the first slide after the animation ends
        setTimeout(() => {
            slidesContainer.style.transition = "none";
            slidesContainer.style.transform = `translateX(0)`;
            slidesContainer.style.overflow = "visible"; // Reset overflow to visible after animation
            slidesContainer.removeChild(slidesContainer.firstElementChild);
            slides.forEach((slide) => {
                slide.style.filter = "none"; // Remove blur effect from other slides
            });
        }, 1000);

        // Update the active dot
        const dots = document.querySelectorAll('.dot');
        //const activeDot = dotsContainer.querySelector('.active');
        //const nextDot = activeDot.nextElementSibling;

        
        if (index >= slides.length) {
            popularIndex = 0;
        } else if (index < 0) {
            popularIndex = slides.length - 1;
        }
        dots.forEach(dot => dot.classList.remove('active'));
        dots[slideIndex].classList.add('active');






    // if (nextDot) {
        //    activeDot.classList.remove('active');
        //    nextDot.classList.add('active');
    // } else {
        //   dots[0].classList.add('active');
        //    dots[dots.length - 1].classList.remove('active');
    // }
}

// Call the slidePosts function every 3 seconds
setInterval(slidePopularPosts, 3000);
