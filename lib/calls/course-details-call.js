import { appManager } from '../appManager.js';

export const courseDetailsCall = () => {
  const button = document.querySelector('#enroll');

  const enrollCourse = async () => {
    const path = location.search.split('=')[1];
    const key = localStorage.getItem('weLoginKey');

    if (key) {
      const user = await appManager.getStudent(key);
      const course = await appManager.getCourse(path);

      if (user.enrolledCourses.find((item) => item === course.id)) {
        alert('You have already enrolled in this course.');
      } else {
        user.enrolledCourses.push(course.id);
        course.participants.push(user.id);

        await appManager.updateStudent(user.id, user);
        await appManager.updateCourse(course.id, course);

        alert(`Congratulation, you have enrolled in "${course.title}"!`);
      }
    } else {
      localStorage.setItem('wePageCache', path);

      location.href = '/pages/sign-up.html';
    }
  };

  button.addEventListener('click', enrollCourse);
};
