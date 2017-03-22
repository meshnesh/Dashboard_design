// $(".nav-toggle-btn").click(function() {
//
// });

(function() {
    var mynav = $('body'),
        mybutton = mynav.find('.nav-toggle-btn');


    mybutton.on('click', function(e) {
        mynav.toggleClass('active-nav');
        e.preventDefault();
        $(".fa-angle-left").toggle();
    });
})();

