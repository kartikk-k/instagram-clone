import { Inter } from 'next/font/google'
import NavigationMenu from '@/components/Navigation/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="">
      <NavigationMenu activeTab='' />
    </main>
  )
}
