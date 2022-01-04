import React, { useState } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { sidebarState } from '../../atoms'
import { BackIcon, EditIcon } from '../Icons'
import data from '../../data/data'

const Profile = () => {
    const setSidebar = useSetRecoilState(sidebarState)
    const sidebar = useRecoilValue(sidebarState)
    const [name, setName] = useState(data.profile.name)
    const [status, setStatus] = useState(data.profile.status)

    return (
        <div className={`w-full h-full absolute duration-300 bg-[#EDEDED] transition-transform ${sidebar === 'profile' ? "-translate-x-0" : "-translate-x-[1000px] "}`}>
            <div className='w-full bg-[#00BFA5] h-[109px] flex py-4 px-5 '>
                <button className='self-end' onClick={() => setSidebar("chats")}>
                    <BackIcon color='#fff' />
                </button>
                <div className='flex items-center self-end ml-6 text-lg font-semibold text-white'>Profile</div>
            </div>

            <div className='h-[200px] w-full my-7 flex justify-center'>
                <div className={`w-48 h-48 bg-gray-600 delay-300 transition opacity-80 cursor-pointer rounded-full ${sidebar === 'profile' ? "scale-100" : "scale-0 "}`}>
                    <img className='rounded-full' src={data.profile.picture} />
                </div>
            </div>

            <div className={`flex flex-col bg-white w-full h-24 mb-[10px] py-3 px-7 delay-300 transition ${sidebar === 'profile' ? "-translate-y-0" : "-translate-y-[100px]"}`}>
                <span className='text-[#009688] text-sm'>Your name</span>
                <div className='flex items-center align-bottom'>
                    <input className='flex-1 mt-5 outline-none' onChange={e => setName(e.target.value)} value={name} />
                    <button>
                        <EditIcon />
                    </button>
                </div>
            </div>

            <div className='mt-px mb-5 text-sm text-gray-400 mx-7'>
                This is not your username or pin. This name will be visible to your WhatsApp contacts.
            </div>

            <div className={`flex flex-col bg-white w-full h-24 mb-[10px] py-3 px-7 delay-300 transition ${sidebar === 'profile' ? "-translate-y-0" : "-translate-y-[200px]"}`}>
                <span className='text-[#009688] text-sm'>About</span>
                <div className='flex items-center align-bottom'>
                    <input className='flex-1 mt-5 outline-none' onChange={e => setStatus(e.target.value)} value={status} />
                    <button>
                        <EditIcon />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Profile
