import { appManager } from '../../lib/app.js';
import { createCourseCard } from '../components/card/card.js';

export const createElement = {
  cardList: async (parent, popular = false, picks = 0) => {
    const list = await appManager.getAllCourses();

    switch (popular) {
      case true:
        let loop = picks;
        const popularList = list.sort(function (a, b) {
          return parseFloat(b.score) - parseFloat(a.score);
        });

        popularList.forEach((data) => {
          if (loop !== 0) {
            const card = createCourseCard(data);

            parent.appendChild(card);

            loop--;
          } else {
            return;
          }
        });
        break;

      case false:
        list.forEach((data) => {
          const card = createCourseCard(data);

          parent.appendChild(card);
        });
        break;

      default:
        throw new Error(
          `Please provide an boolean for createElement.cardList() method. "${popular}" is not an boolean`
        );
    }
  },
};
