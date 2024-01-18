export default class Course {
  #id = '';
  #title = '';
  #instructor = '';
  #courseType = '';
  #courseDetails = '';
  #courseStart = '';
  #courseLength = 0;
  #booking = 'no';
  #enrollmentFee = 0;
  #coverImage = '';
  #courseRating = 0;
  #participants = [];

  constructor(
    id,
    title,
    instructor,
    courseType,
    courseDetails,
    courseStart,
    courseLength,
    booking,
    enrollmentFee,
    coverImage,
    courseRating,
    participants
  ) {
    this.#id = id;
    this.#title = title;
    this.#instructor = instructor;
    this.#courseType = courseType;
    this.#courseDetails = courseDetails;
    this.#courseStart = courseStart;
    this.#courseLength = courseLength;
    this.#booking = booking;
    this.#enrollmentFee = enrollmentFee;
    this.#coverImage = coverImage;
    this.#courseRating = courseRating;
    this.#participants = participants;
  }

  get id() {
    return this.#id;
  }

  get title() {
    return this.#title;
  }

  get instructor() {
    return this.#instructor;
  }

  get courseType() {
    return this.#courseType;
  }

  get courseDetails() {
    return this.#courseDetails;
  }

  get courseStart() {
    return this.#courseStart;
  }

  get courseLength() {
    return this.#courseLength;
  }

  get booking() {
    return this.#booking;
  }

  get enrollmentFee() {
    return this.#enrollmentFee;
  }

  get coverImage() {
    return this.#coverImage;
  }

  get courseRating() {
    return this.#courseRating;
  }

  get participants() {
    return this.#participants;
  }
}
