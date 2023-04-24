import React from 'react'
import { TokensIcon, MagnifyingGlassIcon, BellIcon, PaperPlaneIcon, HeartIcon, GearIcon } from '@radix-ui/react-icons'

const ItemBox = "flex justify-between pl-4 duration-200 cursor-pointer hover:scale-105 group active:scale-95"
const ItemIcon = "w-5 h-5 text-gray-500 group-hover:text-gray-800"
const ItemText = "text-sm text-gray-500 group-hover:text-gray-800"

function Menu() {
    return (
        <div className='py-6 space-y-6'>

            {/* home/feed */}
            <div className={ItemBox}>
                <div className='flex items-center gap-2'>
                    <TokensIcon className={ItemIcon} />
                    <p className={ItemText}>Home</p>
                </div>
                <div className='w-1 bg-theme-3'></div>
            </div>

            {/* search/explore */}
            <div className={ItemBox}>
                <div className='flex items-center gap-2'>
                    <MagnifyingGlassIcon className={ItemIcon} />
                    <p className={ItemText}>Explore</p>
                </div>
                <div className='w-1 bg-theme-3'></div>
            </div>

            {/* notifications */}
            <div className={ItemBox}>
                <div className='flex items-center gap-2'>
                    <HeartIcon className={ItemIcon} />
                    <p className={ItemText}>Notifications</p>
                </div>
                <div className='w-1 bg-theme-3'></div>
            </div>

            {/* messages */}
            <div className={ItemBox}>
                <div className='flex items-center gap-2'>
                    <PaperPlaneIcon className={`${ItemIcon} rotate-[-45deg]`} />
                    <p className={ItemText}>Messages</p>
                </div>
                <div className='w-1 bg-theme-3'></div>
            </div>

            {/* settings */}
            <div className={ItemBox}>
                <div className='flex items-center gap-2'>
                    <GearIcon className={ItemIcon} />
                    <p className={ItemText}>Settings</p>
                </div>
                <div className='w-1 bg-theme-3'></div>
            </div>

        </div>
    )
}

export default Menu