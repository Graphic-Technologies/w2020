import { pageNav } from '../selectors.js';

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
  a.setAttribute('aria-label', 'Select to share link to this point on the page.');

  const span = document.createElement('span');
  span.textContent = heading.textContent;
  span.classList.add('heading-linked__content');
  span.insertAdjacentElement('beforeend', a);

  
  heading.textContent = '';
  heading.insertAdjacentElement('beforeend', span);
}