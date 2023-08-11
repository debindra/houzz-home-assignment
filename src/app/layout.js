
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Houzz Pro Home Assignment',
  description: 'Houzz Pro Home Assignment',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="dark:bg-white" >
        {children}
        </body>

    </html>
  )
}
