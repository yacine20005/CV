import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CV YACINE HAMADOUCHE',
  description: 'CV de YACINE HAMADOUCHE - Alternance 2025',
  
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
