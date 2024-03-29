import React from 'react'
import { ChatIcon, MenuIcon, StatusIcon } from '../Icons'
import data from '../../data/data'
import { useSetRecoilState } from 'recoil'
import { sidebarState } from '../../atoms'

const Header = () => {
    const setSidebar = useSetRecoilState(sidebarState)

    return (
        <div className='h-[59px] bg-[#EDEDED] flex w-full items-center py-[10px] px-4'>
            <div className='flex-grow'>
                <div className='relative w-10 h-10 mr-5 cursor-pointer' onClick={() => setSidebar("profile")}>
                    <span className='absolute'>
                        <img className='rounded-full' src={data.profile.picture} />
                    </span>
                </div>
            </div>
            <div className='flex px-2.5 space-x-6 text-gray-600'>
                <button>
                    <span><StatusIcon /></span>
                </button>
                <button onClick={() => setSidebar("newChat")}>
                    <span><ChatIcon /></span>
                </button>
                <button>
                    <span><MenuIcon /></span>
                </button>
            </div>
        </div>
    )
}

export default Header
