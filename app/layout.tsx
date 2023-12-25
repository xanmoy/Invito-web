import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { Clerk } from '@clerk/nextjs/server'
import { ClerkProvider } from '@clerk/nextjs'
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',

})

export const metadata: Metadata = {
  title: 'Invito',
  description: 'Invito is a simple and privacy-focused event management platform.',
  // image: 'https://invito.vercel.app/images/og.png',
  icons: {
    icon: '/assets/images/logo.svg'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en">
        {/* <body className={poppins.variable}>{children}</body> */}
        <body className={`font-poppins ${poppins.variable} bg-white dark:bg-black`}>{children}</body>

      </html>
    </ClerkProvider>
  )
}
