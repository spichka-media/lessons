import { CoursesResponse } from "@/types";

export const getCourses = async (): Promise<CoursesResponse> => {
  const coursesResponse = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/wp-json/wp/v2/lesson_courses`,
    { cache: "no-store" }
  );
  const courses: CoursesResponse = await coursesResponse.json();

  return courses;
};
