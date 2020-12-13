import { body } from '../selectors.js';

function activateTabbing(e) {
  const keys = ["Tab", "ArrowUp", "ArrowRight", "ArrowDown", "ArrowLeft", 32]
  if (keys.includes(e.key) || keys.includes(e.keyCode)) {
    body.classList.add('tabbing');
  }
}

function deactivateTabbing(e) {
  body.classList.remove('tabbing');
}

window.addEventListener('keydown', activateTabbing);
window.addEventListener('click', deactivateTabbing);


