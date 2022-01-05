import React from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { sidebarState } from '../../atoms'
import data from '../../data/data'
import { BackIcon, GroupIcon } from '../Icons'
import ChatListItem from './ChatListItem'
import Search from './Search'

const NewChat = () => {
    const setSidebar = useSetRecoilState(sidebarState)
    const sidebar = useRecoilValue(sidebarState)

    return (
        <div className={`w-full absolute flex flex-col h-full duration-300 bg-[#EDEDED] transition-transform ${sidebar === 'newChat' ? "-translate-x-0" : "-translate-x-[1000px] "}`}>
            <div className='w-full bg-[#00BFA5] h-[109px] flex py-4 px-5 '>
                <button className='self-end' onClick={() => setSidebar("chats")}>
                    <BackIcon color='#fff' />
                </button>
                <div className='flex items-center self-end ml-6 text-lg font-semibold text-white'>New Chat</div>
            </div>

            <Search />

            <div className='flex-1 overflow-y-auto'>
                <div className='flex items-center bg-white h-[72px] border-b hover:bg-gray-100 cursor-pointer'>
                    <div className='flex items-center px-4'>
                        <span className='p-2 rounded-full bg-[#009688]'>
                            <GroupIcon />
                        </span>
                    </div>

                    <div className='flex pr-4 text-lg font-normal grow'>
                        New Group
                    </div>
                </div>

                <div className='text-[#009688] h-[72px] flex bg-white border-b uppercase box-border pt-6 pl-5 pb-8'>
                    Frequently Contacted
                </div>

                <div className='flex flex-col flex-1 w-full bg-white'>
                    {
                        data.allFriends.map((data) =>
                            <ChatListItem key={data.id} data={data} value="status" />
                        )
                    }
                </div>
            </div>

        </div>
    )
}

export default NewChat
