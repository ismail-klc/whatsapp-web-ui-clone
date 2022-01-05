import Head from 'next/head'
import React from 'react'
import Sidebar from '../components/Chats/Sidebar'
import Content from '../components/Content/Content'

const Home = () => {
	return (
		<>
			<Head>
				<title>WhatsApp</title>
			</Head>
			<div className='w-screen h-screen'>
				<div className='bg-[#009688] h-32 hidden full:block'></div>
				<div className='bg-[#D5DBD8] h-[calc(100%-128px)] hidden full:block'></div>
				<div className='full:inset-0 full:top-5 absolute w-full h-full full:w-[1396px] mx-auto full:h-[calc(100%-38px)] flex'>
					<Sidebar />
					<Content />
				</div>
			</div>
		</>
	)
}

export default Home
