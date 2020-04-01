//-nicescrol active
/*$("body").niceScroll({
    cursorcolor:"#ffc107",
    cursorwidth:"4px",
    zindex: "99999999",
    cursorborder:"none",
    scrollspeed: 100,
});
*/

//--facebook chat active
window.fbAsyncInit = function() {
    FB.init({
    xfbml            : true,
    version          : 'v6.0'
});
};
(function(d, s, id) {
var js, fjs = d.getElementsByTagName(s)[0];
if (d.getElementById(id)) return;
js = d.createElement(s); js.id = id;
js.src = 'https://connect.facebook.net/ar_AR/sdk/xfbml.customerchat.js';
fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
//--toast area
    
$(document).ready(function(){
    $('.toast').toast('show');
});
//-typed area
var typed = new Typed('.typing', {
    strings:['المعهد العالي للحاسب الآلي ونظم المعلومات','المعهد العالي للسياحة والفنادق','المعهد العالي لترميم الآثار'],
    typeSpeed: 50,
    backSpeed: 50,
    loop:true,
    backDelay: 3500,
    showCursor:false
});




//-On Windou Scrolling do-------------
$(window).scroll(function(){

    //-Scrolling bar
    var scroll=$(window).scrollTop(),
        dh=$(document).height(),
        wh=$(window).height();
    scrollPercent =(scroll/(dh-wh)) *100;
    $('.scrollbar').css('height',scrollPercent+'%');

    //-fadeIn And Our => slideToTop
    var slideToTop = $('.slideToTop');
    if($(window).scrollTop() >= 1000){
        if(slideToTop.is(':hidden')){
            $('.slideToTop').fadeIn(400);
        };
    }else {
        $('.slideToTop').fadeOut(400);
    };
    
    //-Nav Bar Fixed
    if($(window).scrollTop() >= 500){
        $('.navbar').css({
            "position":"fixed",
            "z-index":"9998",
            "background-color":"rgba(0, 0, 0, 0.486)",
        });
    }else {
        $('.navbar').css({
            "position":"static",
        });
    }
});


        





$('.slideToTop').click(function(e){
    //-stop def
    e.preventDefault();
    //-make animate
    $('html,body').animate({
        scrollTop : 0
    },1000);
});