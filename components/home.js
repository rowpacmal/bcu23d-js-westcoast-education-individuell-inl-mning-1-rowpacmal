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
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus pariatur iste doloribus, in esse deserunt.
    </p>
  `;

  return section;
};
