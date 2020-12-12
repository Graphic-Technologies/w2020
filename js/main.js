import { toggles } from './selectors.js';
import { Toggle } from './components/nav-toggle.js';
import { headerShift } from './components/header.js';
import { addToPageNav, createLinked } from './components/page-nav.js';
import { autoLinkedHeadings } from './selectors.js';
import './pages/pages.js';

function init() {

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