// import { Button } from '@/components/ui/button'
// import { CheckCircle, Copy, Send, SendIcon } from 'lucide-react'
// import moment from 'moment'
// import { useRouter } from 'next/navigation'
// import React from 'react'
// import { toast } from 'sonner'

// function InterviewCard({ interview }) {
//     const router = useRouter()

//     const url = process.env.NEXT_PUBLIC_HOST_URL + '/' + interview?.interview_id

//     const copyLink = () => {

//         navigator.clipboard.writeText(url)
//         toast.success("Copied...")
//     }

//     const goToInterview = () => {
//         router.push(`/interview/${interview?.interview_id}`)
//     }

//     const goToCompletedInterview = () => {
//         router.push(`/interview/${interview?.interview_id}/completed`)
//     }

//     const onSend = () => {
//         window.location.href = "mailto:wesleyolivier443@gmail.com?subject=AIRecruiter Link & body=Interview Link:" + url
//     }

//     return (
//         <div className='p-5 bg-white rounded-lg border mt-4'>
//             <div className='flex items-center justify-between'>
//                 <div className='h-[40px] w-[40px] bg-primary rounded-full'></div>
//                 <h2 className='text-sm'>{moment(interview?.created_at).format('DD MMM yyy')}</h2>
//             </div>
//             <h2 className="mt-3 text-lg font-bold">{interview?.jobPosition}</h2>
//             <h2 className='mt-2 text-sm'>{interview?.duration}</h2>
//             <div className='flex flex-col gap-3 mt-3'>
//                 <Button onClick={copyLink} className="w-full" variant="outline">
//                     <Copy className="mr-2" /> Copy Link
//                 </Button>
//                 <Button onClick={goToInterview} className="w-full">
//                     <Send className="mr-2" /> Start Interview
//                 </Button>
//                 <Button onClick={goToCompletedInterview} className="w-full" variant="sex2">
//                     <CheckCircle className="mr-2" /> View Completed
//                 </Button>
//                 <Button onClick={onSend} className="w-full" variant="sex1">
//                     <SendIcon className="mr-2" /> Send
//                 </Button>
//             </div>
//         </div>
//     )
// }

// export default InterviewCard



// import { Button } from '@/components/ui/button'
// import { ArrowRight, CheckCircle, Copy, Send, SendIcon } from 'lucide-react'
// import moment from 'moment'
// import Link from 'next/link'
// import { useRouter } from 'next/navigation'
// import React, { useState } from 'react'
// import { toast } from 'sonner'

// function InterviewCard({ interview, viewDetail = false }) {
//     const router = useRouter()
//     const [email, setEmail] = useState('')
//     const [showEmailInput, setShowEmailInput] = useState(false)

//     const url = process.env.NEXT_PUBLIC_HOST_URL + '/' + interview?.interview_id

//     const copyLink = () => {
//         navigator.clipboard.writeText(url)
//         toast.success("Copied...")
//     }

//     const goToInterview = () => {
//         router.push(`/interview/${interview?.interview_id}`)
//     }

//     const goToCompletedInterview = () => {
//         router.push(`/interview/${interview?.interview_id}/completed`)
//     }

//     const onSend = () => {
//         if (showEmailInput && email) {
//             window.location.href = `mailto:${email}?subject=AIRecruiter Link&body=Interview Link: ${url}`
//             setShowEmailInput(false) // Close the input after sending
//             toast.success(`Email sent to ${email}`)
//         } else {
//             setShowEmailInput(true)
//         }
//     }

//     return (
//         <div className='p-5 bg-gradient-to-bl from-indigo-500 via-purple-900 to-black rounded-lg border mt-4'>
//             <div className='flex items-center justify-between'>
//                 <div className='h-10 w-10 bg-primary rounded-full'></div>
//                 <h2 className='text-sm text-white'>{moment(interview?.created_at).format('DD MMM yyy')}</h2>
//             </div>
//             <h2 className="mt-3 text-lg font-bold text-white">{interview?.jobPosition}</h2>

//             <h2 className='mt-2 text-sm text-gray-500 flex justify-between'>{interview?.duration}
//                 <span className='text-teal-400'> {interview['interview-feedback']?.length} Candidates</span>
//             </h2>

//             {!viewDetail ? <div className='flex flex-col gap-3 mt-3'>
//                 <Button onClick={copyLink} className="w-full" variant="outline">
//                     <Copy className="mr-2" /> Copy Link
//                 </Button>
//                 <Button onClick={goToInterview} className="w-full">
//                     <Send className="mr-2" /> Start Interview
//                 </Button>
//                 <Button onClick={goToCompletedInterview} className="w-full" variant="sex2">
//                     <CheckCircle className="mr-2" /> View Completed
//                 </Button>

//                 {showEmailInput && (
//                     <div className="flex items-center gap-2 mt-2">
//                         <input
//                             type="email"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             placeholder="Enter email address"
//                             className="flex-1 p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary text-white"
//                         />
//                     </div>
//                 )}

//                 <Button onClick={onSend} className="w-full" variant="sex1">
//                     <SendIcon className="mr-2" /> {showEmailInput ? "Send Email" : "Send"}
//                 </Button>
//             </div> :
//                 <Link href={'/sheduled-interview/' + interview?.interview_id + "/details"}>
//                     <Button className="mt-5 w-full">View Detail <ArrowRight /></Button>
//                 </Link>

//             }
//         </div>
//     )
// }

// export default InterviewCard


import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle, Copy, Send, SendIcon, AlertCircle } from 'lucide-react'
import moment from 'moment'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState, useEffect } from 'react'
import { toast } from 'sonner'
import { supabase } from '@/services/SupabaseClient'

function InterviewCard({ interview, viewDetail = false }) {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [showEmailInput, setShowEmailInput] = useState(false)
    const [hasCompletedFeedback, setHasCompletedFeedback] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    const url = process.env.NEXT_PUBLIC_HOST_URL + '/' + interview?.interview_id

    useEffect(() => {
        if (interview?.interview_id) {
            checkForCompletedFeedback()
        }
    }, [interview])

    const checkForCompletedFeedback = async () => {
        setIsLoading(true)
        try {
            // Query the interview-feedback table to check if there are any entries with feedback for this interview
            const { data, error } = await supabase
                .from('interview-feedback')
                .select('feedback')
                .eq('interview_id', interview.interview_id)
                .not('feedback', 'is', null)
                .limit(1)

            if (error) {
                console.error("Error checking feedback:", error)
                setHasCompletedFeedback(false)
            } else {
                // If we have at least one record with feedback, we have completed interviews
                setHasCompletedFeedback(data && data.length > 0)
            }
        } catch (error) {
            console.error("Error checking feedback:", error)
            setHasCompletedFeedback(false)
        } finally {
            setIsLoading(false)
        }
    }

    const copyLink = () => {
        navigator.clipboard.writeText(url)
        toast.success("Copied...")
    }

    const goToInterview = () => {
        router.push(`/interview/${interview?.interview_id}`)
    }

    const goToCompletedInterview = () => {
        if (hasCompletedFeedback) {
            router.push(`/interview/${interview?.interview_id}/completed`)
        } else {
            toast.error("No completed interviews available yet")
        }
    }

    const onSend = () => {
        if (showEmailInput && email) {
            window.location.href = `mailto:${email}?subject=AIRecruiter Link&body=Interview Link: ${url}`
            setShowEmailInput(false) // Close the input after sending
            toast.success(`Email sent to ${email}`)
        } else {
            setShowEmailInput(true)
        }
    }

    return (
        <div className='p-5 bg-gradient-to-bl from-indigo-500 via-purple-900 to-black rounded-lg border mt-4'>
            <div className='flex items-center justify-between'>
                <div className='h-10 w-10 bg-primary rounded-full'></div>
                <h2 className='text-sm text-white'>{moment(interview?.created_at).format('DD MMM yyy')}</h2>
            </div>
            <h2 className="mt-3 text-lg font-bold text-white">{interview?.jobPosition}</h2>
            <h2 className='mt-2 text-sm text-gray-500 flex justify-between'>{interview?.duration}
                {interview.candidateCount && (
                    <span className={`${hasCompletedFeedback ? 'text-teal-400' : 'text-yellow-400'}`}>
                        {interview.candidateCount} Candidates
                    </span>
                )}
            </h2>

            {!viewDetail ? <div className='flex flex-col gap-3 mt-3'>
                <Button onClick={copyLink} className="w-full" variant="outline">
                    <Copy className="mr-2" /> Copy Link
                </Button>
                <Button onClick={goToInterview} className="w-full">
                    <Send className="mr-2" /> Start Interview
                </Button>

                {isLoading ? (
                    <Button className="w-full" variant="ghost" disabled>
                        <span className="mr-2 h-4 w-4 animate-spin rounded-full border-b-2 border-white"></span>
                        Checking Interviews...
                    </Button>
                ) : hasCompletedFeedback ? (
                    <Button onClick={goToCompletedInterview} className="w-full" variant="sex2">
                        <CheckCircle className="mr-2" /> View Completed
                    </Button>
                ) : (
                    <Button className="w-full text-white" variant="ghost" disabled>
                        <AlertCircle className="mr-2 text-white" /> No Completed Interviews
                    </Button>
                )}

                {showEmailInput && (
                    <div className="flex items-center gap-2 mt-2">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter email address"
                            className="flex-1 p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary text-white"
                        />
                    </div>
                )}

                <Button onClick={onSend} className="w-full" variant="sex1">
                    <SendIcon className="mr-2" /> {showEmailInput ? "Send Email" : "Send"}
                </Button>
            </div> :
                <Link href={'/sheduled-interview/' + interview?.interview_id + "/details"}>
                    <Button className="mt-5 w-full">View Detail <ArrowRight /></Button>
                </Link>
            }
        </div>
    )
}

export default InterviewCard