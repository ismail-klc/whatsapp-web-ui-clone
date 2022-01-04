import React from 'react'
import ChatBottom from './ChatBottom'
import ChatHeader from './ChatHeader'
import Messages from './Messages'

const ChatScreen = () => {
    return (
        <div className='flex flex-col flex-1 w-full border-l'>
            <ChatHeader />
            <Messages />
            <ChatBottom />
        </div>
    )
}

export default ChatScreen
