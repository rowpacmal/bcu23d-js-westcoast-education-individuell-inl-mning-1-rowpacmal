import HttpClient from './http.js';
import { Course, User, Student, Teacher } from './classes.js';

const addCourse = new Course(
  'JavaScript for Dummies',
  'jsfd23',
  'Remote',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam assumenda nam error adipisci ea non nihil architecto ratione similique, quas, eos, mollitia accusantium iusto amet reprehenderit doloremque voluptatibus libero veritatis.',
  new Date('03/14/2023'),
  30,
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

const addTeacher = new Teacher(
  'Karen',
  'Daren',
  'johndoe@me.io',
  '123456789',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam assumenda nam error adipisci ea non nihil architecto ratione similique, quas, eos, mollitia accusantium iusto amet reprehenderit doloremque voluptatibus libero veritatis.',
  'john.doe',
  '1234',
  'read'
);

console.log(addCourse.courseStart);
console.log(addCourse.getEndDate());
