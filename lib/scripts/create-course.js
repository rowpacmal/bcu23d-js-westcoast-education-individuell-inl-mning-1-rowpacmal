import { appManager } from '/lib/app.js';
import { convertFormData } from '/utils/tools.js';

const form = document.querySelector('#postCourseForm');

const postCourse = async (e) => {
  e.preventDefault();

  const data = convertFormData(form);
  data.courseNo = parseInt(data.courseNo);
  data.courseLength = parseInt(data.courseLength);
  data.rating = parseInt(data.rating);
  data.score = parseFloat(data.score);
  data.enrollmentFee = parseFloat(data.enrollmentFee);
  data.coverImage = data.coverImage.name;
  data.participants = [];

  const number = await appManager.get('courses');
  const find = number.find((num) => num.courseNo === data.courseNo);

  if (find) {
    alert(
      'That course number is already registered in our system. Please try another course number.'
    );
    return;
  }

  await appManager.add('courses', data);
};

form.addEventListener('submit', postCourse);
