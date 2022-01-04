import React from 'react'
import ChatBottom from './ChatBottom'
import ChatHeader from './ChatHeader'

const ChatScreen = () => {
    return (
        <div className='flex flex-col flex-1 w-full border-l'>
            <ChatHeader />
            <div className="flex flex-col overflow-y-auto flex-1 bg-[url('/img/bg-default.png')]"></div>
            <ChatBottom />
        </div>
    )
}

export default ChatScreen
