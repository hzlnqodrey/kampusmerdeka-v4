import './globals.css'
import Navbar from './shared/navbar'
import Background from '../pages/background/background'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Background />
        {children}
        <Navbar />
      </body>
    </html>
  )
}
