// !================================! //
// !create application classes =====! //
// !================================! //
// *course template* //
class Course {
  constructor(
    title,
    id,
    type,
    details,
    startDate,
    length,
    booking,
    fee,
    image
  ) {
    this.title = title;
    this._instructors = [];
    this.participants = [];
    this.courseId = id;
    this.courseType = type;
    this.courseDetails = details;
    this._courseStart = startDate;
    this.courseLength = length;
    this.booking = booking;
    this.enrollmentFee = fee;
    this.coverImage = image;
  }

  // getters
  get instructors() {
    return this._instructors;
  }

  get courseStart() {
    return this._courseStart.toLocaleString('sv-SE').split(' ')[0];
  }

  // setters
  set instructors(teacher) {
    this._instructors.push(teacher);
  }

  // public methods
  getEndDate() {
    const date = this._courseStart;
    date.setDate(date.getDate() + this.courseLength);

    const formattedDate = date.toLocaleString('sv-SE').split(' ')[0];
    return formattedDate;
  }
}

// *user template* //
class User {
  constructor(firstName, lastName, email, phone, accountName, password, role) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phone = phone;
    this.accountName = accountName;
    this.password = password;
    this.role = role;
  }

  // public methods
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

// *student template* //
class Student extends User {
  constructor(
    firstName,
    lastName,
    email,
    phone,
    address,
    birthDate,
    accountName,
    password,
    role
  ) {
    super(firstName, lastName, email, phone, accountName, password, role);
    this.address = address;
    this.birthDate = birthDate;
    this.enrolledCourses = [];
  }
}

// *teacher template* //
class Teacher extends User {
  constructor(
    firstName,
    lastName,
    email,
    phone,
    details,
    accountName,
    password,
    role
  ) {
    super(firstName, lastName, email, phone, accountName, password, role);
    this.teacherDetails = details;
    this.qualifications = [];
    this.coursesHeld = [];
  }
}

// *export classes* //
export { Course, User, Student, Teacher };
