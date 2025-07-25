import { type Metadata } from 'next'
import { Inter, Lexend } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Refineset',
    default: 'Refineset - Refined digital solutions',
  },
  description:
    'Elegant, refined digital solutions crafted with precision and care.',
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-black antialiased',
        inter.variable,
        lexend.variable,
      )}
    >
      <body className="flex h-full flex-col bg-black text-white">{children}</body>
    </html>
  )
}
