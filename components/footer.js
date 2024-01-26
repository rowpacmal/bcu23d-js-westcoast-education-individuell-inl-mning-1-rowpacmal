export const createFooter = () => {
  const container = document.createElement('div');
  container.classList.add('footer');

  container.innerHTML = `
  <div class="links">
    <div class="copy">
      <a
        href="/"
        class="logo"
      >
        <img
          src="/assets/images/logo.svg"
          alt="WestCoast Education Logo"
          class="logo-img"
          width="600"
          height="400"
          loading="lazy"
        />
      </a>

      <p>&copy; 2024 WestCoast Education, Inc.</p>
    </div>
  </div>
  `;

  return container;
};
