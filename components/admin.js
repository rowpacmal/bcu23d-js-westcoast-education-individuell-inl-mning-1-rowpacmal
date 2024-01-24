import { appManager } from '/lib/appManager.js';

export const createAdminOverview = () => {
  const section = document.createElement('section');
  const h2 = document.createElement('h2');

  h2.appendChild(document.createTextNode('Admin Overview'));
  section.appendChild(h2);

  const overview = document.createElement('div');

  createCourseOverview(overview);
  section.appendChild(overview);

  const addCourse = document.createElement('div');
  const link = document.createElement('a');
  link.setAttribute('href', '/pages/admin/create-course.html');

  link.appendChild(document.createTextNode('Add new course'));
  addCourse.appendChild(link);
  section.appendChild(addCourse);

  return section;
};

const createCourseOverview = async (parent) => {
  const courses = await appManager.getCourse();

  courses.forEach((course) => {
    const container = document.createElement('div');
    const title = document.createElement('h3');

    title.appendChild(document.createTextNode(course.title));
    container.appendChild(title);

    const label = document.createElement('h4');
    label.appendChild(document.createTextNode('Students Enrolled'));
    container.appendChild(label);

    const students = document.createElement('div');
    const participants = course.participants;

    if (participants.length > 0) {
      participants.forEach(async (student) => {
        const user = await appManager.getStudent(student);

        const div = document.createElement('div');
        const info = [`(${user.id}) `, `${user.firstName} ${user.lastName}`];

        info.forEach((i) => {
          const span = document.createElement('span');
          span.appendChild(document.createTextNode(i));

          div.appendChild(span);
        });

        students.appendChild(div);
      });
    } else {
      const div = document.createElement('div');
      const span = document.createElement('span');
      const massage =
        'There are no students currently enrolled in this course...';

      span.appendChild(document.createTextNode(massage));

      div.appendChild(span);
      students.appendChild(div);
    }

    container.appendChild(students);
    parent.appendChild(container);
  });
};
