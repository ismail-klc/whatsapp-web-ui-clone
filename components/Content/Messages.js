import React, { useEffect, useRef } from 'react'
import data from '../../data/data'

const Messages = () => {
    const messages = data.friends[0].chatlog;
    const myRef = useRef(null)

    const executeScroll = () => myRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' })

    useEffect(() => {
        executeScroll()
    }, [])


    return (
        <div className="flex flex-col overflow-y-auto flex-1 bg-[url('/img/bg-default.png')]">
            <div className='flex flex-col px-20 py-6' ref={myRef}>
                {messages.map(m => (
                    <div key={m.message_id} className={`max-w-[70%] bg-white mb-2 text-sm flex flex-col p-2 rounded-md ${m.side === 'left' ? 'self-start' : 'self-end bg-[#DCF8C6]'}`}>
                        <div className=''>{m.text}</div>
                        <div className='self-end mt-2 text-xs text-gray-400'>{m.timestamp}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Messages
