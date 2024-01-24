export const createHero = () => {
  const div = document.createElement('div');
  div.classList.add('hero');

  div.innerHTML = `
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

  return div;
};
