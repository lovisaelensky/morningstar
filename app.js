var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById('header').style.top = '0';
  } else {
    document.getElementById('header').style.top = '-150px';
  }
  prevScrollpos = currentScrollPos;
};

ScrollReveal().reveal('.hero-text', {
  origin: 'left',
  distance: '1000px',
  easing: 'ease',
  scale: '0.8',
  reset: false,
  delay: 400,
});

ScrollReveal().reveal('.hero-img', {
  origin: 'right',
  distance: '0px',
  easing: 'ease',
  scale: '0.6',
  reset: false,
  delay: 500,
});

ScrollReveal().reveal('.img-container', {
  origin: 'bottom',
  distance: '100px',
  easing: 'ease',
  scale: '0.6',
  reset: false,
  delay: 0,
});
ScrollReveal().reveal('.cupola-text', {
  origin: 'left',
  distance: '1000px',
  easing: 'ease',
  scale: '0.6',
  reset: false,
  delay: 100,
});
