import React from 'react'
import { HomeIcon, LikeIcon, MessageIcon, ReelsIcon, SearchIcon, SettingIcon } from '../Icons'

const ItemBox = "flex justify-between pl-4 duration-200 cursor-pointer hover:scale-105 group active:scale-95"
const ItemIcon = "w-5 h-5 stroke-gray-600 group-hover:stroke-gray-800"
const ItemText = "text-sm text-gray-500 group-hover:text-gray-800"

function Menu() {
    return (
        <div className='py-6 space-y-6'>

            {/* home/feed */}
            <div className={ItemBox}>
                <div className='flex items-center gap-2'>
                    <HomeIcon className={ItemIcon} />
                    <p className={ItemText}>Home</p>
                </div>
                <div className='w-1 bg-theme-3'></div>
            </div>

            {/* search/explore */}
            <div className={ItemBox}>
                <div className='flex items-center gap-2'>
                    <SearchIcon className={ItemIcon} />
                    <p className={ItemText}>Search</p>
                </div>
                <div className='w-1 bg-theme-3'></div>
            </div>

            {/* search/explore */}
            <div className={ItemBox}>
                <div className='flex items-center gap-2'>
                    <ReelsIcon className={`${ItemIcon} fill-gray-600 group-hover:fill-gray-800`} />
                    <p className={ItemText}>Reels</p>
                </div>
                <div className='w-1 bg-theme-3'></div>
            </div>

            {/* notifications */}
            <div className={ItemBox}>
                <div className='flex items-center gap-2'>
                    <LikeIcon className={ItemIcon} />
                    <p className={ItemText}>Notifications</p>
                </div>
                <div className='w-1 bg-theme-3'></div>
            </div>

            {/* messages */}
            <div className={ItemBox}>
                <div className='flex items-center gap-2'>
                    <MessageIcon className={`${ItemIcon} fill-gray-600 group-hover:fill-gray-800`} />
                    <p className={ItemText}>Messages</p>
                </div>
                <div className='w-1 bg-theme-3'></div>
            </div>

            {/* settings */}
            <div className={ItemBox}>
                <div className='flex items-center gap-2'>
                    <SettingIcon className={ItemIcon} />
                    <p className={ItemText}>Settings</p>
                </div>
                <div className='w-1 bg-theme-3'></div>
            </div>

        </div>
    )
}

export default Menu