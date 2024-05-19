import { ModuleLessonTopicResource } from "@/types";
import PdfDocument from "../PdfDocument";
import RichText from "../../common/RichText";

type Props = {
  resource: ModuleLessonTopicResource;
  scrollKey?: string;
};

export default function Component({
  resource: {
    document,
    document_page_start: pageStart,
    document_page_end: pageEnd,
    text,
    type,
  },
  scrollKey,
}: Props) {
  switch (type) {
    case "document":
      return (
        <PdfDocument
          props={{
            scrollKey,
            fileId: +document, // cast to number (wp sends string)
            pageStart: +pageStart, // cast to number (wp sends string)
            pageEnd: +pageEnd, // cast to number (wp sends string)
          }}
        />
      );

    case "text":
      return <RichText props={{ data: text }} />;
    default:
      return "Topic resource is not supported";
  }
}
