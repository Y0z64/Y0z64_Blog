import './style.css'

import { setupCounter } from './counter.ts'
import gsap from 'gsap';

// HTML structure
const appDiv = document.getElementById('app');
const content = document.createElement('div');
const name = document.createElement('h1');

var cursor = document.querySelector('.cursor'),
    mouseX = 0,
    mouseY = 0;


// Content
name.innerText = "Y0z64"
name.classList.add('name');

gsap.to({}, 0.016, {
  repeat: -1,

  onReapeat: function () {
    gsap.set(cursor, {
      css: {
        left: mouseX,
        top: mouseY
      }
    })
  }
});

// Append
appDiv?.appendChild(content);
content.appendChild(name);

window.addEventListener('mousemove', function (e){
  mouseX = e.clientX;
  mouseY = e.clientY;
});

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
