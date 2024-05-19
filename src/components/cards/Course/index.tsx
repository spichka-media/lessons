import { Course } from "@/types";

type Props = { course: Course };

export default function Component({
  props: {
    course: { name, slug },
  },
}: {
  props: Props;
}) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text"></p>
        <a href={`/courses/${slug}`} className="btn btn-primary">
          Открыть
        </a>
      </div>
    </div>
  );
}
