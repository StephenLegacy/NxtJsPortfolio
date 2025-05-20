import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto px-4">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}
