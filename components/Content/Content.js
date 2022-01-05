import React from 'react'
import { useRecoilValue } from 'recoil'
import { contentBarState, currentChatState } from '../../atoms'
import ChatScreen from './ChatScreen'
import ContactInfo from './ContactInfo'
import NoContent from './NoContent'

const Content = () => {
    const currentChat = useRecoilValue(currentChatState)
    const contentBar = useRecoilValue(contentBarState)

    return (
        <div className='flex-[65%] full:flex-[75%] flex flex-row-reverse overflow-x-hidden overflow-y-hidden'>
            <ContactInfo />

            <div className={`transition ${contentBar === '' ? "flex-1" : "lg:flex-[45%] hidden lg:flex"}`}>
                {
                    currentChat ?
                        <ChatScreen /> :
                        <NoContent />
                }
            </div>

        </div>
    )
}

export default Content
