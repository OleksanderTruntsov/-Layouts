$( document ).ready(function() {
    $(".widget__item").on("click", function() {
        $(".widget__item").removeClass("widget__item_selected");
        $(this).addClass("widget__item_selected");
    });
});