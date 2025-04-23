"use client"
import { useUser } from '@/app/provider'
import Image from 'next/image'
import React from 'react'

function WelcomeContainer() {

    const { user } = useUser()

    return (
        <div className='bg-gradient-to-bl from-indigo-500 via-black to-purple-900 p-5 rounded-2xl flex justify-between items-center mt-5 '>
            <div >

                <h2 className='text-lg font-bold text-white'>Welcome Back, {user?.name}</h2>
                <h2 className='text-gray-500'>AI-Driven Interview, Free And Easy Hiring</h2>

            </div>
            {user && <Image src={user?.picture} alt='User' height={50} width={50}
                className='rounded-full border-2 border-indigo-500 mt-5'
            />}
        </div>
    )
}

export default WelcomeContainer