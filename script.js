// THIS IS FOR THE STICKY NAVBAR WHEN SCROLLING

const navComponent2 = document.querySelector('.nav-component-2');

  window.onscroll = function() {
    if (window.scrollY > navComponent2.offsetTop) {
      navComponent2.classList.add('sticky');
    } else {
      navComponent2.classList.remove('sticky');
    }
  }

// THIS IS FOR THE GLIDE SLIDES

document.addEventListener("DOMContentLoaded", function () {
  const glide = new Glide(".glide", {
    type: "carousel",
    startAt: 0,
    perView: 1,
    focusAt: "center",
  });

  glide.mount();
});