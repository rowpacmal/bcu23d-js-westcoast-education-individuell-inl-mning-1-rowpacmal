export const createCourseCard = (data) => {
  const card = document.createElement('div');
  card.classList.add('card');
  card.setAttribute('data-id', data.id);

  card.innerHTML = `
  <a href="/pages/course-details.html?id=${data.id}">
    <img
      src="/assets/images/courses/${data.coverImage}"
      alt="${data.altText}"
      width="2400"
      height="1600"
      loading="lazy"
    />
  </a>

  <header>
    <span class="small-text">
      (${data.courseNo})
    </span>

    <h4>
      ${data.title}
    </h4>
  </header>

  <div>
    <div>
      <span>
        by
      </span>

      <span>
        ${data.instructor}
      </span>
    </div>

    <div>
      <span class="bold">
        Starts
      </span>

      <span>
        ${data.courseStart}
      </span>
    </div>

    <div class="small-text">
      <span>
        ${data.courseLength} Days
      </span>

      <i class="bi-dot"></i>

      <span>
        ${data.courseType}
      </span>

      <i class="bi-dot"></i>

      <span>
        ${data.level}
      </span>
    </div>

    <div>
      <i class="bi-star-fill"></i>

      <span>
        ${data.score} / 10
      </span>

      <span>
        (${data.rating})
      </span>
    </div>
  </div>

  <div>
    <i class="bi-currency-euro"></i>

    <span>
      ${data.enrollmentFee}
    </span>
  </div>

  <hr />

  <div>
    <a href="/pages/course-details.html?id=${data.id}">
      More details
    </a>
  </div>
  `;

  return card;
};
