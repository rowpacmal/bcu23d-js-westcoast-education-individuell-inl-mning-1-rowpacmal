import { appManager } from '../lib/appManager.js';

export const convertFormData = (form) => {
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  return data;
};

export const findUserByEmail = async (data) => {
  const users = await appManager.getStudent();
  const find = users.find((user) => user.email === data.email);

  return find;
};

export const sendStatusMassage = (massage, type = 'alert') => {
  const statusMassage = document.querySelector('#statusMassage');
  statusMassage.innerText = massage;
  statusMassage.style.opacity = '1';

  switch (type) {
    case 'alert':
      statusMassage.style.color = 'forestgreen';
      break;
    case 'warning':
      statusMassage.style.color = 'red';
      break;
    default:
      throw new Error(`'${type}' is not a valid type`);
  }

  setTimeout(() => {
    statusMassage.style.opacity = '0';
  }, 3000);
};
