import HttpClient from './http.js';
import { Course, User, Student } from './classes.js';

const addCourse = new Course(
  'JavaScript for Dummies',
  'jsfd23',
  'Remote',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam assumenda nam error adipisci ea non nihil architecto ratione similique, quas, eos, mollitia accusantium iusto amet reprehenderit doloremque voluptatibus libero veritatis.',
  new Date('01/01/2023'),
  20,
  true,
  29.99,
  ''
);

const addUser = new User(
  'John',
  'Doe',
  'johndoe@me.io',
  '123456789',
  'john.doe',
  '1234',
  'read'
);

const addStudent = new Student(
  'Mary',
  'Sue',
  'johndoe@me.io',
  '123456789',
  '123 mestreet',
  '1990/01/01',
  'john.doe',
  '1234',
  'read'
);

console.log(addCourse);
console.log(addUser.getFullName());
console.log(addUser);
console.log(addStudent);
console.log(addStudent.getFullName());
// new HttpClient('http://localhost:3000/courses').set(addCourse);
