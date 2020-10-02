import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  var typed = new Typed('#typed-text', {
    strings: ["Mister Cocktail is at your service!", "Create your dream cocktail.", "Set your ingredients for your recipe.", "Make your unique blend!", "Easy to use."],
    typeSpeed: 60,
    backSpeed: 50,
    startDelay: 200,
    backDelay: 400,
    showCursor: false,
    loop: true
  });
}

export { loadDynamicBannerText };
