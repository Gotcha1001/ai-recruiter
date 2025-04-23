"use client"
import { Button } from '@/components/ui/button'
import axios from 'axios'
import { Loader2Icon } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner'
import QuestionListContainer from './QuestionListContainer'
import { supabase } from '@/services/SupabaseClient'
import { useUser } from '@/app/provider'
import { v4 as uuidv4 } from 'uuid';

function QuestionList({ formData, onCreateLink }) {

    const [loading, setLoading] = useState(true)
    const [questionList, setQuestionList] = useState()
    const { user } = useUser()
    const [saveLoading, setSaveLoading] = useState(false)

    useEffect(() => {
        if (formData) {
            GenerateQuestionList()
        }
    }, [formData])

    const GenerateQuestionList = async () => {
        setLoading(true)
        try {
            const result = await axios.post('/api/ai-model', {
                ...formData

            })
            console.log("Sending form data:", formData);
            console.log("🤩😎🪷:", result.data.content)
            const Content = result.data.content
            const FINAL_CONTENT = Content.replace('```json', '').replace('```', '')

            setQuestionList(JSON.parse(FINAL_CONTENT))
            setLoading(false)
        } catch (error) {
            toast('Server Error, Try Again!')
            setLoading(false)
        }

    }


    const onFinish = async () => {
        setSaveLoading(true)
        const interview_id = uuidv4()
        const { data, error } = await supabase
            .from('Interviews')
            .insert([
                {
                    ...formData,
                    questionList: questionList,
                    userEmail: user?.email,
                    interview_id: interview_id



                },
            ])
            .select()

        // UPDATE USER CREDITS .......

        const userUpdate = await supabase
            .from('Users')
            .update({ credits: Number(user?.credits) - 1 })
            .eq('email', user?.email)
            .select()

        console.log("UPDATED CREDITS:", userUpdate)


        setSaveLoading(false)
        console.log("DATA INSERTED:", data)

        onCreateLink(
            interview_id
        )
    }

    return (
        <div>
            {loading && (
                <div className="p-5 bg-blue-50 rounded-xl border border-primary flex flex-col items-center gap-4">
                    <Loader2Icon className="animate-spin text-blue-600 w-6 h-6" />
                    <div className="text-center">
                        <h2 className="font-medium text-lg">Generating Interview Questions...</h2>
                        <p className="text-primary text-sm">
                            Our AI Is Crafting Personalized Questions Based On Your Choice
                        </p>
                    </div>
                </div>
            )}

            {!loading && questionList?.length > 0 && (
                <div>
                    <QuestionListContainer questionList={questionList} />
                </div>

            )}
            <div className='flex justify-end mt-10 mb-10' >
                <Button
                    disabled={saveLoading}
                    onClick={() => onFinish()}
                >
                    {saveLoading && <Loader2Icon className='animate-spin' />}
                    Create Interview Link & Finish</Button>
            </div>

        </div>
    )
}

export default QuestionList