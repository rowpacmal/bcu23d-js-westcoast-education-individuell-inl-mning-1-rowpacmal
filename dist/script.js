var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { createCourseDetails } from './components/course-detail.js';
import { getCourse, updateCourse } from './services/course.js';
import { getStudent, updateStudent } from './services/student.js';
import { sendStatusMassage } from './utils/tools.js';
const main = document.querySelector('#main');
const initApp = () => __awaiter(void 0, void 0, void 0, function* () {
    const courseId = location.search.split('=')[1];
    if (courseId) {
        const data = yield getCourse(courseId);
        const courseDetails = createCourseDetails(data);
        main.appendChild(courseDetails);
        courseDetailsFunc(courseId);
    }
    else {
        location.href = '/';
    }
});
const courseDetailsFunc = (id) => {
    const button = document.querySelector('#enroll');
    const enrollCourse = () => __awaiter(void 0, void 0, void 0, function* () {
        const key = localStorage.getItem('weLoginKey');
        let statusText;
        if (key === 'admin') {
            statusText = `The admin can't enroll in courses.`;
            sendStatusMassage(statusText, 'warning');
        }
        else if (key) {
            const student = yield getStudent(key);
            const course = yield getCourse(id);
            const enrollment = student.enrolledCourses.find((item) => item === course.id);
            if (enrollment) {
                statusText = 'You have already enrolled in this course.';
                sendStatusMassage(statusText, 'warning');
            }
            else {
                student.enrolledCourses.push(course.id);
                course.participants.push(student.id);
                yield updateStudent(student.id, student);
                yield updateCourse(course.id, course);
                statusText = `Congratulation, you have enrolled in "${course.title}"!`;
                sendStatusMassage(statusText);
            }
        }
        else {
            localStorage.setItem('wePageCache', id);
            location.href = '/pages/sign-up.html';
        }
    });
    button.addEventListener('click', enrollCourse);
};
document.addEventListener('DOMContentLoaded', initApp);
