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


// Lightgallery – Activate

lightGallery(document.getElementById('lightgallery'), {
    speed: 500,
    download: false
});

lightGallery(document.getElementById('lightgallery-2'), {
    speed: 500,
    download: false
});