"use client"
import { useUser } from '@/app/provider'
import { supabase } from '@/services/SupabaseClient'
import React, { useEffect, useState } from 'react'
import InterviewCard from '../dashboard/_components/InterviewCard'
import FeatureMotionWrapper from '@/app/components/FramerMotion/FeatureMotionWrapperMap'
import { Button } from '@/components/ui/button'
import { Video } from 'lucide-react'

function SheduledInterview() {


    const { user } = useUser()
    const [interviewList, setInterviewList] = useState()

    useEffect(() => {
        user && GetInterviewList()
    }, [user])

    const GetInterviewList = async () => {

        const result = await supabase.from('Interviews')
            .select('jobPosition,duration,interview_id,interview-feedback(userEmail)')
            .eq('userEmail', user?.email)
            .order('id', { ascending: false })

        console.log(result)
        setInterviewList(result.data)
    }

    return (
        <div className='mt-5'>
            <h2 className='font-bold text-2xl'>Interview List With Candidate Feedback</h2>
            {interviewList?.length == 0 &&
                <div className='p-5 flex flex-col items-center justify-center bg-white border border-gray-300 rounded-lg mt-5  gap-3'>
                    <Video className='h-10 w-10 text-indigo-500' />
                    <h2>You Don't Have Any Interviews Created Yet</h2>
                    <Button variant="sex2">+ Create Interview</Button>
                </div>}
            {interviewList &&
                <div className='mt-5 grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5'>
                    {interviewList.map((interview, index) => (
                        <FeatureMotionWrapper index={index} key={index}>
                            <InterviewCard interview={interview} viewDetail={true} />
                        </FeatureMotionWrapper>
                    ))}
                </div>
            }
        </div>
    )
}

export default SheduledInterview