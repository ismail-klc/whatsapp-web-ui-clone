import { atom } from "recoil";
import data from '../data/data'

export const currentChatState = atom({
    key: 'currentChat',
    default: null,
});

export const messagesState = atom({
    key: 'messages',
    default: data.friends[0].chatlog,
});

export const sidebarState = atom({
    key: 'sidebarState',
    default: 'chats'
})

export const contentBarState = atom({
    key: 'contentBar',
    default: ''
})