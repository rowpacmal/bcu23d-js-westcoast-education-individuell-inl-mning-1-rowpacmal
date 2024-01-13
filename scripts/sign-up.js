import { Student } from './classes.js';
import { saveToDatabase } from './utilities.js';

const form = document.querySelector('#signUpForm');

const sendRegistrationForm = async (event) => {
  event.preventDefault();

  const account = new FormData(form);
  const user = [...account.values()];

  saveToDatabase('students', new Student(user));
};

form.addEventListener('submit', sendRegistrationForm);
