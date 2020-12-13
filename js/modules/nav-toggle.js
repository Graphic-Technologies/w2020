import { asyncForEach, wait } from '../helpers.js';

export async function Toggle(tog) {
  
  const ref = tog.getAttribute('href');
  const target = document.querySelector(ref);
  const targets = [target, tog];
  const middle = tog.querySelector('.middle');
  const navItems = target.querySelectorAll('a')
  const onMobile = window.matchMedia('(max-width: 59.999em)');

  onMobile.matches && navItems.forEach(item => {
    item.classList.add('out');
    item.setAttribute('tabindex', '-1');
  })

  async function itemsIn() {
    await asyncForEach(navItems, async (item) => {
      await wait(50);
      item.classList.remove('out');
      item.setAttribute('tabindex', '0');
    })
  }
  async function itemsOut() {
    navItems.forEach(item => {
      item.classList.add('out');
      item.setAttribute('tabindex', '-1');
    });
  }

  async function close() {
    tog.classList.add('transition-close');
    targets.forEach(targ => targ.classList.remove('open'));
    await wait(500);
    middle.classList.remove('hidden');
    await wait(5);
    tog.classList.remove('transition-close');
    itemsOut();
  }

  async function open() {
    tog.classList.add('transition-open');
    await wait(500);
    middle.classList.add('hidden');
    targets.forEach(targ => targ.classList.add('open'));
    tog.classList.remove('transition-open');
    itemsIn();
  }

  tog.addEventListener('click', (e) => {
    e.preventDefault();
    tog.classList.contains('open') ? close() : open();
  });

}