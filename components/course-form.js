export const createCourseForm = () => {
  const container = document.createElement('div');
  container.classList.add('form-container');

  container.innerHTML = `
  <h2>
    Post Course
  </h2>

  <form class="form" id="postCourseForm">
    <div class="form-row">
      <label for="title">
        Title*:
      </label>

      <input
        type="text"
        name="title"
        id="title"
        placeholder="Title..."
      />
    </div>

    <div class="form-row">
      <label for="courseNo">
        Course No.*:
      </label>

      <input
        type="number"
        name="courseNo"
        id="courseNo"
        placeholder="1234567890"
        min="0"
        max="9999999999"
        step="1"
        maxlength="10"
      />
    </div>

    <div class="form-row">
      <label for="instructor">
        Instructor*:
      </label>

      <select
        name="instructor"
        id="instructor"
      >
        <option value="">
          -- Select an instructor --
        </option>
      </select>
    </div>

    <div class="form-row">
      <label for="courseType">
        Type*:
      </label>

      <select
        name="courseType"
        id="courseType"
      >
        <option value="">
          -- Select a type --
        </option>

        <option value="Classroom">
          Classroom
        </option>

        <option value="Remote">
          Remote
        </option>
      </select>
    </div>

    <div class="form-row">
      <label for="shortDescription">
        Introduction*:
      </label>

      <textarea
        name="shortDescription"
        id="shortDescription"
        cols="30"
        rows="5"
        placeholder="Introduction..."
      ></textarea>
    </div>

    <div class="form-row">
      <label for="courseSlogan">
        Slogan*:
      </label>

      <input
        type="text"
        name="courseSlogan"
        id="courseSlogan"
        placeholder="Slogan..."
      />
    </div>

    <div class="form-row">
      <label for="longDescription">
        Description*:
      </label>

      <textarea
        name="longDescription"
        id="longDescription"
        cols="30"
        rows="15"
        placeholder="Description..."
      ></textarea>
    </div>

    <div class="form-row">
      <label for="courseStart">
        Start date*:
      </label>

      <input
        type="date"
        name="courseStart"
        id="courseStart"
      />
    </div>

    <div class="form-row">
      <label for="courseLength">
        Length*:
      </label>

      <div class ="special-input">
        <input
          type="number"
          name="courseLength"
          id="courseLength"
          placeholder="Days"
          value="0"
          min="0"
          max="1825"
        />

        <span class="extra-text">
          Days
        </span>
      </div>
    </div>

    <div class="form-row">
      <label for="level">Difficulty*:</label>

      <select
        name="level"
        id="level"
      >
        <option value="">
          -- Select a difficulty level --
        </option>

        <option value="All Levels">
          All Levels
        </option>

        <option value="Beginners">
          Beginners
        </option>

        <option value="Experts">
          Experts
        </option>
      </select>
    </div>

    <div class="form-row">
      <label for="rating">
        Rating*:
      </label>

      <div class ="special-input">
        <input
          type="number"
          name="rating"
          id="rating"
          placeholder="Rating"
          value="0"
          min="0"
          max="9999999"
        />

        <span class="extra-text">
          (demo)
        </span>
      </div>
    </div>

    <div class="form-row">
      <label for="score">
        Score*:
      </label>

      <div class="special-input">
        <input
          type="number"
          name="score"
          id="score"
          placeholder="Score"
          value="5"
          step=".1"
          min="0"
          max="10"
        />

        <span class="extra-text">
          / 10 (demo)
        </span>
      </div>
    </div>

    <div class="form-row">
      <label for="enrollmentFee">
        Price*:
      </label>

      <div class="special-input">
        <input
          type="number"
          name="enrollmentFee"
          id="enrollmentFee"
          placeholder="Price"
          value="9.99"
          step=".01"
          min="0"
          max="999.99"
        />

        <span class="extra-text">
          <i class="bi-currency-euro"></i>
        </span>
      </div>
    </div>

    <div class="form-row">
      <label for="coverImage">
        Image*:
      </label>

      <input
        type="file"
        name="coverImage"
        id="coverImage"
      />
    </div>

    <div class="form-row">
      <label for="altText">
        Alt text*:
      </label>

      <input
        type="text"
        name="altText"
        id="altText"
        placeholder="Alt text..."
      />
    </div>

    <div class="buttons">
      <a href="/pages/admin/admin.html" class="btn-link btn-limiter">
        <i class="bi-caret-left-fill"></i>

        <span>
          Go Back
        </span>
      </a>

      <button type="submit" class="btn">
        Post
      </button>
    </div>

    <div id="statusMassage" class="small-text"></div>
  </form>
  `;

  return container;
};
