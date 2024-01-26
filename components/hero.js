export const createHero = () => {
  const container = document.createElement('div');
  container.classList.add('hero');

  container.innerHTML = `
  <section>
    <header>
      <h1>
        WestCoast Education
      </h1>
    </header>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Necessitatibus dignissimos ipsam tenetur non suscipit, totam nulla
      officiis nam.
    </p>
  </section>
  `;

  return container;
};
