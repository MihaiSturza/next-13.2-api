import './globals.css'

export const metadata = {
  title: 'Mimidev',
  description: 'Simple code',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel='icon' href='/favicon.svg' />
      <body>{children}</body>
    </html>
  )
}
