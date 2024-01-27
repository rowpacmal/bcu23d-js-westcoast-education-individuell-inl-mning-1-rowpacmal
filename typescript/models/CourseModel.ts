export interface Course {
  id: string;
  title: string;
  courseNo: number;
  instructor: string;
  courseType: string;
  shortDescription: string;
  courseSlogan: string;
  longDescription: string;
  courseStart: string;
  courseLength: number;
  level: string;
  rating: number;
  score: number;
  enrollmentFee: number;
  coverImage: string;
  altText: string;
  participants: [string];
}
