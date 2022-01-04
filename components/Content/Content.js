import React from 'react'
import { useRecoilValue } from 'recoil'
import { currentChatState } from '../../atoms'
import ChatScreen from './ChatScreen'
import NoContent from './NoContent'

const Content = () => {
    const currentChat = useRecoilValue(currentChatState)

    return (
        <div className='flex-[70%] flex'>
            {
                currentChat ?
                    <ChatScreen /> :
                    <NoContent />
            }
        </div>
    )
}

export default Content
