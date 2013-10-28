    enquire.register("screen and (min-width: 321px)", {
        match: function() {
        jQuery(document).ready(function () {
    $('a[href^="#"]').click(function()
    {
        var sHref = this.href.split("#");
        var topDistance = $("#"+sHref[1]).position().top;
        var tds = topDistance -45;
        $("html, body").animate({
            scrollTop: tds
        }, 'fast');
    });
});
        }
        });
