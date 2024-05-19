import CoursePage from "@/components/pages/CoursePage";
import { getLessons } from "@/services/lesson";

type Params = { courseSlug: string };

export default async function Page({
  params: { courseSlug },
}: {
  params: Params;
}) {
  const lessons = await getLessons(courseSlug);

  return <CoursePage props={{ lessons, slug: courseSlug }} />;
}
