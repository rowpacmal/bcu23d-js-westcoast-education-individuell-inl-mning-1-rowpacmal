export const createCourseForm = () => {
  const form = document.createElement('form');

  form.innerHTML = `
  <h1>Post Course</h1>

  <form id="postCourseForm">
    <div>
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

    <div>
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

    <div>
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

        <option value="o92y">
          John Doe
        </option>

        <option value="erq2">
          Mary Sue
        </option>

        <option value="870a">
          Daren Karen
        </option>

        <option value="4cc6">
          Sally Sad
        </option>

        <option value="17i9">
          Jane Doe
        </option>
      </select>
    </div>

    <div>
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

        <option value="On-Demand">
          Hybrid
        </option>

        <option value="On-Demand">
          On-Demand
        </option>
      </select>
    </div>

    <div>
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

    <div>
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

    <div>
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

    <div>
      <label for="courseStart">
        Start date*:
      </label>

      <input
        type="date"
        name="courseStart"
        id="courseStart"
      />
    </div>

    <div>
      <label for="courseLength">
        Length*:
      </label>

      <input
        type="number"
        name="courseLength"
        id="courseLength"
        placeholder="Days"
        value="0"
        min="0"
        max="1825"
      />

      <span>
        Days
      </span>
    </div>

    <div>
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

    <div>
      <label for="rating">
        Rating*:
      </label>

      <input
        type="number"
        name="rating"
        id="rating"
        placeholder="Rating"
        value="0"
        min="0"
        max="9999999"
      />

      <span>
        (demo)
      </span>
    </div>

    <div>
      <label for="score">
        Score*:
      </label>

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

      <span>
        / 10
      </span>

      <span>
        (demo)
      </span>
    </div>

    <div>
      <label for="enrollmentFee">
        Price*:
      </label>

      <span>
        <i class="bi-currency-euro"></i>
      </span>

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
    </div>

    <div>
      <label for="coverImage">
        Image*:
      </label>

      <input
        type="file"
        name="coverImage"
        id="coverImage"
      />
    </div>

    <div>
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

    <div>
      <a href="/pages/admin/admin.html">
        <i class="bi-caret-left-fill"></i>

        <span> Go Back </span>
      </a>

      <button type="submit">
        Post
      </button>
    </div>
  </form>
  `;

  return form;
};
