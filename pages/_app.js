import App from 'next/app'
import "../asset/css/index.css"
import "circular-std"
import "poppins-font"
function AppCustom({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default AppCustom;