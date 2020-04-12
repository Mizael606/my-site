import App from 'next/app'
import "../asset/css/index.css"
import "../asset/css/icons.css"
import "circular-std/dist/index.css"
import "poppins-font"
function AppCustom({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default AppCustom;