export const createSignIn = () => {
  const container = document.createElement('div');
  container.classList.add('form-container');

  container.innerHTML = `
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

  return container;
};
