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

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp