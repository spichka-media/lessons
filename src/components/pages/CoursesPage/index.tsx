import { CoursesResponse } from "@/types";
import Course from "@/components/cards/Course";

type Props = { courses: CoursesResponse };

export default function Page({ props: { courses } }: { props: Props }) {
  return (
    <main>
      <div className="container">
        <div className="row">
          <h1 className="mt-4">Курсы</h1>
          {courses.map((course) => (
            <div key={course.id} className="col-md-4">
              <Course props={{ course }} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
