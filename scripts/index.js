import { createElement, createContainer } from './dom.js';

const section = createElement('section', document.body);

const span = createContainer(
  'div',
  'span',
  section,
  createElement('span', false, 'Hej Vincent!')
);

createElement('p', span, 'This is some text in a paragraph');
