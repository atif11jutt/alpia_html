jQuery(function ($) {

    $(".opener").click(function () {
        var tar = $(this).data("target")
        $("#" + tar).slideToggle();
    })

    var owl = $("#slider");
    owl.owlCarousel({
        items: 3,
        autoplay: 1500,
        smartSpeed: 700,
        loop: true,
        margin: 50,
        dots: false,
        nav: false,
    });

    // Go to the next item
    $('.customNextBtn').click(function () {
        owl.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.customPrevBtn').click(function () {
        owl.trigger('prev.owl.carousel');
    })
})