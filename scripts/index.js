console.time('Performance Test');
import { handleDatabase } from './utilities.js';

const server = 'students';

const students = await handleDatabase('GET', server);
console.log(students);

const person = await handleDatabase('GET', server, '7c96');
console.log(person);

/* handleDatabase('ADD', server, '', {
  name: 'Rowel',
  text: 'rowel är en bitch!',
  rank: '100% crazy',
  quote: 'Poopoo!',
}); */

/* handleDatabase('UPDATE', server, 'c122', {
  name: 'Vincent',
  text: 'vincent är cool!',
  rank: '100% snygg',
  quote: 'Peepee!',
}); */

// handleDatabase('REMOVE', server, '412d');

console.timeEnd('Performance Test');
