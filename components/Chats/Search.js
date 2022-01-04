import React, { useState } from 'react'
import { BackIcon, SearchIcon } from '../Icons'

const Search = () => {
    const [focused, setFocused] = useState(false)
    return (
        <>
            {!focused &&
                <div onClick={() => setFocused(true)} className='box-border h-12 bg-[#f6f6f6] items-center flex py-1.5'>

                    <div role="textbox" className='bg-white relative h-full w-full pl-10 py-1.5 mx-3 my-2 rounded-full outline-none' />

                    <button className='absolute left-6'>
                        <div>
                            <span>
                                <SearchIcon />
                            </span>
                        </div>
                    </button>

                    <div className='absolute text-sm text-gray-400 left-20'>Search or start a new chat</div>
                </div>
            }
            {
                focused &&
                <div className='box-border relative flex items-center w-full h-12 px-5 bg-white shadow-md'>
                    <button className='text-blue-500' onClick={() => setFocused(false)}>
                        <div>
                            <span>
                                <BackIcon />
                            </span>
                        </div>
                    </button>
                    <input className='flex-1 ml-4 outline-none' />
                </div>
            }
        </>
    )
}

export default Search
