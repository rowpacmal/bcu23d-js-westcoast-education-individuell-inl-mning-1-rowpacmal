export const createSignIn = () => {
  const div = document.createElement('div');

  div.innerHTML = `
  <h2>
    Sign In
  </h2>

  <form id="signInForm">
    <div>
      <label for="username">
        Username:
      </label>

      <input
        type="email"
        name="username"
        id="username"
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
      <a href="/">
        <i class="bi-caret-left-fill"></i>

        <span>
          Go Back
        </span>
      </a>
    
      <button type="submit">
        Sign In
      </button>
    </div>
  </form>
  `;

  return div;
};
