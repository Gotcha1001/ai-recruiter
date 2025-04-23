import { PhoneCall, Video } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function CreateOptions() {
    return (
        <div className='grid grid-cols-2 gap-4 '>
            <Link href={'/dashboard/create-interview'} className='bg-white border border-gray-300 rounded-lg p-4 hover:bg-gradient-to-r from-teal-500 via-indigo-600 to-black transition-all duration-300 ease-in-out cursor-pointer'>
                {/* Video Interview */}
                <Video className='p-3 text-indigo-500 bg-indigo-100 rounded-lg h-12 w-12' />
                <h2 className='font-bold'>Create New Interview</h2>
                <p className='text-gray-500 text-sm'>Create AI Interviews And Schedule Them With Candidates </p>
            </Link>
            <div className='bg-white border border-gray-300 rounded-lg p-4 hover:bg-gradient-to-r from-teal-500 via-indigo-600 to-black transition-all duration-300 ease-in-out'>
                {/* Video Interview */}
                <PhoneCall className='p-3 text-indigo-500 bg-indigo-100 rounded-lg h-12 w-12' />
                <h2 className='font-bold'>Create Phone Screening Call</h2>
                <p className='text-gray-500 text-sm'>Schedule Phone Screening Call With Candidates </p>
            </div>
        </div>
    )
}

export default CreateOptions