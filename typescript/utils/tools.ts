export const sendStatusMassage = (
  massage: string,
  type: string = 'alert'
): void => {
  const statusMassage: HTMLDivElement =
    document.querySelector('#statusMassage')!;

  if (statusMassage.innerHTML.length === 0) {
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

      setTimeout(() => {
        statusMassage.innerText = '';
      }, 1000);
    }, 3000);
  }
};
