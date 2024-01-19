import { state } from '../../utils/config.js';

const catalog = state.currentPage;
let path;

switch (catalog) {
  case '/':
  case '/index.html':
    path = '.';
    break;

  case '/pages/courses.html':
    path = '..';
    break;

  case '/pages/auth/user.html':
  case '/components/home/home.html':
    path = '../..';
    break;

  default:
    console.info('image source path is missing');
    break;
}

export const createCourseCard = (data) => {
  const div = document.createElement('div');
  div.classList.add('card');
  div.setAttribute('id', `${data.id}`);

  div.innerHTML = `
  <a href="?id=${data.id}">
    <img
    src="${path}/assets/images/courses/${data.coverImage}"
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
      <span>${data.score} / 10</span>
      <span>(${data.rating.length})</span>
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

  return div;
};
