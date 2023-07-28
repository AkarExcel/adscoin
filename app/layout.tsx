import './globals.css'
import dynamic from 'next/dynamic'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ads Coin Tube',
  description: 'Earn Money Watching Videos',
  keywords: "Earn online, Make money, $5 daily"
}

const CrispWithNoSSR = dynamic(
  
  () => import('./components/Crisp')
)

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>

      <CrispWithNoSSR />
      
      <body className={inter.className}>{children}</body>
    </html>
  )
}
