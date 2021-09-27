import '../styles/globals.css'
import Nav from '../components/layout/Layout'
function MyApp({ Component, pageProps }) {
  return (<Nav><Component {...pageProps} /></Nav>)
}

export default MyApp
