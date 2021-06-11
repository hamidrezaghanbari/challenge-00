import '../styles/globals.css'
import { wrapper } from '../lib/redux/store';
import { SWRConfig } from 'swr';
import { axiosFetcher } from '../lib/utils/request.util';

function App({ Component, pageProps }) {
  return (
    <SWRConfig value={{fetcher: axiosFetcher}}>
      <Component {...pageProps} />
    </SWRConfig>
  )
}


export default wrapper.withRedux(App)