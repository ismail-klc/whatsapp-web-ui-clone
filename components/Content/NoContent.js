import React from 'react'
import { LaptopIcon } from '../Icons'

const NoContent = () => {
    return (
        <div className='w-full h-full bg-[#F8F9FA] flex pt-7 border-l justify-center items-center box-border flex-col'>
            <div className='w-4/5 max-w-[560px] flex flex-col text-center -mt-5 flex-1 justify-center'>
                <div>
                    <img src={"/img/intro.jpg"} className='md:w-[250px] w-[356px] md:h-[250px] h-[355px] mx-auto my-0' />
                </div>

                <div>
                    <h1 className='text-center font-light mt-[38px] md:mt-7 text-2xl md:text-3xl'>Keep your phone connected</h1>
                </div>

                <div className='mt-6 md:mt-[18px] text-sm text-gray-400'>
                    WhatsApp connects to your phone to sync messages. To reduce data usage, connect your phone to Wi-Fi.
                </div>

                <div className='mt-9'>
                    <div className='h-[1px] mb-9 bg-gray-300 text-gray-400' />
                    <div className='inline-flex items-center text-sm'>
                        <span className='mt-[1px]'><LaptopIcon /></span>
                        <div className='ml-1 text-gray-400'>
                            Make calls from desktop with WhatsApp for Windows. <a className='text-[#0aa545]' href="https://www.whatsapp.com/download" target="_blank">Get it here</a>.
                        </div>
                    </div>
                </div>

            </div>

            <div className='w-full h-1.5 bg-[#4adf83]'></div>
        </div>
    )
}

export default NoContent
