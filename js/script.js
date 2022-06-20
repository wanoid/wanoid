/*
    Sepertinya disitu ngelag 
    flow --
    INPUT -> name, email, subject, message
    
*/ 
const WhatsappAPIuri = 'https://wa.me/0895800991450'

// const handleSendToWA = () => {
//     const submitBTN = document.getElementById('#form-submit')
    

$(document).ready(function() {
    $('#form-submit').on('click', function(event) {
        event.preventDefault()
        const name = $('#name').val() || ""
        const email = $('#email').val() || ""
        const subject = $('#subject').val() || ""
        const message = $('#message').val() || ""

        const textTemplate = `Halo, perknalkan nama saya ${name} %0AIni email/sosmed saya ${email}. %0ASalam kenal, %0A${subject} %0A${message}`

        window.location.href = `${WhatsappAPIuri}?text=${textTemplate}`
    })

    // navigation click actions 
    $('.scroll-link').on('click', function(event){
        event.preventDefault();
        var sectionID = $(this).attr("data-id");
        scrollToID('#' + sectionID, 750);
    });
    // scroll to top action
    $('.scroll-top').on('click', function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop:0}, 'slow');         
    });
    // mobile nav toggle
    $('#nav-toggle').on('click', function (event) {
        event.preventDefault();
        $('#main-nav').toggleClass("open");
    });
});
// scroll function
function scrollToID(id, speed){
    var offSet = 0;
    var targetOffset = $(id).offset().top - offSet;
    var mainNav = $('#main-nav');
    $('html,body').animate({scrollTop:targetOffset}, speed);
    if (mainNav.hasClass("open")) {
        mainNav.css("height", "1px").removeClass("in").addClass("collapse");
        mainNav.removeClass("open");
    }
}
if (typeof console === "undefined") {
    console = {
        log: function() { }
    };
}