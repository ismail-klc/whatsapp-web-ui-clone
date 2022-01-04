import React from 'react'
import { ChatIcon, MenuIcon, StatusIcon, UserIcon } from '../Icons'

const Header = () => {
    return (
        <div className='h-[59px] bg-[#EDEDED] flex w-full items-center py-[10px] px-4'>
            <div className='flex-grow'>
                <div className='relative w-10 h-10 cursor-pointer'>
                    <span className='absolute'><UserIcon /></span>
                </div>
            </div>
            <div className='flex px-2.5 space-x-6 text-gray-600'>
                <div>
                    <span><StatusIcon /></span>
                </div>
                <div>
                    <span><ChatIcon /></span>
                </div>
                <div>
                    <span><MenuIcon /></span>
                </div>
            </div>
        </div>
    )
}

export default Header
