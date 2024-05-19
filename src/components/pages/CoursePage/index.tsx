import { LessonsResponse } from "@/types";
import Lesson from "../../cards/Lesson";

type Props = { lessons: LessonsResponse; slug: string };

export default function Page({ props: { lessons, slug } }: { props: Props }) {
  return (
    <main>
      <div className="container">
        <div className="row">
          <h1 className="mt-4">Занятия</h1>
          {lessons?.map((lesson, index) => (
            <div key={index} className="col-md-4">
              <Lesson course={{ slug }} lessonIndex={index} lesson={lesson} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
