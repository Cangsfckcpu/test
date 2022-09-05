import React from 'react';
import ReactPDF from '@react-pdf/renderer';
import { FC } from 'react';

// Create styles
const styles = ReactPDF.StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

// Create Document Component
const MyDocument: FC<any> = () => (
  <>
    <ReactPDF.Document>
      <ReactPDF.Page size="A4" style={styles.page}>
        <ReactPDF.View style={styles.section}>
          <ReactPDF.Text>Section #1</ReactPDF.Text>
        </ReactPDF.View>
      </ReactPDF.Page>
    </ReactPDF.Document>
  </>
);