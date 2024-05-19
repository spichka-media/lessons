"use client";

import range from "lodash.range";
import { useEffect, useMemo, useRef, useState } from "react";
import { pdfjs, Document, Page } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

type Props = {
  pageStart: number;
  pageEnd: number;
  url: string;
};

export default function Component({
  props: { url, pageEnd, pageStart },
}: {
  props: Props;
}) {
  const pageRange = useMemo(() => {
    return range(pageStart, pageEnd + 1);
  }, [pageStart, pageEnd]);

  return (
    <div>
      <Document file={url}>
        {pageRange.map((page) => {
          return (
            <Page
              width={700} // TODO: Make it apadtive
              pageNumber={page}
              renderAnnotationLayer={false}
              renderTextLayer={false}
            />
          );
        })}
      </Document>
    </div>
  );
}
