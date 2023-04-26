import React from 'react'
import { AppLogo, LikeIcon, MessageIcon } from '../Icons'

function MobileHeader() {
    return (
        <div className='sticky top-0 z-30 flex items-center justify-between w-full px-4 py-6 bg-white md:hidden'>
            {/* app logo */}
            <div className='flex items-center gap-2 '>
                <div className='cursor-pointer'>
                    <AppLogo className='w-32 h-auto' />
                </div>
            </div>

            {/* notifications */}
            <div className='flex gap-4'>
                <LikeIcon className='w-6 h-6 duration-200 cursor-pointer stroke-gray-600 active:scale-90' />
                <MessageIcon className='w-6 h-6 duration-200 cursor-pointer stroke-gray-600 fill-gray-600 active:scale-90' />
            </div>
        </div>
    )
}

export default MobileHeader