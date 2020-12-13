import { toggles } from './selectors.js';
import { Toggle } from './modules/nav-toggle.js';
import { headerShift, stickyToggle } from './modules/header.js';
import './modules/section-selector.js';
import './modules/accessibility.js';
import { addToPageNav, createLinked } from './modules/page-nav.js';
import { autoLinkedHeadings } from './selectors.js';
import './pages/pages.js';

function init() {

  stickyToggle();
  window.addEventListener('scroll', stickyToggle);
  headerShift();

  toggles.forEach(tog => Toggle(tog));

  // Content Page Nav
  
  if (autoLinkedHeadings.length) {
    autoLinkedHeadings.forEach(h2 => {
      addToPageNav(h2);
      createLinked(h2);
    });
  }

}

document.addEventListener('DOMContentLoaded', init);