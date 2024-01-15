import { handleDatabase, convertFormData } from './utilities.js';

const form = document.querySelector('#postCourseForm');
const button = document.querySelector('#getData');
const server = 'courses';

const sendCourseForm = async (event) => {
  event.preventDefault();

  const data = convertFormData(form);
  data.participants = [];

  handleDatabase('ADD', server, '', data);
};

const loadDataToForm = async () => {
  const getId = location.search.split('=')[1];

  if (getId) {
    getCourseData(getId);
  } else {
    throw new Error('404 (Not Found)');
  }
};

const getCourseData = async (id) => {
  const data = await handleDatabase('GET', server, id);
  const entries = new URLSearchParams(data).entries();

  for (let [key, value] of entries) {
    const input = form.elements[key];

    if (key !== 'id' && key !== 'participants') {
      input.value = value;
    }
  }
};

form.addEventListener('submit', sendCourseForm);
button.addEventListener('click', loadDataToForm);
