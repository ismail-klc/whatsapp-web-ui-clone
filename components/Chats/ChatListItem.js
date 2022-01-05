import React from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { currentChatState, sidebarState } from '../../atoms'
import { UserIcon } from '../Icons'

const ChatListItem = ({ data, value }) => {
    const setCurrentChat = useSetRecoilState(currentChatState)
    const currentChat = useRecoilValue(currentChatState)
    const setSidebar = useSetRecoilState(sidebarState)

    const handleChange = () => {
        setCurrentChat(data.id)
        setSidebar("chats")
    }

    return (
        <div
            onClick={handleChange}
            className={`h-[72px] flex space-x-4 cursor-pointer ${data.id === currentChat ? "bg-gray-300" : "hover:bg-gray-100"}`}>
            <div className='py-2 pl-4 '>
                <div className='relative w-14 h-14'>
                    <span className='absolute'>
                        {
                            data.picture ? <img className='rounded-full' src={data.picture} />
                                : <UserIcon />
                        }
                    </span>
                </div>
            </div>

            <div className={`flex-1 min-w-0 ${data.id !== currentChat && "border-b"}`}>
                <div className='flex flex-col py-2 pr-4'>
                    <div className='flex justify-between'>
                        <span className='text-lg'>{data.name}</span>
                        <span className='text-xs text-gray-400'>{data.latest_timestamp}</span>
                    </div>

                    <div className='inline-block text-sm truncate'>
                        {data[value]}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatListItem
