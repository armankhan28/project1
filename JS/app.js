$(document).ready(function(){
    $('.slider').slick({
        arrows:false,
        dots:true,
        appendDots:'.slider-dots',
        dotsClass:'dots'
    });


    let humburger = document.querySelector('.humburger');
    let times = document.querySelector('.times');
    let mobileNav = document.querySelector('.mobile-nav');

    humburger.addEventListener('click', function(){
        mobileNav.classList.add('open');
    });

    times.addEventListener('click', function(){
        mobileNav.classList.remove('open');
    });

});