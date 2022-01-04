import React from 'react'
import NotConnected from '../Notifications/NotConnected'
import ChatList from './ChatList'
import Header from './Header'
import Search from './Search'

const Chats = () => {
    return (
        <div className='flex-[40%] flex-grow mf:flex-[30%] flex flex-col min-w-[300px]'>
            <Header />
            <NotConnected />
            <Search />
            <ChatList />
        </div>
    )
}

export default Chats
