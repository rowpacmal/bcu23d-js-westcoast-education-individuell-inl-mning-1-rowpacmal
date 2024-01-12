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
    this.instructors = [];
    this.participants = [];
    this.courseId = id;
    this.courseType = type;
    this.courseDetails = details;
    this.courseStart = startDate;
    this.courseLength = length;
    this.booking = booking;
    this.enrollmentFee = fee;
    this.coverImage = image;
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
    this.signInKey = '';
  }

  // public method
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

// *export classes* //
export { Course, User, Student };
