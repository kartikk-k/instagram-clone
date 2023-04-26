import React from 'react'
import Menu from './Menu'
import { AppLogo, LogoutIcon } from '../Icons'
import { ExitIcon } from '@radix-ui/react-icons'
import Image from 'next/image'

interface Props {
    activeTab: string
}

function Sidebar({ activeTab }: Props) {
    return (
        <div className='min-w-[220px] h-screen sticky top-0 hidden md:flex flex-col justify-between '>
            <div>
                {/* app logo */}
                <div className='flex items-center gap-2 px-4 py-6'>
                    <div className='cursor-pointer'>
                        <AppLogo className='w-32 h-auto' />
                        {/* <img src="main.png" /> */}
                    </div>
                </div>

                {/* profile info */}
                <div className='relative px-4 py-6 space-y-4'>
                    <div className='flex items-center justify-center group'>
                        <div className='absolute mx-auto z-0 w-20 h-20 cursor-pointer justify-center p-[3px] rounded-full bg-theme'>
                        </div>
                        <div className='z-20 flex justify-center cursor-pointer group'>
                            <div className='p-1 bg-white rounded-full'>
                                <img
                                    className='object-cover w-16 h-16 rounded-full bg-theme'
                                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
                                    alt="user"
                                />
                            </div>
                        </div>
                    </div>

                    <div className='cursor-pointer'>
                        <p className='font-bold text-center text-gray-800'>Priyanka Chopra</p>
                        <p className='text-xs text-center text-gray-500'>@priyanka_chopra</p>
                    </div>
                </div>

                {/* menu items */}
                <Menu />
            </div>

            {/* logout button */}
            <div className='flex items-center gap-2 px-4 py-6 duration-200 cursor-pointer hover:scale-105 group active:scale-95'>
                <LogoutIcon className='w-5 h-5 fill-gray-600 group-hover:fill-gray-800' />
                <p className='text-sm text-gray-600 group-hover:text-gray-800'>Logout</p>
            </div>
        </div>
    )
}

export default Sidebar