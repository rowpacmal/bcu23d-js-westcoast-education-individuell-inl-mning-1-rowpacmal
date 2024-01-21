export const createStudentForm = () => {
  const div = document.createElement('div');

  div.innerHTML = `
  <h2>Sign Up</h2>
  <form id="signUpForm">
    <div>
      <label for="firstName">
        First Name*:
      </label>

      <input
        type="text"
        name="firstName"
        id="firstName"
        placeholder="First Name"
      />
    </div>

    <div>
      <label for="lastName">
        Last Name*:
      </label>

      <input
        type="text"
        name="lastName"
        id="lastName"
        placeholder="Last Name"
      />
    </div>

    <div>
      <label for="email">
        Email*:
      </label>

      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        required
      />
    </div>

    <div>
      <label for="password">
        Password*:
      </label>

      <input
        type="password"
        name="password"
        id="password"
        placeholder="Password"
      />

      <button
        type="button"
        id="showEye"
      >
        <i
          class="bi-eye-fill"
          id="eye"
        ></i>
      </button>
    </div>

    <div>
      <label for="address">
        Address*:
      </label>

      <input
        type="text"
        name="address"
        id="address"
        placeholder="Street 123"
      />
    </div>

    <div>
      <label for="postNo">
        Post Number*:
      </label>

      <input
        type="number"
        name="postNo"
        id="postNo"
        placeholder="12345"
        maxlength="5"
        step="1"
        min="0"
      />
    </div>

    <div>
      <label for="phone">
        Phone*:
      </label>

      <input
        type="tel"
        name="phone"
        id="phone"
        placeholder="+46123456789"
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
        Sign Up
      </button>
    </div>
  </form>
  `;

  return div;
};
