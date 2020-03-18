
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
//- 
    
$(document).ready(function(){
    $('.toast').toast('show');
});
//-typed area
var typed = new Typed('.typing', {
    strings:['','Management Information Systems','Tourism and Hotels','Monument Restoration'],
    typeSpeed: 50,
    backSpeed: 30,
    loop:true,
    backDelay: 2500,
    showCursor:false
});

