import React from 'react'
import { useRecoilValue } from 'recoil'
import { contentBarState } from '../../atoms'
import NotConnected from '../Notifications/NotConnected'
import ChatList from './ChatList'
import Header from './Header'
import NewChat from './NewChat'
import Profile from './Profile'
import Search from './Search'

const Sidebar = () => {
    const contentBar = useRecoilValue(contentBarState)

    return (
        <div className={`h-full relative flex-grow  flex-col flex min-w-[300px]
            ${contentBar === '' ? "flex-[35%] full:flex-[32%]" : "flex-[25%] full:flex-[25%]"}
        `}>
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
