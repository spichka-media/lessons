import LessonPage from "@/components/pages/LessonPage";
import { getLesson } from "@/services/lesson";
import { notFound } from "next/navigation";

type Params = { courseSlug: string; lessonSlug: string };

export default async function Page({
  params: { courseSlug, lessonSlug },
}: {
  params: Params;
}) {
  const lesson = await getLesson(courseSlug, lessonSlug);

  if (!lesson) {
    notFound();
  }

  return <LessonPage props={{ lesson }} />;
}
