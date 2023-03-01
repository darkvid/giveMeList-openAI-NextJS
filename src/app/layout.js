//import './globals.css'
import '../styles/mvp.css'

import NavMenu from "@/components/navMenu";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <NavMenu />
        {children}
      </body>
    </html>
  )
}
