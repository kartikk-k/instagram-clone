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

        <div className='w-full'>
          <Stories />
          {/* <Feed /> */}
        </div>

      </main>



    </div>
  )
}
