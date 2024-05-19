import { Lesson } from "@/types";

export const getLessons = async (courseSlug: string): Promise<Lesson[]> => {
  const lessonsResponse = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/wp-json/wp/v2/lessons?filter[lesson_courses]=${courseSlug}`,
    { cache: "no-store" }
  );
  const lessons = await lessonsResponse.json();

  return lessons;
};

export const getLesson = async (
  courseSlug: string,
  lessonSlug: string
): Promise<Lesson | undefined> => {
  const lessonsResponse = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/wp-json/wp/v2/lessons?slug=${lessonSlug}&filter[lesson_courses]=${courseSlug}`,
    { cache: "no-store" }
  );
  const lessons = await lessonsResponse.json();

  return lessons[0];
};
