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
list.addEventListener('click', function (event){
    if (event.target.classList.contains('list__link')){
        this.classList.remove('active')
    }
})


menu.addEventListener('click', function (event){
    if (!list.classList.contains('active')){
        list.classList.add('active')
    } else {
        list.classList.remove('active')
    }
})