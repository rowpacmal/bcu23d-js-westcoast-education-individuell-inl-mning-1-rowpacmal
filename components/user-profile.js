import { appManager } from '../lib/appManager.js';

export const createUserProfile = () => {
  const key = localStorage.getItem('weLoginKey');

  const section = document.createElement('section');
  section.classList.add('user');
  section.setAttribute('data-id', key);

  const h2 = document.createElement('h2');
  h2.appendChild(document.createTextNode('User Overview'));
  section.appendChild(h2);

  const overview = document.createElement('section');
  overview.classList.add('user-overview');
  createUserOverview(overview, key);
  section.appendChild(overview);

  return section;
};

const createUserOverview = async (parent, key) => {
  const user = await appManager.getStudent(key);

  const currentUser = document.createElement('h3');
  currentUser.appendChild(
    document.createTextNode(`${user.firstName} ${user.lastName}`)
  );
  parent.appendChild(currentUser);

  const enrollmentDebt = document.createElement('section');
  parent.appendChild(enrollmentDebt);

  const enrollmentDebtTitle = document.createElement('h4');
  enrollmentDebtTitle.appendChild(document.createTextNode('Current Debt'));
  enrollmentDebt.appendChild(enrollmentDebtTitle);

  const courseDebt = document.createElement('p');
  courseDebt.appendChild(document.createTextNode('Calculating...'));
  enrollmentDebt.appendChild(courseDebt);

  const accountDetails = document.createElement('section');
  parent.appendChild(accountDetails);

  const accountDetailsTitle = document.createElement('h4');
  accountDetailsTitle.appendChild(document.createTextNode('Account Details'));
  accountDetails.appendChild(accountDetailsTitle);

  const list = document.createElement('ul');
  list.classList.add('account-details');
  const userInfo = [
    {
      name: 'Email',
      value: user.email,
    },
    {
      name: 'Address',
      value: `${user.address}, ${user.postNo}`,
    },
    {
      name: 'Phone',
      value: user.phone,
    },
  ];

  userInfo.forEach((item) => {
    const listItem = document.createElement('li');

    const infoName = document.createElement('span');
    infoName.classList.add('bold');
    infoName.appendChild(document.createTextNode(item.name));
    listItem.appendChild(infoName);

    const br = document.createElement('br');
    listItem.appendChild(br);

    const infoValue = document.createElement('span');
    infoValue.appendChild(document.createTextNode(item.value));
    listItem.appendChild(infoValue);

    list.appendChild(listItem);
  });

  accountDetails.appendChild(list);

  const enrolledCourses = document.createElement('section');
  parent.appendChild(enrolledCourses);

  const enrolledCoursesTitle = document.createElement('h4');
  enrolledCoursesTitle.appendChild(document.createTextNode('Enrolled Courses'));
  enrolledCourses.appendChild(enrolledCoursesTitle);

  const userCourses = document.createElement('ul');
  userCourses.classList.add('user-courses');
  let totalDebt = 0;

  if (user.enrolledCourses.length > 0) {
    user.enrolledCourses.forEach(async (courseId) => {
      const course = await appManager.getCourse(courseId);
      const enrolledCourse = document.createElement('li');

      const courseImage = document.createElement('img');
      const imgAttributes = [
        {
          name: 'src',
          value: `/assets/images/courses/${course.coverImage}`,
        },
        {
          name: 'alt',
          value: course.altText,
        },
        {
          name: 'width',
          value: 2400,
        },
        {
          name: 'height',
          value: 1600,
        },
        {
          name: 'loading',
          value: 'lazy',
        },
      ];

      imgAttributes.forEach((attribute) => {
        courseImage.setAttribute(attribute.name, attribute.value);
      });

      enrolledCourse.appendChild(courseImage);

      const courseNo = document.createElement('span');
      courseNo.appendChild(document.createTextNode(`(${course.courseNo})`));
      enrolledCourse.appendChild(courseNo);

      let br = document.createElement('br');
      enrolledCourse.appendChild(br);

      const courseTitle = document.createElement('span');
      courseTitle.classList.add('bold');
      courseTitle.appendChild(document.createTextNode(course.title));
      enrolledCourse.appendChild(courseTitle);

      br = document.createElement('br');
      enrolledCourse.appendChild(br);

      const courseFee = document.createElement('span');
      const enrollmentFee = `€ ${course.enrollmentFee}`;
      courseFee.appendChild(document.createTextNode(enrollmentFee));
      enrolledCourse.appendChild(courseFee);

      totalDebt += +course.enrollmentFee;

      const moreDetails = document.createElement('a');
      moreDetails.classList.add('btn-link');
      moreDetails.setAttribute(
        'href',
        `/pages/course-details.html?id=${course.id}`
      );
      moreDetails.appendChild(document.createTextNode('More details'));
      enrolledCourse.appendChild(moreDetails);

      userCourses.appendChild(enrolledCourse);
    });
  } else {
    const noCourse = document.createElement('li');
    const info = `You haven't enrolled in any courses yet.`;
    noCourse.appendChild(document.createTextNode(info));

    userCourses.appendChild(noCourse);
  }

  enrolledCourses.appendChild(userCourses);

  setTimeout(() => {
    const today = new Date().toLocaleDateString('sv-SE');
    const debt = totalDebt.toFixed(2);

    courseDebt.innerHTML = `As of ${today}, you have acquired <span class="bold highlight-text">€ ${debt}</span> in debt to WestCoast Education.`;
  }, 1000);
};
