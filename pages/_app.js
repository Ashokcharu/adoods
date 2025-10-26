import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import "../assets/styles.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}
