import AuthProvider from '../AuthProvider/Authprovider'
import Header from '../Component/Navbar/Header'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return <>
    <AuthProvider>
      <Header></Header>
      <Component {...pageProps} />
    </AuthProvider>
  </>
}
