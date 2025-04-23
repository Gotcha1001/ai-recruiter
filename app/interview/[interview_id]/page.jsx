"use client"
import { InterviewDataContext } from '@/app/context/InterviewDataContext'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { supabase } from '@/services/SupabaseClient'
import { Clock, Info, Loader2Icon, Video } from 'lucide-react'
import Image from 'next/image'
import { useParams, useRouter } from 'next/navigation'
import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'sonner'


function Interview() {

    const { interview_id } = useParams()
    console.log("PARAMS:", interview_id)

    const [interviewData, setInterviewData] = useState()
    const [userName, setUserName] = useState()
    const [loading, setLoading] = useState(false)
    const [userEmail, setUserEmail] = useState()

    const router = useRouter()

    const { interviewInfo, setInterviewInfo } = useContext(InterviewDataContext)

    useEffect(() => {
        interview_id && GetInterviewDetails()
    }, [interview_id])

    const GetInterviewDetails = async () => {
        setLoading(true)
        try {
            let { data: Interviews, error } = await supabase
                .from('Interviews')
                .select("jobPosition,jobDescription,duration,type")
                .eq('interview_id', interview_id)
            setLoading(false)
            setInterviewData(Interviews[0])
            if (Interviews?.length == 0) {
                toast('Incorrect Interview Link')
                return;
            }

            console.log("DATA:", Interviews)
        } catch (error) {
            setLoading(false)

        }


    }

    const onJoinInterview = async () => {
        setLoading(true)
        let { data: Interviews, error } = await supabase
            .from('Interviews')
            .select('*')
            .eq('interview_id', interview_id)
        console.log(Interviews[0])
        setInterviewInfo({
            userName: userName,
            userEmail: userEmail,
            interviewData: Interviews[0]
        })
        router.push('/interview/' + interview_id + '/start')
        setLoading(false)

    }

    return (
        <div className='px-10 md:px-28 lg:px-48 xl:px-64 mt-16'>
            <div className='flex flex-col items-center justify-center border rounded-lg gradient-background2 p-7 lg:px-33 xl:px-52 mb-20'>
                <Image src={'/logo.jpg'} alt='Logo' height={200} width={200}
                    className='w-[140px] rounded-lg'
                />
                <h2 className='text-white mt-3'>AI-Powered Interview Platform</h2>
                <Image src={'/interview.jpg'} alt='Interview' height={500} width={400}
                    className='h-[300px] my-6 rounded-lg'
                />
                <h2 className='text-primary font-bold text-xl'>{interviewData?.jobPosition}</h2>
                <h2 className='text-white flex gap-2 mt-3 items-center'><Clock className='h-4 w-4' /> {interviewData?.duration}</h2>
                <div className='w-full'>
                    <h2 className='text-white mb-2'>Enter Your Full Name</h2>
                    <Input className="text-white"
                        onChange={(event) => setUserName(event.target.value)}

                        placeholder="e.g. John Harold" />
                </div>
                <div className='w-full'>
                    <h2 className='text-white mb-2'>Enter Your Email</h2>
                    <Input className="text-white"
                        onChange={(event) => setUserEmail(event.target.value)}

                        placeholder="e.g. John@gmail.com" />
                </div>
                <div className='p-3 mt-5 bg-gradient-to-b from-blue-500 via-purple-900 to-black flex gap-4 rounded-lg'>
                    <Info className='text-primary' />
                    <div>
                        <h2 className='text-primary text-xl font-bold'>Before You Begin</h2>
                        <ul>
                            <li className='text-white text-sm'>Test Your Camera And Microphone</li>
                            <li className='text-white text-sm'>Ensure You Have A Stable Internet Connection</li>
                            <li className='text-white text-sm'>Find A Quiet Place For The Interview</li>
                        </ul>
                    </div>
                </div>
                <Button
                    disabled={loading || !userName}
                    onClick={() => onJoinInterview()}
                    className="mt-5 w-full font-bold"><Video />
                    {loading && <Loader2Icon className='animate-spin' />} Join Interview</Button>

            </div>
        </div>
    )
}

export default Interview