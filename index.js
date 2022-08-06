$("[data-toggle='toggle']").click(function() {
    var selector = $(this).data("target");
    $(selector).toggleClass("col-10");
    $(selector).toggleClass("collapsedMenu");
})