import { ModuleLesson } from "@/types";

type Props = {
  lesson: ModuleLesson;
  course: { slug: string };
  lessonIndex: number;
};

export default function Component({
  lesson: {
    title: { rendered },
    slug,
  },
  course: { slug: courseSlug },
}: Props) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{rendered}</h5>
        <p className="card-text"></p>
        <a href={`/courses/${courseSlug}/${slug}`} className="btn btn-primary">
          Открыть
        </a>
      </div>
    </div>
  );
}
