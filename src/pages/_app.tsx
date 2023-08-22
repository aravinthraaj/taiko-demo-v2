import "../styles/globals.scss"
import { Noto_Sans } from "next/font/google"
import Header from "@/components/atoms/Header/Header"
import Footer from "@/components/atoms/Footer/Footer"

const noto = Noto_Sans({
  variable: "--font-noto",
  weight: ["400", "600", "100"],
  subsets: ["latin"],
})

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <Header />
      <Component {...pageProps} className={`${noto.variable}`} />
      <Footer />
    </>
  )
}

export default MyApp
