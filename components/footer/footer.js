export const createFooter = () => {
  const div = document.createElement('div');
  div.classList.add('footer');

  div.innerHTML = `
  <div class="links">
  <!--
    <ul>
      <li><a href="#">Business</a></li>

      <li><a href="#">Catalog</a></li>

      <li><a href="#">Get the app</a></li>

      <li><a href="#">About us</a></li>

      <li><a href="#">Contact us</a></li>
    </ul>

    <ul>
      <li><a href="#">Careers</a></li>

      <li><a href="#">Blog</a></li>

      <li><a href="#">Help and Support</a></li>

      <li><a href="#">Affiliate</a></li>

      <li><a href="#">Investors</a></li>
    </ul>

    <ul>
      <li><a href="#">Terms</a></li>

      <li><a href="#">Privacy policy</a></li>

      <li><a href="#">Cookie settings</a></li>

      <li><a href="#">Sitemap</a></li>

      <li><a href="#">Accessibility statement</a></li>
    </ul>
  -->

    <div class="copy">
      <a
        href="/"
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

      <p>&copy; 2024 WestCoast Education, Inc.</p>
    </div>
  </div>
  `;

  return div;
};
