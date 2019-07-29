

//Smooth Scroll
$(document).on('click', 'a [href^="#"]', function(event) {
event.preventDefault();

$('html, head').animate({
scrollTop: $($.attr(this, 'href')).offset().top    
}, 1500);
})

