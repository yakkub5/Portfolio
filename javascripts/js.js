$(document).ready(function(){
    $( ".box" ).hover(function() {
        $(this).addClass("infinite pulse");
    },
    function() {
        $(this).removeClass("infinite pulse");
    }
    );
});

$(function () {
    var header = $('header');
    var backgrounds = [
      'url(img/1.png)',
      'url(img/2.png)',
      'url(img/3.png)'];
    var current = 0;

    function nextBackground() {
        header.css({
            "transition": "background 1s ease-in",
            'background-image': backgrounds[current = ++current % backgrounds.length]
        });

        setTimeout(nextBackground, 6000);
    }
    setTimeout(nextBackground, 6000);
    header.css({
        "transition": "background 1s ease-in",
        "background-image": backgrounds[0]
    });
});


(function($) {
    $.fn.clickToggle = function(func1, func2) {
        var funcs = [func1, func2];
        this.data('toggleclicked', 0);
        this.click(function() {
            var data = $(this).data();
            var tc = data.toggleclicked;
            $.proxy(funcs[tc], this)();
            data.toggleclicked = (tc + 1) % 2;
        });
        return this;
    };
}(jQuery));


$('#nav-icon, .overlay li a').clickToggle(function() {   
    $("#nav-icon").addClass("open");
    $(".overlay").show();
    $(".overlay").removeClass("animated flipOutX");
    $(".overlay").addClass("animated flipInX");
},
function() {
    $("#nav-icon").removeClass("open");
    $(".overlay").removeClass("animated flipInX");
    $(".overlay").addClass("animated flipOutX");
});

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        $("#nav-icon").trigger( "click" );
        return false;
      }
    }
  });
});


// Google analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-72312664-1', 'auto');
ga('send', 'pageview');