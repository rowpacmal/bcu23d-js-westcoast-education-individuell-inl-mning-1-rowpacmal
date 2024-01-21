import { state } from '/utils/config.js';
import { createElement } from '/lib/dom.js';

const header = document.querySelector('#header');
const main = document.querySelector('#main');
const footer = document.querySelector('#footer');
const page = state.currentPage;

export const checkCurrentPage = () => {
  createElement.layout(header, 'header');
  createElement.layout(footer, 'footer');

  switch (page) {
    case '/':
    case '/index.html':
      homePage();
      break;

    case '/pages/sign-in.html':
      output = 1;
      break;

    case '/pages/sign-out.html':
      output = 2;
      break;

    case '/pages/catalog.html':
      catalogPage();
      break;

    case '/pages/course-details.html':
      output = 3;
      break;
  }
};

const homePage = () => {};

const catalogPage = () => {
  createElement.cardList(main, true);
  createElement.cardList(main);
};
