import { Course } from '../models/CourseModel.js';

export const createCourseDetails = (data: Course): HTMLElement => {
  const article: HTMLElement = document.createElement('article');
  article.classList.add('course-details');
  article.setAttribute('data-id', data.id);

  article.innerHTML = `
  <div>
    <img
      src="/assets/images/courses/${data.coverImage}"
      alt="${data.altText}"
      width="2400"
      height="1600"
      loading="lazy"
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

    <div>
      <i class="bi-currency-euro"></i>

      <span>
        ${data.enrollmentFee}
      </span>
    </div>

    <div class="buttons">
      <button type="button" class="btn" id="enroll">
        Enroll
      </button>
    </div>

    <div id="statusMassage" class="small-text"></div>
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
