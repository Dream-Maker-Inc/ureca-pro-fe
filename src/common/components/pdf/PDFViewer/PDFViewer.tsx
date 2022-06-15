import dynamic from "next/dynamic";
import ReactPDF from "@react-pdf/renderer";

export const PDFViewer = dynamic<ReactPDF.PDFViewerProps>(
  () => import("@react-pdf/renderer").then((module) => module.PDFViewer),
  { ssr: false }
);
