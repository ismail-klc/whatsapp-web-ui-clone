import React from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { currentChatState } from '../../atoms'
import { UserIcon } from '../Icons'

const ChatListItem = ({ data }) => {
    const setCurrentChat = useSetRecoilState(currentChatState)
    const currentChat = useRecoilValue(currentChatState)

    return (
        <div
            onClick={() => setCurrentChat(data.id)}
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

            <div className={`flex-1 ${data.id !== currentChat && "border-b"}`}>
                <div className='flex flex-col py-2 pr-4'>
                    <div className='flex justify-between'>
                        <span className='text-lg'>{data.name}</span>
                        <span className='text-xs text-gray-400'>{data.latest_timestamp}</span>
                    </div>

                    <div className='text-sm'>
                        {data.lastChat.slice(0, 20)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatListItem
