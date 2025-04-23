"use client"
import FeatureMotionWrapper from '@/app/components/FramerMotion/FeatureMotionWrapperMap'
import { useUser } from '@/app/provider'
import { Button } from '@/components/ui/button'
import { supabase } from '@/services/SupabaseClient'
import { Camera, Video } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import InterviewCard from '../dashboard/_components/InterviewCard'


function AllInterview() {
    const [interviewList, setInterviewList] = useState([])
    const { user } = useUser()

    useEffect(() => {
        user && GetInterviewList()
    }, [user])

    const GetInterviewList = async () => {

        let { data: Interviews, error } = await supabase
            .from('Interviews')
            .select('*')
            .eq('userEmail', user?.email)
            .order('id', { ascending: false })
            .limit(6)

        console.log("Interviews:", Interviews)
        setInterviewList(Interviews)

    }

    return (
        <div className='my-5'>
            <h2 className='font-bold text-3xl gradient-title'>All Interviews</h2>

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
                            <InterviewCard interview={interview} />
                        </FeatureMotionWrapper>
                    ))}
                </div>
            }
        </div>
    )
}


export default AllInterview