import { asyncForEach, wait } from '../helpers.js';
import { body } from '../selectors.js';

const ssWrap = document.querySelector('.section-selector--wrap');
const ssLauncher = document.querySelector('.section-select-launcher');
const ssButtons = document.querySelectorAll('.section-selector button');

async function ssOpen() {
  // e.preventDefault();
  ssWrap.classList.add('active');
  await wait(10);
  ssWrap.classList.add('transitioned');
  ssWrap.focus();
}
async function ssClose() {
  ssWrap.classList.remove('transitioned');
  await wait(200);
  ssWrap.classList.remove('active');
}

export function applySection() {
  const section = localStorage.getItem('section');
  const removeClasses = ['section-1', 'section-2'];
  if (section) {
    body.classList.remove(...removeClasses);
    body.classList.add(section);
  } else {
    ssOpen();
  }
}

applySection();

function handleSelect(e) {
  const section = e.currentTarget.dataset.section;
  localStorage.setItem('section', section);
  applySection();
  ssClose();
}

ssButtons.forEach(btn => btn.addEventListener('click', handleSelect));
// ssButtons.forEach(btn => console.log(btn));

ssWrap.addEventListener('click', (e) => {
  if (e.currentTarget === e.target) {
    ssClose(e);
  }
})

ssLauncher.addEventListener('click', ssOpen);