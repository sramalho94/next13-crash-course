import './globals.css'
import { Montserrat } from '@next/font/google'

const montserrat = Montserrat({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-montserrat'
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className={`${montserrat.className} mx-32 my-12`}>
        <nav className="flex flex-row">
          <h1>logo</h1>
          <ul className="flex flex-row mx-10">
            <li>
              <a href="#" className="mx-3">
                {' '}
                About
              </a>
            </li>
            <li>
              <a href="#"> Sign-Up</a>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  )
}
