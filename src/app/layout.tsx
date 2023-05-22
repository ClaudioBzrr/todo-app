import { Providers } from './providers'

export const metadata = {
  title: 'ToDo App',
  description: 'Created by ClaudioBzrr',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BB">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
