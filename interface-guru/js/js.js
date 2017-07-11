$(document).ready(function(){
    $('.grad2').gradientText({
        colors: ['#2abbd5','#40d874']
    });

});

$("#modal1").on("shown.bs.modal", function (e) {

    $('.grad2b').gradientText({
        colors: ['#2abbd5','#40d874']
    });
    var api = $('#modal1 .grad2b').data('gradientText');
    api.update();

});

$("#modal2").on("shown.bs.modal", function (e) {

    $('.grad2b').gradientText({
        colors: ['#2abbd5','#40d874']
    });
    var api = $('#modal2 .grad2b').data('gradientText');
    api.update();

});

$("#block4-opt1").click(function(){
$(".block4 .active").removeClass("active");
$("#block4-opt1").addClass("active");
$("#block4-box-opt1").addClass("active");

$(".block4 .cir1").removeClass("rotate-120");
$(".block4 .cir2").removeClass("rotate120");
$("#block4-opt1").removeClass("rotate-120");
$("#block4-opt2").removeClass("rotate-120");
$("#block4-opt3").removeClass("rotate-120");

$(".block4 .cir1").removeClass("rotate-240");
$(".block4 .cir2").removeClass("rotate240");
$("#block4-opt1").removeClass("rotate-240");
$("#block4-opt2").removeClass("rotate-240");
$("#block4-opt3").removeClass("rotate-240");

});

$("#block4-opt2").click(function(){
$(".block4 .active").removeClass("active");
$("#block4-opt2").addClass("active");
$("#block4-box-opt2").addClass("active");

$(".block4 .cir1").removeClass("rotate-240");
$(".block4 .cir2").removeClass("rotate240");
$("#block4-opt1").removeClass("rotate-240");
$("#block4-opt2").removeClass("rotate-240");
$("#block4-opt3").removeClass("rotate-240");

$(".block4 .cir1").addClass("rotate-120");
$(".block4 .cir2").addClass("rotate120");
$("#block4-opt1").addClass("rotate-120");
$("#block4-opt2").addClass("rotate-120");
$("#block4-opt3").addClass("rotate-120");


});

$("#block4-opt3").click(function(){
$(".block4 .active").removeClass("active");
$("#block4-opt3").addClass("active");
$("#block4-box-opt3").addClass("active");

$(".block4 .cir1").removeClass("rotate-120");
$(".block4 .cir2").removeClass("rotate120");
$("#block4-opt1").removeClass("rotate-120");
$("#block4-opt2").removeClass("rotate-120");
$("#block4-opt3").removeClass("rotate-120");

$(".block4 .cir1").addClass("rotate-240");
$(".block4 .cir2").addClass("rotate240");
$("#block4-opt1").addClass("rotate-240");
$("#block4-opt2").addClass("rotate-240");
$("#block4-opt3").addClass("rotate-240");
});

$(".block10 .item").click(function(){
$(this).toggleClass("bg-f3f6f8");
});


jQuery(".scrollto").click(function () {
elementClick = jQuery(this).attr("data-target")
destination = jQuery(elementClick).offset().top;
jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1100);
return false;
});

$(".ani1").addClass("o0");
$(".ani2").addClass("o0");
$(".ani3").addClass("o0");
$(".ani4").addClass("o0");
$(".ani5").addClass("o0");
$(".ani5b").addClass("o0");
$(".ani6").addClass("o0");
$(".ani7").addClass("o0");
$(".ani8").addClass("o0");
$(".ani9").addClass("o0");
$(".ani10").addClass("o0");
$(".ani11").addClass("o0");
$(".ani12").addClass("o0");
$(".ani13").addClass("o0");
$(".ani14").addClass("o0");

if ( $(window).width() > 991 ) {

$(".grad1.w200").addClass("w0");
$(".grad1.w155").addClass("w0");
$(".grad1.w62").addClass("w0");

}

Pace.on("done", function(){

$('.preloader1').addClass("animated");
$('.preloader2').addClass("animated");
$('html').removeClass("oh");

    setTimeout(function(){
$('.cssload-container').addClass("done");
$(document.body).on('appear', '.block1', function(e, $affected) {
$('.block1 .ico1').addClass("animated");
$('.block1 .ico2').addClass("animated");
});
$('.block1').appear({force_process: true});

$(document.body).on('appear', '.grad1.w200', function(e, $affected) {
$(this).removeClass("w0");});
$('.grad1.w200').appear({force_process: true});

$(document.body).on('appear', '.grad1.w62', function(e, $affected) {
$(this).removeClass("w0");});
$('.grad1.w62').appear({force_process: true});

$(document.body).on('appear', '.grad1.w155', function(e, $affected) {
$(this).removeClass("w0");});
$('.grad1.w155').appear({force_process: true});

$(document.body).on('appear', '.ani1', function(e, $affected) {
$(this).addClass("animated flipInX");
$(this).removeClass("o0");});
$('.ani1').appear({force_process: true});

$(document.body).on('appear', '.ani2', function(e, $affected) {
$(this).addClass("animated fadeIn");
$(this).removeClass("o0");});
$('.ani2').appear({force_process: true});

$(document.body).on('appear', '.ani3', function(e, $affected) {
$(this).addClass("animated slideInLeft");
$(this).removeClass("o0");});
$('.ani3').appear({force_process: true});

$(document.body).on('appear', '.ani4', function(e, $affected) {
$(this).addClass("animated slideInRight");
$(this).removeClass("o0");});
$('.ani4').appear({force_process: true});

$(document.body).on('appear', '.ani5', function(e, $affected) {
$(this).addClass("animated rotateIn");
$(this).removeClass("o0");});
$('.ani5').appear({force_process: true});

$(document.body).on('appear', '.ani5b', function(e, $affected) {
if ($('.ani5b').hasClass("animated")) {
$(this).addClass("rotateIn");
$(this).removeClass("o0");
    setTimeout(function(){
$(".block4 .cir2").removeClass("animated");
$(".block4 .cir2").removeClass("rotateIn");
          }
 , 1000);

}});
$('.ani5b').appear({force_process: true});

$(document.body).on('appear', '.ani6', function(e, $affected) {
$(this).addClass("animated fadeInLeft");
$(this).removeClass("o0");});
$('.ani6').appear({force_process: true});

$(document.body).on('appear', '.ani7', function(e, $affected) {
$(this).addClass("animated fadeInRight");
$(this).removeClass("o0");});
$('.ani7').appear({force_process: true});

$(document.body).on('appear', '.ani8', function(e, $affected) {
$(this).addClass("magictime puffIn");
$(this).removeClass("o0");});
$('.ani8').appear({force_process: true});

$(document.body).on('appear', '.ani9', function(e, $affected) {
$(this).addClass("animated slideInUp");
$(this).removeClass("o0");});
$('.ani9').appear({force_process: true});

$(document.body).on('appear', '.ani10', function(e, $affected) {
$(this).addClass("magictime spaceInUp");
$(this).removeClass("o0");});
$('.ani10').appear({force_process: true});

$(document.body).on('appear', '.ani11', function(e, $affected) {
$(this).addClass("magictime swashIn");
$(this).removeClass("o0");});
$('.ani11').appear({force_process: true});

$(document.body).on('appear', '.ani12', function(e, $affected) {
$(this).addClass("magictime swap");
$(this).removeClass("o0");});
$('.ani12').appear({force_process: true});

$(document.body).on('appear', '.ani13', function(e, $affected) {
$(this).addClass("magictime spaceInDown");
$(this).removeClass("o0");});
$('.ani13').appear({force_process: true});

$(document.body).on('appear', '.ani14', function(e, $affected) {
$(this).addClass("animated zoomIn");
$(this).removeClass("o0");});
$('.ani14').appear({force_process: true});

          }
 , 500);

});

$("[placeholder]").textPlaceholder();