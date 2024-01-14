console.time('Performance Test');
import {
  getFromDatabase,
  saveToDatabase,
  deleteFromDatabase,
  updateDatabase,
} from './utilities.js';

const students = await getFromDatabase('students');
console.log(students);

const person = await getFromDatabase('students', '7c96');
console.log(person);

/* saveToDatabase('students', {
  name: 'Rowel',
  text: 'rowel är en bitch!',
  rank: '100% crazy',
  quote: 'Poopoo!',
}); */

/* updateDatabase('students', 'c122', {
  name: 'Vincent',
  text: 'vincent är cool!',
  rank: '100% snygg',
  quote: 'Peepee!',
}); */

// deleteFromDatabase('students', '1be3');

console.timeEnd('Performance Test');
