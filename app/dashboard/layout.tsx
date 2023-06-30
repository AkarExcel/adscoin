import { Montserrat } from 'next/font/google'
import { Metadata } from 'next'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Earn Studio',
  description: 'Earning hub',
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div id="sidebar-bg">
      <Header/>
      <Navbar/>
      <main className={montserrat.className} id="col-main">
        {children}
      </main> 
      </div>
      <Footer/>
    </>
  )
}
