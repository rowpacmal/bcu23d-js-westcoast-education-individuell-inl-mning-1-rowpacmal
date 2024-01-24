export const createSignIn = () => {
  const div = document.createElement('div');

  div.innerHTML = `
  <h2>
    Sign In
  </h2>

  <form id="signInForm">
    <div>
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

    <div>
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

    <div>
      <button type="submit">
        Sign In
      </button>
    </div>
  </form>
  `;

  return div;
};
