import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Sidebar from '@/components/Sidebar'
import second from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import icon from '@/app/favicon.ico'
import i from '../../public/binary-code.png'

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
      <div id="stars"></div>
      <div id='stars2'></div>
      <div id='stars3'></div>
      <div id='stars4'></div>

      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>

      <body className=' bg-primary text-white '>
      <div className='gradient'></div>
        <div className=' relative'>
        <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
          <Sidebar/>
          <div className=' lg:px-48 md:px-4'>
            {children}
          </div>
        </div>
        </body>
    </html>
  )
}