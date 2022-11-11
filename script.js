// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );

$(".hamburger-icon").click(function(){

    $(this).toggleClass('active');
    $(".mobile-menu").fadeToggle();

});

// Animate on scroll – Activate
AOS.init({
    duration: 1000
});

});