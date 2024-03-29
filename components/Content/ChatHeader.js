import React from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { contentBarState, currentChatState } from '../../atoms';
import data from '../../data/data'
import { MenuIcon, SearchIcon, UserIcon } from '../Icons';

const ChatHeader = () => {
    const currentChat = useRecoilValue(currentChatState)
    const user = data.friends.find(d => d.id === currentChat) || {}
    const setContentBar = useSetRecoilState(contentBarState)

    return (
        <div className='h-[59px] bg-[#EDEDED] flex w-full items-center justify-between py-[10px] px-4'>

            <div 
            onClick={()=>setContentBar("contact")}
            className='flex items-center flex-1 py-4 cursor-pointer'>
                <div className='relative w-10 h-10 mr-5'>
                    <span className='absolute'>
                        {
                            user.picture ? <img className='rounded-full' src={user.picture} /> :
                            <UserIcon />
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
