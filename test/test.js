import { createCourseCard } from '../components/card/card.js';
import { createFooter } from '../components/footer/footer.js';
import { createNavbar } from '../components/navbar/navbar.js';
import { appManager } from '../lib/app.js';
import { createElement } from '../lib/dom.js';

/* const addData = await httpClient.add('courses', {
  id: 'HejAlma',
  name: 'New Name',
}); */

// const removeData = await httpClient.remove('courses/18fb');

/* const removeAllData = () => {
  getData.forEach(async (e) => {
    await httpClient.remove(`courses/${e.id}`);
  });
};

removeAllData(); */

/* const updateData = await httpClient.update('courses/HejAlma', {
  name: 'New Name',
  text: 'New Text',
}); */

/* const getData = await httpClient.get('courses');
console.log('Data 0:', getData);
console.log(
  'Data 1:',
  getData.sort(function (a, b) {
    return parseFloat(b.score) - parseFloat(a.score);
  })
); */

/* const getData = await appManager.getAllCourses();
let popular = 3;

getData.forEach((data) => {
  const rating = data.rating;
  let score = 0;

  rating.forEach((r) => {
    score += r;
  });

  const courseRating = (score / rating.length).toFixed(1);

  if (courseRating < 5 || popular === 0) {
    return;
  }

  const main = document.querySelector('#root');
  const div = document.createElement('div');
  div.classList.add('card');
  div.setAttribute('id', `${data.id}`);

  div.innerHTML = `
  <a href="?id=${data.id}">
    <img
    src="./assets/images/courses/${data.coverImage}"
    alt=""
    width="2400"
    height="1600"
    />
  </a>

  <header>
    <span class="small-text">(${data.courseNo})</span>
    <h4>${data.title}</h4>
  </header>

  <div class="info">
    <div class="instructor">
      by ${data.instructor}
    </div>

    <div class="status">
      <span class="tag active">Starts</span>
      <span>${data.courseStart}</span>
    </div>

    <div class="detail">
      ${data.courseLength} hours &bull; ${data.courseType} &bull; ${data.level}
    </div>

    <div class="rating">
      <i class="bi-star-fill"></i>
      <span>${courseRating} / 10</span>
      <span>(${rating.length})</span>
    </div>
  </div>

  <div class="card-control">
    <div class="price">
      <i class="bi-currency-dollar"></i>
      <span>${data.enrollmentFee}</span>
    </div>
    
    <div class="buttons">
      <button class="btn">Enroll course</button>
    </div>
  </div>
  `;

  main.appendChild(div);
  popular--;
}); */
const header = document.querySelector('#header');
const main = document.querySelector('#main');
const footer = document.querySelector('#footer');

createElement.cardList(main, true, 8);
