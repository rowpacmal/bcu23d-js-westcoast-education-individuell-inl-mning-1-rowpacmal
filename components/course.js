import { appManager } from '../lib/app.js';

export const createCoursePost = async (data) => {
  const article = document.createElement('article');
  article.setAttribute('data-id', `${data.id}`);

  const instructor = await appManager.get('teachers', data.instructor);

  article.innerHTML = `
  <div>
    <img
      src="/assets/images/courses/${data.coverImage}"
      alt="${data.altText}"
      width="2400"
      height="1600"
    />
  </div>

  <header>
    <span>
      (${data.courseNo})
    </span>

    <h1>
      ${data.title}
    </h1>
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

    <p>
      (The enrollment fee must be paid in full before the start of the semester)
    </p>

    <div>
      <a href="/">
        <i class="bi-caret-left-fill"></i>

        <span>
          Go Back
        </span>
      </a>

      <button type="button">
        Enroll
      </button>
    </div>
  </div>

  <section>
    <h2>
      About this course
    </h2>

    <section>
      <h3>
        Introduction
      </h3>

      <p>
        ${data.shortDescription}
      </p>
    </section>

    <section>
      <h3>
        <q>
          ${data.courseSlogan}
        </q>
      </h3>

      <p>
        ${data.longDescription}
      </p>
    </section>
  </section>
  `;

  return article;
};
