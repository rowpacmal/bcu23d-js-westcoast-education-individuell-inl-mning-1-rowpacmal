// !================================! //
// !create application classes =====! //
// !================================! //
// *course template* //
class Course {
  constructor([
    title,
    id,
    instructor,
    type,
    details,
    startDate,
    length,
    booking,
    fee,
    image,
  ]) {
    this.title = title;
    this.courseId = id;
    this.instructor = instructor;
    this.courseType = type;
    this.courseDetails = details;
    this.courseStart = startDate;
    this.courseLength = length;
    this.booking = booking;
    this.enrollmentFee = fee;
    this.coverImage = image;
    this.participants = [];
  }
}

// *account template* //
class Account {
  constructor(accountName, password, role) {
    this.accountName = accountName;
    this.password = password;
    this.role = role;
  }
}

// *user template* //
class User extends Account {
  constructor(firstName, lastName, email, phone, accountName, password, role) {
    super(accountName, password, role);
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phone = phone;
  }

  // public methods
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

// *student template* //
class Student extends User {
  constructor([
    firstName,
    lastName,
    email,
    phone,
    address,
    birthDate,
    accountName,
    password,
  ]) {
    super(firstName, lastName, email, phone, accountName, password);
    this.address = address;
    this.birthDate = birthDate;
    this.enrolledCourses = [];
    this.role = 'read';
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
    password
  ) {
    super(firstName, lastName, email, phone, accountName, password);
    this.teacherDetails = details;
    this.qualifications = [];
    this.coursesHeld = [];
    this.role = 'write';
  }
}

// *export classes* //
export { Course, Account, User, Student, Teacher };
