$(document).ready(function(){
   var touch = $("#burger-menu"),
       menu = $(".list-menu");

    $(touch).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
    });
    $(window).resize(function(){
        var wid = $(window).width();
        if(wid >760 && menu.is(":hidden")) {
            menu.removeAttr('style');
        }
    });
});