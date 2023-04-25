import React from 'react'
import { TokensIcon, PlusIcon, PersonIcon, VideoIcon, MagnifyingGlassIcon, PaperPlaneIcon, HeartIcon, GearIcon } from '@radix-ui/react-icons'
import { AddIcon, HomeIcon, ReelsIcon, SearchIcon } from '../Icons'

const IconClass = "w-6 h-6 stroke-gray-600 active:scale-90 duration-200 cursor-pointer"

function MobileNavigation() {
    return (
        <div className='fixed bottom-0 left-0 flex justify-between w-full px-4 py-6 bg-white border-t bg-opacity-40 backdrop-blur-lg md:hidden'>
            <HomeIcon className={IconClass} />
            <SearchIcon className={IconClass} />
            <AddIcon className={IconClass} />
            <ReelsIcon className={`${IconClass} fill-gray-600`} />
            <PersonIcon className={IconClass} />
        </div>
    )
}

export default MobileNavigation