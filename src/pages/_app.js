import '@/global.css';
import { wrapper, store } from '../store';
import { Provider } from 'react-redux';

function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default wrapper.withRedux(App);
