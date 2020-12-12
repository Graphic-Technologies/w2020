import { masthead, body } from '../selectors.js';

export function headerShift() {
  const shift = masthead.offsetHeight;
  if (!body.classList.contains('has-hero')) {
    body.style.paddingTop = `${shift}px`;
  }
}

export function stickyHeader() {
  if (window.pageYOffset > 50) {
    masthead.classList.add('sticky');
  } else {
    masthead.classList.remove('sticky');
  }
}