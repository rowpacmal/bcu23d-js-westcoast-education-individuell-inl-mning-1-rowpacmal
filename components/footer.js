export const createFooter = () => {
  const div = document.createElement('div');
  div.classList.add('footer');

  div.innerHTML = `
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
        />
      </a>

      <p>&copy; 2024 WestCoast Education, Inc.</p>
    </div>
  </div>
  `;

  return div;
};
