import React from 'react'
import { useRecoilValue } from 'recoil'
import { sidebarState } from '../../atoms'
import NotConnected from '../Notifications/NotConnected'
import ChatList from './ChatList'
import Header from './Header'
import NewChat from './NewChat'
import Profile from './Profile'
import Search from './Search'

const Sidebar = () => {
    const sidebarVal = useRecoilValue(sidebarState)

    return (
        <div className='flex-[40%] h-full relative flex-grow mf:flex-[30%] flex-col flex min-w-[300px]'>
            <Header />
            <NotConnected />
            <Search />
            <ChatList />

            <Profile />

            <NewChat />
        </div>
    )
}

export default Sidebar
