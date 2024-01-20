import { appManager } from '../../lib/app.js';
import { createCourseCard } from '../components/card/card.js';
import { createFooter } from '../components/footer/footer.js';
import { createNavbar } from '../components/navbar/navbar.js';

export const createElement = {
  cardList: async (parent, popular = false, picks = 0) => {
    const list = await appManager.getAllCourses();
    const div = document.createElement('div');
    div.classList.add('active-courses');

    switch (popular) {
      case true:
        let loop = picks;
        const popularList = list.sort(function (a, b) {
          return parseFloat(b.score) - parseFloat(a.score);
        });

        const container = document.createElement('div');
        container.classList.add('popular-courses');

        const h3 = document.createElement('h3');
        h3.appendChild(document.createTextNode('Learners top choices'));
        container.appendChild(h3);
        container.appendChild(div);

        popularList.forEach((data) => {
          if (loop !== 0) {
            const card = createCourseCard(data);

            div.appendChild(card);

            loop--;
          } else {
            return;
          }
        });

        parent.appendChild(container);
        break;

      case false:
        list.forEach((data) => {
          const card = createCourseCard(data);

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

  header: (parent) => {
    parent.appendChild(createNavbar());
  },

  footer: (parent) => {
    parent.appendChild(createFooter());
  },
};
