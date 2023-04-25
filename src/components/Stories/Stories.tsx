import React from 'react'
import { AddIcon, StoryBorder } from '../Icons'
import Image from 'next/image'

const stories = [
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bW9kZWxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1553240799-36bbf332a5c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1533711539834-ebcee9ed4975?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
    "https://images.unsplash.com/photo-1515943492249-2d5d5d944085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    "https://images.unsplash.com/photo-1617462197289-8ea0a366e230?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=414&q=80",
    "https://images.unsplash.com/photo-1580651214613-f4692d6d138f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80",
    "https://images.unsplash.com/photo-1621347311229-fd6e0b5a75e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    "https://images.unsplash.com/flagged/photo-1553986433-c4193e6ddc6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    "https://images.unsplash.com/photo-1593351799227-75df2026356b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=395&q=80",
    "https://images.unsplash.com/photo-1600962815726-457c46a12681?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",



]

function Stories() {
    return (
        <div className='pr-0 border-b md:border-none md:px-4 md:py-6'>
            <h1 className='hidden text-lg font-semibold text-gray-800 md:block'>Stories</h1>

            {/* stories */}
            <div className='flex overflow-auto scrollbar-light'>

                {/* add story */}
                <div className='relative px-4 py-2 cursor-pointer md:pl-0 shrink-0'>
                    <StoryBorder className='absolute w-14 h-14 md:w-16 md:h-16' />
                    <div className='flex items-center justify-center bg-purple-200 rounded-full w-14 h-14 md:w-16 md:h-16'>
                        <AddIcon className='w-3 md:w-5 stroke-gray-700' />
                    </div>
                </div>

                {/* following stories */}
                <div className='flex gap-4 px-4 my-2 border-l border-gray-300 md:gap-6 shrink-0'>
                    {stories.map((story, index) => (
                        <div key={index} className='relative cursor-pointer select-none'>
                            <StoryBorder className='absolute w-14 h-14 md:w-16 md:h-16' />
                            <Image alt='' src={stories[index]!} width={100} height={100} className='object-cover object-center p-1 rounded-full w-14 h-14 md:w-16 md:h-16' />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Stories