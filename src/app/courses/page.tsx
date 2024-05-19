import CoursesPage from "@/components/pages/CoursesPage";
import { getCourses } from "@/services/course";

const Page = async () => {
  const courses = await getCourses();

  return <CoursesPage props={{ courses }} />;
};

export default Page;
