import { pageNav, linkedHeadings, body } from '../selectors.js';
import { wait } from '../helpers.js';

export function addToPageNav(heading) {
  const a = document.createElement('a');
  a.href = `#${heading.id}`;
  a.textContent = heading.textContent;
  const li = document.createElement('li');
  li.insertAdjacentElement('beforeend', a);
  pageNav.insertAdjacentElement('beforeend', li);
  const pnChildren = document.querySelectorAll('.page-nav > *');
  if (pnChildren.length >= 4) {
    pageNav.classList.add('columns-2');
  }
  pageNav.setAttribute('style', `--rows: ${Math.ceil(pnChildren.length / 2)};`)
}

export function createLinked(heading) {
  const baseurl = window.location.origin;
  heading.classList.add('heading-linked');

  const iconRef = document.querySelector('.heading-linked__link i');
  const clone = iconRef.cloneNode(true);

  // const screenReader = document.createElement('span');
  // screenReader.textContent ='Select to share link to this point on the page.';
  // screenReader.classList.add('screen-reader-text');

  const a = document.createElement('a');
  a.classList.add('heading-linked__link');
  a.href = `#${heading.id}`;
  a.insertAdjacentElement('beforeend', clone);
  a.setAttribute('aria-label', `Select to share link to ${heading.textContent}.`);

  linkedHeadings && linkedHeadings.push(a);

  const span = document.createElement('span');
  span.textContent = heading.textContent;
  span.classList.add('heading-linked__content');
  span.insertAdjacentElement('beforeend', a);

  
  heading.textContent = '';
  heading.insertAdjacentElement('beforeend', span);
}

export async function showToast(text, name) {
  const toast = document.createElement('div');
  toast.textContent = text;
  toast.classList.add(`toast--${name}`);
  body.insertAdjacentElement('beforeend', toast);
  await wait(10);
  toast.classList.add('active');
  await wait(2000);
  toast.classList.remove('active');
  await wait(300);
  toast.remove();
}

export function copyLink(e) {
  const link = window.location.href;
  navigator.clipboard.writeText(link);
  showToast('Link copied', 'copied');
}
