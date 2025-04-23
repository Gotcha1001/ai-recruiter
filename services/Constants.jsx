import { BriefcaseBusinessIcon, Calendar, Code2Icon, LayoutDashboard, List, Puzzle, ShieldPlus, User2Icon, WalletCards } from "lucide-react";

export const SidebarOptions = [
    {
        name: 'Dashboard',
        icon: LayoutDashboard,
        path: '/dashboard'
    },
    {
        name: 'Scheduled Interview',
        icon: Calendar,
        path: '/sheduled-interview'
    },
    {
        name: 'All Interviews',
        icon: List,
        path: '/all-interview'
    },
    {
        name: 'Settings',
        icon: WalletCards,
        path: '/settings'
    },
]

export const InterviewType = [
    {
        title: 'Technical',
        icon: Code2Icon
    },
    {
        title: 'Behavioral',
        icon: User2Icon
    },
    {
        title: 'Experience',
        icon: BriefcaseBusinessIcon
    },
    {
        title: "Problem Solving",
        icon: Puzzle
    },
    {
        title: 'Leadership',
        icon: ShieldPlus
    }
]





export const QUESTIONS_PROMPT = `YOU MUST RESPOND WITH ONLY A VALID JSON ARRAY. 
DO NOT INCLUDE ANY TEXT BEFORE OR AFTER THE JSON ARRAY.
DO NOT USE MARKDOWN CODE BLOCKS.
DO NOT ASK FOR MORE INFORMATION.

Generate interview questions for the following job:

Job Title: {{jobTitle}}
Job Description: {{jobDescription}}
Interview Duration: {{duration}}
Interview Type: {{type}}

The JSON array must follow this EXACT format:
[
  {
    "question": "What technical skills do you have with...?",
    "type": "Technical"
  },
  {
    "question": "Tell me about a time when you...",
    "type": "Behavioral"
  }
]

Generate questions that are appropriate for the job title, description, and interview duration.`;


export const assistantOptions = {
    name: "AI Recruiter",
    firstMessage: "Hi {{userName}}, how are you? Ready for your interview on {{jobPosition}}?",
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
                "Hey there! Welcome to your {{jobPosition}} interview. Let's get started with a few questions!"
                Ask one question at a time and wait for the candidate's response before proceeding. Keep the questions clear and concise. Below are the questions.
                Questions: {{questionList}}
                If the candidate strugges, offer hints or rephrase the question without giving away the answer. Example:
                "Need a hint? Think about how React tracks component updates!"
                Provide brief, encouraging feedback after each answer. Example:
                "Nice! That's a solid answer."
                "Hmm, not quite! Want to try again?:"
                Keep the conversation natural and engaging-use casual phrases like "Alright, next up..." or "Let's tackle a tricky one!"
                After 5-7 questions, wrap up the interview smoothly by summarizing their performance. Example: 
                "That was great! You handled some tough questions well. Keep sharpening your skills!"
                ENd on a positive note:
                "Thanks for chatting! Hope to see you crushing projects soon!"
                Key Guidelines:
                ✅ Be friendly, engaging, and witty  🎤
                ✅ Keep responses short and natural, like a real conversation
                ✅ Adapt based on the candidate's confidence level
                ✅ Ensure the interview remains focused on React
                
            `.trim(),


            },

        ],
    },
};

// export const FEEDBACK_PROMPT = `{{conversation}}
// Depends on this Interview Conversation between assistant and userAgent,
//     Give me feedback for the user's Interview. Give me rating out of 10 for technical Skills, Communication, Problem Solving, Experience. Also give me a summery in 3 lines about the interview and one line to let me know whether the user is recommended for hiring or not with a message. Give me a response in JSON format
// {
//     feedback: {
//         rating: {
//             technicalSkills: 5,
//                 communication: 6,
//                     problemSolving: 4,
//                         experience: 7
//         },
//         summery: <in 3 Lines >,
//             Recommendation: '',
//                 RecommendationMsg: ''
//     }
// }`



// export const FEEDBACK_PROMPT = `{{conversation}}

// Based on this interview conversation between assistant and userAgent, provide feedback for the user's interview performance.

// Rate the candidate out of 10 for technical skills, communication, problem solving, and experience.
// Also provide a summary in 3 lines about the interview and a clear hiring recommendation.

// Return the response in this JSON format:
// {
//   "feedback": {
//     "rating": {
//       "technicalSkills": 0,
//       "communication": 0,
//       "problemSolving": 0,
//       "experience": 0
//     },
//     "summary": "",
//     "recommendation": {
//       "decision": "Hire/Don't Hire/Consider for different role",
//       "message": ""
//     }
//   }
// }`;


// export const FEEDBACK_PROMPT = `{{conversation}}

// Based on this interview conversation between assistant and userAgent, provide feedback for the user's interview performance.

// Rate the candidate out of 10 for technical skills, communication, problem solving, and experience.
// Also provide a summary in 3 lines about the interview and a clear hiring recommendation.

// EXTREMELY IMPORTANT: You must respond with ONLY valid JSON - no introduction text, no code block formatting, no comments, and no extra text before or after the JSON. The response must be a valid JSON object that can be directly parsed without any preprocessing.

// Return exactly in this format:
// {
//   "feedback": {
//     "rating": {
//       "technicalSkills": 0,
//       "communication": 0,
//       "problemSolving": 0,
//       "experience": 0
//     },
//     "summary": "",
//     "recommendation": {
//       "decision": "Hire/Don't Hire/Consider for different role",
//       "message": ""
//     }
//   }
// }`;


export const FEEDBACK_PROMPT = `{{conversation}}

Based on this interview conversation between assistant and userAgent, provide feedback for the user's interview performance.

Rate the candidate out of 5 for technical skills, communication, problem solving, and experience. 
Also provide a summary in 3 lines about the interview and a clear hiring recommendation.

EXTREMELY IMPORTANT: You must respond with ONLY valid JSON - no introduction text, no code block formatting, no comments, and no extra text before or after the JSON. The response must be a valid JSON object that can be directly parsed without any preprocessing.

Return exactly in this format:
{
  "feedback": {
    "rating": {
      "technicalSkills": 0,
      "communication": 0,
      "problemSolving": 0,
      "experience": 0
    },
    "summary": "",
    "recommendation": {
      "decision": "Hire/Don't Hire/Consider for different role",
      "message": ""
    }
  }
}`;