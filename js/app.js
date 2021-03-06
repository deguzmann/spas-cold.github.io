/*var pageHeader = document.querySelector('.page-header');
var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.page-header__toggle');

pageHeader.classList.remove('page-header--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    navToggle.classList.remove('page-header__toggle--closed');
    navToggle.classList.add('page-header__toggle--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    navToggle.classList.remove('page-header__toggle--opened');
    navToggle.classList.add('page-header__toggle--closed');
  }
});*/

var videoBlock = document.querySelector('.portfolio__video'),
    vid = document.querySelector('.video');

videoBlock.addEventListener('click', function() {
  if (vid.paused) {
    vid.play();
    videoBlock.classList.remove('portfolio__paused');
    vid.setAttribute("controls", "");
  } else {
    vid.pause();
    videoBlock.classList.add('portfolio__paused');
    vid.removeAttribute("controls");
  };
});
