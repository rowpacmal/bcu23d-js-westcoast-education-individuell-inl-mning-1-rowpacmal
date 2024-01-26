export const createStudentForm = () => {
  const div = document.createElement('div');
  div.classList.add('form-container');

  div.innerHTML = `
  <h2>
    Sign Up
  </h2>

  <form class="form" id="signUpForm">
    <div class="form-row">
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

    <div class="form-row">
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

    <div class="form-row">
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

    <div class="form-row">
      <label for="password">
        Password*:
      </label>

      <div class="special-input">
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />

        <button
          type="button"
          class="btn eye-btn"
          id="showEye"
        >
          <i
            class="bi-eye-fill"
            id="eye"
          ></i>
        </button>
      </div>
    </div>

    <div class="form-row">
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

    <div class="form-row">
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

    <div class="form-row">
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

    <div class="buttons">
      <button type="submit" class="btn">
        Sign Up
      </button>
    </div>
  </form>
  `;

  return div;
};
