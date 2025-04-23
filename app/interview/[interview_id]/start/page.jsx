// "use client"
// import { InterviewDataContext } from '@/app/context/InterviewDataContext'
// import { Button } from '@/components/ui/button'
// import { Mic, Phone, Timer } from 'lucide-react'
// import Image from 'next/image'
// import React, { useContext, useEffect, useState } from 'react'
// import Vapi from "@vapi-ai/web";
// import AlertConfirmation from './_components/AlertConfirmation'
// import { toast } from 'sonner'



// function StartInterview() {

//     const { interviewInfo, setInterviewInfo } = useContext(InterviewDataContext)
//     const vapi = new Vapi(process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY);
//     const [activeUser, setActiveUser] = useState(false)

//     useEffect(() => {
//         interviewInfo && startCall()
//     }, [interviewInfo])

//     const startCall = () => {
//         let questionList;
//         interviewInfo?.interviewData?.questionList.forEach((item, index) => (
//             questionList = item?.question + ',' + questionList
//         ));
//         const assistantOptions = {
//             name: "AI Recruiter",
//             firstMessage: "Hi " + interviewInfo?.userName + ", how are you? Ready for your interview on " + interviewInfo?.interviewData?.jobPosition,
//             transcriber: {
//                 provider: "deepgram",
//                 model: "nova-2",
//                 language: "en-US",
//             },
//             voice: {
//                 provider: "playht",
//                 voiceId: "jennifer",
//             },
//             model: {
//                 provider: "openai",
//                 model: "gpt-4",
//                 messages: [
//                     {
//                         role: "system",
//                         content: `
//                         You are an AI voice assistant conducting interviews.
//                         Your job is to ask candidates provided interview questions, asses their responses.
//                         Begin the conversation with a friendly introduction, setting a relaxed yet professional tone. Example:
//                         "Hey there! Welcome to your `+ interviewInfo?.interviewData?.jobPosition + ` interview. Let's get started with a few questions!"
//                         Ask one question at a time and wait for the candidate's response before proceeding. Keep the questions clear and concise. Below are the questions.
//                         Questions: `+ questionList + `
//                         If the candidate strugges, offer hints or rephrase the question without giving away the answer. Example:
//                         "Need a hint? Think about how React tracks component updates!"
//                         Provide brief, encouraging feedback after each answer. Example:
//                         "Nice! That's a solid answer."
//                         "Hmm, not quite! Want to try again?:"
//                         Keep the conversation natural and engaging-use casual phrases like "Alright, next up..." or "Let's tackle a tricky one!"
//                         After 5-7 questions, wrap up the interview smoothly by summarizing their performance. Example:
//                         "That was great! You handled some tough questions well. Keep sharpening your skills!"
//                         ENd on a positive note:
//                         "Thanks for chatting! Hope to see you crushing projects soon!"
//                         Key Guidelines:
//                         ✅ Be friendly, engaging, and witty  🎤
//                         ✅ Keep responses short and natural, like a real conversation
//                         ✅ Adapt based on the candidate's confidence level
//                         ✅ Ensure the interview remains focused on React
//                     `.trim(),
//                     },
//                 ],
//             },
//         };

//         vapi.start(assistantOptions)
//     }

//     const stopInterview = () => {
//         vapi.stop()
//     }

//     vapi.on("call-start", () => {
//         console.log("Call has started.");
//         toast('Call Connected...')
//     });


//     vapi.on("speech-start", () => {
//         console.log("Assistant speech has started.");
//         setActiveUser(false)
//     });

//     vapi.on("speech-end", () => {
//         console.log("Assistant speech has ended.");
//         setActiveUser(true)
//     });

//     vapi.on("call-end", () => {
//         console.log("Call has ended.");
//         toast('Interview Ended...')
//     });


//     vapi.on("message", (message) => {
//         console.log(message);
//     });





//     return (
//         <div className='p-20 lg:px-48 xl:px-56'>
//             <h2 className='font-bold text-xl flex justify-between'>AI Interview Session
//                 <span className='flex gap-2 items-center'>
//                     <Timer /> 00:00:00
//                 </span>

//             </h2>
//             <div className='grid grid-cols-1 md:grid-cols-2 gap-7 mt-5'>
//                 <div className='bg-primary h-[400px] rounded-lg border flex flex-col items-center justify-center'>
//                     <div className='relative'>
//                         {!activeUser && <span className='absolute inset-0 rounded-full bg-blue-500 opacity-75 animate-ping '></span>}
//                         <Image src={'/ai.jpg'} alt='Interviewer' height={200} width={200}
//                             className='h-[80px] w-[80px] rounded-full object-cover' />
//                     </div>
//                     <h2>AI Recruiter</h2>
//                 </div>
//                 <div>
//                     <div className='bg-primary h-[400px] rounded-lg border flex flex-col items-center justify-center'>
//                         <div className='relative'>
//                             {!activeUser && <span className='absolute inset-0 rounded-full bg-blue-500 opacity-75 animate-ping '></span>}
//                             <h2 className='text-2xl gradient-background2 text-white p-3 rounded-full px-4'>{interviewInfo?.userName[0]}</h2>
//                         </div>

//                         <h2>{interviewInfo?.userName}</h2>
//                     </div>
//                 </div>


//             </div>
//             <div className='flex items-center gap-5 justify-center mt-4 '>
//                 <Mic className='w-12 h-12 p-3 text-white bg-gray-500 rounded-full cursor-pointer hover:scale-110 transition-all' />
//                 <AlertConfirmation stopInterview={() => stopInterview()}>
//                     <Phone className='w-12 h-12 p-3 bg-red-500 rounded-full text-white cursor-pointer hover:scale-110 transition-all' />
//                 </AlertConfirmation>

//             </div>
//             <h2 className='text-sm text-gray-500 text-center mt-2'>Interview In Progress</h2>

//         </div>
//     )
// }

// export default StartInterview

















// "use client"
// import { InterviewDataContext } from '@/app/context/InterviewDataContext'
// import { Button } from '@/components/ui/button'
// import { EggFried, Mic, Phone, Timer } from 'lucide-react'
// import Image from 'next/image'
// import React, { useContext, useEffect, useState } from 'react'
// import Vapi from "@vapi-ai/web";
// import AlertConfirmation from './_components/AlertConfirmation'
// import { toast } from 'sonner'



// function StartInterview() {
//     const { interviewInfo, setInterviewInfo } = useContext(InterviewDataContext);
//     const [vapi] = useState(() => new Vapi(process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY));
//     const [activeUser, setActiveUser] = useState(false);
//     const [timer, setTimer] = useState(0);
//     const [timerInterval, setTimerInterval] = useState(null);
//     const [interviewConversation, setInterviewConversation] = useState(null);

//     useEffect(() => {
//         interviewInfo && startCall();
//     }, [interviewInfo]);

//     // Set up all event listeners in a single useEffect
//     useEffect(() => {
//         // Set up event listeners
//         const handleCallStart = () => {
//             console.log("Call has started.");
//             toast('Call Connected...');

//             // Start the timer
//             const interval = setInterval(() => {
//                 setTimer(prevTimer => prevTimer + 1);
//             }, 1000);
//             setTimerInterval(interval);
//         };

//         const handleSpeechStart = () => {
//             console.log("Assistant speech has started.");
//             setActiveUser(false);
//         };

//         const handleSpeechEnd = () => {
//             console.log("Assistant speech has ended.");
//             setActiveUser(true);
//         };

//         const handleCallEnd = () => {
//             console.log("Call has ended.");
//             toast('Interview Ended...');

//             // If we have a conversation, save it or process it
//             if (interviewConversation) {
//                 // Here you can:
//                 // 1. Save it to your database
//                 // 2. Process it for analysis
//                 // 3. Generate a summary or score

//                 console.log("Interview conversation:", interviewConversation);

//                 // Example: Save to context or send to API
//                 setInterviewInfo(prev => ({
//                     ...prev,
//                     conversationHistory: interviewConversation.conversation,
//                     messages: interviewConversation.messages
//                 }));

//                 // You could also send it to your API
//                 // saveInterviewResults(interviewConversation);
//             }

//             // Stop the timer
//             clearInterval(timerInterval);
//         };

//         const handleMessage = (message) => {
//             console.log(message);
//             // Store conversation update messages
//             if (message.type === 'conversation-update') {
//                 // We'll use this in handleCallEnd
//                 setInterviewConversation(message);
//             }
//         };

//         // Add all event listeners
//         vapi.on("call-start", handleCallStart);
//         vapi.on("speech-start", handleSpeechStart);
//         vapi.on("speech-end", handleSpeechEnd);
//         vapi.on("call-end", handleCallEnd);
//         vapi.on("message", handleMessage);

//         // Clean up function to remove all event listeners and clear interval
//         return () => {
//             vapi.off("call-start", handleCallStart);
//             vapi.off("speech-start", handleSpeechStart);
//             vapi.off("speech-end", handleSpeechEnd);
//             vapi.off("call-end", handleCallEnd);
//             vapi.off("message", handleMessage);

//             clearInterval(timerInterval);
//         };
//     }, []);

//     // Format the timer value (seconds) to HH:MM:SS
//     const formatTime = (timeInSeconds) => {
//         const hours = Math.floor(timeInSeconds / 3600);
//         const minutes = Math.floor((timeInSeconds % 3600) / 60);
//         const seconds = timeInSeconds % 60;

//         return [
//             hours.toString().padStart(2, '0'),
//             minutes.toString().padStart(2, '0'),
//             seconds.toString().padStart(2, '0')
//         ].join(':');
//     };

//     const startCall = () => {
//         let questionList;
//         interviewInfo?.interviewData?.questionList.forEach((item, index) => (
//             questionList = item?.question + ',' + questionList
//         ));
//         const assistantOptions = {
//             name: "AI Recruiter",
//             firstMessage: "Hi " + interviewInfo?.userName + ", how are you? Ready for your interview on " + interviewInfo?.interviewData?.jobPosition,
//             transcriber: {
//                 provider: "deepgram",
//                 model: "nova-2",
//                 language: "en-US",
//             },
//             voice: {
//                 provider: "playht",
//                 voiceId: "jennifer",
//             },
//             model: {
//                 provider: "openai",
//                 model: "gpt-4",
//                 messages: [
//                     {
//                         role: "system",
//                         content: `
//                         You are an AI voice assistant conducting interviews.
//                         Your job is to ask candidates provided interview questions, asses their responses.
//                         Begin the conversation with a friendly introduction, setting a relaxed yet professional tone. Example:
//                         "Hey there! Welcome to your `+ interviewInfo?.interviewData?.jobPosition + ` interview. Let's get started with a few questions!"
//                         Ask one question at a time and wait for the candidate's response before proceeding. Keep the questions clear and concise. Below are the questions.
//                         Questions: `+ questionList + `
//                         If the candidate strugges, offer hints or rephrase the question without giving away the answer. Example:
//                         "Need a hint? Think about how React tracks component updates!"
//                         Provide brief, encouraging feedback after each answer. Example:
//                         "Nice! That's a solid answer."
//                         "Hmm, not quite! Want to try again?:"
//                         Keep the conversation natural and engaging-use casual phrases like "Alright, next up..." or "Let's tackle a tricky one!"
//                         After 5-7 questions, wrap up the interview smoothly by summarizing their performance. Example:
//                         "That was great! You handled some tough questions well. Keep sharpening your skills!"
//                         ENd on a positive note:
//                         "Thanks for chatting! Hope to see you crushing projects soon!"
//                         Key Guidelines:
//                         ✅ Be friendly, engaging, and witty  🎤
//                         ✅ Keep responses short and natural, like a real conversation
//                         ✅ Adapt based on the candidate's confidence level
//                         ✅ Ensure the interview remains focused on React
//                     `.trim(),
//                     },
//                 ],
//             },
//         };

//         vapi.start(assistantOptions)
//     }

//     const stopInterview = () => {
//         vapi.stop()
//     }


//     return (
//         <div className='p-20 lg:px-48 xl:px-56'>
//             <h2 className='font-bold text-xl flex justify-between'>AI Interview Session
//                 <span className='flex gap-2 items-center'>
//                     <Timer /> {formatTime(timer)}
//                 </span>

//             </h2>
//             <div className='grid grid-cols-1 md:grid-cols-2 gap-7 mt-5'>
//                 <div className='bg-primary h-[400px] rounded-lg border flex flex-col items-center justify-center'>
//                     <div className='relative'>
//                         {!activeUser && <span className='absolute inset-0 rounded-full bg-blue-500 opacity-75 animate-ping '></span>}
//                         <Image src={'/ai.jpg'} alt='Interviewer' height={200} width={200}
//                             className='h-[80px] w-[80px] rounded-full object-cover' />
//                     </div>
//                     <h2>AI Recruiter</h2>
//                 </div>
//                 <div>
//                     <div className='bg-primary h-[400px] rounded-lg border flex flex-col items-center justify-center'>
//                         <div className='relative'>
//                             {!activeUser && <span className='absolute inset-0 rounded-full bg-blue-500 opacity-75 animate-ping '></span>}
//                             <h2 className='text-2xl gradient-background2 text-white p-3 rounded-full px-4'>{interviewInfo?.userName[0]}</h2>
//                         </div>

//                         <h2>{interviewInfo?.userName}</h2>
//                     </div>
//                 </div>


//             </div>
//             <div className='flex items-center gap-5 justify-center mt-4 '>
//                 <Mic className='w-12 h-12 p-3 text-white bg-gray-500 rounded-full cursor-pointer hover:scale-110 transition-all' />
//                 <AlertConfirmation stopInterview={() => stopInterview()}>
//                     <Phone className='w-12 h-12 p-3 bg-red-500 rounded-full text-white cursor-pointer hover:scale-110 transition-all' />
//                 </AlertConfirmation>

//             </div>
//             <h2 className='text-sm text-gray-500 text-center mt-2'>Interview In Progress</h2>

//         </div>
//     )
// }

// export default StartInterview



// "use client"
// import { InterviewDataContext } from '@/app/context/InterviewDataContext'
// import { Button } from '@/components/ui/button'
// import { Mic, Phone, Timer } from 'lucide-react'
// import Image from 'next/image'
// import React, { useContext, useEffect, useState, useRef } from 'react'
// import Vapi from "@vapi-ai/web";
// import AlertConfirmation from './_components/AlertConfirmation'
// import { toast } from 'sonner'

// function StartInterview() {
//     const { interviewInfo, setInterviewInfo } = useContext(InterviewDataContext)
//     const vapi = new Vapi(process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY);
//     const [activeUser, setActiveUser] = useState(false)
//     const [timer, setTimer] = useState(0)
//     const timerRef = useRef(null)
//     const [conversation, setConversation] = useState(null)

//     useEffect(() => {
//         interviewInfo && startCall()

//         // Make sure to clear the timer when component unmounts
//         return () => {
//             if (timerRef.current) {
//                 clearInterval(timerRef.current)
//             }
//         }
//     }, [interviewInfo])

//     // Format the timer value (seconds) to HH:MM:SS
//     const formatTime = (timeInSeconds) => {
//         const hours = Math.floor(timeInSeconds / 3600);
//         const minutes = Math.floor((timeInSeconds % 3600) / 60);
//         const seconds = timeInSeconds % 60;

//         return [
//             hours.toString().padStart(2, '0'),
//             minutes.toString().padStart(2, '0'),
//             seconds.toString().padStart(2, '0')
//         ].join(':');
//     };

//     const startCall = () => {
//         let questionList;
//         interviewInfo?.interviewData?.questionList.forEach((item, index) => (
//             questionList = item?.question + ',' + questionList
//         ));
//         const assistantOptions = {
//             name: "AI Recruiter",
//             firstMessage: "Hi " + interviewInfo?.userName + ", how are you? Ready for your interview on " + interviewInfo?.interviewData?.jobPosition,
//             transcriber: {
//                 provider: "deepgram",
//                 model: "nova-2",
//                 language: "en-US",
//             },
//             voice: {
//                 provider: "playht",
//                 voiceId: "jennifer",
//             },
//             model: {
//                 provider: "openai",
//                 model: "gpt-4",
//                 messages: [
//                     {
//                         role: "system",
//                         content: `
//                         You are an AI voice assistant conducting interviews.
//                         Your job is to ask candidates provided interview questions, asses their responses.
//                         Begin the conversation with a friendly introduction, setting a relaxed yet professional tone. Example:
//                         "Hey there! Welcome to your `+ interviewInfo?.interviewData?.jobPosition + ` interview. Let's get started with a few questions!"
//                         Ask one question at a time and wait for the candidate's response before proceeding. Keep the questions clear and concise. Below are the questions.
//                         Questions: `+ questionList + `
//                         If the candidate strugges, offer hints or rephrase the question without giving away the answer. Example:
//                         "Need a hint? Think about how React tracks component updates!"
//                         Provide brief, encouraging feedback after each answer. Example:
//                         "Nice! That's a solid answer."
//                         "Hmm, not quite! Want to try again?:"
//                         Keep the conversation natural and engaging-use casual phrases like "Alright, next up..." or "Let's tackle a tricky one!"
//                         After 5-7 questions, wrap up the interview smoothly by summarizing their performance. Example:
//                         "That was great! You handled some tough questions well. Keep sharpening your skills!"
//                         ENd on a positive note:
//                         "Thanks for chatting! Hope to see you crushing projects soon!"
//                         Key Guidelines:
//                         ✅ Be friendly, engaging, and witty  🎤
//                         ✅ Keep responses short and natural, like a real conversation
//                         ✅ Adapt based on the candidate's confidence level
//                         ✅ Ensure the interview remains focused on React
//                     `.trim(),
//                     },
//                 ],
//             },
//         };

//         vapi.start(assistantOptions)
//     }

//     const stopInterview = () => {
//         vapi.stop()
//     }

//     vapi.on("call-start", () => {
//         console.log("Call has started.");
//         toast('Call Connected...')

//         // Start the timer when call starts
//         timerRef.current = setInterval(() => {
//             setTimer(prevTimer => prevTimer + 1);
//         }, 1000);
//     });

//     vapi.on("speech-start", () => {
//         console.log("Assistant speech has started.");
//         setActiveUser(false)
//     });

//     vapi.on("speech-end", () => {
//         console.log("Assistant speech has ended.");
//         setActiveUser(true)
//     });

//     vapi.on("call-end", () => {
//         console.log("Call has ended.");
//         toast('Interview Ended...')

//         // Stop the timer when call ends
//         clearInterval(timerRef.current);

//         // Save conversation data if it exists
//         if (interviewConversation) {
//             console.log("Interview conversation:", interviewConversation);
//             setInterviewInfo(prev => ({
//                 ...prev,
//                 conversationHistory: interviewConversation.conversation,
//                 messages: interviewConversation.messages
//             }));
//         }
//     });

//     vapi.on("message", (message) => {
//         console.log(message?.conversation);
//         setConversation(message?.conversation)

//     });

//     return (
//         <div className='p-20 lg:px-48 xl:px-56'>
//             <h2 className='font-bold text-xl flex justify-between'>AI Interview Session
//                 <span className='flex gap-2 items-center'>
//                     <Timer /> {formatTime(timer)}
//                 </span>
//             </h2>
//             <div className='grid grid-cols-1 md:grid-cols-2 gap-7 mt-5'>
//                 <div className='bg-primary h-[400px] rounded-lg border flex flex-col items-center justify-center'>
//                     <div className='relative'>
//                         {!activeUser && <span className='absolute inset-0 rounded-full bg-blue-500 opacity-75 animate-ping '></span>}
//                         <Image src={'/ai.jpg'} alt='Interviewer' height={200} width={200}
//                             className='h-[80px] w-[80px] rounded-full object-cover' />
//                     </div>
//                     <h2>AI Recruiter</h2>
//                 </div>
//                 <div>
//                     <div className='bg-primary h-[400px] rounded-lg border flex flex-col items-center justify-center'>
//                         <div className='relative'>
//                             {!activeUser && <span className='absolute inset-0 rounded-full bg-blue-500 opacity-75 animate-ping '></span>}
//                             <h2 className='text-2xl gradient-background2 text-white p-3 rounded-full px-4'>{interviewInfo?.userName[0]}</h2>
//                         </div>
//                         <h2>{interviewInfo?.userName}</h2>
//                     </div>
//                 </div>
//             </div>
//             <div className='flex items-center gap-5 justify-center mt-4 '>
//                 <Mic className='w-12 h-12 p-3 text-white bg-gray-500 rounded-full cursor-pointer hover:scale-110 transition-all' />
//                 <AlertConfirmation stopInterview={() => stopInterview()}>
//                     <Phone className='w-12 h-12 p-3 bg-red-500 rounded-full text-white cursor-pointer hover:scale-110 transition-all' />
//                 </AlertConfirmation>
//             </div>
//             <h2 className='text-sm text-gray-500 text-center mt-2'>Interview In Progress</h2>
//         </div>
//     )
// }

// export default StartInterview





// "use client"
// import { InterviewDataContext } from '@/app/context/InterviewDataContext'
// import { Button } from '@/components/ui/button'
// import { Mic, Phone } from 'lucide-react'
// import Image from 'next/image'
// import React, { useContext, useEffect, useState } from 'react'
// import Vapi from "@vapi-ai/web"
// import AlertConfirmation from './_components/AlertConfirmation'
// import { toast } from 'sonner'
// import Timer from './_components/Timer'
// import axios from 'axios'
// import { useRef } from 'react';
// import { supabase } from '@/services/SupabaseClient'
// import { useParams, useRouter } from 'next/navigation'


// function StartInterview() {
//     const { interviewInfo, setInterviewInfo } = useContext(InterviewDataContext)
//     const vapi = new Vapi(process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY)
//     const [activeUser, setActiveUser] = useState(false)
//     const [isCallActive, setIsCallActive] = useState(false)
//     const [timer, setTimer] = useState(0)
//     const [conversation, setConversation] = useState()

//     const { interview_id } = useParams()

//     const conversationRef = useRef();
//     const router = useRouter()


//     useEffect(() => {
//         // Create a handler for unhandled errors from Daily.co
//         const handleDailyError = (event) => {
//             // Check if it's the specific "Meeting has ended" error
//             if (event.error?.toString().includes("Meeting has ended")) {
//                 // This is an expected error, no need to show it to the user
//                 event.preventDefault();
//                 console.log("Meeting ended normally");
//             }
//         };

//         // Add the event listener
//         window.addEventListener('error', handleDailyError);

//         // Clean up
//         return () => {
//             window.removeEventListener('error', handleDailyError);
//         };
//     }, []);


//     useEffect(() => {
//         console.log("Current conversation state:", conversation)
//     }, [conversation])

//     useEffect(() => {
//         interviewInfo && startCall()
//     }, [interviewInfo])

//     const startCall = () => {
//         let questionList
//         interviewInfo?.interviewData?.questionList.forEach((item, index) => (
//             questionList = item?.question + ',' + questionList
//         ))
//         const assistantOptions = {
//             name: "AI Recruiter",
//             firstMessage: "Hi " + interviewInfo?.userName + ", how are you? Ready for your interview on " + interviewInfo?.interviewData?.jobPosition,
//             transcriber: {
//                 provider: "deepgram",
//                 model: "nova-2",
//                 language: "en-US",
//             },
//             voice: {
//                 provider: "playht",
//                 voiceId: "jennifer",
//             },
//             model: {
//                 provider: "openai",
//                 model: "gpt-4",
//                 messages: [
//                     {
//                         role: "system",
//                         content: `
//                         You are an AI voice assistant conducting interviews.
//                         Your job is to ask candidates provided interview questions, asses their responses.
//                         Begin the conversation with a friendly introduction, setting a relaxed yet professional tone. Example:
//                         "Hey there! Welcome to your `+ interviewInfo?.interviewData?.jobPosition + ` interview. Let's get started with a few questions!"
//                         Ask one question at a time and wait for the candidate's response before proceeding. Keep the questions clear and concise. Below are the questions.
//                         Questions: `+ questionList + `
//                         If the candidate strugges, offer hints or rephrase the question without giving away the answer. Example:
//                         "Need a hint? Think about how React tracks component updates!"
//                         Provide brief, encouraging feedback after each answer. Example:
//                         "Nice! That's a solid answer."
//                         "Hmm, not quite! Want to try again?:"
//                         Keep the conversation natural and engaging-use casual phrases like "Alright, next up..." or "Let's tackle a tricky one!"
//                         After 5-7 questions, wrap up the interview smoothly by summarizing their performance. Example:
//                         "That was great! You handled some tough questions well. Keep sharpening your skills!"
//                         ENd on a positive note:
//                         "Thanks for chatting! Hope to see you crushing projects soon!"
//                         Key Guidelines:
//                         ✅ Be friendly, engaging, and witty  🎤
//                         ✅ Keep responses short and natural, like a real conversation
//                         ✅ Adapt based on the candidate's confidence level
//                         ✅ Ensure the interview remains focused on React
//                     `.trim(),
//                     },
//                 ],
//             },
//         }

//         vapi.start(assistantOptions)
//     }

//     const stopInterview = () => {
//         vapi.stop()
//         setIsCallActive(false) // Add this line to stop the timer
//     }

//     // Handle timer updates
//     const handleTimeUpdate = (newTime) => {
//         setTimer(newTime)
//     }

//     vapi.on("call-start", () => {
//         console.log("Call has started.")
//         toast('Call Connected...')
//         setIsCallActive(true)
//     })

//     vapi.on("speech-start", () => {
//         console.log("Assistant speech has started.")
//         setActiveUser(false)
//     })

//     vapi.on("speech-end", () => {
//         console.log("Assistant speech has ended.")
//         setActiveUser(true)
//     })

//     vapi.on("call-end", () => {
//         console.log("Call has ended.")
//         toast('Interview Ended...')
//         setIsCallActive(false) // Make sure to set this to false
//         GenerateFeedback()

//     })

//     vapi.on("message", (message) => {
//         console.log("CONVERSATION🚀🚀🚀:", message?.conversation)
//         // Only update if the conversation exists
//         if (message?.conversation) {
//             setConversation(message.conversation);
//             // Also store in ref for reliable access
//             conversationRef.current = message.conversation;
//         }
//     })

//     vapi.on("error", (error) => {
//         console.log("Vapi error:", error);

//         // If this is just the meeting ending, don't show an error to the user
//         if (error?.message?.includes("Meeting has ended")) {
//             console.log("Call ended normally");
//             return;
//         }

//         // Otherwise show an error
//         toast.error("Call error: " + (error?.message || "Unknown error"));
//     });

//     const GenerateFeedback = async () => {
//         const currentConversation = conversationRef.current || conversation;

//         if (!currentConversation) {
//             console.error("No conversation data available for feedback generation");
//             toast.error("Could not generate feedback - no interview data");
//             return;
//         }

//         const result = await axios.post('/api/ai-feedback', {
//             conversation: currentConversation
//         });

//         console.log(result?.data);
//         const Content = result.data.content;
//         const FINAL_CONTENT = Content
//             .replace('```json', '')
//             .replace('```', '')
//             .replace('/*', '')  // Add this line to remove the /* at the beginning
//             .trim();  // Also good to trim any whitespace
//         console.log("FINAL CONTENT🚀:", FINAL_CONTENT);

//         // Save to the data base
//         const { data, error } = await supabase
//             .from('interview-feedback')
//             .insert([
//                 {
//                     userName: interviewInfo?.userName,
//                     userEmail: interviewInfo?.userEmail,
//                     interview_id: interview_id,
//                     feedback: JSON.parse(FINAL_CONTENT),
//                     recommendation: false
//                 },
//             ])
//             .select()
//         console.log(data)
//         router.replace('/interview/completed')

//     }

//     return (
//         <div className='p-20 lg:px-48 xl:px-56'>
//             <h2 className='font-bold text-xl flex justify-between'>
//                 AI Interview Session
//                 <Timer isRunning={isCallActive} initialTime={0} onTimeUpdate={handleTimeUpdate} />
//             </h2>
//             <div className='grid grid-cols-1 md:grid-cols-2 gap-7 mt-5'>
//                 <div className='bg-primary h-[400px] rounded-lg border flex flex-col items-center justify-center'>
//                     <div className='relative'>
//                         {!activeUser && <span className='absolute inset-0 rounded-full bg-blue-500 opacity-75 animate-ping '></span>}
//                         <Image src={'/ai.jpg'} alt='Interviewer' height={200} width={200}
//                             className='h-[80px] w-[80px] rounded-full object-cover' />
//                     </div>
//                     <h2>AI Recruiter</h2>
//                 </div>
//                 <div>
//                     <div className='bg-primary h-[400px] rounded-lg border flex flex-col items-center justify-center'>
//                         <div className='relative'>
//                             {activeUser && <span className='absolute inset-0 rounded-full bg-blue-500 opacity-75 animate-ping '></span>}
//                             <h2 className='text-2xl gradient-background2 text-white p-3 rounded-full px-4'>{interviewInfo?.userName[0]}</h2>
//                         </div>
//                         <h2>{interviewInfo?.userName}</h2>
//                     </div>
//                 </div>
//             </div>
//             <div className='flex items-center gap-5 justify-center mt-4 '>
//                 <Mic className='w-12 h-12 p-3 text-white bg-gray-500 rounded-full cursor-pointer hover:scale-110 transition-all' />
//                 <AlertConfirmation stopInterview={() => stopInterview()}>
//                     <Phone className='w-12 h-12 p-3 bg-red-500 rounded-full text-white cursor-pointer hover:scale-110 transition-all' />
//                 </AlertConfirmation>
//             </div>
//             <h2 className='text-sm text-gray-500 text-center mt-2'>Interview In Progress</h2>
//         </div>
//     )
// }

// export default StartInterview




















// "use client"
// import { InterviewDataContext } from '@/app/context/InterviewDataContext'
// import { Button } from '@/components/ui/button'
// import { Loader2Icon, Mic, Phone } from 'lucide-react'
// import Image from 'next/image'
// import React, { useContext, useEffect, useState } from 'react'
// import Vapi from "@vapi-ai/web"
// import AlertConfirmation from './_components/AlertConfirmation'
// import { toast } from 'sonner'
// import Timer from './_components/Timer'
// import axios from 'axios'
// import { useRef } from 'react';
// import { supabase } from '@/services/SupabaseClient'
// import { useParams, useRouter } from 'next/navigation'


// function StartInterview() {
//     const { interviewInfo, setInterviewInfo } = useContext(InterviewDataContext)
//     const vapi = new Vapi(process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY)
//     const [activeUser, setActiveUser] = useState(false)
//     const [isCallActive, setIsCallActive] = useState(false)
//     const [timer, setTimer] = useState(0)
//     const [conversation, setConversation] = useState()
//     const [loading, setLoading] = useState(false)

//     const { interview_id } = useParams()

//     const conversationRef = useRef();
//     const router = useRouter()


//     useEffect(() => {
//         // Create a handler for unhandled errors from Daily.co
//         const handleDailyError = (event) => {
//             // Check if it's the specific "Meeting has ended" error
//             if (event.error?.toString().includes("Meeting has ended")) {
//                 // This is an expected error, no need to show it to the user
//                 event.preventDefault();
//                 console.log("Meeting ended normally");
//             }
//         };

//         // Add the event listener
//         window.addEventListener('error', handleDailyError);

//         // Clean up
//         return () => {
//             window.removeEventListener('error', handleDailyError);
//         };
//     }, []);


//     useEffect(() => {
//         console.log("Current conversation state:", conversation)
//     }, [conversation])

//     useEffect(() => {
//         const handleCallStart = () => {
//             console.log("Call has started.")
//             toast('Call Connected...')
//             setIsCallActive(true)
//         };

//         const handleSpeechStart = () => {
//             console.log("Assistant speech has started.")
//             setActiveUser(false)
//         };

//         const handleSpeechEnd = () => {
//             console.log("Assistant speech has ended.")
//             setActiveUser(true)
//         };

//         const handleCallEnd = () => {
//             console.log("Call has ended.");
//             toast('Interview Ended...');
//             setIsCallActive(false);
//             GenerateFeedback().finally(() => {
//                 setLoading(false);
//             });
//         };

//         const handleMessage = (message) => {
//             console.log("CONVERSATION🚀🚀🚀:", message?.conversation)
//             if (message?.conversation) {
//                 // Store as object, not string
//                 setConversation(message.conversation);
//                 conversationRef.current = message.conversation;
//             }
//         };

//         const handleError = (error) => {
//             console.log("Vapi error:", error);
//             if (error?.message?.includes("Meeting has ended")) {
//                 console.log("Call ended normally");
//                 return;
//             }
//             toast.error("Call error: " + (error?.message || "Unknown error"));
//         };

//         // Add all event listeners
//         vapi.on("call-start", handleCallStart);
//         vapi.on("speech-start", handleSpeechStart);
//         vapi.on("speech-end", handleSpeechEnd);
//         vapi.on("call-end", handleCallEnd);
//         vapi.on("message", handleMessage);
//         vapi.on("error", handleError);

//         // Clean up all listeners
//         return () => {
//             vapi.off("call-start", handleCallStart);
//             vapi.off("speech-start", handleSpeechStart);
//             vapi.off("speech-end", handleSpeechEnd);
//             vapi.off("call-end", handleCallEnd);
//             vapi.off("message", handleMessage);
//             vapi.off("error", handleError);
//         };
//     }, []);

//     useEffect(() => {
//         interviewInfo && startCall()
//     }, [interviewInfo])

//     const startCall = () => {
//         let questionList
//         interviewInfo?.interviewData?.questionList.forEach((item, index) => (
//             questionList = item?.question + ',' + questionList
//         ))
//         const assistantOptions = {
//             name: "AI Recruiter",
//             firstMessage: "Hi " + interviewInfo?.userName + ", how are you? Ready for your interview on " + interviewInfo?.interviewData?.jobPosition,
//             transcriber: {
//                 provider: "deepgram",
//                 model: "nova-2",
//                 language: "en-US",
//             },
//             voice: {
//                 provider: "playht",
//                 voiceId: "jennifer",
//             },
//             model: {
//                 provider: "openai",
//                 model: "gpt-4",
//                 messages: [
//                     {
//                         role: "system",
//                         content: `
//                         You are an AI voice assistant conducting interviews.
//                         Your job is to ask candidates provided interview questions, asses their responses.
//                         Begin the conversation with a friendly introduction, setting a relaxed yet professional tone. Example:
//                         "Hey there! Welcome to your `+ interviewInfo?.interviewData?.jobPosition + ` interview. Let's get started with a few questions!"
//                         Ask one question at a time and wait for the candidate's response before proceeding. Keep the questions clear and concise. Below are the questions.
//                         Questions: `+ questionList + `
//                         If the candidate strugges, offer hints or rephrase the question without giving away the answer. Example:
//                         "Need a hint? Think about how React tracks component updates!"
//                         Provide brief, encouraging feedback after each answer. Example:
//                         "Nice! That's a solid answer."
//                         "Hmm, not quite! Want to try again?:"
//                         Keep the conversation natural and engaging-use casual phrases like "Alright, next up..." or "Let's tackle a tricky one!"
//                         After 5-7 questions, wrap up the interview smoothly by summarizing their performance. Example:
//                         "That was great! You handled some tough questions well. Keep sharpening your skills!"
//                         ENd on a positive note:
//                         "Thanks for chatting! Hope to see you crushing projects soon!"
//                         Key Guidelines:
//                         ✅ Be friendly, engaging, and witty  🎤
//                         ✅ Keep responses short and natural, like a real conversation
//                         ✅ Adapt based on the candidate's confidence level
//                         ✅ Ensure the interview remains focused on React
//                     `.trim(),
//                     },
//                 ],
//             },
//         }

//         vapi.start(assistantOptions)
//     }

//     const stopInterview = () => {
//         setLoading(true); // Set loading to true when stopping
//         vapi.stop();
//         setIsCallActive(false);
//     }

//     // Handle timer updates
//     const handleTimeUpdate = (newTime) => {
//         setTimer(newTime)
//     }

//     vapi.on("call-start", () => {
//         console.log("Call has started.")
//         toast('Call Connected...')
//         setIsCallActive(true)
//     })

//     vapi.on("speech-start", () => {
//         console.log("Assistant speech has started.")
//         setActiveUser(false)
//     })

//     vapi.on("speech-end", () => {
//         console.log("Assistant speech has ended.")
//         setActiveUser(true)
//     })

//     vapi.on("call-end", () => {
//         console.log("Call has ended.");
//         toast('Interview Ended...');
//         setIsCallActive(false);
//         GenerateFeedback().finally(() => {
//             setLoading(false); // Reset loading state when everything is complete
//         });
//     });

//     vapi.on("message", (message) => {
//         console.log("CONVERSATION🚀🚀🚀:", message?.conversation)
//         // Only update if the conversation exists
//         if (message?.conversation) {
//             setConversation(message.conversation);
//             // Also store in ref for reliable access
//             conversationRef.current = message.conversation;
//         }
//     })

//     vapi.on("error", (error) => {
//         console.log("Vapi error:", error);

//         // If this is just the meeting ending, don't show an error to the user
//         if (error?.message?.includes("Meeting has ended")) {
//             console.log("Call ended normally");
//             return;
//         }

//         // Otherwise show an error
//         toast.error("Call error: " + (error?.message || "Unknown error"));
//     });

//     // const GenerateFeedback = async () => {
//     //     const currentConversation = conversationRef.current || conversation;

//     //     if (!currentConversation) {
//     //         console.error("No conversation data available for feedback generation");
//     //         toast.error("Could not generate feedback - no interview data");
//     //         return;
//     //     }

//     //     const result = await axios.post('/api/ai-feedback', {
//     //         conversation: currentConversation
//     //     });

//     //     console.log(result?.data);
//     //     const Content = result.data.content;
//     //     const FINAL_CONTENT = Content
//     //         .replace('```json', '')
//     //         .replace('```', '')
//     //         .replace('/*', '')  // Add this line to remove the /* at the beginning
//     //         .trim();  // Also good to trim any whitespace
//     //     console.log("FINAL CONTENT🚀:", FINAL_CONTENT);

//     //     // Save to the data base
//     //     const { data, error } = await supabase
//     //         .from('interview-feedback')
//     //         .insert([
//     //             {
//     //                 userName: interviewInfo?.userName,
//     //                 userEmail: interviewInfo?.userEmail,
//     //                 interview_id: interview_id,
//     //                 feedback: JSON.parse(FINAL_CONTENT),
//     //                 recommendation: false
//     //             },
//     //         ])
//     //         .select()
//     //     console.log(data)
//     //     router.replace('/interview/completed')

//     // }


//     const GenerateFeedback = async () => {
//         try {
//             const currentConversation = conversationRef.current || conversation;

//             if (!currentConversation) {
//                 console.error("No conversation data available for feedback generation");
//                 toast.error("Could not generate feedback - no interview data");
//                 return;
//             }

//             const result = await axios.post('/api/ai-feedback', {
//                 conversation: currentConversation
//             });

//             console.log(result?.data);
//             const Content = result.data.content;

//             // Extract just the JSON part using regex
//             const jsonRegex = /{[\s\S]*}/;
//             const jsonMatch = Content.match(jsonRegex);

//             if (!jsonMatch) {
//                 console.error("Could not find valid JSON in response");
//                 toast.error("Error processing feedback data");
//                 return;
//             }

//             const FINAL_CONTENT = jsonMatch[0];
//             console.log("FINAL CONTENT🚀:", FINAL_CONTENT);

//             try {
//                 // Parse the extracted JSON
//                 const parsedJson = JSON.parse(FINAL_CONTENT);

//                 // Save to the database
//                 const { data, error } = await supabase
//                     .from('interview-feedback')
//                     .insert([
//                         {
//                             userName: interviewInfo?.userName,
//                             userEmail: interviewInfo?.userEmail,
//                             interview_id: interview_id,
//                             feedback: parsedJson,
//                             recommendation: false
//                         },
//                     ])
//                     .select();

//                 console.log(data);
//                 router.replace('/interview/' + interview_id + "/completed");
//             } catch (parseError) {
//                 console.error("JSON parse error:", parseError);
//                 toast.error("Could not process feedback data");
//             }
//         } catch (error) {
//             console.error("Error generating feedback:", error);
//             toast.error("Failed to generate feedback");
//         }
//     };


//     return (
//         <div className='p-20 lg:px-48 xl:px-56'>
//             <h2 className='font-bold text-xl flex justify-between'>
//                 AI Interview Session
//                 <Timer isRunning={isCallActive} initialTime={0} onTimeUpdate={handleTimeUpdate} />
//             </h2>
//             <div className='grid grid-cols-1 md:grid-cols-2 gap-7 mt-5'>
//                 <div className='bg-primary h-[400px] rounded-lg border flex flex-col items-center justify-center'>
//                     <div className='relative'>
//                         {!activeUser && <span className='absolute inset-0 rounded-full bg-blue-500 opacity-75 animate-ping '></span>}
//                         <Image src={'/ai.jpg'} alt='Interviewer' height={200} width={200}
//                             className='h-[80px] w-[80px] rounded-full object-cover' />
//                     </div>
//                     <h2>AI Recruiter</h2>
//                 </div>
//                 <div>
//                     <div className='bg-primary h-[400px] rounded-lg border flex flex-col items-center justify-center'>
//                         <div className='relative'>
//                             {activeUser && <span className='absolute inset-0 rounded-full bg-blue-500 opacity-75 animate-ping '></span>}
//                             <h2 className='text-2xl gradient-background2 text-white p-3 rounded-full px-4'>{interviewInfo?.userName[0]}</h2>
//                         </div>
//                         <h2>{interviewInfo?.userName}</h2>
//                     </div>
//                 </div>
//             </div>
//             <div className='flex items-center gap-5 justify-center mt-4 '>
//                 <Mic className='w-12 h-12 p-3 text-white bg-gray-500 rounded-full cursor-pointer hover:scale-110 transition-all' />
//                 <AlertConfirmation stopInterview={() => stopInterview()}>
//                     {!loading ? <Phone className='w-12 h-12 p-3 bg-red-500 rounded-full text-white cursor-pointer hover:scale-110 transition-all' onClick={() => stopInterview()} />
//                         : <Loader2Icon className='animate-spin' />}
//                 </AlertConfirmation>
//             </div>
//             <h2 className='text-sm text-gray-500 text-center mt-2'>Interview In Progress</h2>
//         </div>
//     )
// }

// export default StartInterview



// "use client"
// import { InterviewDataContext } from '@/app/context/InterviewDataContext'
// import { Button } from '@/components/ui/button'
// import { Loader2Icon, Mic, Phone } from 'lucide-react'
// import Image from 'next/image'
// import React, { useContext, useEffect, useState } from 'react'
// import Vapi from "@vapi-ai/web"
// import AlertConfirmation from './_components/AlertConfirmation'
// import { toast } from 'sonner'
// import Timer from './_components/Timer'
// import axios from 'axios'
// import { useRef } from 'react';
// import { supabase } from '@/services/SupabaseClient'
// import { useParams, useRouter } from 'next/navigation'


// function StartInterview() {
//     const { interviewInfo, setInterviewInfo } = useContext(InterviewDataContext)
//     const vapi = new Vapi(process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY)
//     const [activeUser, setActiveUser] = useState(false)
//     const [isCallActive, setIsCallActive] = useState(false)
//     const [timer, setTimer] = useState(0)
//     const [conversation, setConversation] = useState()
//     const [loading, setLoading] = useState(false)

//     const { interview_id } = useParams()

//     const conversationRef = useRef();
//     const router = useRouter()

//     useEffect(() => {
//         // Create a handler for unhandled errors from Daily.co
//         const handleDailyError = (event) => {
//             // Check if it's the specific "Meeting has ended" error
//             if (event.error?.toString().includes("Meeting has ended")) {
//                 // This is an expected error, no need to show it to the user
//                 event.preventDefault();
//                 console.log("Meeting ended normally");
//             }
//         };

//         // Add the event listener
//         window.addEventListener('error', handleDailyError);

//         // Clean up
//         return () => {
//             window.removeEventListener('error', handleDailyError);
//         };
//     }, []);

//     useEffect(() => {
//         console.log("Current conversation state:", conversation)
//     }, [conversation])

//     useEffect(() => {
//         const handleCallStart = () => {
//             console.log("Call has started.")
//             toast('Call Connected...')
//             setIsCallActive(true)
//         };

//         const handleSpeechStart = () => {
//             console.log("Assistant speech has started.")
//             setActiveUser(false)
//         };

//         const handleSpeechEnd = () => {
//             console.log("Assistant speech has ended.")
//             setActiveUser(true)
//         };

//         const handleCallEnd = () => {
//             console.log("Call has ended.");
//             toast('Interview Ended...');
//             setIsCallActive(false);
//             GenerateFeedback().finally(() => {
//                 setLoading(false);
//             });
//         };

//         const handleMessage = (message) => {
//             console.log("CONVERSATION🚀🚀🚀:", message?.conversation)
//             if (message?.conversation) {
//                 // Store as object, not string
//                 setConversation(message.conversation);
//                 conversationRef.current = message.conversation;
//             }
//         };

//         const handleError = (error) => {
//             console.log("Vapi error:", error);
//             if (error?.message?.includes("Meeting has ended")) {
//                 console.log("Call ended normally");
//                 return;
//             }
//             toast.error("Call error: " + (error?.message || "Unknown error"));
//         };

//         // Add all event listeners
//         vapi.on("call-start", handleCallStart);
//         vapi.on("speech-start", handleSpeechStart);
//         vapi.on("speech-end", handleSpeechEnd);
//         vapi.on("call-end", handleCallEnd);
//         vapi.on("message", handleMessage);
//         vapi.on("error", handleError);

//         // Clean up all listeners
//         return () => {
//             vapi.off("call-start", handleCallStart);
//             vapi.off("speech-start", handleSpeechStart);
//             vapi.off("speech-end", handleSpeechEnd);
//             vapi.off("call-end", handleCallEnd);
//             vapi.off("message", handleMessage);
//             vapi.off("error", handleError);
//         };
//     }, []);

//     useEffect(() => {
//         interviewInfo && startCall()
//     }, [interviewInfo])

//     const startCall = () => {
//         let questionList
//         interviewInfo?.interviewData?.questionList.forEach((item, index) => (
//             questionList = item?.question + ',' + questionList
//         ))
//         const assistantOptions = {
//             name: "AI Recruiter",
//             firstMessage: "Hi " + interviewInfo?.userName + ", how are you? Ready for your interview on " + interviewInfo?.interviewData?.jobPosition,
//             transcriber: {
//                 provider: "deepgram",
//                 model: "nova-2",
//                 language: "en-US",
//             },
//             voice: {
//                 provider: "playht",
//                 voiceId: "jennifer",
//             },
//             model: {
//                 provider: "openai",
//                 model: "gpt-4",
//                 messages: [
//                     {
//                         role: "system",
//                         content: `
//                         You are an AI voice assistant conducting interviews.
//                         Your job is to ask candidates provided interview questions, asses their responses.
//                         Begin the conversation with a friendly introduction, setting a relaxed yet professional tone. Example:
//                         "Hey there! Welcome to your `+ interviewInfo?.interviewData?.jobPosition + ` interview. Let's get started with a few questions!"
//                         Ask one question at a time and wait for the candidate's response before proceeding. Keep the questions clear and concise. Below are the questions.
//                         Questions: `+ questionList + `
//                         If the candidate strugges, offer hints or rephrase the question without giving away the answer. Example:
//                         "Need a hint? Think about how React tracks component updates!"
//                         Provide brief, encouraging feedback after each answer. Example:
//                         "Nice! That's a solid answer."
//                         "Hmm, not quite! Want to try again?:"
//                         Keep the conversation natural and engaging-use casual phrases like "Alright, next up..." or "Let's tackle a tricky one!"
//                         After 5-7 questions, wrap up the interview smoothly by summarizing their performance. Example:
//                         "That was great! You handled some tough questions well. Keep sharpening your skills!"
//                         ENd on a positive note:
//                         "Thanks for chatting! Hope to see you crushing projects soon!"
//                         Key Guidelines:
//                         ✅ Be friendly, engaging, and witty  🎤
//                         ✅ Keep responses short and natural, like a real conversation
//                         ✅ Adapt based on the candidate's confidence level
//                         ✅ Ensure the interview remains focused on React
//                     `.trim(),
//                     },
//                 ],
//             },
//         }

//         vapi.start(assistantOptions)
//     }

//     const stopInterview = () => {
//         setLoading(true); // Set loading to true when stopping
//         vapi.stop();
//         setIsCallActive(false);
//     }

//     // Handle timer updates
//     const handleTimeUpdate = (newTime) => {
//         setTimer(newTime)
//     }

//     // const GenerateFeedback = async () => {
//     //     try {
//     //         const currentConversation = conversationRef.current || conversation;

//     //         if (!currentConversation) {
//     //             console.error("No conversation data available for feedback generation");
//     //             toast.error("Could not generate feedback - no interview data");
//     //             return;
//     //         }

//     //         const result = await axios.post('/api/ai-feedback', {
//     //             conversation: currentConversation
//     //         });

//     //         console.log(result?.data);
//     //         const Content = result.data.content;

//     //         // Extract just the JSON part using regex
//     //         const jsonRegex = /{[\s\S]*}/;
//     //         const jsonMatch = Content.match(jsonRegex);

//     //         if (!jsonMatch) {
//     //             console.error("Could not find valid JSON in response");
//     //             toast.error("Error processing feedback data");
//     //             return;
//     //         }

//     //         const FINAL_CONTENT = jsonMatch[0];
//     //         console.log("FINAL CONTENT🚀:", FINAL_CONTENT);

//     //         try {
//     //             // Parse the extracted JSON
//     //             const parsedJson = JSON.parse(FINAL_CONTENT);

//     //             // Save to the database
//     //             const { data, error } = await supabase
//     //                 .from('interview-feedback')
//     //                 .insert([
//     //                     {
//     //                         userName: interviewInfo?.userName,
//     //                         userEmail: interviewInfo?.userEmail,
//     //                         interview_id: interview_id,
//     //                         feedback: parsedJson,
//     //                         recommendation: false
//     //                     },
//     //                 ])
//     //                 .select();

//     //             console.log(data);
//     //             router.replace('/interview/' + interview_id + "/completed");
//     //         } catch (parseError) {
//     //             console.error("JSON parse error:", parseError);
//     //             toast.error("Could not process feedback data");
//     //         }
//     //     } catch (error) {
//     //         console.error("Error generating feedback:", error);
//     //         toast.error("Failed to generate feedback");
//     //     }
//     // };

//     const GenerateFeedback = async () => {
//         try {
//             const currentConversation = conversationRef.current || conversation;

//             if (!currentConversation) {
//                 console.error("No conversation data available for feedback generation");
//                 toast.error("Could not generate feedback - no interview data");
//                 return;
//             }

//             const result = await axios.post('/api/ai-feedback', {
//                 conversation: currentConversation
//             });

//             console.log(result?.data);
//             const Content = result.data.content;

//             // Extract just the JSON part using regex
//             const jsonRegex = /{\[\s\S\]*}/;
//             const jsonMatch = Content.match(jsonRegex);

//             if (!jsonMatch) {
//                 console.error("Could not find valid JSON in response");
//                 toast.error("Error processing feedback data");
//                 return;
//             }

//             const FINAL_CONTENT = jsonMatch[0];
//             console.log("FINAL CONTENT🚀:", FINAL_CONTENT);

//             try {
//                 // Parse the extracted JSON
//                 const parsedJson = JSON.parse(FINAL_CONTENT);

//                 // Save to the database with the conversation data included
//                 const { data, error } = await supabase
//                     .from('interview-feedback')
//                     .insert([
//                         {
//                             userName: interviewInfo?.userName,
//                             userEmail: interviewInfo?.userEmail,
//                             interview_id: interview_id,
//                             feedback: parsedJson,
//                             conversation: currentConversation, // Add the conversation data
//                             recommendation: false
//                         },
//                     ])
//                     .select();

//                 console.log(data);
//                 router.replace('/interview/' + interview_id + "/completed");
//             } catch (parseError) {
//                 console.error("JSON parse error:", parseError);
//                 toast.error("Could not process feedback data");
//             }
//         } catch (error) {
//             console.error("Error generating feedback:", error);
//             toast.error("Failed to generate feedback");
//         }
//     };


//     return (
//         <div className='p-20 lg:px-48 xl:px-56'>
//             <h2 className='font-bold text-xl flex justify-between'>
//                 AI Interview Session
//                 <Timer isRunning={isCallActive} initialTime={0} onTimeUpdate={handleTimeUpdate} />
//             </h2>
//             <div className='grid grid-cols-1 md:grid-cols-2 gap-7 mt-5'>
//                 <div className='bg-primary h-[400px] rounded-lg border flex flex-col items-center justify-center'>
//                     <div className='relative'>
//                         {!activeUser && <span className='absolute inset-0 rounded-full bg-blue-500 opacity-75 animate-ping '></span>}
//                         <Image src={'/ai.jpg'} alt='Interviewer' height={200} width={200}
//                             className='h-[80px] w-[80px] rounded-full object-cover' />
//                     </div>
//                     <h2>AI Recruiter</h2>
//                 </div>
//                 <div>
//                     <div className='bg-primary h-[400px] rounded-lg border flex flex-col items-center justify-center'>
//                         <div className='relative'>
//                             {activeUser && <span className='absolute inset-0 rounded-full bg-blue-500 opacity-75 animate-ping '></span>}
//                             <h2 className='text-2xl gradient-background2 text-white p-3 rounded-full px-4'>{interviewInfo?.userName[0]}</h2>
//                         </div>
//                         <h2>{interviewInfo?.userName}</h2>
//                     </div>
//                 </div>
//             </div>
//             <div className='flex items-center gap-5 justify-center mt-4 '>
//                 <Mic className='w-12 h-12 p-3 text-white bg-gray-500 rounded-full cursor-pointer hover:scale-110 transition-all' />
//                 <AlertConfirmation stopInterview={() => stopInterview()}>
//                     {!loading ? <Phone className='w-12 h-12 p-3 bg-red-500 rounded-full text-white cursor-pointer hover:scale-110 transition-all' />
//                         : <Loader2Icon className='animate-spin w-12 h-12 p-3 bg-red-500 rounded-full text-white' />}
//                 </AlertConfirmation>
//             </div>
//             <h2 className='text-sm text-gray-500 text-center mt-2'>Interview In Progress</h2>
//         </div>
//     )
// }

// export default StartInterview



"use client";

import { InterviewDataContext } from '@/app/context/InterviewDataContext';
import { Button } from '@/components/ui/button';
import { Loader2Icon, Mic, Phone } from 'lucide-react';
import Image from 'next/image';
import React, { useContext, useEffect, useState, useRef } from 'react';
import Vapi from "@vapi-ai/web";
import AlertConfirmation from './_components/AlertConfirmation';
import { toast } from 'sonner';
import Timer from './_components/Timer';
import axios from 'axios';
import { supabase } from '@/services/SupabaseClient';
import { useParams, useRouter } from 'next/navigation';

function StartInterview() {
    const { interviewInfo, setInterviewInfo } = useContext(InterviewDataContext);
    const vapi = new Vapi(process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY);
    const [activeUser, setActiveUser] = useState(false);
    const [isCallActive, setIsCallActive] = useState(false);
    const [timer, setTimer] = useState(0);
    const [conversation, setConversation] = useState();
    const [loading, setLoading] = useState(false);
    const { interview_id } = useParams();
    const conversationRef = useRef();
    const router = useRouter();

    useEffect(() => {
        const handleDailyError = (event) => {
            if (event.error?.toString().includes("Meeting has ended")) {
                event.preventDefault();
                console.log("Meeting ended normally");
            }
        };
        window.addEventListener('error', handleDailyError);
        return () => {
            window.removeEventListener('error', handleDailyError);
        };
    }, []);

    useEffect(() => {
        console.log("Current conversation state:", conversation);
    }, [conversation]);

    useEffect(() => {
        const handleCallStart = () => {
            console.log("Call has started.");
            toast('Call Connected...');
            setIsCallActive(true);
        };

        const handleSpeechStart = () => {
            console.log("Assistant speech has started.");
            setActiveUser(false);
        };

        const handleSpeechEnd = () => {
            console.log("Assistant speech has ended.");
            setActiveUser(true);
        };

        const handleCallEnd = () => {
            console.log("Call has ended.");
            toast('Interview Ended...');
            setIsCallActive(false);
            GenerateFeedback().finally(() => {
                setLoading(false);
            });
        };

        const handleMessage = (message) => {
            console.log("Raw message received:", message);
            if (message?.conversation && Array.isArray(message.conversation)) {
                console.log("CONVERSATION🚀🚀🚀:", message.conversation);
                setConversation(message.conversation);
                conversationRef.current = message.conversation;
            } else {
                console.warn("No valid conversation data in message:", message);
            }
        };

        const handleError = (error) => {
            console.log("Vapi error:", error);
            if (error?.message?.includes("Meeting has ended")) {
                console.log("Call ended normally");
                return;
            }
            toast.error("Call error: " + (error?.message || "Unknown error"));
        };

        vapi.on("call-start", handleCallStart);
        vapi.on("speech-start", handleSpeechStart);
        vapi.on("speech-end", handleSpeechEnd);
        vapi.on("call-end", handleCallEnd);
        vapi.on("message", handleMessage);
        vapi.on("error", handleError);

        return () => {
            vapi.off("call-start", handleCallStart);
            vapi.off("speech-start", handleSpeechStart);
            vapi.off("speech-end", handleSpeechEnd);
            vapi.off("call-end", handleCallEnd);
            vapi.off("message", handleMessage);
            vapi.off("error", handleError);
        };
    }, []);

    useEffect(() => {
        interviewInfo && startCall();
    }, [interviewInfo]);

    const startCall = () => {
        let questionList;
        interviewInfo?.interviewData?.questionList.forEach((item, index) => (
            questionList = item?.question + ',' + questionList
        ));

        const assistantOptions = {
            name: "AI Recruiter",
            firstMessage: "Hi " + interviewInfo?.userName + ", how are you? Ready for your interview on " + interviewInfo?.interviewData?.jobPosition,
            transcriber: {
                provider: "deepgram",
                model: "nova-2",
                language: "en-US",
            },
            voice: {
                provider: "playht",
                voiceId: "jennifer",
            },
            model: {
                provider: "openai",
                model: "gpt-4",
                messages: [
                    {
                        role: "system",
                        content: `
                        You are an AI voice assistant conducting interviews.
                        Your job is to ask candidates provided interview questions, asses their responses.
                        Begin the conversation with a friendly introduction, setting a relaxed yet professional tone. Example:
                        "Hey there! Welcome to your ${interviewInfo?.interviewData?.jobPosition} interview. Let's get started with a few questions!"
                        Ask one question at a time and wait for the candidate's response before proceeding. Keep the questions clear and concise. Below are the questions.
                        Questions: ${questionList}
                        If the candidate struggles, offer hints or rephrase the question without giving away the answer. Example:
                        "Need a hint? Think about how React tracks component updates!"
                        Provide brief, encouraging feedback after each answer. Example:
                        "Nice! That's a solid answer."
                        "Hmm, not quite! Want to try again?:"
                        Keep the conversation natural and engaging-use casual phrases like "Alright, next up..." or "Let's tackle a tricky one!"
                        After 5-7 questions, wrap up the interview smoothly by summarizing their performance. Example: 
                        "That was great! You handled some tough questions well. Keep sharpening your skills!"
                        End on a positive note:
                        "Thanks for chatting! Hope to see you crushing projects soon!"
                        Key Guidelines:
                        ✅ Be friendly, engaging, and witty 🎤
                        ✅ Keep responses short and natural, like a real conversation
                        ✅ Adapt based on the candidate's confidence level
                        ✅ Ensure the interview remains focused on React
                    `.trim(),
                    },
                ],
            },
        };
        vapi.start(assistantOptions);
    };

    const stopInterview = () => {
        setLoading(true);
        vapi.stop();
        setIsCallActive(false);
    };

    const handleTimeUpdate = (newTime) => {
        setTimer(newTime);
    };

    const GenerateFeedback = async () => {
        try {
            const currentConversation = conversationRef.current || conversation;
            if (!currentConversation || !Array.isArray(currentConversation)) {
                console.error("No valid conversation data available for feedback generation");
                toast.error("Could not generate feedback - no interview data");
                return;
            }

            const result = await axios.post('/api/ai-feedback', {
                conversation: currentConversation,
            });

            console.log("API response:", result?.data);
            const content = result.data.content;

            // Extract JSON from markdown code block
            const jsonRegex = /```json\n([\s\S]*?)\n```/;
            const jsonMatch = content.match(jsonRegex);

            if (!jsonMatch || !jsonMatch[1]) {
                console.error("Could not find valid JSON in response:", content);
                toast.error("Error processing feedback data");
                return;
            }

            const jsonString = jsonMatch[1];
            console.log("Extracted JSON string:", jsonString);

            try {
                // Parse the extracted JSON
                const parsedJson = JSON.parse(jsonString);

                // Save to the database with the conversation data
                const { data, error } = await supabase
                    .from('interview-feedback')
                    .insert([
                        {
                            userName: interviewInfo?.userName,
                            userEmail: interviewInfo?.userEmail,
                            interview_id: interview_id,
                            feedback: parsedJson,
                            conversation: currentConversation, // Store conversation
                            recommendation: false,
                        },
                    ])
                    .select();

                if (error) {
                    console.error("Supabase insert error:", error);
                    toast.error("Failed to save feedback to database");
                    return;
                }

                console.log("Saved feedback data:", data);
                router.replace(`/interview/${interview_id}/completed`);
            } catch (parseError) {
                console.error("JSON parse error:", parseError);
                toast.error("Could not process feedback data");
            }
        } catch (error) {
            console.error("Error generating feedback:", error);
            toast.error("Failed to generate feedback");
        }
    };

    return (
        <div className='p-20 lg:px-48 xl:px-56'>
            <h2 className='font-bold text-xl flex justify-between'>
                AI Interview Session
                <Timer isRunning={isCallActive} initialTime={0} onTimeUpdate={handleTimeUpdate} />
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-7 mt-5'>
                <div className='bg-primary h-[400px] rounded-lg border flex flex-col items-center justify-center'>
                    <div className='relative'>
                        {!activeUser && <span className='absolute inset-0 rounded-full bg-blue-500 opacity-75 animate-ping '></span>}
                        <Image src={'/ai.jpg'} alt='Interviewer' height={200} width={200}
                            className='h-[80px] w-[80px] rounded-full object-cover' />
                    </div>
                    <h2>AI Recruiter</h2>
                </div>
                <div>
                    <div className='bg-primary h-[400px] rounded-lg border flex flex-col items-center justify-center'>
                        <div className='relative'>
                            {activeUser && <span className='absolute inset-0 rounded-full bg-blue-500 opacity-75 animate-ping '></span>}
                            <h2 className='text-2xl gradient-background2 text-white p-3 rounded-full px-4'>{interviewInfo?.userName[0]}</h2>
                        </div>
                        <h2>{interviewInfo?.userName}</h2>
                    </div>
                </div>
            </div>
            <div className='flex items-center gap-5 justify-center mt-4 '>
                <Mic className='w-12 h-12 p-3 text-white bg-gray-500 rounded-full cursor-pointer hover:scale-110 transition-all' />
                <AlertConfirmation stopInterview={() => stopInterview()}>
                    {!loading ? <Phone className='w-12 h-12 p-3 bg-red-500 rounded-full text-white cursor-pointer hover:scale-110 transition-all' />
                        : <Loader2Icon className='animate-spin w-12 h-12 p-3 bg-red-500 rounded-full text-white' />}
                </AlertConfirmation>
            </div>
            <h2 className='text-sm text-gray-500 text-center mt-2'>Interview In Progress</h2>
        </div>
    );
}

export default StartInterview;