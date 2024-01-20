export const createCourseCard = (data) => {
  const div = document.createElement('div');
  div.classList.add('card');
  div.setAttribute('id', `${data.id}`);

  div.innerHTML = `
  <a href="?id=${data.id}">
    <img
    src="/assets/images/courses/${data.coverImage}"
    alt=""
    width="2400"
    height="1600"
    />
  </a>

  <header class="card__header">
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
      <span>
      <i class="bi-currency-dollar"></i>${data.enrollmentFee}
      </span>
    </div>
    
    <div class="buttons">
      <button class="btn">Enroll course</button>
    </div>
  </div>
  `;

  return div;
};
