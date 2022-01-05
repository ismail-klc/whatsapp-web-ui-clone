import React from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { contentBarState, currentChatState } from '../../atoms'
import data from '../../data/data'
import { BlockIcon, ChevronTextIcon, CloseIcon, DeleteIcon, DisappearIcon, NotificationIcon, StarIcon, ThumbDownIcon, UserIcon } from '../Icons'

const ContactInfo = () => {
    const contentBar = useRecoilValue(contentBarState)
    const setContentBar = useSetRecoilState(contentBarState)
    const currentChat = useRecoilValue(currentChatState)
    const user = data.allFriends.find(d => d.id === currentChat) || {}

    return (
        <div className={`bg-[#EDEDED] w-full h-full transition-all ${contentBar === 'contact' ? "lg:flex-[25%] translate-x-0 flex-1" : "w-0 translate-x-[1000px]"}`}>
            <div className='h-[59px] bg-[#EDEDED] flex w-full items-center border-l space-x-6 py-[10px] px-4'>
                <button onClick={() => setContentBar("")}>
                    <CloseIcon />
                </button>
                <span>Contact Info</span>
            </div>

            <div className='flex flex-col h-[calc(100%-59px)] overflow-y-auto'>
                {/* Profile Photo */}
                <div className='flex flex-col items-center justify-center w-full bg-white'>
                    <div className='m-5 mb-4 w-52 h-52'>
                        {
                            user.picture ? <img className='rounded-full' src={user.picture} /> :
                                <UserIcon />
                        }
                    </div>
                    <div className='text-xl'>{user.name}</div>

                    <div className='mt-2 mb-4 text-gray-400'>+90 555 555 55 55</div>
                </div>

                {/* About */}
                <div className='flex flex-col p-4 mt-2 space-y-2 bg-white'>
                    <span className='text-sm text-gray-400'>About</span>
                    <span>{user.status}</span>
                </div>

                {/* Media, Links, Docs */}
                <div className='flex items-center justify-between p-4 mt-2 text-sm bg-white'>
                    <span className='text-gray-400'>Media, links and docs</span>
                    <span >
                        <ChevronTextIcon />
                    </span>
                </div>

                {/* Starred Messages */}
                <div className='flex items-center p-4 pl-8 mt-2 bg-white'>
                    <span className=''>
                        <StarIcon />
                    </span>
                    <span className='flex-1 ml-4'>Starred Messages</span>
                    <span>
                        <ChevronTextIcon />
                    </span>
                </div>

                {/* Notification */}
                <div className='flex flex-col justify-center p-4 pl-8 mt-2 space-y-4 bg-white'>
                    <div className='flex items-center'>
                        <span className=''>
                            <NotificationIcon />
                        </span>
                        <span className='flex-1 ml-4'>Mute Notifications</span>
                        <span>
                            <ChevronTextIcon />
                        </span>
                    </div>

                    <div className='flex items-center'>
                        <span className=''>
                            <DisappearIcon />
                        </span>
                        <span className='flex-1 ml-4'>Disappearing Messages</span>
                        <span>
                            <ChevronTextIcon />
                        </span>
                    </div>
                </div>

                {/* Block and Report */}
                <div className='flex flex-col justify-center p-4 pl-8 mt-2 space-y-4 bg-white'>
                    <div className='flex items-center '>
                        <span>
                            <BlockIcon color={"#d70000"} />
                        </span>
                        <span className='flex-1 ml-4 text-[#d70000]'>Block {user.name}</span>
                    </div>

                    <div className='flex items-center '>
                        <span>
                            <ThumbDownIcon color={"#d70000"} />
                        </span>
                        <span className='flex-1 ml-4 text-[#d70000]'>Report {user.name}</span>
                    </div>
                </div>

                {/* Delete Chat */}
                <div className='flex items-center p-4 pl-8 mt-2 mb-6 bg-white'>
                    <span className=''>
                        <DeleteIcon color={"#d70000"} />
                    </span>
                    <span className='flex-1 ml-4 text-[#d70000]'>Delete Chat</span>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo
