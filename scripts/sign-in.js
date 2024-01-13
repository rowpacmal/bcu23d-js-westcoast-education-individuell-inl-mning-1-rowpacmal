import { getFromDatabase, updateDatabase } from './utilities.js';

const form = document.querySelector('#signInForm');
const activeDatabase = 'students';

const callForUserAccount = async (event) => {
  event.preventDefault();

  const signIn = new FormData(form);
  const signInValues = [...signIn.values()];
  const userAccounts = await getFromDatabase(activeDatabase);

  verifyUserAccount(userAccounts, signInValues);
};

const verifyUserAccount = (database, formValue) => {
  // find an account from the database based on username and password
  const activeUser = database.find(
    (user) =>
      user.accountName === formValue[0] && user.password === formValue[1]
  );

  // check if the username and password provided is true or false
  if (activeUser) {
    // create a random key for saving the users sign-in on the device
    const randomKey = (Math.random() + 1).toString(36).substring(5);
    // assign the key to users account
    activeUser.signInKey = randomKey;

    // assign the key to the loacal storage of the device
    localStorage.setItem(
      'WestCoastEducationSignInKey',
      `${activeUser.id}-${activeUser.accountName}-${activeUser.signInKey}`
    );

    // update the active user account with the sign in key
    updateDatabase(activeDatabase, activeUser.id, activeUser);
    console.info('Status:', 'Success!');
  } else {
    console.warn('Error:', 'Fail?');
  }
};

form.addEventListener('submit', callForUserAccount);
