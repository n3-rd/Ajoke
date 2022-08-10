import './style.css';
import {gsap} from 'gsap';
import textFit from 'textfit';
import Lenis from '@studio-freight/lenis'

const lenis = new Lenis({
  lerp: 0.1,
  smooth: true,
  direction: 'vertical',
})

//get scroll value
lenis.on('scroll', ({ scroll, limit }) => {
  console.log({ scroll, limit })
})

function raf() {
  lenis.raf()
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
// textFit(document.querySelector('.main-text'), {alignHoriz: true, multiLine: false, minFontSize: 110, maxFontSize: 400});


const items = document.querySelectorAll('.item')

items.forEach((el) => {
  const image = el.querySelector('img')
  
  el.addEventListener('mouseenter', (e) => {
    gsap.to(image, { autoAlpha: 1 })
  })
  
   el.addEventListener('mouseleave', (e) => {
    gsap.to(image, { autoAlpha: 0 })
  })
  
  el.addEventListener('mousemove', (e) => {
    gsap.set(image, { x: e.offsetX - 200 })
  })
})

const mainText = document.querySelector('.main-text');
const section4 = document.querySelector('.section-4');
let playSound = ()=>{
  let sound = new Audio('https://gentle-falls-68008.herokuapp.com/api/v1/names/A%CC%80j%E1%BB%8Dk%E1%BA%B9%CC%81');
  sound.play();
}
mainText.addEventListener("click", ()=>{
  playSound();
});
section4.addEventListener("click", ()=>{
  playSound();
});