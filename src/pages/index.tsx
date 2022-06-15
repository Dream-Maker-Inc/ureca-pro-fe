import { MyDocument } from "@/common/components/pdf/MyDocument/MyDocument";
import { PDFViewer } from "@/common/components/pdf/PDFViewer/PDFViewer";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <PDFViewer width="100%" height="100%">
      <MyDocument />
    </PDFViewer>
  );
};

export default Home;
