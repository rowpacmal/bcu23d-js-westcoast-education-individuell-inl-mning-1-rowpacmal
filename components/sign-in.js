export const createSignIn = () => {
  const div = document.createElement('div');
  div.classList.add('form-container');

  div.innerHTML = `
  <h2>
    Sign In
  </h2>

  <form class="form" id="signInForm">
    <div class="form-row">
      <label for="email">
        Email:
      </label>

      <input
        type="email"
        name="email"
        id="email"
        placeholder="example@mail.io"
        required
      />
    </div>

    <div class="form-row">
      <label for="password">
        Password:
      </label>

      <input
        type="password"
        name="password"
        id="password"
        required
      />
    </div>

    <div class="buttons">
      <button type="submit" class="btn">
        Sign In
      </button>
    </div>
  </form>
  `;

  return div;
};
