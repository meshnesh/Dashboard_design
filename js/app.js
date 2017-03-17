$("#leftside-navigation .sub-menu > a").click(function(e) {
    $("#leftside-navigation ul ul").slideUp(), $(this).next().is(":visible") || $(this).next().slideDown(),
        e.stopPropagation()
});

/*Plus animation*/
var container = document.querySelector('.container');
var bar = document.querySelector('.bar--horizontal');

container.addEventListener('click', function() {
    if (bar.classList.contains('plus')) {
        bar.classList.remove('plus')
        bar.classList.add('minus')
    } else {
        bar.classList.remove('minus')
        bar.classList.add('plus')
    }
});