import { Course } from "./Course";
import { Hole } from "./Hole";

export type Tee = {
  id: number;
  name: string;
  color: string;
  rating: number;
  slope: number;
  courseId: number;
  course?: Course;
  holes?: Hole[];
}