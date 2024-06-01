import Footer from '@/Components/Footer'
import Navbar from '@/Components/Navbar'
import '@/styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import {Montserrat} from "next/font/google"
import Head from 'next/head'
import { useRouter } from 'next/router'


const montserrat = Montserrat({
  subsets : ["latin"],
  variable : "--font-mont"
})

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return(
    <>
    <Head>
       <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
  <main className={`${montserrat.variable} font-mont dark:bg-dark bg-light w-full min-h-screen`}>
    <Navbar/>
    <AnimatePresence mode='wait'>
      <Component key={router.asPath} {...pageProps} />
    </AnimatePresence>
    <Footer/>
  </main>
  
  </>) 
}
