
import './globals.css'
import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Houzz Pro Home Assignment',
  description: 'Houzz Pro Home Assignment',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="py-6 max-w-6xl m-auto " >
        <div>
         <Toaster />
        </div>
        {children}
        </body>

    </html>
  )
}
