import React from 'react';
import Footer from '@theme-original/Footer';
import Head from '@docusaurus/Head';
import ReactDOM from 'react-dom';
import BrowserOnly from '@docusaurus/BrowserOnly';
export default function FooterWrapper(props) {


  return (
    <>
      <Footer {...props} />
      <Head>
      <script id="help-ukraine-win" async="true" src="https://helpukrainewinwidget.org/cdn/widget.js?type=two&position=bottom-right&layout=main"></script>
      </Head>
      
      
    </>
  );
}