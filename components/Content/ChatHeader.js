import React from 'react'
import { useRecoilValue } from 'recoil';
import { currentChatState } from '../../atoms';
import data from '../../data/data'
import { MenuIcon, SearchIcon } from '../Icons';

const ChatHeader = () => {
    const currentChat = useRecoilValue(currentChatState)
    const user = data.friends.find(d => d.id === currentChat)

    return (
        <div className='h-[59px] bg-[#EDEDED] flex w-full items-center justify-between py-[10px] px-4'>

            <div className='flex items-center flex-1 py-4 cursor-pointer'>
                <div className='relative w-10 h-10 mr-5'>
                    <span className='absolute'>
                        {
                            user.picture && <img className='rounded-full' src={user.picture} />
                        }
                    </span>
                </div>

                <div className='text-base text-black'>
                    {user.name}
                </div>
            </div>

            <div className='flex space-x-4'>
                <span><SearchIcon /></span>
                <span><MenuIcon /></span>
            </div>
        </div>
    )
}

export default ChatHeader
