/*eslint-env jquery*/
$(window).bind("load", function() {
    var footerHeight = 0;
    var footerTop = 0;
    var $footer = $("#footer");

    positionFooter();

    function positionFooter(){
        footerHeight = $footer.height();

        if (($(document.body).height() + footerHeight) < $(window).height()) {
            //Must flush, does not reach end of page
            footerTop = ($(window).scrollTop() + $(window).height() - footerHeight) + "px";

            $footer.css({
                position: "absolute",
                top: footerTop
            });
        }
        else {
            $footer.css({
                position: "static"
            });
        }
    }

    $(window).scroll(positionFooter);
    $(window).resize(positionFooter);
});