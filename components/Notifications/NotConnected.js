import React from 'react'
import { AlertPhoneIcon, ChevronTextIcon } from '../Icons'

const NotConnected = () => {
    return (
        <div className='flex flex-col w-full'>
            <div className='flex items-center bg-[#fed859] min-h-[62px] pt-4 pr-4 pb-[14px] pl-[13px]'>
                <div className='mr-4'>
                    <span>
                        <AlertPhoneIcon />
                    </span>
                </div>

                <div className='flex flex-col justify-center flex-1'>
                    <div className='text-base'>Phone not connected</div>
                    <div className='mt-[2px] text-sm'>
                        Make sure your phone has an active Internet connection.
                        <span className='block'>
                            <span>Learn more</span>
                            <span className='ml-[3px] mt-[5px] inline-block align-top '>
                                <ChevronTextIcon />
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotConnected
