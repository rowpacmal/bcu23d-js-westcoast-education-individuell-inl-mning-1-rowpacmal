import {
  getFromDatabase,
  saveToDatabase,
  deleteFromDatabase,
  updateDatabase,
} from './utilities.js';

const students = await getFromDatabase('students');
console.log(students);
const person = await getFromDatabase('students', 'a85a');
console.log(person);

// updateDatabase('students', '7c96', {
//   text: 'vincent är cool!',
//   rank: '100% snygg',
//   quote: 'Peepee!',
// });
