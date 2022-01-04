import React, { useState } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { messagesState } from '../../atoms'
import { ClipIcon, MicIcon, SmileyIcon } from '../Icons'

const ChatBottom = () => {
    const setMessages = useSetRecoilState(messagesState)
    const messages = useRecoilValue(messagesState)
    const [value, setValue] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        const newMessage = {
            text: value,
            message_id: messages.length + 1,
            side: "right",
            timestamp: new Date().toLocaleTimeString()
        }
        setMessages(prev => [...prev, newMessage])
        setValue("")
    }

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

            <form onSubmit={handleSubmit} className='flex items-center flex-1 h-full'>
                <input
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    className='flex-1 w-full px-5 py-2 rounded-full outline-none' placeholder='Type a message' />
            </form>

            <button className='ml-4'>
                <MicIcon />
            </button>
        </div>
    )
}

export default ChatBottom
