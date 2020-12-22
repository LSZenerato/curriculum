import { useEffect } from 'react';
import '../styles/globals.css';
import store from '../store';
import { Provider } from 'react-redux';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import Router from 'next/router';
import Layout from '../utils/Layout/index.jsx';

//Binding events. 
Router.events.on('routeChangeStart', () => NProgress.start()); 
Router.events.on('routeChangeComplete', () => NProgress.done()); 
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  
  // useEffect(() => {
  //   if("serviceWorker" in navigator) {
  //     window.addEventListener("load", function () {
  //      navigator.serviceWorker.register("/sw.js").then(
  //         function (registration) {
  //           console.log("Service Worker registration successful with scope: ", registration.scope);
  //         },
  //         function (err) {
  //           console.log("Service Worker registration failed: ", err);
  //         }
  //       );
  //     });
  //   }
  // }, [])

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp