import '../styles/globals.css'
import { MoralisProvider } from 'react-moralis'

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      appId='4DygN2lpa6WF00tx4h89xHfgyg4XMe6bVXJiNQRV'
      serverUrl='https://rijmd9obtrid.usemoralis.com:2053/server'>
      {<Component {...pageProps} />}
    </MoralisProvider>
  )
}

export default MyApp
