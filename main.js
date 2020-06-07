const slideImage = document.querySelectorAll('.slide_image');
const slidesContainer = document.querySelector('.slides_container')
const nextBtn = document.querySelector('.next_btn')
const prevBtn = document.querySelector('.prev_btn')
const navDots = document.querySelector('.navegation_dots')

let sliceWidth = slideImage[0].clientWidth;
let numberImages = slideImage.length;
let currentSlide = 0;
function init() {
    // slideImage[0]=0
    // slideImage[1]=100%
    // slideImage[2]=200%
    slideImage.forEach((img, i) => {
        img.style.left = i * 100 + '%';
    })
    slideImage[0].classList.add('active')
    createNavegateonDots();
}
window.addEventListener('resize', () => {
    sliceWidth = sliceWidth[0].clientWidth
})
function createNavegateonDots() {
    for (let i = 0; i < numberImages; i++) {
        const dot = document.createElement('div');
        dot.classList.add('single_dot');
        navDots.appendChild(dot);
        dot.addEventListener('click', () => {
            goToSlide(i)
        })
    }
    navDots.children[0].classList.add('active');
}
// mext button
nextBtn.addEventListener('click', () => {
    if (currentSlide >= numberImages - 1) {
        goToSlide(0);
        return;
    }
    currentSlide++;
    goToSlide(currentSlide);
})
// prev button
prevBtn.addEventListener('click', () => {
    if (currentSlide == 0) {
        goToSlide(numberImages - 1);
        return;
    }
    currentSlide--;
    goToSlide(currentSlide);
})
function goToSlide(SlideNumber) {
    slidesContainer.style.transform = 'translateX(-' + sliceWidth * SlideNumber + 'px)';
    currentSlide = SlideNumber;
    setActiveClass();
}
//btn's 
function setActiveClass() {
    //  set active class for slideImage
    let currentActive = document.querySelector('.slide_image.active');
    currentActive.classList.remove('active')
    slideImage[currentSlide].classList.add('active')
    // set active class for navigation dots
    let currentDot = document.querySelector('.single_dot.active');
    currentDot.classList.remove('active')
    navDots.children[currentSlide].classList.add('active')
}
init()