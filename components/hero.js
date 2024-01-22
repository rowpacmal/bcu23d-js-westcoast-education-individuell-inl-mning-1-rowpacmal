export const createHero = () => {
  const div = document.createElement('div');

  div.innerHTML = `
  <figure>
    <img
      src="/assets/images/resources/marvin-meyer-SYTO3xs06fU-unsplash_2400x1600.webp"
      alt=""
      width="2400"
      height="1600"
    />
  </figure>

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
