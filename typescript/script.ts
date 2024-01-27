import { createCourseDetails } from './components/course-detail.js';
import { getCourse, updateCourse } from './services/course.js';
import { getStudent, updateStudent } from './services/student.js';
import { sendStatusMassage } from './utils/tools.js';

const main = document.querySelector<HTMLElement>('#main')!;

const initApp = async (): Promise<void> => {
  const courseId: string = location.search.split('=')[1];

  if (courseId) {
    const data = await getCourse(courseId);
    const courseDetails = createCourseDetails(data);

    main.appendChild(courseDetails);

    courseDetailsFunc(courseId);
  } else {
    location.href = '/';
  }
};

const courseDetailsFunc = (id: string) => {
  const button = document.querySelector<HTMLButtonElement>('#enroll')!;

  const enrollCourse = async (): Promise<void> => {
    const key: string = localStorage.getItem('weLoginKey')!;
    let statusText: string;

    if (key === 'admin') {
      statusText = `The admin can't enroll in courses.`;
      sendStatusMassage(statusText, 'warning');
    } else if (key) {
      const student = await getStudent(key);
      const course = await getCourse(id);
      const enrollment: string = student.enrolledCourses.find(
        (item: string) => item === course.id
      )!;

      if (enrollment) {
        statusText = 'You have already enrolled in this course.';
        sendStatusMassage(statusText, 'warning');
      } else {
        student.enrolledCourses.push(course.id);
        course.participants.push(student.id);

        await updateStudent(student.id, student);
        await updateCourse(course.id, course);

        statusText = `Congratulation, you have enrolled in "${course.title}"!`;
        sendStatusMassage(statusText);
      }
    } else {
      localStorage.setItem('wePageCache', id);

      location.href = '/pages/sign-up.html';
    }
  };

  button.addEventListener('click', enrollCourse);
};

document.addEventListener('DOMContentLoaded', initApp);
