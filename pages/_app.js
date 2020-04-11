import App from 'next/app'
import "../asset/css/index.css"
import "circular-std"
import "poppins-font"
import "../components/header/parallax.css"
function AppCustom({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default AppCustom;