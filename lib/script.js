import { createElement } from './dom.js';

const header = document.querySelector('#header');
const main = document.querySelector('#main');
const footer = document.querySelector('#footer');

const initApp = () => {
  createElement.header(header);
  createElement.cardList(main, true, 4);

  createElement.cardList(main);
  createElement.footer(footer);
};

document.addEventListener('DOMContentLoaded', initApp);
