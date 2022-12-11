import Head from 'next/head'
import { Container, chakra } from '@chakra-ui/react'
import Navbar from './navbar'
import Footer from './footer'
import Header from './header/header'
import localFont from '@next/font/local'
const TimeburnerFont = localFont({ src: '../public/fonts/Timeburner-Bold.woff2' })
const TenikaFont = localFont({ src: '../public/fonts/Tenika-Regular.woff2' })

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <chakra.div className="container">
      <Header />
      <main>
        <Navbar />
          <Container
            className={TenikaFont.className}
            maxW={'7xl'}
          >{children}
          </Container>
        <Footer />
      </main>
    </chakra.div>
  )
}
