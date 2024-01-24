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

  const pageCache = localStorage.getItem('wePageCache');

  if (pageCache && page !== '/pages/sign-up.html') {
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

    case '/pages/user.html':
      userProfilePage();
      break;

    case '/pages/admin/admin.html':
      adminPage();
      break;

    case '/pages/admin/create-course.html':
      courseCreateCoursePage();
      break;

    default:
      // ! Not in use for this DEMO ! //
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
  const search = location.search.split('=')[1];

  if (search) {
    await createDOM.courseDetails(main, search);
  } else {
    location.href = '/';
  }

  courseDetailsRequest();
};

const userProfilePage = () => {
  const search = location.search.split('=')[1];

  if (search) {
    console.info('USER PROFILE');
  } else {
    location.href = '/';
  }
};

const adminPage = () => {
  const key = localStorage.getItem('weLoginKey');

  if (key === 'admin') {
    createDOM.layout(main, 'admin');
  } else {
    location.href = '/';
  }
};

const courseCreateCoursePage = () => {
  const key = localStorage.getItem('weLoginKey');

  if (key === 'admin') {
    createDOM.layout(main, 'course-form');
  } else {
    location.href = '/';
  }
};

// ! Not in use for this DEMO ! //
const notFound404Page = () => {};
