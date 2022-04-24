import '../styles/globals.css'
import {AuthProvider} from '../auth'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
