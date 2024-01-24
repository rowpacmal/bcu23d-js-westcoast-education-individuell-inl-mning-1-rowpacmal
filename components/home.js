export const createHome = () => {
  const section = document.createElement('section');
  section.classList.add('home');

  section.innerHTML = `
    <header>
      <h2>
        A broad selection of courses
      </h2>
    </header>

    <p>
      Choose from over 100 classroom, remote and on-demand courses with new additions published every year
    </p>
  `;

  return section;
};
