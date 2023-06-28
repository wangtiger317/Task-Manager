import { ReduxProvider } from '@/store/provider'
import { GlobalStyles } from '@/styles/Global'
import { Roboto } from 'next/font/google'

const inter = Roboto({ subsets: ['latin'], weight: "400" })

export const metadata = {
  title: 'Task-Manager',
  description: 'Mangment task for your employess',
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <GlobalStyles />
      <ReduxProvider>
          <body className={inter.className}>
            {children}
          </body>
        </ReduxProvider>
    </html>
  )
}
