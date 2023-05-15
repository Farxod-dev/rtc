const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 5000,
    },
});

let menu = document.querySelector('.burger');
let list = document.querySelector('.list')

// list.addEventListener()
list.addEventListener('click', function (event) {
    if (event.target.classList.contains('list__link')) {
        this.classList.remove('active')
    }
})


menu.addEventListener('click', function (event) {
    if (!list.classList.contains('active')) {
        list.classList.add('active')
    } else {
        list.classList.remove('active')
    }
})


gsap.from('.header__info__paragraph', {
    y: 100,
    opacity: 0,
    duration: 1
})
gsap.from('.header__info__description', {
    y: 100,
    opacity: 0,
    duration: 1
})

let proImg = document.querySelectorAll('.products__card')
let proCard = document.querySelectorAll('.products__img');
let solCard = document.querySelectorAll('.solution__card');
let about = document.querySelectorAll('.about');
if (window.innerWidth > 1090) {
    proCard.forEach(el => {
        gsap.to(el, {
            y: -200,
            scrollTrigger: {
                trigger: el,
                scrub: 2,
                start: "top center",
            }
        })
    })
}
solCard.forEach(el => {
    gsap.to(el, {
        y: -150,
        scrollTrigger: {
            trigger: el,
            scrub: 1
        }
    })
})
about.forEach(el => {
    gsap.from(el, {
        y: 100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: el,
        }
    })
})
gsap.from('.about__info__header', {
    y: 100,
    opacity: 0,
    duration: 1,
})

let btnSw = document.querySelectorAll('.sw-display-none');

btnSw.forEach(el => {
    if (window.innerWidth < 768) {
        el.classList.add('sw-none')
    }
})
