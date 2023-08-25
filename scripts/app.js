const burgerBtn = document.querySelector('.nav__open');
const burgerBtnOpen = document.querySelector('.nav__open-btn');
const burgerMenu = document.querySelector('.nav');
const body = document.querySelector('body');
const burgerFilter = document.querySelector('.burger-fitler');
const navLink = document.querySelectorAll('.nav__list-link')



burgerBtn.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    burgerBtnOpen.classList.toggle('active');
    body.classList.toggle('active');
    burgerFilter.classList.toggle('active');
})


burgerFilter.addEventListener('click', () => {
    burgerMenu.classList.remove('active');
    burgerBtnOpen.classList.remove('active');
    body.classList.remove('active');
    burgerFilter.classList.remove('active');
})

for (let i = 0; i < navLink.length; i++) {
    navLink[i].addEventListener('click', () => {
        burgerMenu.classList.remove('active');
        burgerBtnOpen.classList.remove('active');
        body.classList.remove('active');
        burgerFilter.classList.remove('active');
    })
}

// SLIDER
const carousel = document.querySelector('.carousel__list');
const arrowLeft = document.querySelector('.carousel-left');
const arrowRight = document.querySelector('.carousel-right');
const pagination = document.querySelectorAll('.pagination__list-item');

let currentItem = 0;

const clearPagination = () => {
    pagination.forEach((item) => item.classList.remove('active'));
};

const currentSlide = (item) => {
    carousel.style.setProperty('margin-left', `${-475 * item}px`);
};

const changeSlide = (side) => {
    if (side === 'left' && currentItem > 0) {
        currentItem--;
    }
    if (side === 'right' && currentItem < 4) {
        currentItem++;
    }
    currentSlide(currentItem);
    clearPagination();
    pagination[currentItem].classList.add('active');
};

pagination.forEach((item, index) => {
    item.addEventListener('click', function () {
        clearPagination();
        item.classList.add('active');
        currentItem = index;
        currentSlide(index);
    });
});

arrowLeft.addEventListener('click', () => {
    changeSlide('left');
});

arrowRight.addEventListener('click', () => {
    changeSlide('right');
});



const seasonItem = document.querySelectorAll('input[name="radio"]');
const seasons = document.querySelectorAll('.favorite-season');

seasonItem.forEach(el => {
    el.addEventListener('change', (e) => {
        // console.log(el);
        seasons.forEach(item => {
            item.classList.remove('active');
        });
        if (el.checked) {
            document.querySelector(`.${el.id}`).classList.add('active');
        }
    })
});
