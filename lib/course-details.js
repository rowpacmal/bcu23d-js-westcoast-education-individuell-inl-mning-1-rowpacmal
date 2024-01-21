import { createElement } from '/lib/dom.js';

const header = document.querySelector('#header');
const main = document.querySelector('#main');
const footer = document.querySelector('#footer');

const initApp = () => {
  const path = location.search.split('=')[1];

  if (path) {
    createElement.courseDetails(main, path);
  } else {
    location.href = '/404.html';
  }
};

document.addEventListener('DOMContentLoaded', initApp);
