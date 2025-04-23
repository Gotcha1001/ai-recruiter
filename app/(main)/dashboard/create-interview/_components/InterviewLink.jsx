import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ArrowLeft, Calendar, Clock, Copy, List, Mail, Plus } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { toast } from 'sonner'

function InterviewLink({ interview_id, formData }) {
    const url = process.env.NEXT_PUBLIC_HOST_URL + '/' + interview_id
    const GetInterviewUrl = () => {

        return url;
    }

    const onCopyLink = async () => {
        await navigator.clipboard.writeText(url)
        toast('Your Link Is Copied')
    }

    return (
        <div className='flex flex-col items-center justify-center mt-10'>
            <Image src={'/checkbox.png'} alt='Checkbox' height={200} width={200}
                className='w-[50px] h-[50px]'
            />
            <h2 className='font-bold text-lg mt-4'>Your AI Interview Is Ready...</h2>
            <p className='mt-3'>Share this link with your candidates to start the interview process</p>
            <div className='w-full p-7 mt-6 rounded-lg bg-indigo-100 shadow-lg'>
                <div className='flex justify-between items-center gap-4'>
                    <h2 className='font-bold'>Interview Link</h2>
                    <h2 className='p-1 px-2 text-primary bg-indigo-50 border rounded-lg'>Valid for 30 Days</h2>

                </div>
                <div className='mt-3 flex gap-3 items-center'>
                    <Input defaultValue={GetInterviewUrl()} disabled={true} />
                    <Button
                        className="hover:scale-105 transition-all"
                        onClick={() => onCopyLink()}
                        variant="sex2"><Copy />Copy Link</Button>
                </div>
                <hr className='my-7' />
                <div className='flex gap-5'>
                    <h2 className='text-sm text-gray-500 flex gap-2 items-center'><Clock className='h-4 w-4' />  {formData?.duration}</h2>
                    <h2 className='text-sm text-gray-500 flex gap-2 items-center'><List className='h-4 w-4' />  10 Questions</h2>
                    {/* <h2 className='text-sm text-gray-500 flex gap-2 items-center'><Calendar className='h-4 w-4' /> 30 min {formData?.duration}</h2> */}
                </div>
            </div>
            <div className='mt-7 bg-indigo-100 p-5 rounded-lg w-full'>
                <h2 className='font-bold'>Share Via</h2>
                <div className='flex gap-7 mt-2'>
                    <Button className="hover:scale-105 transition-all"><Mail />Email</Button>
                    <Button className="hover:scale-105 transition-all"><Mail />Slask</Button>
                    <Button className="hover:scale-105 transition-all"><Mail />Whatsapp</Button>
                </div>


            </div>
            <div className='flex gap-5 w-full justify-between mt-6 mb-5'>
                <Link href="/dashboard">
                    <Button className="hover:scale-105 transition-all" variant="sex2"><ArrowLeft />Back To Dashboard</Button>
                </Link>
                <Link href="/create-interview">
                    <Button className="hover:scale-105 transition-all" variant="sex1"><Plus />Create New Interview</Button>
                </Link>

            </div>
        </div>
    )
}

export default InterviewLink