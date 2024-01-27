import { appManager } from '../appManager.js';
import { sendStatusMassage } from '../../utils/tools.js';

export const courseDetailsCall = () => {
  const button = document.querySelector('#enroll');

  const enrollCourse = async () => {
    const path = location.search.split('=')[1];
    const key = localStorage.getItem('weLoginKey');
    let statusText;

    if (key === 'admin') {
      statusText = `The admin can't enroll in courses.`;
      sendStatusMassage(statusText, 'warning');
    } else if (key) {
      const user = await appManager.getStudent(key);
      const course = await appManager.getCourse(path);
      const enrollment = user.enrolledCourses.find(
        (item) => item === course.id
      );

      if (enrollment) {
        statusText = 'You have already enrolled in this course.';
        sendStatusMassage(statusText, 'warning');
      } else {
        user.enrolledCourses.push(course.id);
        course.participants.push(user.id);

        await appManager.updateStudent(user.id, user);
        await appManager.updateCourse(course.id, course);

        statusText = `Congratulation, you have enrolled in "${course.title}"!`;
        sendStatusMassage(statusText);
      }
    } else {
      localStorage.setItem('wePageCache', path);

      location.href = '/pages/sign-up.html';
    }
  };

  button.addEventListener('click', enrollCourse);
};
