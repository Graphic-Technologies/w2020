import { masthead, body } from '../selectors.js';

export function headerShift() {
  const shift = masthead.offsetHeight;
  if (!body.classList.contains('has-hero')) {
    body.style.paddingTop = `${shift}px`;
  }
}