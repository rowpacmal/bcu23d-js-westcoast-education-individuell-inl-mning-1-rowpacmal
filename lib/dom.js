import { createAdminOverview } from '../components/admin.js';
import { createCourseCard } from '../components/card.js';
import { createCourseDetails } from '../components/course-details.js';
import { createCourseForm } from '../components/course-form.js';
import { createSelectOptions } from '../components/course-form-extra.js';
import { createFooter } from '../components/footer.js';
import { createHero } from '../components/hero.js';
import { createHome } from '../components/home.js';
import { createNavbar } from '../components/navbar.js';
import { createSignIn } from '../components/sign-in.js';
import { createStudentForm } from '../components/user-form.js';
import { appManager } from '../lib/appManager.js';

export const createDOM = {
  cardList: async (parent, popular = false) => {
    const list = await appManager.getCourse();
    const cardHolder = document.createElement('div');
    cardHolder.classList.add('card-holder');

    switch (popular) {
      case true:
        const popularList = list
          .sort(function (a, b) {
            return parseFloat(b.score) - parseFloat(a.score);
          })
          .slice(0, 6);

        const container = document.createElement('div');
        container.classList.add('popular-courses');

        const h3 = document.createElement('h3');
        h3.appendChild(document.createTextNode('Learners top choices'));
        container.appendChild(h3);

        popularList.forEach((data) => {
          const card = createCourseCard(data);

          cardHolder.appendChild(card);
        });

        container.appendChild(cardHolder);

        const link = document.createElement('div');
        link.classList.add('explore-link');

        const a = document.createElement('a');
        a.appendChild(document.createTextNode('Explore more courses'));
        a.setAttribute('href', '/pages/catalog.html');
        a.classList.add('btn-link');

        link.appendChild(a);
        container.appendChild(link);
        parent.appendChild(container);
        break;

      case false:
        const courses = document.createElement('div');
        courses.classList.add('courses');

        list.forEach((data) => {
          const card = createCourseCard(data);

          cardHolder.appendChild(card);
        });

        courses.appendChild(cardHolder);

        parent.appendChild(courses);
        break;

      default:
        throw new Error(
          `Please provide an boolean for createDOM.cardList() method. "${popular}" is not an boolean`
        );
    }
  },

  courseDetails: async (parent, id) => {
    const data = await appManager.getCourse(id);
    const details = createCourseDetails(data);

    parent.appendChild(details);
  },

  layout: (parent, type) => {
    switch (type) {
      case 'navbar':
        parent.appendChild(createNavbar());
        break;

      case 'footer':
        parent.appendChild(createFooter());
        break;

      case 'home':
        parent.appendChild(createHero());
        parent.appendChild(createHome());
        break;

      case 'sign-in':
        parent.appendChild(createSignIn());
        break;

      case 'sign-up':
        parent.appendChild(createStudentForm());
        break;

      case 'admin':
        parent.appendChild(createAdminOverview());
        break;

      case 'course-form':
        parent.appendChild(createCourseForm());

        createSelectOptions();
        break;

      default:
        throw new Error('Not a valid type');
    }
  },
};
