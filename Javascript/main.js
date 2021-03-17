$(document).ready(function(){

    $('.slider').bxSlider({
        randomStart:true,
        auto:true,
        pause:4000,
    });

let lastKnownScrollPosition = 0;
let ticking = false;

const solidHeaderPosition = 700;
const mainHeaderElement = document.getElementById('main-hdr');

function doSomething(scrollPos) {
  if (scrollPos > solidHeaderPosition) {
    // become solid
    mainHeaderElement.classList.add('solid');
  } else {
    // go back transparent
    mainHeaderElement.classList.remove('solid');
  }
}

document.addEventListener("scroll", function (e) {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function () {
      doSomething(lastKnownScrollPosition);
      ticking = false;
    });

    ticking = true;
  }
});
});
