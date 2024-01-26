import { appManager } from '../lib/appManager.js';

export const createSelectOptions = async () => {
  const selectInput = document.querySelector('#instructor');
  const teachers = await appManager.getTeacher();

  teachers.forEach((teacher) => {
    const fullName = `${teacher.firstName} ${teacher.lastName}`;
    const optionElement = document.createElement('option');
    optionElement.setAttribute('value', fullName);
    optionElement.appendChild(document.createTextNode(fullName));

    selectInput.appendChild(optionElement);
  });
};
