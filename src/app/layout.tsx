import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Sidebar from '@/components/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Natnael Legesse',
  description: 'Natnael Legesse | Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className=' bg-primary text-white '>
      <div className='gradient'></div>
        <div className=' relative'>
          <Sidebar/>
          <div className=' lg:px-48 md:px-4'>
            {children}
          </div>
        </div>
        </body>
    </html>
  )
}