import '../styles/globals.scss'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'LTooL',
  description: 'LTooL: 卒業研究企画発表会用のデモ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en">
      <body className={ `${inter.className} p-4` }>{children}</body>
    </html>
  )
}
