import './globals.css'
import { Nova_Square } from 'next/font/google'
import { SpeedInsights } from "@vercel/speed-insights/next"

const nova = Nova_Square({subsets: ['latin'], weight: '400'})

export const metadata = {
  title: {
    absolute: 'Tekkom ThreeFiber',
    default: 'Tekkom ThreeFiber',
    template: '%s | Tekkom3Fiber'
  },
  description: 'Tekkom Introduction to Computer Components using ThreeFiber',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.min.css"/>
      </head>
      <body className={nova.className}>{children}</body>
    </html>
  )
}
