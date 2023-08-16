// 導覽列
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-menu');

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

// 訂房說明

const tabs = document.querySelectorAll(".tabs-container .tab");

const contents = document.querySelectorAll(".tabs-container .content");

const removeActiveClass = () =>{
    tabs.forEach((t) => {
        t.classList.remove("active");
    });

    contents.forEach(c =>{
        c.classList.remove("active");
    });
};

tabs.forEach((t, i) =>{
    t.addEventListener("click", () =>{
        removeActiveClass();
        contents[i].classList.add
        ("active");
        t.classList.add("active");
    });
});


// 區塊進場動畫\
//new WOW().init();


// 產品輪播動畫


var swiper = new Swiper(".mySwiper2" , {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    loop: true,
});

var swiper2 = new Swiper(".mySwiper1", {
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    loop: true,
});

var swiper = new Swiper(".mySwiper4" , {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    loop: true,
});

var swiper2 = new Swiper(".mySwiper3", {
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    loop: true,
});

var swiper = new Swiper(".mySwiper6" , {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    loop: true,
});

var swiper2 = new Swiper(".mySwiper5", {
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    loop: true,
});

