import { atom } from "recoil";

export const currentChatState = atom({
    key: 'currentChat', 
    default: null, 
});