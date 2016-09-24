import { h, Component } from 'preact';
import anime from 'animejs';





// Animation Hover
let hoverAnimation = () => {
  var galThumbs = document.querySelectorAll('.galThumb-container');
  for (let galThumb of galThumbs) {

    // mouse in event
    galThumb.addEventListener('mouseenter', function(){
      mouseInEvent(this);
    },false);
    // mouse out event
    galThumb.addEventListener('mouseleave', function(){
      mouseOutEvent(this);
    }, false);
  }
}

let mouseInEvent = (elem) => {
  var galThumbImg = elem.querySelector('.galThumb-img');
  var galThumbDesc = elem.querySelector('.galThumb-desc');
  anime({
    targets: [galThumbImg, galThumbDesc],
    translateX: '50px',
    duration: 2000,
    delay: function(el, index) {
      return index * 100;
    }
  });
};

let mouseOutEvent = (elem) => {
  var galThumbImg = elem.querySelector('.galThumb-img');
  var galThumbDesc = elem.querySelector('.galThumb-desc');
  anime({
    targets: [galThumbImg, galThumbDesc],
    translateX: '0.1px',
    duration: 2000,
    delay: function(el, index) {
      return index * 100;
    }
  });
};

export default hoverAnimation;
