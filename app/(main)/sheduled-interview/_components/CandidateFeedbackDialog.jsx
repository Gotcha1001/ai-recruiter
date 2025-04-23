import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'


function CandidateFeedbackDialog({ candidate }) {

    const feedback = candidate?.feedback
    console.log("FEEEEDBACK:", feedback)

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="text-primary" variant="outline">View Report</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Feedback</DialogTitle>
                    <DialogDescription asChild>
                        <div className='mt-5'>
                            <div className='flex justify-between items-center'>
                                <div className='flex items-center gap-5'>
                                    <h2 className='p-3 px-4 font-bold text-white  bg-primary rounded-full'>
                                        {candidate.userName[0]}
                                    </h2>
                                    <div>
                                        <h2 className='font-bold'>{candidate?.userName}</h2>
                                        <h2 className='text-gray-500 text-sm'>{candidate?.userEmail}</h2>
                                    </div>
                                </div>
                                <div className='flex gap-3 items-center'>
                                    <h2 className='text-primary text-2xl font-bold'>4/5</h2>

                                </div>

                            </div>
                            <div className='mt-5'>
                                <h2 className='font-bold'>Skill Assessment</h2>
                                <div className='mt-3 grid grid-cols-2 gap-10'>
                                    <div>
                                        <h2 className='flex justify-between'>Technical Skills <span>{feedback?.feedback.rating?.technicalSkills}/5</span></h2>
                                        <Progress value={(4 / 5) * 100} className="mt-1" />
                                    </div>
                                    <div>
                                        <h2 className='flex justify-between'>Communication <span>{feedback?.feedback.rating?.communication}/5</span></h2>
                                        <Progress value={(4 / 5) * 100} className="mt-1" />
                                    </div>
                                    <div>
                                        <h2 className='flex justify-between'>Problem Solving <span>{feedback?.feedback.rating?.problemSolving}/5</span></h2>
                                        <Progress value={(4 / 5) * 100} className="mt-1" />
                                    </div>
                                    <div>
                                        <h2 className='flex justify-between'>Experience <span>{feedback?.feedback.rating?.experience}/5</span></h2>
                                        <Progress value={(4 / 5) * 100} className="mt-1" />
                                    </div>
                                </div>
                            </div>
                            <div className='mt-5'>
                                <div className='p-5 bg-indigo-100 rounded-lg'>
                                    <h2 className='font-bold'>Performance Summary</h2>
                                    <p className='mt-2'>{feedback.feedback.summary}</p>
                                </div>

                            </div>
                            <div className={`mt-10 mb-10 flex items-center justify-between p-5 rounded-lg ${feedback.feedback.recommendation.decision === 'Hire'
                                ? 'bg-green-600 text-white'
                                : feedback.feedback.recommendation.decision === 'Consider for different role'
                                    ? 'bg-yellow-500 text-white'
                                    : 'bg-red-500 text-white'
                                }`}>
                                <div>
                                    <h2 className='font-bold'>Recommendation</h2>
                                    <p className='font-bold zoom text-2xl text-center'>
                                        {feedback.feedback.recommendation.decision}
                                    </p>
                                    <p className='mt-2'>{feedback.feedback.recommendation.message}</p>
                                </div>
                                <Button variant="sex2">Send Message</Button>
                            </div>

                        </div>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>

    )
}

export default CandidateFeedbackDialog