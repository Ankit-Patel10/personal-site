import React from 'react'
import { Document, Page } from 'react-pdf/build/entry.webpack'

class IndexPage extends React.Component {
  render() {
    return (
      <div>
        <Document
          file="../pdf/Resume.pdf"
          onLoadSuccess={this.onDocumentLoad}
        >
        </Document>
      </div>
    );
  }
}

export default IndexPage
