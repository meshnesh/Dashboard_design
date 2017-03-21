( function() {
    var mynav = $('body'),
        mybutton = mynav.find('.nav-toggle-btn');

    mybutton.on('click', function(e) {
        mynav.toggleClass('active-nav');
        e.preventDefault();
    });
})();


function myfunc(div) {
    var className = div.getAttribute("class");
    if(className=="fa-angle-right") {
        div.className = "active";
    }
    else{
        div.className = "fa-angle-left";
    }
}