import { appManager } from '../lib/appManager.js';

export const createAdminOverview = () => {
  const section = document.createElement('section');
  section.classList.add('admin');

  const h2 = document.createElement('h2');
  h2.appendChild(document.createTextNode('Admin Overview'));
  section.appendChild(h2);

  const overview = document.createElement('div');
  overview.classList.add('overview');
  createCourseOverview(overview);
  section.appendChild(overview);

  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('buttons');

  const link = document.createElement('a');
  link.classList.add('btn-link');
  link.setAttribute('href', '/pages/admin/create-course.html');
  link.appendChild(document.createTextNode('Add new course'));

  buttonContainer.appendChild(link);
  section.appendChild(buttonContainer);

  return section;
};

const createCourseOverview = async (parent) => {
  const courses = await appManager.getCourse();

  courses.forEach((course) => {
    const container = document.createElement('div');
    container.setAttribute('data-id', course.id);

    const title = document.createElement('h3');
    title.appendChild(document.createTextNode(course.title));
    container.appendChild(title);

    const label = document.createElement('h4');
    const labelString = `Students Enrolled (${course.participants.length})`;
    label.appendChild(document.createTextNode(labelString));
    container.appendChild(label);

    const table = document.createElement('table');
    const thead = document.createElement('thead');
    table.appendChild(thead);

    const tr = document.createElement('tr');
    thead.appendChild(tr);

    const theadLabels = [
      'ID',
      'First Name',
      'Last Name',
      'Email',
      'Address',
      'Post No.',
      'Phone',
    ];

    theadLabels.forEach((i) => {
      const th = document.createElement('th');
      th.appendChild(document.createTextNode(i));
      tr.appendChild(th);
    });

    const tbody = document.createElement('tbody');
    table.appendChild(tbody);

    const participants = course.participants;

    if (participants.length > 0) {
      participants.forEach(async (studentId) => {
        const student = await appManager.getStudent(studentId);
        const tr = document.createElement('tr');
        const tbodyInfo = [
          `(${student.id}) `,
          student.firstName,
          student.lastName,
          student.email,
          student.address,
          student.postNo,
          student.phone,
        ];

        tbodyInfo.forEach((i) => {
          const td = document.createElement('td');
          td.appendChild(document.createTextNode(i));
          tr.appendChild(td);
        });

        tbody.appendChild(tr);
      });
    } else {
      const tr = document.createElement('tr');
      const td = document.createElement('td');
      const massage =
        'There are no students currently enrolled in this course...';

      td.setAttribute('colspan', 7);
      td.appendChild(document.createTextNode(massage));
      tr.appendChild(td);
      tbody.appendChild(tr);
    }

    container.appendChild(table);
    parent.appendChild(container);
  });
};
