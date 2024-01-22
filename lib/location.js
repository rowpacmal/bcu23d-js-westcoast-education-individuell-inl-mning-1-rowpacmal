import { state } from '/utils/config.js';
import { createDOM } from '/lib/dom.js';
import {
  signUpRequest,
  signInRequest,
  courseDetailsRequest,
} from '/lib/request.js';

const header = document.querySelector('#header');
const main = document.querySelector('#main');
const footer = document.querySelector('#footer');
const page = state.currentPage;

export const checkCurrentPage = () => {
  createDOM.layout(header, 'header');

  const cache = localStorage.getItem('wePageCache');

  if (cache && page !== '/pages/sign-up.html') {
    localStorage.removeItem('wePageCache');
  }

  switch (page) {
    case '/':
    case '/index.html':
      homePage();
      break;

    case '/pages/sign-in.html':
      signInPage();
      break;

    case '/pages/sign-up.html':
      signUpPage();
      break;

    case '/pages/catalog.html':
      catalogPage();
      break;

    case '/pages/course-details.html':
      courseDetailsPage();
      break;

    default:
      notFound404Page();
      break;
  }

  createDOM.layout(footer, 'footer');
};

const homePage = async () => {
  createDOM.layout(main, 'home');

  await createDOM.cardList(main, true);
};

const signInPage = () => {
  createDOM.layout(main, 'sign-in');

  signInRequest();
};

const signUpPage = () => {
  createDOM.layout(main, 'sign-up');

  signUpRequest();
};

const catalogPage = async () => {
  await createDOM.cardList(main);
};

const courseDetailsPage = async () => {
  await createDOM.courseDetails(main);

  courseDetailsRequest();
};

const notFound404Page = () => {};
