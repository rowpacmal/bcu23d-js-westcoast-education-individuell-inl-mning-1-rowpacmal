import { appManager } from '/lib/app.js';

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
