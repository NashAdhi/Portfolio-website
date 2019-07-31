

//Smooth Scroll
$(document).on('click', 'a [href^="#"]', function(event) {


    event.preventDefault();

$('html, head').animate({
scrollTop: $($.attr(this, 'href')).offset().top    
}, 5000);
});

onclick = "menuToggle()";

function menuToggle() {
    var X = document.getElementById('navbarSupportedContent');

if (X.className == 'navbarSupportedContent') {

    X.className += ' responsive';
}
else {

    X.className = ' navbarSupportedContent';
     
    }
}
