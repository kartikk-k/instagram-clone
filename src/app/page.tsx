import { Inter } from 'next/font/google'
import Sidebar from '@/components/Navigation/Sidebar'
import MobileNavigation from '@/components/Navigation/MobileNavigation'
import MobileHeader from '@/components/Navigation/MobileHeader'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="min-h-[120vh]">

      {/* navigation for big screens */}
      <Sidebar activeTab='' />

      {/* navigation for mobile devices */}
      <MobileHeader />
      <MobileNavigation />

      <main>
        <p>Hello</p>
      </main>

    </div>
  )
}
