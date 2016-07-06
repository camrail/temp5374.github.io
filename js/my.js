$(function() {
  // start code
  function fadefunction(targetclass, wordorletter, direction, r1, r2) {
    // wrap elements in spans
    var $contentcontainer = $(targetclass);
    var $content = $contentcontainer.html();
    split = $content.split(wordorletter);
    var newp = [];
    var counter = [];

    $(split).each(function(index) {
      newp = newp + ('<span class="s' + index + '"> ' + split[index] + '</span>')
    });

    $contentcontainer.html(newp)

    //   // random number generator
    function randomNumber(min, max) {
      var randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
      return randomNumber
    };

    $(split).each(function(index) {
      $('.s' + index).fadeTo(0, 0);
    });

    // Reveal text
    if (direction === 1) {
      $contentcontainer.css('color', 'white');
    } else {
      $contentcontainer.css('display', 'none');
    }


    $(split).each(function(index) {
      $('.s' + index).fadeTo(randomNumber(r1, r2), direction);
    });
  }
  // $(".about").click(fadefunction(".about", " "));
  // $(".ll").click(console.log("click"));
  ;
  fadefunction('.openingll', '', 1, 500, 5000);
  setTimeout(function() {
    fadefunction('.openingll', '', 0, 0, 0)
  }, 5000);
  setTimeout(function() {
    fadefunction('.opening', ' ', 1, 500, 5000)
  }, 5500);

  // lightbox
  function lightbox(target) {

    console.log(target);


    // Variables
    //var targetid = target;
    //var $test = $(targetid)[0];
    var $wh = $(window).height();
    var $ww = $(window).width();
    var $target = $(target);
    var $targeth = $target.height();
    var $targetw = $target.width();


    var topdistance = $target[0].getBoundingClientRect().top;
    var leftdistance = $target[0].getBoundingClientRect().left;
    //$target.css('color', 'red');

    // Get image orientation, scale ratio and center
    if ($targeth > $targetw) {

      // Portrait
      var scalefactor = ($ww / $targetw) * 0.99
      $($target).css({
        'transform': 'scale(' + scalefactor + ')',
        'transform-origin': '0 0'
      })
      var $targeth = $($target).height();
      var centeredtopdistance = ((($wh - $targeth) / 2) - topdistance)
      $($target).css({
        'transform': 'translate(' + centeredleftdistance + 'px, -' + topdistance + 'px) scale(' + scalefactor + ')',
        'transform-origin': '0 0'
      })


    } else {

      // Landscape
      scalefactor = ($wh / $targeth) * 0.99;
      $($target).css({
        'transform': 'scale(' + scalefactor + ')',
        'transform-origin': '0 0'
      })
      var $targetw = $($target).width();
      var centeredleftdistance = ((($ww - $targetw) / 2) - leftdistance)
      $($target).css({
        'transform': 'translate(' + centeredtopdistance + 'px, -' + leftdistance + 'px) scale(' + scalefactor + ')',
        'transform-origin': '0 0'
      })
    }


    // Place in top corner and scale image

  };

  //window.cam.lightbox = lightbox;

  //lightbox('#test');

  $('#gallery img').on('click.lightbox', function() {
    console.log('bound');
    lightbox(this);
  });


});
