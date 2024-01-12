import HttpClient from './http.js';
import { Student } from './classes.js';

const form = document.querySelector('#signUpForm');

const sendRegistrationForm = async (event) => {
  event.preventDefault();

  const account = new FormData(form);
  const user = [...account.values()];

  saveToDatabase(new Student(user));
};

const saveToDatabase = async (user) => {
  const url = 'http://localhost:3000/students';

  await new HttpClient(url).add(user);
};

form.addEventListener('submit', sendRegistrationForm);
