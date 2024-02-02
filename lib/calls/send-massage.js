import { appManager } from '../appManager.js';
import { convertFormData } from '../../utils/tools.js';

export const sendContactFormCall = () => {
  const form = document.querySelector('#massageForm');

  const addMassage = async (e) => {
    e.preventDefault();

    const data = convertFormData(form);

    await appManager.addMassage(data);

    form.reset();
  };

  form.addEventListener('submit', addMassage);
};
