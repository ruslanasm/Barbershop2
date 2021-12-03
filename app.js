
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');
const videoBtn = document.querySelectorAll('.vid-btn');
const navbar = document.querySelector('.navbar');
const logo = document.querySelector('#logo');








//dISPLAY Mobile Menu
const mobileMenu = () => {
menu.classList.toggle('is-active');
menuLinks.classList.toggle('active');
};


menu.addEventListener('click', mobileMenu);





videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
    document.querySelector('.controls .active').classList.remove('active');
    btn.classList.add('active');
    let src = btn.getAttribute('data-src');
    document.querySelector('#video-slider').src = src;
    });
    
    });


       
var swiper = new Swiper(".mano", {
    loop: true,
     spaceBetween: 30,
     autoplay: {
       delay: 3500,
     disableOnInteraction: false,
     },
     breakpoints: {
       0: {
         slidesPerView: 1,
       },
       768: {
         slidesPerView: 1,
       },
       1024: {
         slidesPerView: 3,
       },
     },
     pagination: {
        el: ".swiper-pagination",
      },
   });
      
      

      

    

   


//navbar pasislepia kai skrolini
window.onscroll = () =>{
navbar.classList.remove('activ');

if(window.scrollY > 0) {
    document.querySelector('.navbar').classList.add('activ');
}else{
    document.querySelector('.navbar').classList.remove('activ');
}
}

window.onload = () =>{
    if(window.scrollY > 0) {
        document.querySelector('.navbar').classList.add('activ');
    }else{
        document.querySelector('.navbar').classList.remove('activ');
    }
    };



    lightGallery(document.querySelector('.images-container'));
    
    //end navbar scrolly

 
//close mobile menu when clicking on menu item
const hideMobileMenu = () => {
const menuBars = document.querySelector('.is-active')
if(window.innerWidth <= 968 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
    logo.classList.remove('active');
}
};





AOS.init();
menuLinks.addEventListener('click', hideMobileMenu);
logo.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);
// end comment close mobile menu when clicking on menu item


























