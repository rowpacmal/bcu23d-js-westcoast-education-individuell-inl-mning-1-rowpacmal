export const createCourseForm = () => {
  const form = document.createElement('form');
  form.classList.add('form');

  form.innerHTML = `
  <div>
    <label for="title">Title*:</label>
    <input
    type="text"
    name="title"
    id="title"
    placeholder="Course Title"
    />
  </div>

  <div>
    <label for="courseId">Course Id*:</label>
    <input
    type="text"
    name="courseId"
    id="courseId"
    placeholder="Course Id"
    />
  </div>

  <div>
    <label for="instructors">Instructor*:</label>
    <select
    name="instructors"
    id="instructors"
    >
      <option value="">--Select an instructor--</option>
      <option value="Teacher 1">Teacher 1</option>
    </select>
  </div>

  <div>
    <label for="courseType">Type*:</label>
    <select
    name="courseType"
    id="courseType"
    >
      <option value="">--Select a Type--</option>
      <option value="Remote">Remote</option>
      <option value="Classroom">Classroom</option>
      <option value="On-Demand">On-Demand</option>
    </select>
  </div>

  <div>
    <label for="courseDescription">Description*:</label>
    <textarea
    name="courseDescription"
    id="courseDescription"
    cols="30"
    rows="10"
    placeholder="Description..."
    ></textarea>
  </div>

  <div>
    <label for="courseStart">Start Date*:</label>
    <input
    type="date"
    name="courseStart"
    id="courseStart"
    />
  </div>

  <div>
    <label for="courseLength">Length*:</label>
    <input
    type="number"
    name="courseLength"
    id="courseLength"
    placeholder="Days"
    min="0"
    />
  </div>

  <div>
    <label for="booking">Bookable*:</label>
    <input
    type="text"
    name="booking"
    id="booking"
    value="no"
    />
  </div>

  <div>
    <label for="enrollmentFee">Fee*:</label>
    <input
    type="number"
    name="enrollmentFee"
    id="enrollmentFee"
    placeholder="Price"
    step=".01"
    min="0"
    />
  </div>

  <div>
    <label for="coverImage">Image*:</label>
    <input
    type="text"
    name="coverImage"
    id="coverImage"
    />
  </div>

  <button type="submit">Post</button>
  `;

  return form;
};
