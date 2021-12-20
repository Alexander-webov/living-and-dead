$(document).ready(function () {
    var men = true;
    $(".menu-mob").click(function () {
        if (men == false) {
            $(".menu__list").slideUp();
            men = !men;
        }
        else {
            $(".menu__list").slideDown();
            men = !men;
        }
    });


});