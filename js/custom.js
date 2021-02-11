$(window).on('load', function () {
  "use strict";

  /*=========================================================================
      Preloader
  =========================================================================*/
  $("#preloader").delay(350).fadeOut('slow');
  // Because only Chrome supports offset-path, feGaussianBlur for now
  var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

  if (!isChrome) {
    document.getElementsByClassName('infinityChrome')[0].style.display = "none";
    document.getElementsByClassName('infinity')[0].style.display = "block";
  }

  /*=========================================================================
   Wow Initialize
   =========================================================================*/
  // Here will be the WoW Js implementation.
  setTimeout(function () {
    new WOW().init();
  }, 0);

  var dynamicDelay = [
    200,
    400,
    600,
    800,
    1000,
    1200,
    1400,
    1600,
    1800,
    2000
  ];
  var fallbackValue = "200ms";

  $(".blog-item.wow").each(function (index) {
    $(this).attr("data-wow-delay", typeof dynamicDelay[index] === 'undefined' ? fallbackValue : dynamicDelay[index] + "ms");
  });

  /*=========================================================================
          Mobile Menu Toggle
  =========================================================================*/
  $('.menu-icon button').on('click', function () {
    $('header.desktop-header-1, main.content, header.mobile-header-1').toggleClass('open');
  });

  $('main.content').on('click', function () {
    $('header.desktop-header-1, main.content, header.mobile-header-1').removeClass('open');
  });

  $('.vertical-menu li a').on('click', function () {
    $('header.desktop-header-1, main.content, header.mobile-header-1').removeClass('open');
  });

  $('.menu-icon button').on('click', function () {
    $('header.desktop-header-2, main.content-2, header.mobile-header-2').toggleClass('open');
  });

  $('main.content-2').on('click', function () {
    $('header.desktop-header-2, main.content-2, header.mobile-header-2').removeClass('open');
  });

  $('.vertical-menu li a').on('click', function () {
    $('header.desktop-header-2, main.content-2, header.mobile-header-2').removeClass('open');
  });

  /*=========================================================================
   One Page Scroll with jQuery
   =========================================================================*/
  $('a[href^="#"]:not([href="#"]').on('click', function (event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top
    }, 800, 'easeInOutQuad');
    event.preventDefault();
  });

  /*=========================================================================
   Parallax layers
   =========================================================================*/
  if ($('.parallax').length > 0) {
    var scene = $('.parallax').get(0);
    var parallax = new Parallax(scene, {
      relativeInput: true,
    });
  }

  /*=========================================================================
  Text Rotating
  =========================================================================*/
  $(".text-rotating").Morphext({
    // The [in] animation type. Refer to Animate.css for a list of available animations.
    animation: "bounceIn",
    // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
    separator: ",",
    // The delay between the changing of each phrase in milliseconds.
    speed: 4000,
    complete: function () {
      // Called after the entrance animation is executed.
    }
  });

  /*=========================================================================
   Add (nav-link) class to main menu.
   =========================================================================*/
  $('.vertical-menu li a').addClass('nav-link');

  /*=========================================================================
   Bootstrap Scrollspy
   =========================================================================*/
  $("body").scrollspy({
    target: ".scrollspy"
  });

  /*=========================================================================
   Progress bar animation with Waypoint JS
   =========================================================================*/
  if ($('.skill-item').length > 0) {
    var waypoint = new Waypoint({
      element: document.getElementsByClassName('skill-item'),
      handler: function (direction) {

        $('.progress-bar').each(function () {
          var bar_value = $(this).attr('aria-valuenow') + '%';
          $(this).animate({
            width: bar_value
          }, {
            easing: 'linear'
          });
        });

        this.destroy()
      },
      offset: '50%'
    });
  }

  /*=========================================================================
   Spacer with Data Attribute
   =========================================================================*/
  var list = document.getElementsByClassName('spacer');

  for (var i = 0; i < list.length; i++) {
    var size = list[i].getAttribute('data-height');
    list[i].style.height = "" + size + "px";
  }

  /*=========================================================================
   Background Color with Data Attribute
   =========================================================================*/
  var list = document.getElementsByClassName('data-background');

  for (var i = 0; i < list.length; i++) {
    var color = list[i].getAttribute('data-color');
    list[i].style.backgroundColor = "" + color + "";
  }

  /*=========================================================================
          Main Menu
  =========================================================================*/
  $(".submenu").before('<i class="ion-md-add switch"></i>');

  $(".vertical-menu li i.switch").on('click', function () {
    var $submenu = $(this).next(".submenu");
    $submenu.slideToggle(300);
    $submenu.parent().toggleClass("openmenu");
  });

  /*=========================================================================
          Scroll to Top
  =========================================================================*/
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 350) { // If page is scrolled more than 50px
      $('#return-to-top').fadeIn(200); // Fade in the arrow
    } else {
      $('#return-to-top').fadeOut(200); // Else fade out the arrow
    }
  });
  $('#return-to-top').on('click', function (event) { // When arrow is clicked
    event.preventDefault();
    $('body,html').animate({
      scrollTop: 0 // Scroll to top of body
    }, 400);
  });

});