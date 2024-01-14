import { saveToDatabase, convertFormData } from './utilities.js';

const form = document.querySelector('#signUpForm');

const sendRegistrationForm = async (event) => {
  event.preventDefault();

  const data = convertFormData(form);
  data.role = 'read';
  data.enrolledCourses = [];

  saveToDatabase('students', data);
};

form.addEventListener('submit', sendRegistrationForm);
