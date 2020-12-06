import { toggles } from './selectors.js';
import { Toggle } from './components/nav-toggle.js';

function init() {

  toggles.forEach(tog => Toggle(tog));

}

document.addEventListener('DOMContentLoaded', init);