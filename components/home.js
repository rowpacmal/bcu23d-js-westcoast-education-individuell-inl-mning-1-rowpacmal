export const createHome = () => {
  const div = document.createElement('div');

  div.innerHTML = `
  <section >
    <header>
      <h2>
        A broad selection of courses
      </h2>
    </header>

    <p>
      Choose from over 100 classroom, remote and on-demand courses with new additions published every year
    </p>
  </section>
  `;

  return div;
};
