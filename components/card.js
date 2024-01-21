import { appManager } from '/lib/app.js';

export const createCourseCard = async (data) => {
  const div = document.createElement('div');
  div.classList.add('card');
  div.setAttribute('data-id', `${data.id}`);

  const instructor = await appManager.get('teachers', data.instructor);

  div.innerHTML = `
  <a href="/pages/course-details.html?id=${data.id}">
    <img
      src="/assets/images/courses/${data.coverImage}"
      alt="${data.altText}"
      width="2400"
      height="1600"
    />
  </a>

  <header>
    <span>
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
        ${instructor.firstName}
      </span>

      <span>
        ${instructor.lastName}
      </span>
    </div>

    <div>
      <span>
        Starts
      </span>

      <span>
        ${data.courseStart}
      </span>
    </div>

    <div>
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
    <div>
      <i class="bi-currency-euro"></i>

      <span>
        ${data.enrollmentFee}
      </span>
    </div>

    <div>
      <a href="/pages/course-details.html?id=${data.id}">
        Details
      </a>
    </div>
  </div>
  `;

  return div;
};
