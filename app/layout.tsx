import { Figtree } from 'next/font/google'

import Sidebar from '@/components/Sidebar'
import './globals.css'
import type { Metadata } from 'next'
import SupabaseProvider from '@/providers/SupabaseProvider'
import UserProvider from '@/providers/UserProvider'
import ModalProvider from '@/providers/ModalProvider'
import ToasterProvider from '@/providers/ToasterProvider'
import getSongsByUserId from '@/actions/getSongsByUserId'
import Player from '@/components/Player'
import getActivePoductsWithPrices from '@/actions/getActivePoductsWithPrices'

const font = Figtree({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Spotify Clone',
  description: 'music is the vibe',
}

export const revalidate = 0;

export default  async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const userSong = await getSongsByUserId();
  const products = await getActivePoductsWithPrices();

  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider products={products}/>
            <Sidebar songs={userSong}>
              {children}
            </Sidebar>
            <Player />
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  )
}
