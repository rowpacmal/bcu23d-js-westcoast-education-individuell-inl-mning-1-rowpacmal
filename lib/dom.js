import { appManager } from '/lib/app.js';
import { createCourseCard } from '/components/card.js';
import { createCoursePost } from '/components/course.js';
import { createFooter } from '/components/footer.js';
import { createNavbar } from '/components/navbar.js';

export const createElement = {
  cardList: async (parent, popular = false) => {
    const list = await appManager.get('courses');
    const div = document.createElement('div');
    div.classList.add('active-courses');

    switch (popular) {
      case true:
        const popularList = list
          .sort(function (a, b) {
            return parseFloat(b.score) - parseFloat(a.score);
          })
          .slice(0, 4);

        const container = document.createElement('div');
        container.classList.add('popular-courses');

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
          `Please provide an boolean for createElement.cardList() method. "${popular}" is not an boolean`
        );
    }
  },

  courseDetails: async (parent, id) => {
    const data = await appManager.get('courses', id);
    const div = document.createElement('div');
    const post = await createCoursePost(data);

    div.appendChild(post);

    parent.appendChild(div);
  },

  layout: (parent, type) => {
    switch (type) {
      case 'header':
        parent.appendChild(createNavbar());
        break;

      case 'footer':
        parent.appendChild(createFooter());
        break;

      default:
        throw new Error('Not a valid type');
    }
  },
};
