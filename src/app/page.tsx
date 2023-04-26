import { Inter } from 'next/font/google'
import Sidebar from '@/components/Navigation/Sidebar'
import MobileNavigation from '@/components/Navigation/MobileNavigation'
import MobileHeader from '@/components/Navigation/MobileHeader'
import Stories from '@/components/Stories/Stories'
import Feed from '@/components/Feed/Feed'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="h-screen">

      {/* navigation for mobile devices */}
      <MobileHeader />
      <MobileNavigation />

      <main className='flex'>
        {/* navigation for big screens */}
        <Sidebar activeTab='' />

        <div className='w-full bg-gray-100'>
          <Stories />
          <Feed />
        </div>

        <div className='p-4 hidden border-l border-gray-400 md:block min-w-[220px] sticky top-0'>
          <p>Hello</p>
        </div>

      </main>



    </div>
  )
}
