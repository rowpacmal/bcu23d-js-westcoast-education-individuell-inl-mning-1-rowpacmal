export const createNavbar = () => {
  const div = document.createElement('div');
  div.classList.add('navbar');

  div.innerHTML = `
  <a
  href="#"
  class="logo"
  >
    <img
    src="/assets/images/svg-edited.svg"
    alt=""
    class="westcoast-logo"
    width="600"
    height="400"
    />
  </a>

  <ul class="menu">
    <li class="menu__item">
      <a
      href="#"
      class="menu__link"
      >Catalog</a
      >
    </li>

    <li class="menu__item">
      <a
      href="#"
      class="menu__link"
      >About</a
      >
    </li>

    <li class="menu__item">
      <a
      href="#"
      class="menu__link"
      >Contact</a
      >
    </li>
  </ul>

  <div class="buttons">
    <!--
    <button class="btn btn--alt btn--big">
      <i class="bi-cart"></i>
    </button>
    -->

    <button class="btn btn--alt">
      Sign In
    </button>

    <button class="btn">
      Sign Up
    </button>
    
    <button class="btn btn--alt btn--alt-wire">
      <i class="bi-globe2"></i>
    </button>
  </div>
  `;

  return div;
};
