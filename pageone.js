let searchbtn=document.querySelector('#search-btn')
let searchbar=document.querySelector('.search-bar-container')
let menubtn=document.querySelector('#menu-bar')
let navbar=document.querySelector('.navbar')
let videoBtn=document.querySelectorAll('.vid-btn')
window.onscroll=()=>{
    searchbtn.classList.remove('fa-times')
    searchbar.classList.remove('active')
    menubtn.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');


}
    

searchbtn.addEventListener('click',()=>{
    searchbtn.classList.toggle('fa-times')
    searchbar.classList.toggle('active')
})

let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
formBtn.addEventListener('click',()=>{
    loginForm.classList.add('active')
})
formClose.addEventListener('click',()=>{
    loginForm.classList.remove('active')
})
menubtn.addEventListener('click',()=>{
    menubtn.classList.toggle('fa-times')
    navbar.classList.toggle('active')

})
videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});
var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: true,
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    },
});
