import React from 'react'
import ChatListItem from './ChatListItem'
import data from '../../data/data'

const ChatList = () => {
    return (
        <div className='flex flex-col flex-1 w-full overflow-y-auto bg-white'>
            {
                data.profile.friends.map((data) =>
                    <ChatListItem key={data.id} data={data} value={"lastChat"}/>
                )
            }
        </div>
    )
}

export default ChatList
