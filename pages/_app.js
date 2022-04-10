import '../styles/globals.css'
import {useEffect} from 'react'
import {initNear} from '../near/config'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    initNear();
  }, []);

  return <Component {...pageProps} />
}

export default MyApp
