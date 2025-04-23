import Image from 'next/image'
import React from 'react'

function InterviewHeader() {
    return (
        <div className='p-4 shadow-sm' >
            <Image src={'/logo.jpg'} alt='Logo' height={200} width={200}
                className='w-[180px] rounded-lg'
            />
        </div>
    )
}

export default InterviewHeader