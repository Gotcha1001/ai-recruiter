import React, { useEffect, useState } from 'react'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { InterviewType } from '@/services/Constants'
import FeatureMotionWrapper from '@/app/components/FramerMotion/FeatureMotionWrapperMap'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'




function FormContainer({ onHandleInputChange, GoToNext }) {

    const [interviewType, setInterviewType] = useState([])

    useEffect(() => {
        if (interviewType) {
            onHandleInputChange('type', interviewType)
        }
    }, [interviewType])

    const AddInterviewType = (type) => {
        const data = interviewType.includes(type)
        if (!data) {
            setInterviewType((prev => [...prev, type]))
        } else {
            const result = interviewType.filter(item => item != type)
            setInterviewType(result)
        }

    }

    return (
        <div className='p-5 bg-white rounded-2xl shadow-2xl border mb-5'>
            <div>
                <h2 className='text-sm font-medium'>Job Position</h2>
                <Input
                    onChange={(event) => onHandleInputChange('jobPosition', event.target.value)}
                    placeholder="eg... Full Stack Developer" className="mt-2" />
            </div>
            <div className='mt-5'>
                <h2 className='text-sm font-medium'>Job Description</h2>
                <Textarea
                    onChange={(event) => onHandleInputChange('jobDescription', event.target.value)}
                    placeholder="Enter Details Of The Job Description"
                    className="mt-5 h-[200px]"
                />
            </div>
            <div className='mt-5'>
                <h2 className='text-sm font-medium'>Interview Duration</h2>
                <Select onValueChange={(value) => onHandleInputChange('duration', value)}>
                    <SelectTrigger className="w-full mt-2">
                        <SelectValue placeholder="Select Duration" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="5 Min">5 Min</SelectItem>
                        <SelectItem value="15 Min">15 Min</SelectItem>
                        <SelectItem value="30 Min">30 Min</SelectItem>
                        <SelectItem value="45 Min">45 Min</SelectItem>
                        <SelectItem value="60 Min">60 Min</SelectItem>
                    </SelectContent>
                </Select>


            </div>
            <div className='mt-5'>
                <h2 className='text-sm font-medium'>Interview Type</h2>
                <div className='flex flex-wrap gap-2 mt-2 '>
                    {InterviewType.map((type, index) => (
                        <FeatureMotionWrapper key={index} index={index}>
                            <div
                                onClick={() => AddInterviewType(type.title)}
                                className={`flex gap-2 p-1 px-2 bg-white border rounded-2xl items-center cursor-pointer hover:bg-gradient-to-r from-teal-500 via-indigo-600 to-black hover:text-white 
                                ${interviewType.includes(type.title) && 'bg-gradient-to-r from-teal-500 via-indigo-600 to-black text-white'}
                                `}>
                                <type.icon className='h-4 w-4' />
                                <span>{type.title}</span>
                            </div>
                        </FeatureMotionWrapper>
                    ))}
                </div>
            </div>
            <div className='mt-10 flex justify-end'>
                <Button
                    onClick={() => GoToNext()}
                    variant="sex2">Generate Question <ArrowRight /></Button>
            </div>

        </div>
    )
}

export default FormContainer