import { saveToDatabase, convertFormData } from './utilities.js';

const form = document.querySelector('#postCourseForm');

const sendCourseForm = async (event) => {
  event.preventDefault();

  const data = convertFormData(form);
  data.coverImage = data.coverImage.name;
  data.participants = [];

  saveToDatabase('courses', data);
};

form.addEventListener('submit', sendCourseForm);
