Pace.on("done", function(){

$(window).scroll(function(){
if ($(window).scrollTop()>$(".navbar").height()){
$(".navbar").addClass("top");
}
else
{
$(".navbar").removeClass("top");
}
});

jQuery("a.scrollto").click(function () {
elementClick = jQuery(this).attr("href")
destination = jQuery(elementClick).offset().top;
jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1100);
return false;
});

$(".navbar-toggle").click(function(){
$("#navbar").addClass("animated slideInRight");
$("#navbar").removeClass("slideOutRight");
});

$("#navbar .close").click(function(){
$("#navbar").addClass("animated slideOutRight");
$("#navbar").removeClass("slideInRight");
});

$(".faq").click(function(){
$(this).toggleClass("active");
});

$("#block2 ul").addClass("o0");
$("#block3 .item").addClass("o0");
$("#block5").addClass("o0");
$("#block6 .item").addClass("o0");
$("#block8 img").addClass("o0");
$("#block8 .arrow").addClass("o0");
$("#block11 .col-md-6.bil").addClass("o0");
$("#block11 .col-md-6.bir").addClass("o0");
$("#block11 .col-md-4").addClass("o0");
$("#block13 .col-md-4").addClass("o0");
$("#block15").addClass("o0");
$("#block17").addClass("o0");

$(document.body).on('appear', '#block2 .rhomb', function(e, $affected) {
$(this).addClass("animated flip");
$(this).removeClass("o0");});
$('#block2 .rhomb').appear({force_process: true});

$(document.body).on('appear', '#block2 ul', function(e, $affected) {
$(this).addClass("animated slideInRight");
$(this).removeClass("o0");});
$('#block2 ul').appear({force_process: true});

$(document.body).on('appear', '#block3 .item', function(e, $affected) {
$(this).addClass("animated tada");
$(this).removeClass("o0");});
$('#block3 .item').appear({force_process: true});

$(document.body).on('appear', '#block5', function(e, $affected) {
$(this).addClass("animated bounceInLeft");
$(this).removeClass("o0");});
$('#block5').appear({force_process: true});

$(document.body).on('appear', '#block6 .item', function(e, $affected) {
$(this).addClass("animated flipInY");
$(this).removeClass("o0");});
$('#block6 .item').appear({force_process: true});

$(document.body).on('appear', '#block6 .btn3', function(e, $affected) {
$(this).addClass("animated rubberBand");
$(this).removeClass("o0");});
$('#block6 .btn3').appear({force_process: true});

$(document.body).on('appear', '#block8 img', function(e, $affected) {
$(this).addClass("animated rotateIn");
$(this).removeClass("o0");});
$('#block8 img').appear({force_process: true});

$(document.body).on('appear', '#block8 .arrow', function(e, $affected) {
$(this).addClass("animated fadeInUp");
$(this).removeClass("o0");});
$('#block8 .arrow').appear({force_process: true});

$(document.body).on('appear', '#block10', function(e, $affected) {
$(this).addClass("animated pulse");
$(this).removeClass("o0");});
$('#block10').appear({force_process: true});

$(document.body).on('appear', '#block11 .col-md-6.bil', function(e, $affected) {
$(this).addClass("animated slideInLeft");
$(this).removeClass("o0");});
$('#block11 .col-md-6.bil').appear({force_process: true});

$(document.body).on('appear', '#block11 .col-md-6.bir', function(e, $affected) {
$(this).addClass("animated slideInRight");
$(this).removeClass("o0");});
$('#block11 .col-md-6.bir').appear({force_process: true});

$(document.body).on('appear', '#block11 .col-md-4', function(e, $affected) {
$(this).addClass("animated flipInY");
$(this).removeClass("o0");});
$('#block11 .col-md-4').appear({force_process: true});

$(document.body).on('appear', '#block12 .btn4', function(e, $affected) {
$(this).addClass("animated swing");
$(this).removeClass("o0");});
$('#block12 .btn4').appear({force_process: true});

$(document.body).on('appear', '#block13 .col-md-4', function(e, $affected) {
$(this).addClass("animated zoomIn");
$(this).removeClass("o0");});
$('#block13 .col-md-4').appear({force_process: true});

$(document.body).on('appear', '#block15', function(e, $affected) {
$(this).addClass("animated flipInX");
$(this).removeClass("o0");});
$('#block15').appear({force_process: true});

$(document.body).on('appear', '#block17', function(e, $affected) {
$(this).addClass("animated rollIn");
$(this).removeClass("o0");});
$('#block17').appear({force_process: true});


});

