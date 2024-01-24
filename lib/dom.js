import { createAdminOverview } from '../components/admin.js';
import { createCourseCard } from '../components/card.js';
import { createCourseDetails } from '../components/course-details.js';
import { createCourseForm } from '../components/course-form.js';
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
    const div = document.createElement('div');

    switch (popular) {
      case true:
        const popularList = list
          .sort(function (a, b) {
            return parseFloat(b.score) - parseFloat(a.score);
          })
          .slice(0, 4);

        const container = document.createElement('div');
        const h3 = document.createElement('h3');
        h3.appendChild(document.createTextNode('Learners top choices'));
        container.appendChild(h3);
        container.appendChild(div);

        popularList.forEach(async (data) => {
          const card = await createCourseCard(data);

          div.appendChild(card);
        });

        parent.appendChild(container);
        break;

      case false:
        list.forEach(async (data) => {
          const card = await createCourseCard(data);

          div.appendChild(card);
        });

        parent.appendChild(div);
        break;

      default:
        throw new Error(
          `Please provide an boolean for createDOM.cardList() method. "${popular}" is not an boolean`
        );
    }
  },

  courseDetails: async (parent, path) => {
    const data = await appManager.getCourse(path);
    const post = await createCourseDetails(data);

    parent.appendChild(post);
  },

  layout: (parent, type) => {
    switch (type) {
      case 'header':
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
        break;

      default:
        throw new Error('Not a valid type');
    }
  },
};
