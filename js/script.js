var anime = require('animejs');
var bootstrap = require('bootstrap');

var bannerText = document.querySelector('.home-banner-text');

var textArray = [
  "sherm is a guy",
  "sherm is a web developer",
  "sherm is a sound designer",
  "sherm is a music composer",
  "sherm is a digital artist",
  "sherm is a programmer",
  "sherm is a nickname"
];

var textIndex = Math.floor(Math.random() * textArray.length);

var animReset = anime.set('.home_banner .home-banner-text', {
  opacity: 0
});

anime({
  targets: '.home_banner .home-banner-text',
  keyframes: [
    {
      translateY: '-100px',
      duration: 0,
      opacity: 0,
    },
    {
      translateY: '0px',
      duration: 2500,
      opacity: 100,
    },
    {
      translateY: '50px',
      duration: 2500,
      opacity: -100,
    },
    {
      translateY: '-100px',
      duration: 0,
      opacity: 0,
    },
  ],
  easing: 'easeOutElastic(1, .5)',
  loop: true,

  update: function () {
    bannerText.innerHTML = textArray[textIndex].toString();
  },

  loopComplete: function() {
    textIndex = Math.floor(Math.random() * textArray.length);
    console.log('loop ended');
  }
});