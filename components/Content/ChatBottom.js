import React from 'react'
import { ClipIcon, MicIcon, SmileyIcon } from '../Icons'

const ChatBottom = () => {
    return (
        <div className='h-[62px] w-full bg-[#EDEDED] flex py-2.5 px-5'>
            <div className='flex items-center mr-4 space-x-4'> 
                <button>
                    <SmileyIcon />
                </button>
                <button>
                    <ClipIcon />
                </button>
            </div>

            <input className='flex-1 px-5 rounded-full outline-none' placeholder='Type a message'/>

            <button className='ml-4'>
                <MicIcon />
            </button>
        </div>
    )
}

export default ChatBottom
