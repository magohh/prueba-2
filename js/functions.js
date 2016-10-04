
//Scroll to id
$("#itemSectionInitial").click(function() {
	$(".item").removeClass('active');
    $('html, body').animate({
        scrollTop: $("#SectionInitial").offset().top
    }, 600);
});

$("#itemWhatWeDo").click(function() {
	$(".item").removeClass('active');
    $('html, body').animate({
        scrollTop: $("#WhatWeDo").offset().top -100
    }, 600);
    $("#itemWhatWeDo").addClass('active');
});

$("#itemOurProcess").click(function() {
	$(".item").removeClass('active');
    $('html, body').animate({
        scrollTop: $("#OurProcess").offset().top -100
    }, 600);
    $("#itemOurProcess").addClass('active');
});

$("#itemMedia").click(function() {
	$(".item").removeClass('active');
    $('html, body').animate({
        scrollTop: $("#Media").offset().top -100
    }, 600);
    $("#itemMedia").addClass('active');
});

$("#itemContact, #GetInTouch").click(function() {
	$(".item").removeClass('active');
    $('html, body').animate({
        scrollTop: $("#Contact").offset().top -100
    }, 600);
    $("#itemContact").addClass('active');
});

$("#itemAboutUs").click(function() {
	$(".item").removeClass('active');
    $('html, body').animate({
        scrollTop: $("#AboutUs").offset().top -100
    }, 600);
    $("#itemAboutUs").addClass('active');
});

//Video

 $('#play').click(function(e){
    e.preventDefault();
    playVideo();
})

 function playVideo(){
    $('#play, .gradient-linear--opacity').fadeTo( "slow", 0 );
    // $('#play').addClass('hide');
    // $('.gradient-linear--opacity').addClass('hide');
    $("#videoPursue")[0].play();
    $('#videoPursue').hover(function toggleControls() {
        if (this.hasAttribute("controls")) {
            this.removeAttribute("controls")
        } else {
            this.setAttribute("controls", "controls")
        }
    });
}


//Delete space in video
function heightVideo(){
    var heightVideoContainer = $('#videoPursue').outerHeight();
    $('.video-container').css('padding-bottom', heightVideoContainer);
    // console.log(heightVideoContainer);
}

