import { masthead, body, toTop } from '../selectors.js';

export function headerShift() {
  const shift = masthead.offsetHeight;
  if (!body.classList.contains('has-hero')) {
    body.style.paddingTop = `${shift}px`;
  }
}

export function stickyToggle() {
  if (window.pageYOffset > 50) {
    masthead.classList.add('sticky');
    toTop.classList.add('visible');
  } else {
    masthead.classList.remove('sticky');
    toTop.classList.remove('visible');
  }
}