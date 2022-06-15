import {
  Document,
  Page,
  StyleSheet,
  Text,
  View,
  Font,
} from "@react-pdf/renderer";

Font.register({
  family: "Nanum Gothic",
  src: "https://fonts.gstatic.com/ea/nanumgothic/v5/NanumGothic-ExtraBold.ttf",
});

// Create styles
const styles = StyleSheet.create({
  page: { width: 1200, height: 1200 },
  section: {
    textAlign: "center",
    margin: 24,
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Nanum Gothic",
  },
});

// Create Document Component
export const MyDocument = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.text}>마마마</Text>
        </View>
      </Page>
    </Document>
  );
};
