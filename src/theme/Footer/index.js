import React from 'react';
import Footer from '@theme-original/Footer';
import Head from '@docusaurus/Head';
import ReactDOM from 'react-dom';

export default function FooterWrapper(props) {


  return (
    <>
      <Footer {...props} />
      <Head>
      <script id="help-ukraine-win" async="true" src="https://helpukrainewinwidget.org/cdn/widget.js?type=two&position=bottom-right&layout=main"></script>
      </Head>
      <ToggleChecker/>
    </>
  );
}
 function ToggleChecker() {
  waitForElm(".java-toggle").then((but) => {
    but.addEventListener("click", () => {console.log("hi")})
  })
  

  return (<></>);
}

function waitForElm(selector) {
  return new Promise(resolve => {
      if (document.querySelector(selector)) {
          return resolve(document.querySelector(selector));
      }

      const observer = new MutationObserver(mutations => {
          if (document.querySelector(selector)) {
              resolve(document.querySelector(selector));
              observer.disconnect();
          }
      });

      observer.observe(document.body, {
          childList: true,
          subtree: true
      });
  });
}