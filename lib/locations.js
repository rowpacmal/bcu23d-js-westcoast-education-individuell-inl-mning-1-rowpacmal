import { state } from '../utils/config.js';
import { createDOM } from './dom.js';
import { courseDetailsCall } from './calls/course-details-call.js';
import { postCourseCall } from './calls/create-course-call.js';
import { signInCall } from './calls/sign-in-call.js';
import { signUpCall } from './calls/sign-up-call.js';

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

  signInCall();
};

const signUpPage = () => {
  createDOM.layout(main, 'sign-up');

  signUpCall();
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

  courseDetailsCall();
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

    postCourseCall();
  } else {
    location.href = '/';
  }
};

// ! Not in use for this DEMO ! //
const notFound404Page = () => {};
