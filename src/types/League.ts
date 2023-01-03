import { Course } from "./Course";

export type League = {
  id: number;
  name: string;
  startDate: Date;
  iterations: number;
  iterationGapDays: number;
  courseId: number;
  course?: Course;
}