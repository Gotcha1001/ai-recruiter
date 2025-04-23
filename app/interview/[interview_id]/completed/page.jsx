// "use client";

// import { useEffect, useState } from "react";
// import { useParams, useRouter } from "next/navigation";

// import { Loader2Icon } from "lucide-react";
// import { toast } from "sonner";
// import { Button } from "@/components/ui/button";
// import { supabase } from "@/services/SupabaseClient";

// function InterviewComplete() {
//     const { interview_id } = useParams();
//     const router = useRouter();
//     const [feedback, setFeedback] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     // Fetch feedback from Supabase
//     useEffect(() => {
//         const fetchFeedback = async () => {
//             try {
//                 setLoading(true);
//                 const { data, error } = await supabase
//                     .from("interview-feedback")
//                     .select("feedback, userName, created_at")
//                     .eq("interview_id", interview_id)
//                     .single();

//                 if (error) {
//                     throw new Error(error.message);
//                 }

//                 if (!data) {
//                     throw new Error("No feedback found for this interview.");
//                 }

//                 setFeedback(data);
//             } catch (err) {
//                 console.error("Error fetching feedback:", err);
//                 setError("Failed to load feedback. Please try again later.");
//                 toast.error("Failed to load feedback.");
//             } finally {
//                 setLoading(false);
//             }
//         };

//         if (interview_id) {
//             fetchFeedback();
//         }
//     }, [interview_id]);

//     // Handle navigation to dashboard or home
//     const handleBackToDashboard = () => {
//         router.push("/dashboard"); // Adjust the route as per your app's structure
//     };

//     // Render loading state
//     if (loading) {
//         return (
//             <div className="flex items-center justify-center min-h-screen">
//                 <Loader2Icon className="w-12 h-12 animate-spin text-primary" />
//             </div>
//         );
//     }

//     // Render error state
//     if (error) {
//         return (
//             <div className="flex items-center justify-center min-h-screen">
//                 <div className="text-center">
//                     <h2 className="text-xl font-bold text-red-500">Error</h2>
//                     <p className="text-gray-500">{error}</p>
//                     <Button
//                         onClick={handleBackToDashboard}
//                         className="mt-4 bg-primary text-white"
//                     >
//                         Back to Dashboard
//                     </Button>
//                 </div>
//             </div>
//         );
//     }

//     // Destructure feedback data
//     const { userName, created_at, feedback: feedbackData } = feedback;
//     const { rating, summary, recommendation } = feedbackData || {};
//     const { technicalSkills, communication, problemSolving, experience } =
//         rating || {};

//     return (
//         <div className="p-10 lg:p-20 xl:p-32 min-h-screen bg-gray-50">
//             <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
//                 <h1 className="text-3xl font-bold text-primary mb-6">
//                     Interview Feedback
//                 </h1>

//                 {/* Header Info */}
//                 <div className="mb-6">
//                     <h2 className="text-xl font-semibold">
//                         Candidate: {userName || "Unknown"}
//                     </h2>
//                     <p className="text-gray-500">
//                         Interview Date:{" "}
//                         {new Date(created_at).toLocaleDateString("en-US", {
//                             year: "numeric",
//                             month: "long",
//                             day: "numeric",
//                         })}
//                     </p>
//                     <p className="text-gray-500">Interview ID: {interview_id}</p>
//                 </div>

//                 {/* Ratings */}
//                 <div className="mb-8">
//                     <h3 className="text-lg font-semibold mb-4">Performance Ratings</h3>
//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                         <div className="p-4 bg-gray-100 rounded-lg">
//                             <span className="font-medium">Technical Skills:</span>{" "}
//                             {technicalSkills}/10
//                         </div>
//                         <div className="p-4 bg-gray-100 rounded-lg">
//                             <span className="font-medium">Communication:</span>{" "}
//                             {communication}/10
//                         </div>
//                         <div className="p-4 bg-gray-100 rounded-lg">
//                             <span className="font-medium">Problem Solving:</span>{" "}
//                             {problemSolving}/10
//                         </div>
//                         <div className="p-4 bg-gray-100 rounded-lg">
//                             <span className="font-medium">Experience:</span> {experience}/10
//                         </div>
//                     </div>
//                 </div>

//                 {/* Summary */}
//                 <div className="mb-8">
//                     <h3 className="text-lg font-semibold mb-4">Summary</h3>
//                     <p className="text-gray-700">{summary || "No summary provided."}</p>
//                 </div>

//                 {/* Recommendation */}
//                 <div className="mb-8">
//                     <h3 className="text-lg font-semibold mb-4">Recommendation</h3>
//                     <p className="text-gray-700 font-medium">
//                         Decision: {recommendation?.decision || "N/A"}
//                     </p>
//                     <p className="text-gray-700">
//                         {recommendation?.message || "No recommendation provided."}
//                     </p>
//                 </div>

//                 {/* Actions */}
//                 <div className="flex justify-end gap-4">
//                     <Button
//                         onClick={handleBackToDashboard}
//                         className="bg-primary text-white hover:bg-primary-dark"
//                     >
//                         Back to Dashboard
//                     </Button>
//                     <Button
//                         onClick={() => router.push("/start")} // Adjust route for starting a new interview
//                         className="bg-secondary text-white hover:bg-secondary-dark"
//                     >
//                         Start New Interview
//                     </Button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default InterviewComplete;


// "use client"

// import { useEffect, useState } from 'react'
// import { useParams } from 'next/navigation'
// import { supabase } from '@/services/SupabaseClient'
// import { Loader2 } from 'lucide-react'
// import { Progress } from '@/components/ui/progress'
// import { Button } from '@/components/ui/button'
// import Link from 'next/link'

// function InterviewComplete() {
//     const [feedback, setFeedback] = useState(null)
//     const [loading, setLoading] = useState(true)
//     const { interview_id } = useParams()

//     useEffect(() => {
//         const fetchFeedback = async () => {
//             try {
//                 const { data, error } = await supabase
//                     .from('interview-feedback')
//                     .select('*')
//                     .eq('interview_id', interview_id)
//                     .single()

//                 if (error) {
//                     console.error("Error fetching feedback:", error)
//                     return
//                 }

//                 console.log("Fetched feedback:", data)
//                 setFeedback(data)
//             } catch (error) {
//                 console.error("Exception fetching feedback:", error)
//             } finally {
//                 setLoading(false)
//             }
//         }

//         fetchFeedback()
//     }, [interview_id])

//     if (loading) {
//         return (
//             <div className="flex items-center justify-center h-screen">
//                 <Loader2 className="animate-spin w-12 h-12 text-primary" />
//             </div>
//         )
//     }

//     if (!feedback) {
//         return (
//             <div className="p-8 text-center">
//                 <h2 className="text-2xl font-bold mb-4">No feedback found</h2>
//                 <p className="mb-6">We couldn't find the interview results for this session.</p>
//                 <Link href="/dashboard">
//                     <Button>Return to Dashboard</Button>
//                 </Link>
//             </div>
//         )
//     }

//     // Extract rating data
//     const ratings = feedback?.feedback?.rating || {
//         technicalSkills: 0,
//         communication: 0,
//         problemSolving: 0,
//         experience: 0
//     }

//     const recommendation = feedback?.feedback?.recommendation || {
//         decision: "No decision recorded",
//         message: "No recommendation message available"
//     }

//     return (
//         <div className="p-6 md:p-10 lg:p-20 max-w-6xl mx-auto">
//             <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between">
//                 <div>
//                     <h1 className="text-3xl font-bold">Interview Results</h1>
//                     <p className="text-gray-500 mt-1">Candidate: {feedback.userName}</p>
//                 </div>
//                 <div className="mt-4 md:mt-0">
//                     <Link href="/dashboard">
//                         <Button variant="outline" className="mr-2">Back to Dashboard</Button>
//                     </Link>
//                     <Button>Share Results</Button>
//                 </div>
//             </div>

//             {/* Decision Card */}
//             <div className={`p-6 rounded-lg mb-8 border-l-4 shadow-sm ${recommendation.decision.toLowerCase().includes('hire')
//                 ? 'border-l-green-500 bg-green-50'
//                 : 'border-l-amber-500 bg-amber-50'
//                 }`}>
//                 <h2 className="text-xl font-bold mb-2">Recommendation</h2>
//                 <div className="flex flex-col md:flex-row md:items-center justify-between">
//                     <div className="mb-4 md:mb-0">
//                         <span className="font-medium">Decision: </span>
//                         <span className={`font-bold ${recommendation.decision.toLowerCase().includes('hire')
//                             ? 'text-green-700'
//                             : 'text-amber-700'
//                             }`}>
//                             {recommendation.decision}
//                         </span>
//                     </div>
//                 </div>
//                 <p className="mt-2 text-gray-700">{recommendation.message}</p>
//             </div>

//             {/* Skills Assessment */}
//             <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
//                 <h2 className="text-xl font-bold mb-4">Skills Assessment</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div>
//                         <div className="mb-4">
//                             <div className="flex justify-between mb-1">
//                                 <span className="font-medium">Technical Skills</span>
//                                 <span className="font-bold">{ratings.technicalSkills}/10</span>
//                             </div>
//                             <Progress value={ratings.technicalSkills * 10} className="h-2" />
//                         </div>
//                         <div className="mb-4">
//                             <div className="flex justify-between mb-1">
//                                 <span className="font-medium">Communication</span>
//                                 <span className="font-bold">{ratings.communication}/10</span>
//                             </div>
//                             <Progress value={ratings.communication * 10} className="h-2" />
//                         </div>
//                     </div>
//                     <div>
//                         <div className="mb-4">
//                             <div className="flex justify-between mb-1">
//                                 <span className="font-medium">Problem Solving</span>
//                                 <span className="font-bold">{ratings.problemSolving}/10</span>
//                             </div>
//                             <Progress value={ratings.problemSolving * 10} className="h-2" />
//                         </div>
//                         <div className="mb-4">
//                             <div className="flex justify-between mb-1">
//                                 <span className="font-medium">Experience</span>
//                                 <span className="font-bold">{ratings.experience}/10</span>
//                             </div>
//                             <Progress value={ratings.experience * 10} className="h-2" />
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Summary */}
//             <div className="bg-white rounded-lg shadow-sm border p-6">
//                 <h2 className="text-xl font-bold mb-4">Interview Summary</h2>
//                 <p className="text-gray-700 whitespace-pre-line">
//                     {feedback.feedback?.summary || "No summary available."}
//                 </p>
//             </div>
//         </div>
//     )
// }

// export default InterviewComplete



// "use client"

// import { useEffect, useState } from 'react'
// import { useParams } from 'next/navigation'
// import { supabase } from '@/services/SupabaseClient'
// import { Loader2 } from 'lucide-react'
// import { Progress } from '@/components/ui/progress'
// import { Button } from '@/components/ui/button'
// import Link from 'next/link'

// function InterviewComplete() {
//     const [feedback, setFeedback] = useState(null)
//     const [loading, setLoading] = useState(true)
//     const { interview_id } = useParams()

//     useEffect(() => {
//         const fetchFeedback = async () => {
//             try {
//                 const { data, error } = await supabase
//                     .from('interview-feedback')
//                     .select('*')
//                     .eq('interview_id', interview_id)
//                     .single()

//                 if (error) {
//                     console.error("Error fetching feedback:", error)
//                     return
//                 }

//                 console.log("Fetched feedback:", data)
//                 setFeedback(data)
//             } catch (error) {
//                 console.error("Exception fetching feedback:", error)
//             } finally {
//                 setLoading(false)
//             }
//         }

//         fetchFeedback()
//     }, [interview_id])

//     if (loading) {
//         return (
//             <div className="flex items-center justify-center h-screen">
//                 <Loader2 className="animate-spin w-12 h-12 text-primary" />
//             </div>
//         )
//     }

//     if (!feedback) {
//         return (
//             <div className="p-8 text-center">
//                 <h2 className="text-2xl font-bold mb-4">No feedback found</h2>
//                 <p className="mb-6">We couldn't find the interview results for this session.</p>
//                 <Link href="/dashboard">
//                     <Button>Return to Dashboard</Button>
//                 </Link>
//             </div>
//         )
//     }

//     // Access the nested feedback structure
//     const feedbackData = feedback.feedback?.feedback || {
//         rating: {
//             technicalSkills: 0,
//             communication: 0,
//             problemSolving: 0,
//             experience: 0
//         },
//         recommendation: {
//             decision: "No decision recorded",
//             message: "No recommendation message available"
//         },
//         summary: "No summary available."
//     };

//     // Extract rating data safely
//     const ratings = feedbackData.rating || {
//         technicalSkills: 0,
//         communication: 0,
//         problemSolving: 0,
//         experience: 0
//     };

//     const recommendation = feedbackData.recommendation || {
//         decision: "No decision recorded",
//         message: "No recommendation message available"
//     };

//     const summary = feedbackData.summary || "No summary available.";

//     // Calculate average score
//     const totalScore = (
//         ratings.technicalSkills +
//         ratings.communication +
//         ratings.problemSolving +
//         ratings.experience
//     ) / 4;

//     const formattedScore = totalScore.toFixed(1);

//     return (
//         <div className="p-6 md:p-10 lg:p-20 max-w-6xl mx-auto">
//             <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between">
//                 <div>
//                     <h1 className="text-3xl font-bold">Interview Results</h1>
//                     <p className="text-gray-500 mt-1">Candidate: {feedback.userName}</p>
//                 </div>
//                 <div className="mt-4 md:mt-0">
//                     <Link href="/dashboard">
//                         <Button variant="outline" className="mr-2">Back to Dashboard</Button>
//                     </Link>
//                     <Button>Share Results</Button>
//                 </div>
//             </div>

//             {/* Overall Score Card */}
//             <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
//                 <div className="flex flex-col md:flex-row items-center justify-between">
//                     <div>
//                         <h2 className="text-xl font-bold mb-2">Overall Assessment</h2>
//                         <p className="text-gray-600">Based on technical skills, communication, problem-solving, and experience</p>
//                     </div>
//                     <div className="mt-4 md:mt-0 flex items-center justify-center bg-gray-100 rounded-full p-6 w-24 h-24">
//                         <span className="text-3xl font-bold">{formattedScore}</span>
//                     </div>
//                 </div>
//             </div>

//             {/* Decision Card */}
//             <div className={`p-6 rounded-lg mb-8 border-l-4 shadow-sm ${recommendation.decision.toLowerCase().includes('hire')
//                 ? 'border-l-green-500 bg-green-50'
//                 : 'border-l-amber-500 bg-amber-50'
//                 }`}>
//                 <h2 className="text-xl font-bold mb-2">Recommendation</h2>
//                 <div className="flex flex-col md:flex-row md:items-center justify-between">
//                     <div className="mb-4 md:mb-0">
//                         <span className="font-medium">Decision: </span>
//                         <span className={`font-bold ${recommendation.decision.toLowerCase().includes('hire')
//                             ? 'text-green-700'
//                             : 'text-amber-700'
//                             }`}>
//                             {recommendation.decision}
//                         </span>
//                     </div>
//                 </div>
//                 <p className="mt-2 text-gray-700">{recommendation.message}</p>
//             </div>

//             {/* Skills Assessment */}
//             <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
//                 <h2 className="text-xl font-bold mb-4">Skills Assessment</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div>
//                         <div className="mb-4">
//                             <div className="flex justify-between mb-1">
//                                 <span className="font-medium">Technical Skills</span>
//                                 <span className="font-bold">{ratings.technicalSkills}/10</span>
//                             </div>
//                             <Progress value={ratings.technicalSkills * 10} className="h-2" />
//                         </div>
//                         <div className="mb-4">
//                             <div className="flex justify-between mb-1">
//                                 <span className="font-medium">Communication</span>
//                                 <span className="font-bold">{ratings.communication}/10</span>
//                             </div>
//                             <Progress value={ratings.communication * 10} className="h-2" />
//                         </div>
//                     </div>
//                     <div>
//                         <div className="mb-4">
//                             <div className="flex justify-between mb-1">
//                                 <span className="font-medium">Problem Solving</span>
//                                 <span className="font-bold">{ratings.problemSolving}/10</span>
//                             </div>
//                             <Progress value={ratings.problemSolving * 10} className="h-2" />
//                         </div>
//                         <div className="mb-4">
//                             <div className="flex justify-between mb-1">
//                                 <span className="font-medium">Experience</span>
//                                 <span className="font-bold">{ratings.experience}/10</span>
//                             </div>
//                             <Progress value={ratings.experience * 10} className="h-2" />
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Summary */}
//             <div className="bg-white rounded-lg shadow-sm border p-6">
//                 <h2 className="text-xl font-bold mb-4">Interview Summary</h2>
//                 <div className="text-gray-700">
//                     {summary.split('. ').map((sentence, index) => (
//                         sentence.trim() ?
//                             <p key={index} className="mb-2">{sentence.trim()}.</p> :
//                             null
//                     ))}
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default InterviewComplete



// "use client"

// import { useEffect, useState } from 'react'
// import { useParams } from 'next/navigation'
// import { supabase } from '@/services/SupabaseClient'
// import { Loader2 } from 'lucide-react'
// import { Progress } from '@/components/ui/progress'
// import { Button } from '@/components/ui/button'
// import Link from 'next/link'

// function InterviewComplete() {
//     const [feedback, setFeedback] = useState(null)
//     const [interviewData, setInterviewData] = useState(null)
//     const [loading, setLoading] = useState(true)
//     const { interview_id } = useParams()

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 // Fetch feedback data
//                 const feedbackResponse = await supabase
//                     .from('interview-feedback')
//                     .select('*')
//                     .eq('interview_id', interview_id)
//                     .single()

//                 if (feedbackResponse.error) {
//                     console.error("Error fetching feedback:", feedbackResponse.error)
//                 } else {
//                     console.log("Fetched feedback:", feedbackResponse.data)
//                     setFeedback(feedbackResponse.data)
//                 }

//                 // Fetch interview questions data
//                 const interviewResponse = await supabase
//                     .from('Interviews')
//                     .select('questionList')
//                     .eq('id', interview_id)
//                     .single()

//                 if (interviewResponse.error) {
//                     console.error("Error fetching interview data:", interviewResponse.error)
//                 } else {
//                     console.log("Fetched interview data:", interviewResponse.data)
//                     setInterviewData(interviewResponse.data)
//                 }
//             } catch (error) {
//                 console.error("Exception fetching data:", error)
//             } finally {
//                 setLoading(false)
//             }
//         }

//         fetchData()
//     }, [interview_id])

//     if (loading) {
//         return (
//             <div className="flex items-center justify-center h-screen">
//                 <Loader2 className="animate-spin w-12 h-12 text-primary" />
//             </div>
//         )
//     }

//     if (!feedback) {
//         return (
//             <div className="p-8 text-center">
//                 <h2 className="text-2xl font-bold mb-4">No feedback found</h2>
//                 <p className="mb-6">We couldn't find the interview results for this session.</p>
//                 <Link href="/dashboard">
//                     <Button>Return to Dashboard</Button>
//                 </Link>
//             </div>
//         )
//     }

//     // Access the nested feedback structure
//     const feedbackData = feedback.feedback?.feedback || {
//         rating: {
//             technicalSkills: 0,
//             communication: 0,
//             problemSolving: 0,
//             experience: 0
//         },
//         recommendation: {
//             decision: "No decision recorded",
//             message: "No recommendation message available"
//         },
//         summary: "No summary available."
//     };

//     // Extract rating data safely
//     const ratings = feedbackData.rating || {
//         technicalSkills: 0,
//         communication: 0,
//         problemSolving: 0,
//         experience: 0
//     };

//     const recommendation = feedbackData.recommendation || {
//         decision: "No decision recorded",
//         message: "No recommendation message available"
//     };

//     const summary = feedbackData.summary || "No summary available.";

//     // Parse interview questions
//     let questions = [];
//     try {
//         if (interviewData && interviewData.questionList) {
//             questions = typeof interviewData.questionList === 'string'
//                 ? JSON.parse(interviewData.questionList)
//                 : interviewData.questionList;
//         }
//     } catch (error) {
//         console.error("Error parsing questions:", error);
//     }

//     // Calculate average score
//     const totalScore = (
//         ratings.technicalSkills +
//         ratings.communication +
//         ratings.problemSolving +
//         ratings.experience
//     ) / 4;

//     const formattedScore = totalScore.toFixed(1);

//     return (
//         <div className="p-6 md:p-10 lg:p-20 max-w-6xl mx-auto">
//             <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between">
//                 <div>
//                     <h1 className="text-3xl font-bold">Interview Results</h1>
//                     <p className="text-gray-500 mt-1">Candidate: {feedback.userName}</p>
//                 </div>
//                 <div className="mt-4 md:mt-0">
//                     <Link href="/dashboard">
//                         <Button variant="outline" className="mr-2">Back to Dashboard</Button>
//                     </Link>
//                     <Button>Share Results</Button>
//                 </div>
//             </div>

//             {/* Overall Score Card */}
//             <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
//                 <div className="flex flex-col md:flex-row items-center justify-between">
//                     <div>
//                         <h2 className="text-xl font-bold mb-2">Overall Assessment</h2>
//                         <p className="text-gray-600">Based on technical skills, communication, problem-solving, and experience</p>
//                     </div>
//                     <div className="mt-4 md:mt-0 flex items-center justify-center bg-gray-100 rounded-full p-6 w-24 h-24">
//                         <span className="text-3xl font-bold">{formattedScore}</span>
//                     </div>
//                 </div>
//             </div>

//             {/* Decision Card */}
//             <div className={`p-6 rounded-lg mb-8 border-l-4 shadow-sm ${recommendation.decision.toLowerCase().includes('hire')
//                     ? 'border-l-green-500 bg-green-50'
//                     : 'border-l-amber-500 bg-amber-50'
//                 }`}>
//                 <h2 className="text-xl font-bold mb-2">Recommendation</h2>
//                 <div className="flex flex-col md:flex-row md:items-center justify-between">
//                     <div className="mb-4 md:mb-0">
//                         <span className="font-medium">Decision: </span>
//                         <span className={`font-bold ${recommendation.decision.toLowerCase().includes('hire')
//                                 ? 'text-green-700'
//                                 : 'text-amber-700'
//                             }`}>
//                             {recommendation.decision}
//                         </span>
//                     </div>
//                 </div>
//                 <p className="mt-2 text-gray-700">{recommendation.message}</p>
//             </div>

//             {/* Skills Assessment */}
//             <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
//                 <h2 className="text-xl font-bold mb-4">Skills Assessment</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div>
//                         <div className="mb-4">
//                             <div className="flex justify-between mb-1">
//                                 <span className="font-medium">Technical Skills</span>
//                                 <span className="font-bold">{ratings.technicalSkills}/10</span>
//                             </div>
//                             <Progress value={ratings.technicalSkills * 10} className="h-2" />
//                         </div>
//                         <div className="mb-4">
//                             <div className="flex justify-between mb-1">
//                                 <span className="font-medium">Communication</span>
//                                 <span className="font-bold">{ratings.communication}/10</span>
//                             </div>
//                             <Progress value={ratings.communication * 10} className="h-2" />
//                         </div>
//                     </div>
//                     <div>
//                         <div className="mb-4">
//                             <div className="flex justify-between mb-1">
//                                 <span className="font-medium">Problem Solving</span>
//                                 <span className="font-bold">{ratings.problemSolving}/10</span>
//                             </div>
//                             <Progress value={ratings.problemSolving * 10} className="h-2" />
//                         </div>
//                         <div className="mb-4">
//                             <div className="flex justify-between mb-1">
//                                 <span className="font-medium">Experience</span>
//                                 <span className="font-bold">{ratings.experience}/10</span>
//                             </div>
//                             <Progress value={ratings.experience * 10} className="h-2" />
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Summary */}
//             <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
//                 <h2 className="text-xl font-bold mb-4">Interview Summary</h2>
//                 <div className="text-gray-700">
//                     {summary.split('. ').map((sentence, index) => (
//                         sentence.trim() ?
//                             <p key={index} className="mb-2">{sentence.trim()}.</p> :
//                             null
//                     ))}
//                 </div>
//             </div>

//             {/* Interview Questions and Answers */}
//             <div className="bg-white rounded-lg shadow-sm border p-6">
//                 <h2 className="text-xl font-bold mb-4">Interview Questions</h2>
//                 {questions && questions.length > 0 ? (
//                     <div className="space-y-6">
//                         {questions.map((item, index) => (
//                             <div key={index} className="p-4 bg-gray-50 rounded-lg">
//                                 <div className="flex items-start mb-2">
//                                     <span className="bg-gray-200 text-gray-700 text-xs font-medium px-2.5 py-0.5 rounded mr-2">
//                                         {item.type || "Question"}
//                                     </span>
//                                     <h3 className="font-medium text-gray-800">{item.question}</h3>
//                                 </div>
//                                 {item.answer && (
//                                     <div className="pl-4 border-l-2 border-gray-200 mt-2">
//                                         <p className="text-gray-700">{item.answer}</p>
//                                     </div>
//                                 )}
//                             </div>
//                         ))}
//                     </div>
//                 ) : (
//                     <p className="text-gray-500">No interview questions available for this session.</p>
//                 )}
//             </div>
//         </div>
//     )
// }

// export default InterviewComplete



// "use client"

// import { useEffect, useState } from 'react'
// import { useParams } from 'next/navigation'
// import { supabase } from '@/services/SupabaseClient'
// import { Loader2 } from 'lucide-react'
// import { Progress } from '@/components/ui/progress'
// import { Button } from '@/components/ui/button'
// import Link from 'next/link'

// function InterviewComplete() {
//     const [feedback, setFeedback] = useState(null)
//     const [interviewData, setInterviewData] = useState(null)
//     const [loading, setLoading] = useState(true)
//     const { interview_id } = useParams()

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 // Fetch feedback data
//                 const feedbackResponse = await supabase
//                     .from('interview-feedback')
//                     .select('*')
//                     .eq('interview_id', interview_id)
//                     .single()

//                 if (feedbackResponse.error) {
//                     console.error("Error fetching feedback:", feedbackResponse.error)
//                 } else {
//                     console.log("Fetched feedback:", feedbackResponse.data)
//                     setFeedback(feedbackResponse.data)

//                     // Console log the feedback data structure to inspect it
//                     if (feedbackResponse.data?.feedback) {
//                         console.log("FEEDBACK STRUCTURE:", JSON.stringify(feedbackResponse.data.feedback, null, 2))
//                     }
//                 }

//                 // Fetch interview questions data - use UUID comparison
//                 const interviewResponse = await supabase
//                     .from('Interviews')
//                     .select('questionList')
//                     .eq('id', interview_id)
//                     .single()

//                 if (interviewResponse.error) {
//                     console.error("Error fetching interview data:", interviewResponse.error)

//                     // Try alternative approach if UUID doesn't work - attempt by string comparison
//                     const alternativeResponse = await supabase
//                         .from('Interviews')
//                         .select('questionList')
//                         .eq('id', String(interview_id))
//                         .single()

//                     if (alternativeResponse.error) {
//                         console.error("Alternative query also failed:", alternativeResponse.error)
//                     } else {
//                         console.log("Fetched interview data (alternative):", alternativeResponse.data)
//                         setInterviewData(alternativeResponse.data)
//                     }
//                 } else {
//                     console.log("Fetched interview data:", interviewResponse.data)
//                     setInterviewData(interviewResponse.data)
//                 }
//             } catch (error) {
//                 console.error("Exception fetching data:", error)
//             } finally {
//                 setLoading(false)
//             }
//         }

//         fetchData()
//     }, [interview_id])

//     if (loading) {
//         return (
//             <div className="flex items-center justify-center h-screen">
//                 <Loader2 className="animate-spin w-12 h-12 text-primary" />
//             </div>
//         )
//     }

//     if (!feedback) {
//         return (
//             <div className="p-8 text-center">
//                 <h2 className="text-2xl font-bold mb-4">No feedback found</h2>
//                 <p className="mb-6">We couldn't find the interview results for this session.</p>
//                 <Link href="/dashboard">
//                     <Button>Return to Dashboard</Button>
//                 </Link>
//             </div>
//         )
//     }

//     // Access the nested feedback structure
//     const feedbackData = feedback.feedback?.feedback || {
//         rating: {
//             technicalSkills: 0,
//             communication: 0,
//             problemSolving: 0,
//             experience: 0
//         },
//         recommendation: {
//             decision: "No decision recorded",
//             message: "No recommendation message available"
//         },
//         summary: "No summary available."
//     };

//     // Extract rating data safely
//     const ratings = feedbackData.rating || {
//         technicalSkills: 0,
//         communication: 0,
//         problemSolving: 0,
//         experience: 0
//     };

//     const recommendation = feedbackData.recommendation || {
//         decision: "No decision recorded",
//         message: "No recommendation message available"
//     };

//     const summary = feedbackData.summary || "No summary available.";

//     // Check if the conversation data exists in the feedback
//     let conversationData = [];
//     try {
//         if (feedback.feedback?.conversation) {
//             console.log("Conversation data found in feedback");
//             conversationData = feedback.feedback.conversation;
//         }
//     } catch (error) {
//         console.error("Error parsing conversation data:", error);
//     }

//     // Parse interview questions - first try questionList from Interviews table
//     let questions = [];
//     try {
//         // First try to get data from the Interviews table
//         if (interviewData && interviewData.questionList) {
//             console.log("Using questionList from Interviews table");
//             questions = typeof interviewData.questionList === 'string'
//                 ? JSON.parse(interviewData.questionList)
//                 : interviewData.questionList;
//         }
//         // Fall back to looking for question data in the feedback
//         else if (feedback.feedback?.questionList) {
//             console.log("Using questionList from feedback");
//             questions = typeof feedback.feedback.questionList === 'string'
//                 ? JSON.parse(feedback.feedback.questionList)
//                 : feedback.feedback.questionList;
//         }

//         console.log("Parsed questions data:", questions);
//     } catch (error) {
//         console.error("Error parsing questions:", error);
//     }

//     // Calculate average score
//     const totalScore = (
//         ratings.technicalSkills +
//         ratings.communication +
//         ratings.problemSolving +
//         ratings.experience
//     ) / 4;

//     const formattedScore = totalScore.toFixed(1);

//     // Extract Q&A from conversation if available
//     let qaData = [];
//     if (conversationData && conversationData.length > 0) {
//         console.log("Processing conversation data to extract Q&A");

//         let currentQuestion = null;

//         conversationData.forEach(message => {
//             const content = message.content || "";

//             // Simple heuristic: assistant messages that end with ? are likely questions
//             if (message.role === "assistant" && content.trim().endsWith("?")) {
//                 currentQuestion = {
//                     question: content.trim(),
//                     type: "Technical", // Default type
//                     answer: ""
//                 };
//                 qaData.push(currentQuestion);
//             }
//             // User messages following a question are likely answers
//             else if (message.role === "user" && currentQuestion) {
//                 currentQuestion.answer = content.trim();
//                 currentQuestion = null; // Reset current question
//             }
//         });

//         console.log("Extracted Q&A data:", qaData);
//     }

//     // Combine questions from questionList with answers from conversation if possible
//     const finalQuestions = questions.length > 0 ? questions : qaData;

//     return (
//         <div className="p-6 md:p-10 lg:p-20 max-w-6xl mx-auto">
//             <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between">
//                 <div>
//                     <h1 className="text-3xl font-bold">Interview Results</h1>
//                     <p className="text-gray-500 mt-1">Candidate: {feedback.userName}</p>
//                 </div>
//                 <div className="mt-4 md:mt-0">
//                     <Link href="/dashboard">
//                         <Button variant="outline" className="mr-2">Back to Dashboard</Button>
//                     </Link>
//                     <Button>Share Results</Button>
//                 </div>
//             </div>

//             {/* Overall Score Card */}
//             <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
//                 <div className="flex flex-col md:flex-row items-center justify-between">
//                     <div>
//                         <h2 className="text-xl font-bold mb-2">Overall Assessment</h2>
//                         <p className="text-gray-600">Based on technical skills, communication, problem-solving, and experience</p>
//                     </div>
//                     <div className="mt-4 md:mt-0 flex items-center justify-center bg-gray-100 rounded-full p-6 w-24 h-24">
//                         <span className="text-3xl font-bold">{formattedScore}</span>
//                     </div>
//                 </div>
//             </div>

//             {/* Decision Card */}
//             <div className={`p-6 rounded-lg mb-8 border-l-4 shadow-sm ${recommendation.decision.toLowerCase().includes('hire')
//                     ? 'border-l-green-500 bg-green-50'
//                     : 'border-l-amber-500 bg-amber-50'
//                 }`}>
//                 <h2 className="text-xl font-bold mb-2">Recommendation</h2>
//                 <div className="flex flex-col md:flex-row md:items-center justify-between">
//                     <div className="mb-4 md:mb-0">
//                         <span className="font-medium">Decision: </span>
//                         <span className={`font-bold ${recommendation.decision.toLowerCase().includes('hire')
//                                 ? 'text-green-700'
//                                 : 'text-amber-700'
//                             }`}>
//                             {recommendation.decision}
//                         </span>
//                     </div>
//                 </div>
//                 <p className="mt-2 text-gray-700">{recommendation.message}</p>
//             </div>

//             {/* Skills Assessment */}
//             <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
//                 <h2 className="text-xl font-bold mb-4">Skills Assessment</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div>
//                         <div className="mb-4">
//                             <div className="flex justify-between mb-1">
//                                 <span className="font-medium">Technical Skills</span>
//                                 <span className="font-bold">{ratings.technicalSkills}/10</span>
//                             </div>
//                             <Progress value={ratings.technicalSkills * 10} className="h-2" />
//                         </div>
//                         <div className="mb-4">
//                             <div className="flex justify-between mb-1">
//                                 <span className="font-medium">Communication</span>
//                                 <span className="font-bold">{ratings.communication}/10</span>
//                             </div>
//                             <Progress value={ratings.communication * 10} className="h-2" />
//                         </div>
//                     </div>
//                     <div>
//                         <div className="mb-4">
//                             <div className="flex justify-between mb-1">
//                                 <span className="font-medium">Problem Solving</span>
//                                 <span className="font-bold">{ratings.problemSolving}/10</span>
//                             </div>
//                             <Progress value={ratings.problemSolving * 10} className="h-2" />
//                         </div>
//                         <div className="mb-4">
//                             <div className="flex justify-between mb-1">
//                                 <span className="font-medium">Experience</span>
//                                 <span className="font-bold">{ratings.experience}/10</span>
//                             </div>
//                             <Progress value={ratings.experience * 10} className="h-2" />
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Summary */}
//             <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
//                 <h2 className="text-xl font-bold mb-4">Interview Summary</h2>
//                 <div className="text-gray-700">
//                     {summary.split('. ').map((sentence, index) => (
//                         sentence.trim() ?
//                             <p key={index} className="mb-2">{sentence.trim()}.</p> :
//                             null
//                     ))}
//                 </div>
//             </div>

//             {/* Interview Questions and Answers */}
//             <div className="bg-white rounded-lg shadow-sm border p-6">
//                 <h2 className="text-xl font-bold mb-4">Interview Questions</h2>
//                 {finalQuestions && finalQuestions.length > 0 ? (
//                     <div className="space-y-6">
//                         {finalQuestions.map((item, index) => (
//                             <div key={index} className="p-4 bg-gray-50 rounded-lg">
//                                 <div className="flex items-start mb-2">
//                                     <span className="bg-gray-200 text-gray-700 text-xs font-medium px-2.5 py-0.5 rounded mr-2">
//                                         {item.type || "Question"}
//                                     </span>
//                                     <h3 className="font-medium text-gray-800">{item.question}</h3>
//                                 </div>
//                                 {item.answer && (
//                                     <div className="pl-4 border-l-2 border-gray-200 mt-2">
//                                         <p className="text-gray-700">{item.answer}</p>
//                                     </div>
//                                 )}
//                             </div>
//                         ))}
//                     </div>
//                 ) : (
//                     <p className="text-gray-500">No interview questions available for this session.</p>
//                 )}
//             </div>
//         </div>
//     )
// }

// export default InterviewComplete





// "use client"

// import { useEffect, useState } from 'react'
// import { useParams } from 'next/navigation'
// import { supabase } from '@/services/SupabaseClient'
// import { Loader2 } from 'lucide-react'
// import { Progress } from '@/components/ui/progress'
// import { Button } from '@/components/ui/button'
// import Link from 'next/link'

// function InterviewComplete() {
//     const [feedback, setFeedback] = useState(null)
//     const [interviewData, setInterviewData] = useState(null)
//     const [loading, setLoading] = useState(true)
//     const { interview_id } = useParams()

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 // Fetch feedback data
//                 const feedbackResponse = await supabase
//                     .from('interview-feedback')
//                     .select('*')
//                     .eq('interview_id', interview_id)
//                     .single()

//                 if (feedbackResponse.error) {
//                     console.error("Error fetching feedback:", feedbackResponse.error)
//                 } else {
//                     console.log("Fetched feedback:", feedbackResponse.data)
//                     setFeedback(feedbackResponse.data)

//                     // Console log the feedback data structure to inspect it
//                     if (feedbackResponse.data?.feedback) {
//                         console.log("FEEDBACK STRUCTURE:", JSON.stringify(feedbackResponse.data.feedback, null, 2))
//                     }

//                     // Log conversation data if it exists
//                     if (feedbackResponse.data?.conversation) {
//                         console.log("CONVERSATION DATA:", feedbackResponse.data.conversation)
//                     }
//                 }

//                 // Fetch interview questions data - use UUID comparison
//                 const interviewResponse = await supabase
//                     .from('Interviews')
//                     .select('questionList')
//                     .eq('id', interview_id)
//                     .single()

//                 if (interviewResponse.error) {
//                     console.error("Error fetching interview data:", interviewResponse.error)
//                     // Try alternative approach if UUID doesn't work - attempt by string comparison
//                     const alternativeResponse = await supabase
//                         .from('Interviews')
//                         .select('questionList')
//                         .eq('id', String(interview_id))
//                         .single()

//                     if (alternativeResponse.error) {
//                         console.error("Alternative query also failed:", alternativeResponse.error)
//                     } else {
//                         console.log("Fetched interview data (alternative):", alternativeResponse.data)
//                         setInterviewData(alternativeResponse.data)
//                     }
//                 } else {
//                     console.log("Fetched interview data:", interviewResponse.data)
//                     setInterviewData(interviewResponse.data)
//                 }

//             } catch (error) {
//                 console.error("Exception fetching data:", error)
//             } finally {
//                 setLoading(false)
//             }
//         }

//         fetchData()
//     }, [interview_id])

//     if (loading) {
//         return (
//             <div className="flex items-center justify-center h-screen">
//                 <Loader2 className="animate-spin w-12 h-12 text-primary" />
//             </div>
//         )
//     }

//     if (!feedback) {
//         return (
//             <div className="p-8 text-center">
//                 <h2 className="text-2xl font-bold mb-4">No feedback found</h2>
//                 <p className="mb-6">We couldn't find the interview results for this session.</p>
//                 <Link href="/dashboard">
//                     <Button>Return to Dashboard</Button>
//                 </Link>
//             </div>
//         )
//     }

//     // Access the nested feedback structure
//     const feedbackData = feedback.feedback?.feedback || {
//         rating: {
//             technicalSkills: 0,
//             communication: 0,
//             problemSolving: 0,
//             experience: 0
//         },
//         recommendation: {
//             decision: "No decision recorded",
//             message: "No recommendation message available"
//         },
//         summary: "No summary available."
//     };

//     // Extract rating data safely
//     const ratings = feedbackData.rating || {
//         technicalSkills: 0,
//         communication: 0,
//         problemSolving: 0,
//         experience: 0
//     };

//     const recommendation = feedbackData.recommendation || {
//         decision: "No decision recorded",
//         message: "No recommendation message available"
//     };

//     const summary = feedbackData.summary || "No summary available.";

//     // Extract Q&A from conversation if available
//     let qaData = [];

//     // Check if we have conversation data in the feedback
//     if (feedback.conversation && Array.isArray(feedback.conversation)) {
//         console.log("Processing conversation data from dedicated field");
//         let currentQuestion = null;

//         feedback.conversation.forEach(message => {
//             const content = message.content || "";

//             // Simple heuristic: assistant messages that end with ? are likely questions
//             if (message.role === "assistant" && content.trim().includes("?")) {
//                 // Find the last question mark and use everything up to it as the question
//                 const questionEndIndex = content.lastIndexOf("?") + 1;
//                 const questionText = content.substring(0, questionEndIndex).trim();

//                 currentQuestion = {
//                     question: questionText,
//                     type: "Technical", // Default type
//                     answer: ""
//                 };
//                 qaData.push(currentQuestion);
//             }
//             // User messages following a question are likely answers
//             else if (message.role === "user" && currentQuestion && currentQuestion.answer === "") {
//                 currentQuestion.answer = content.trim();
//             }
//         });
//     }
//     // Fall back to checking if conversation exists in the feedback.feedback object
//     else if (feedback.feedback?.conversation && Array.isArray(feedback.feedback.conversation)) {
//         console.log("Processing conversation data from feedback.feedback");
//         let currentQuestion = null;

//         feedback.feedback.conversation.forEach(message => {
//             const content = message.content || "";

//             // Simple heuristic: assistant messages that end with ? are likely questions
//             if (message.role === "assistant" && content.trim().includes("?")) {
//                 // Find the last question mark and use everything up to it as the question
//                 const questionEndIndex = content.lastIndexOf("?") + 1;
//                 const questionText = content.substring(0, questionEndIndex).trim();

//                 currentQuestion = {
//                     question: questionText,
//                     type: "Technical", // Default type
//                     answer: ""
//                 };
//                 qaData.push(currentQuestion);
//             }
//             // User messages following a question are likely answers
//             else if (message.role === "user" && currentQuestion && currentQuestion.answer === "") {
//                 currentQuestion.answer = content.trim();
//             }
//         });
//     }

//     console.log("Extracted Q&A data:", qaData);

//     // Parse interview questions - first try questionList from Interviews table
//     let questions = [];
//     try {
//         // First try to get data from the Interviews table
//         if (interviewData && interviewData.questionList) {
//             console.log("Using questionList from Interviews table");
//             questions = typeof interviewData.questionList === 'string'
//                 ? JSON.parse(interviewData.questionList)
//                 : interviewData.questionList;
//         }
//         // Fall back to looking for question data in the feedback
//         else if (feedback.feedback?.questionList) {
//             console.log("Using questionList from feedback");
//             questions = typeof feedback.feedback.questionList === 'string'
//                 ? JSON.parse(feedback.feedback.questionList)
//                 : feedback.feedback.questionList;
//         }
//         console.log("Parsed questions data:", questions);
//     } catch (error) {
//         console.error("Error parsing questions:", error);
//     }

//     // Calculate average score
//     const totalScore = (
//         ratings.technicalSkills +
//         ratings.communication +
//         ratings.problemSolving +
//         ratings.experience
//     ) / 4;

//     const formattedScore = totalScore.toFixed(1);

//     // Merge questions data with answers if we have both
//     const finalQuestions = mergeQuestionsWithAnswers(questions, qaData);

//     // Function to merge question data with answers from conversation
//     function mergeQuestionsWithAnswers(questions, qaData) {
//         // If we have structured questions but no answers, return the questions
//         if (questions.length > 0 && qaData.length === 0) {
//             return questions;
//         }

//         // If we have answers but no structured questions, return the answers
//         if (questions.length === 0 && qaData.length > 0) {
//             return qaData;
//         }

//         // If we have both, try to match them
//         if (questions.length > 0 && qaData.length > 0) {
//             return questions.map(question => {
//                 // Try to find a matching answer from qaData
//                 const matchingQA = qaData.find(qa =>
//                     qa.question.toLowerCase().includes(question.question.toLowerCase().substring(0, 15)) ||
//                     question.question.toLowerCase().includes(qa.question.toLowerCase().substring(0, 15))
//                 );

//                 if (matchingQA) {
//                     return {
//                         ...question,
//                         answer: matchingQA.answer
//                     };
//                 }

//                 return question;
//             });
//         }

//         return [];
//     }

//     return (
//         <div className="p-6 md:p-10 lg:p-20 max-w-6xl mx-auto">
//             <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between">
//                 <div>
//                     <h1 className="text-3xl font-bold">Interview Results</h1>
//                     <p className="text-gray-500 mt-1">Candidate: {feedback.userName}</p>
//                 </div>
//                 <div className="mt-4 md:mt-0">
//                     <Link href="/dashboard">
//                         <Button variant="outline" className="mr-2">Back to Dashboard</Button>
//                     </Link>
//                     <Button>Share Results</Button>
//                 </div>
//             </div>

//             {/* Overall Score Card */}
//             <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
//                 <div className="flex flex-col md:flex-row items-center justify-between">
//                     <div>
//                         <h2 className="text-xl font-bold mb-2">Overall Assessment</h2>
//                         <p className="text-gray-600">Based on technical skills, communication, problem-solving, and experience</p>
//                     </div>
//                     <div className="mt-4 md:mt-0 flex items-center justify-center bg-gray-100 rounded-full p-6 w-24 h-24">
//                         <span className="text-3xl font-bold">{formattedScore}</span>
//                     </div>
//                 </div>
//             </div>

//             {/* Decision Card */}
//             <div className={`p-6 rounded-lg mb-8 border-l-4 shadow-sm ${recommendation.decision.toLowerCase().includes('hire')
//                 ? 'border-l-green-500 bg-green-50'
//                 : 'border-l-amber-500 bg-amber-50'
//                 }`}>
//                 <h2 className="text-xl font-bold mb-2">Recommendation</h2>
//                 <div className="flex flex-col md:flex-row md:items-center justify-between">
//                     <div className="mb-4 md:mb-0">
//                         <span className="font-medium">Decision: </span>
//                         <span className={`font-bold ${recommendation.decision.toLowerCase().includes('hire')
//                             ? 'text-green-700'
//                             : 'text-amber-700'
//                             }`}>
//                             {recommendation.decision}
//                         </span>
//                     </div>
//                 </div>
//                 <p className="mt-2 text-gray-700">{recommendation.message}</p>
//             </div>

//             {/* Skills Assessment */}
//             <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
//                 <h2 className="text-xl font-bold mb-4">Skills Assessment</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div>
//                         <div className="mb-4">
//                             <div className="flex justify-between mb-1">
//                                 <span className="font-medium">Technical Skills</span>
//                                 <span className="font-bold">{ratings.technicalSkills}/10</span>
//                             </div>
//                             <Progress value={ratings.technicalSkills * 10} className="h-2" />
//                         </div>
//                         <div className="mb-4">
//                             <div className="flex justify-between mb-1">
//                                 <span className="font-medium">Communication</span>
//                                 <span className="font-bold">{ratings.communication}/10</span>
//                             </div>
//                             <Progress value={ratings.communication * 10} className="h-2" />
//                         </div>
//                     </div>
//                     <div>
//                         <div className="mb-4">
//                             <div className="flex justify-between mb-1">
//                                 <span className="font-medium">Problem Solving</span>
//                                 <span className="font-bold">{ratings.problemSolving}/10</span>
//                             </div>
//                             <Progress value={ratings.problemSolving * 10} className="h-2" />
//                         </div>
//                         <div className="mb-4">
//                             <div className="flex justify-between mb-1">
//                                 <span className="font-medium">Experience</span>
//                                 <span className="font-bold">{ratings.experience}/10</span>
//                             </div>
//                             <Progress value={ratings.experience * 10} className="h-2" />
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Summary */}
//             <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
//                 <h2 className="text-xl font-bold mb-4">Interview Summary</h2>
//                 <div className="text-gray-700">
//                     {summary.split('. ').map((sentence, index) => (
//                         sentence.trim() ?
//                             <p key={index} className="mb-2">{sentence.trim()}.</p> :
//                             null
//                     ))}
//                 </div>
//             </div>

//             {/* Interview Questions and Answers */}
//             <div className="bg-white rounded-lg shadow-sm border p-6">
//                 <h2 className="text-xl font-bold mb-4">Interview Questions & Answers</h2>
//                 {finalQuestions && finalQuestions.length > 0 ? (
//                     <div className="space-y-6">
//                         {finalQuestions.map((item, index) => (
//                             <div key={index} className="p-4 bg-gray-50 rounded-lg">
//                                 <div className="flex items-start mb-2">
//                                     <span className="bg-gray-200 text-gray-700 text-xs font-medium px-2.5 py-0.5 rounded mr-2">
//                                         {item.type || "Question"}
//                                     </span>
//                                     <h3 className="font-medium text-gray-800">{item.question}</h3>
//                                 </div>
//                                 {item.answer ? (
//                                     <div className="pl-4 border-l-2 border-gray-200 mt-2">
//                                         <p className="text-gray-700">{item.answer}</p>
//                                     </div>
//                                 ) : (
//                                     <div className="pl-4 border-l-2 border-gray-200 mt-2 text-gray-500 italic">
//                                         <p>No answer recorded</p>
//                                     </div>
//                                 )}
//                             </div>
//                         ))}
//                     </div>
//                 ) : (
//                     <p className="text-gray-500">No interview questions available for this session.</p>
//                 )}
//             </div>
//         </div>
//     )
// }

// export default InterviewComplete





// "use client";

// import { useEffect, useState } from "react";
// import { useParams } from "next/navigation";
// import { supabase } from "@/services/SupabaseClient";
// import { Loader2 } from "lucide-react";
// import { Progress } from "@/components/ui/progress";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";

// function InterviewComplete() {
//     const [feedback, setFeedback] = useState(null);
//     const [interviewData, setInterviewData] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const { interview_id } = useParams();

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 // Fetch feedback and conversation data
//                 const feedbackResponse = await supabase
//                     .from("interview-feedback")
//                     .select("*, conversation")
//                     .eq("interview_id", interview_id)
//                     .single();

//                 if (feedbackResponse.error) {
//                     console.error("Error fetching feedback:", feedbackResponse.error);
//                 } else {
//                     console.log("Fetched feedback:", feedbackResponse.data);
//                     setFeedback(feedbackResponse.data);
//                     if (feedbackResponse.data?.feedback) {
//                         console.log("FEEDBACK STRUCTURE:", JSON.stringify(feedbackResponse.data.feedback, null, 2));
//                     }
//                     if (feedbackResponse.data?.conversation) {
//                         console.log("CONVERSATION DATA:", feedbackResponse.data.conversation);
//                     }
//                 }

//                 // Fetch interview questions data
//                 const interviewResponse = await supabase
//                     .from("Interviews")
//                     .select("questionList")
//                     .eq('interview_id', interview_id)
//                     .single();

//                 if (interviewResponse.error) {
//                     console.error("Error fetching interview data:", interviewResponse.error);
//                     const alternativeResponse = await supabase
//                         .from("Interviews")
//                         .select("questionList")
//                         .eq("id", String(interview_id))
//                         .single();

//                     if (alternativeResponse.error) {
//                         console.error("Alternative query also failed:", alternativeResponse.error);
//                     } else {
//                         console.log("Fetched interview data (alternative):", alternativeResponse.data);
//                         setInterviewData(alternativeResponse.data);
//                     }
//                 } else {
//                     console.log("Fetched interview data:", interviewResponse.data);
//                     setInterviewData(alternativeResponse.data);
//                 }
//             } catch (error) {
//                 console.error("Exception fetching data:", error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchData();
//     }, [interview_id]);

//     if (loading) {
//         return (
//             <div className="flex items-center justify-center h-screen">
//                 <Loader2 className="animate-spin w-12 h-12 text-primary" />
//             </div>
//         );
//     }

//     if (!feedback) {
//         return (
//             <div className="p-8 text-center">
//                 <h2 className="text-2xl font-bold mb-4">No feedback found</h2>
//                 <p className="mb-6">We couldn't find the interview results for this session.</p>
//                 <Link href="/dashboard">
//                     <Button>Return to Dashboard</Button>
//                 </Link>
//             </div>
//         );
//     }

//     // Access the nested feedback structure
//     const feedbackData = feedback.feedback?.feedback || {
//         rating: {
//             technicalSkills: 0,
//             communication: 0,
//             problemSolving: 0,
//             experience: 0,
//         },
//         recommendation: {
//             decision: "No decision recorded",
//             message: "No recommendation message available",
//         },
//         summary: "No summary available.",
//     };

//     const ratings = feedbackData.rating || {
//         technicalSkills: 0,
//         communication: 0,
//         problemSolving: 0,
//         experience: 0,
//     };

//     const recommendation = feedbackData.recommendation || {
//         decision: "No decision recorded",
//         message: "No recommendation message available",
//     };

//     const summary = feedbackData.summary || "No summary available.";

//     // Extract Q&A from conversation
//     let qaData = [];
//     if (feedback.conversation && Array.isArray(feedback.conversation)) {
//         console.log("Processing conversation data from dedicated field");
//         let currentQuestion = null;

//         feedback.conversation.forEach((message) => {
//             const content = message.content || "";
//             if (message.role === "assistant" && content.trim().includes("?")) {
//                 // Extract the question up to the last question mark
//                 const questionEndIndex = content.lastIndexOf("?") + 1;
//                 const questionText = content.substring(0, questionEndIndex).trim();
//                 currentQuestion = {
//                     question: questionText,
//                     type: "Technical", // Default type (can be enhanced with questionList matching)
//                     answer: "",
//                 };
//                 qaData.push(currentQuestion);
//             } else if (message.role === "user" && currentQuestion && currentQuestion.answer === "") {
//                 currentQuestion.answer = content.trim();
//             }
//         });
//     }

//     console.log("Extracted Q&A data:", qaData);

//     // Parse interview questions from Interviews table
//     let questions = [];
//     try {
//         if (interviewData && interviewData.questionList) {
//             console.log("Using questionList from Interviews table");
//             questions = typeof interviewData.questionList === "string"
//                 ? JSON.parse(interviewData.questionList)
//                 : interviewData.questionList;
//         }
//     } catch (error) {
//         console.error("Error parsing questions:", error);
//     }

//     // Calculate average score
//     const totalScore = (
//         ratings.technicalSkills +
//         ratings.communication +
//         ratings.problemSolving +
//         ratings.experience
//     ) / 4;
//     const formattedScore = totalScore.toFixed(1);

//     // Merge questions with answers
//     const finalQuestions = mergeQuestionsWithAnswers(questions, qaData);

//     function mergeQuestionsWithAnswers(questions, qaData) {
//         if (questions.length > 0 && qaData.length === 0) {
//             return questions.map((q) => ({ ...q, answer: "" }));
//         }
//         if (questions.length === 0 && qaData.length > 0) {
//             return qaData;
//         }
//         if (questions.length > 0 && qaData.length > 0) {
//             return questions.map((question, index) => {
//                 // Try to find a matching answer by question content or index
//                 const matchingQA = qaData[index] || qaData.find((qa) =>
//                     qa.question.toLowerCase().includes(question.question.toLowerCase().substring(0, 30))
//                 );
//                 return {
//                     ...question,
//                     answer: matchingQA?.answer || "",
//                 };
//             });
//         }
//         return [];
//     }

//     return (
//         <div className="p-6 md:p-10 lg:p-20 max-w-6xl mx-auto">
//             <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between">
//                 <div>
//                     <h1 className="text-3xl font-bold">Interview Results</h1>
//                     <p className="text-gray-500 mt-1">Candidate: {feedback.userName}</p>
//                 </div>
//                 <div className="mt-4 md:mt-0">
//                     <Link href="/dashboard">
//                         <Button variant="outline" className="mr-2">Back to Dashboard</Button>
//                     </Link>
//                     <Button>Share Results</Button>
//                 </div>
//             </div>

//             {/* Overall Score Card */}
//             <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
//                 <div className="flex flex-col md:flex-row items-center justify-between">
//                     <div>
//                         <h2 className="text-xl font-bold mb-2">Overall Assessment</h2>
//                         <p className="text-gray-600">Based on technical skills, communication, problem-solving, and experience</p>
//                     </div>
//                     <div className="mt-4 md:mt-0 flex items-center justify-center bg-gray-100 rounded-full p-6 w-24 h-24">
//                         <span className="text-3xl font-bold">{formattedScore}</span>
//                     </div>
//                 </div>
//             </div>

//             {/* Decision Card */}
//             <div
//                 className={`p-6 rounded-lg mb-8 border-l-4 shadow-sm ${recommendation.decision.toLowerCase().includes("hire")
//                     ? "border-l-green-500 bg-green-50"
//                     : "border-l-amber-500 bg-amber-50"
//                     }`}
//             >
//                 <h2 className="text-xl font-bold mb-2">Recommendation</h2>
//                 <div className="flex flex-col md:flex-row md:items-center justify-between">
//                     <div className="mb-4 md:mb-0">
//                         <span className="font-medium">Decision: </span>
//                         <span
//                             className={`font-bold ${recommendation.decision.toLowerCase().includes("hire")
//                                 ? "text-green-700"
//                                 : "text-amber-700"
//                                 }`}
//                         >
//                             {recommendation.decision}
//                         </span>
//                     </div>
//                 </div>
//                 <p className="mt-2 text-gray-700">{recommendation.message}</p>
//             </div>

//             {/* Skills Assessment */}
//             <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
//                 <h2 className="text-xl font-bold mb-4">Skills Assessment</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div>
//                         <div className="mb-4">
//                             <div className="flex justify-between mb-1">
//                                 <span className="font-medium">Technical Skills</span>
//                                 <span className="font-bold">{ratings.technicalSkills}/10</span>
//                             </div>
//                             <Progress value={ratings.technicalSkills * 10} className="h-2" />
//                         </div>
//                         <div className="mb-4">
//                             <div className="flex justify-between mb-1">
//                                 <span className="font-medium">Communication</span>
//                                 <span className="font-bold">{ratings.communication}/10</span>
//                             </div>
//                             <Progress value={ratings.communication * 10} className="h-2" />
//                         </div>
//                     </div>
//                     <div>
//                         <div className="mb-4">
//                             <div className="flex justify-between mb-1">
//                                 <span className="font-medium">Problem Solving</span>
//                                 <span className="font-bold">{ratings.problemSolving}/10</span>
//                             </div>
//                             <Progress value={ratings.problemSolving * 10} className="h-2" />
//                         </div>
//                         <div className="mb-4">
//                             <div className="flex justify-between mb-1">
//                                 <span className="font-medium">Experience</span>
//                                 <span className="font-bold">{ratings.experience}/10</span>
//                             </div>
//                             <Progress value={ratings.experience * 10} className="h-2" />
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Summary */}
//             <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
//                 <h2 className="text-xl font-bold mb-4">Interview Summary</h2>
//                 <div className="text-gray-700">
//                     {summary.split(". ").map((sentence, index) =>
//                         sentence.trim() ? (
//                             <p key={index} className="mb-2">{sentence.trim()}.</p>
//                         ) : null
//                     )}
//                 </div>
//             </div>

//             {/* Interview Questions and Answers */}
//             <div className="bg-white rounded-lg shadow-sm border p-6">
//                 <h2 className="text-xl font-bold mb-4">Interview Questions & Answers</h2>
//                 {finalQuestions && finalQuestions.length > 0 ? (
//                     <div className="space-y-6">
//                         {finalQuestions.map((item, index) => (
//                             <div key={index} className="p-4 bg-gray-50 rounded-lg">
//                                 <div className="flex items-start mb-2">
//                                     <span className="bg-gray-200 text-gray-700 text-xs font-medium px-2.5 py-0.5 rounded mr-2">
//                                         {item.type || "Question"}
//                                     </span>
//                                     <h3 className="font-medium text-gray-800">{item.question}</h3>
//                                 </div>
//                                 {item.answer ? (
//                                     <div className="pl-4 border-l-2 border-gray-200 mt-2">
//                                         <p className="text-gray-700">{item.answer}</p>
//                                     </div>
//                                 ) : (
//                                     <div className="pl-4 border-l-2 border-gray-200 mt-2 text-gray-500 italic">
//                                         <p>No answer recorded</p>
//                                     </div>
//                                 )}
//                             </div>
//                         ))}
//                     </div>
//                 ) : (
//                     <p className="text-gray-500">No interview questions available for this session.</p>
//                 )}
//             </div>
//         </div>
//     );
// }

// export default InterviewComplete;
















//THIS ONE WORKS BUT NOT IN SYNC WITH THE ACTUAL QUESTIONS AND ANSWERS
// "use client";

// import { useEffect, useState } from "react";
// import { useParams } from "next/navigation";
// import { supabase } from "@/services/SupabaseClient";
// import { Loader2 } from "lucide-react";
// import { Progress } from "@/components/ui/progress";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";

// function InterviewComplete() {
//     const [feedback, setFeedback] = useState(null);
//     const [interviewData, setInterviewData] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const { interview_id } = useParams();

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 // Fetch feedback and conversation data
//                 const feedbackResponse = await supabase
//                     .from("interview-feedback")
//                     .select("*, conversation")
//                     .eq("interview_id", interview_id)
//                     .single();

//                 if (feedbackResponse.error || !feedbackResponse.data) {
//                     console.error("Error fetching feedback:", feedbackResponse.error);
//                     setFeedback(null);
//                 } else {
//                     console.log("Fetched feedback:", feedbackResponse.data);
//                     setFeedback(feedbackResponse.data);
//                     if (feedbackResponse.data?.feedback) {
//                         console.log("FEEDBACK STRUCTURE:", JSON.stringify(feedbackResponse.data.feedback, null, 2));
//                     }
//                     if (feedbackResponse.data?.conversation) {
//                         console.log("CONVERSATION DATA:", feedbackResponse.data.conversation);
//                     }
//                 }

//                 // Fetch interview questions data
//                 const interviewResponse = await supabase
//                     .from("Interviews")
//                     .select("questionList")
//                     .eq("interview_id", interview_id)
//                     .single();

//                 if (interviewResponse.error) {
//                     console.error("Error fetching interview data:", interviewResponse.error);
//                     setInterviewData(null);
//                 } else {
//                     console.log("Fetched interview data:", interviewResponse.data);
//                     setInterviewData(interviewResponse.data); // FIXED: Using interviewResponse.data instead of interviewData.data
//                 }
//             } catch (error) {
//                 console.error("Exception fetching data:", error);
//                 setFeedback(null);
//                 setInterviewData(null);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchData();
//     }, [interview_id]);

//     if (loading) {
//         return (
//             <div className="flex items-center justify-center h-screen">
//                 <Loader2 className="animate-spin w-12 h-12 text-primary" />
//             </div>
//         );
//     }

//     if (!feedback) {
//         return (
//             <div className="p-8 text-center">
//                 <h2 className="text-2xl font-bold mb-4">No feedback found</h2>
//                 <p className="mb-6">We couldn't find the interview results for this session.</p>
//                 <Link href="/dashboard">
//                     <Button>Return to Dashboard</Button>
//                 </Link>
//             </div>
//         );
//     }

//     // Access the nested feedback structure
//     const feedbackData = feedback.feedback?.feedback || {
//         rating: {
//             technicalSkills: 0,
//             communication: 0,
//             problemSolving: 0,
//             experience: 0,
//         },
//         summary: "No summary available.",
//     };

//     const ratings = feedbackData.rating || {
//         technicalSkills: 0,
//         communication: 0,
//         problemSolving: 0,
//         experience: 0,
//     };

//     // FIXED: Handle recommendation whether it's a string or object
//     let recommendationObj = {
//         decision: "No decision",
//         message: ""
//     };

//     // Check if recommendation is a string or object
//     if (typeof feedbackData.recommendation === 'string') {
//         // If it's a string, extract the first word as the decision
//         const firstSpaceIndex = feedbackData.recommendation.indexOf(' ');
//         if (firstSpaceIndex > 0) {
//             recommendationObj.decision = feedbackData.recommendation.substring(0, firstSpaceIndex);
//             recommendationObj.message = feedbackData.recommendation.substring(firstSpaceIndex + 1);
//         } else {
//             recommendationObj.decision = feedbackData.recommendation;
//         }
//     } else if (typeof feedbackData.recommendation === 'object' && feedbackData.recommendation !== null) {
//         // If it's already an object with decision/message structure
//         recommendationObj = feedbackData.recommendation;
//     }

//     const recommendation = recommendationObj;
//     const summary = feedbackData.summary || "No summary available.";

//     // Extract Q&A from conversation
//     let qaData = [];
//     if (feedback.conversation && Array.isArray(feedback.conversation)) {
//         console.log("Processing conversation data from dedicated field");
//         let currentQuestion = null;

//         feedback.conversation.forEach((message) => {
//             const content = message.content || "";
//             if (message.role === "assistant" && content.trim().includes("?")) {
//                 // Extract the question up to the last question mark
//                 const questionEndIndex = content.lastIndexOf("?") + 1;
//                 const questionText = content.substring(0, questionEndIndex).trim();
//                 currentQuestion = {
//                     question: questionText,
//                     type: "Technical", // Default type (can be enhanced with questionList matching)
//                     answer: "",
//                 };
//                 qaData.push(currentQuestion);
//             } else if (message.role === "user" && currentQuestion && currentQuestion.answer === "") {
//                 currentQuestion.answer = content.trim();
//             }
//         });
//     }

//     console.log("Extracted Q&A data:", qaData);

//     // Parse interview questions from Interviews table
//     let questions = [];
//     try {
//         if (interviewData && interviewData.questionList) {
//             console.log("Raw questionList:", interviewData.questionList);
//             questions = typeof interviewData.questionList === "string"
//                 ? JSON.parse(interviewData.questionList)
//                 : interviewData.questionList;
//             // Validate questions array
//             questions = questions.filter((q) => {
//                 const isValid = q && typeof q === "object" && q.question != null && typeof q.question === "string" && q.question.trim() !== "";
//                 if (!isValid) {
//                     console.warn("Invalid question entry filtered:", q);
//                 }
//                 return isValid;
//             });
//             console.log("Filtered questions:", questions);
//         }
//     } catch (error) {
//         console.error("Error parsing questions:", error);
//         questions = [];
//     }

//     // Calculate average score
//     const totalScore = (
//         ratings.technicalSkills +
//         ratings.communication +
//         ratings.problemSolving +
//         ratings.experience
//     ) / 4;
//     const formattedScore = totalScore.toFixed(1);

//     // Merge questions with answers
//     const finalQuestions = mergeQuestionsWithAnswers(questions, qaData);

//     function mergeQuestionsWithAnswers(questions, qaData) {
//         console.log("Questions before merge:", questions);
//         if (questions.length > 0 && qaData.length === 0) {
//             return questions.map((q) => ({ ...q, answer: "" }));
//         }
//         if (questions.length === 0 && qaData.length > 0) {
//             return qaData;
//         }
//         if (questions.length > 0 && qaData.length > 0) {
//             return questions.map((question, index) => {
//                 // Skip if question is invalid
//                 if (!question || question.question == null || typeof question.question !== "string" || question.question.trim() === "") {
//                     console.warn("Skipping invalid question entry in merge:", question);
//                     return null;
//                 }
//                 // Try to find a matching answer by index first, then by content
//                 let matchingQA = qaData[index];
//                 if (!matchingQA && qaData.some((qa) => qa.question && typeof qa.question === "string")) {
//                     matchingQA = qaData.find((qa) => {
//                         if (!qa.question || typeof qa.question !== "string" || qa.question.trim() === "") {
//                             console.warn("Skipping invalid qa entry:", qa);
//                             return false;
//                         }
//                         // Simplified matching: check if question text is included
//                         return qa.question.toLowerCase().includes(
//                             question.question.toLowerCase().substring(0, 30)
//                         );
//                     });
//                 }
//                 return {
//                     ...question,
//                     answer: matchingQA?.answer || "",
//                 };
//             }).filter((q) => q !== null); // Remove null entries
//         }
//         return [];
//     }

//     return (
//         <div className="p-6 md:p-10 lg:p-20 max-w-6xl mx-auto">
//             <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between">
//                 <div>
//                     <h1 className="text-3xl font-bold">Interview Results</h1>
//                     <p className="text-gray-500 mt-1">Candidate: {feedback.userName}</p>
//                 </div>
//                 <div className="mt-4 md:mt-0">
//                     <Link href="/dashboard">
//                         <Button variant="outline" className="mr-2">Back to Dashboard</Button>
//                     </Link>
//                     <Button>Share Results</Button>
//                 </div>
//             </div>

//             {/* Overall Score Card */}
//             <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
//                 <div className="flex flex-col md:flex-row items-center justify-between">
//                     <div>
//                         <h2 className="text-xl font-bold mb-2">Overall Assessment</h2>
//                         <p className="text-gray-600">Based on technical skills, communication, problem-solving, and experience</p>
//                     </div>
//                     <div className="mt-4 md:mt-0 flex items-center justify-center bg-gray-100 rounded-full p-6 w-24 h-24">
//                         <span className="text-3xl font-bold">{formattedScore}</span>
//                     </div>
//                 </div>
//             </div>

//             {/* Decision Card */}
//             <div
//                 className={`p-6 rounded-lg mb-8 border-l-4 shadow-sm ${recommendation.decision && recommendation.decision.toLowerCase().includes("hire")
//                     ? "border-l-green-500 bg-green-50"
//                     : "border-l-amber-500 bg-amber-50"
//                     }`}
//             >
//                 <h2 className="text-xl font-bold mb-2">Recommendation</h2>
//                 <div className="flex flex-col md:flex-row md:items-center justify-between">
//                     <div className="mb-4 md:mb-0">
//                         <span className="font-medium">Decision: </span>
//                         <span
//                             className={`font-bold ${recommendation.decision && recommendation.decision.toLowerCase().includes("hire")
//                                 ? "text-green-700"
//                                 : "text-amber-700"
//                                 }`}
//                         >
//                             {recommendation.decision}
//                         </span>
//                     </div>
//                 </div>
//                 <p className="mt-2 text-gray-700">{recommendation.message}</p>
//             </div>

//             {/* Skills Assessment */}
//             <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
//                 <h2 className="text-xl font-bold mb-4">Skills Assessment</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div>
//                         <div className="mb-4">
//                             <div className="flex justify-between mb-1">
//                                 <span className="font-medium">Technical Skills</span>
//                                 <span className="font-bold">{ratings.technicalSkills}/5</span>
//                             </div>
//                             <Progress value={ratings.technicalSkills * 20} className="h-2" />
//                         </div>
//                         <div className="mb-4">
//                             <div className="flex justify-between mb-1">
//                                 <span className="font-medium">Communication</span>
//                                 <span className="font-bold">{ratings.communication}/5</span>
//                             </div>
//                             <Progress value={ratings.communication * 20} className="h-2" />
//                         </div>
//                     </div>
//                     <div>
//                         <div className="mb-4">
//                             <div className="flex justify-between mb-1">
//                                 <span className="font-medium">Problem Solving</span>
//                                 <span className="font-bold">{ratings.problemSolving}/5</span>
//                             </div>
//                             <Progress value={ratings.problemSolving * 20} className="h-2" />
//                         </div>
//                         <div className="mb-4">
//                             <div className="flex justify-between mb-1">
//                                 <span className="font-medium">Experience</span>
//                                 <span className="font-bold">{ratings.experience}/5</span>
//                             </div>
//                             <Progress value={ratings.experience * 20} className="h-2" />
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Summary */}
//             <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
//                 <h2 className="text-xl font-bold mb-4">Interview Summary</h2>
//                 <div className="text-gray-700">
//                     {summary.split(". ").map((sentence, index) =>
//                         sentence.trim() ? (
//                             <p key={index} className="mb-2">{sentence.trim()}.</p>
//                         ) : null
//                     )}
//                 </div>
//             </div>

//             {/* Interview Questions and Answers */}
//             <div className="bg-white rounded-lg shadow-sm border p-6">
//                 <h2 className="text-xl font-bold mb-4">Interview Questions & Answers</h2>
//                 {finalQuestions && finalQuestions.length > 0 ? (
//                     <div className="space-y-6">
//                         {finalQuestions.map((item, index) => (
//                             <div key={index} className="p-4 bg-gray-50 rounded-lg">
//                                 <div className="flex items-start mb-2">
//                                     <span className="bg-gray-200 text-gray-700 text-xs font-medium px-2.5 py-0.5 rounded mr-2">
//                                         {item.type || "Question"}
//                                     </span>
//                                     <h3 className="font-medium text-gray-800">{item.question}</h3>
//                                 </div>
//                                 {item.answer ? (
//                                     <div className="pl-4 border-l-2 border-gray-200 mt-2">
//                                         <p className="text-gray-700">{item.answer}</p>
//                                     </div>
//                                 ) : (
//                                     <div className="pl-4 border-l-2 border-gray-200 mt-2 text-gray-500 italic">
//                                         <p>No answer recorded</p>
//                                     </div>
//                                 )}
//                             </div>
//                         ))}
//                     </div>
//                 ) : (
//                     <p className="text-gray-500">No interview questions available for this session.</p>
//                 )}
//             </div>
//         </div>
//     );
// }

// export default InterviewComplete;


//THIS VERSION WORKS NICELY +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// "use client";

// import { useEffect, useState } from "react";
// import { useParams } from "next/navigation";
// import { supabase } from "@/services/SupabaseClient";
// import { Loader2 } from "lucide-react";
// import { Progress } from "@/components/ui/progress";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";

// function InterviewComplete() {
//     const [feedback, setFeedback] = useState(null);
//     const [interviewData, setInterviewData] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [qaData, setQaData] = useState([]);
//     const { interview_id } = useParams();

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 // Fetch feedback and conversation data
//                 const feedbackResponse = await supabase
//                     .from("interview-feedback")
//                     .select("*, conversation")
//                     .eq("interview_id", interview_id)
//                     .single();

//                 if (feedbackResponse.error || !feedbackResponse.data) {
//                     console.error("Error fetching feedback:", feedbackResponse.error);
//                     setFeedback(null);
//                 } else {
//                     console.log("Fetched feedback:", feedbackResponse.data);
//                     setFeedback(feedbackResponse.data);

//                     // Extract Q&A pairs from the conversation
//                     if (feedbackResponse.data?.conversation) {
//                         const extractedQA = extractQAPairs(feedbackResponse.data.conversation);
//                         setQaData(extractedQA);
//                     }
//                 }

//                 // Fetch interview questions data
//                 const interviewResponse = await supabase
//                     .from("Interviews")
//                     .select("questionList")
//                     .eq("interview_id", interview_id)
//                     .single();

//                 if (interviewResponse.error) {
//                     console.error("Error fetching interview data:", interviewResponse.error);
//                     setInterviewData(null);
//                 } else {
//                     console.log("Fetched interview data:", interviewResponse.data);
//                     setInterviewData(interviewResponse.data);
//                 }
//             } catch (error) {
//                 console.error("Exception fetching data:", error);
//                 setFeedback(null);
//                 setInterviewData(null);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchData();
//     }, [interview_id]);

//     // Extract Q&A from conversation data more simply
//     const extractQAPairs = (conversation) => {
//         const qaData = [];

//         // Find the first assistant message (after system) to skip intro
//         let startIndex = 0;
//         for (let i = 0; i < conversation.length; i++) {
//             if (conversation[i].role === "assistant") {
//                 startIndex = i;
//                 break;
//             }
//         }

//         for (let i = startIndex; i < conversation.length - 1; i++) {
//             // Look for assistant messages that contain questions
//             if (conversation[i].role === "assistant") {
//                 const questionContent = conversation[i].content.trim();

//                 // Find the next user response
//                 let userResponseIndex = -1;
//                 for (let j = i + 1; j < conversation.length; j++) {
//                     if (conversation[j].role === "user") {
//                         userResponseIndex = j;
//                         break;
//                     }
//                 }

//                 // If we found a user response and the assistant's message contains a question
//                 if (userResponseIndex !== -1 && questionContent.includes('?')) {
//                     const answerContent = conversation[userResponseIndex].content.trim();

//                     // Extract the main question part (up to the first question mark)
//                     const questionEndIndex = questionContent.indexOf('?') + 1;
//                     let mainQuestion = questionContent.substring(0, questionEndIndex).trim();

//                     // If the question is too long or contains intro text, try to extract just the core question
//                     if (mainQuestion.length > 100 || !mainQuestion.endsWith('?')) {
//                         // Look for the last sentence with a question mark
//                         const sentences = questionContent.split(/(?<=[.!?])\s+/);
//                         for (let s = sentences.length - 1; s >= 0; s--) {
//                             if (sentences[s].includes('?')) {
//                                 mainQuestion = sentences[s].trim();
//                                 break;
//                             }
//                         }
//                     }

//                     // Only add real questions (not conversational remarks)
//                     if (mainQuestion.length > 10 && !mainQuestion.toLowerCase().startsWith("hi") &&
//                         !mainQuestion.toLowerCase().startsWith("hello") && !mainQuestion.toLowerCase().startsWith("great")) {
//                         qaData.push({
//                             question: mainQuestion,
//                             answer: answerContent,
//                             type: 'Technical' // Default type
//                         });
//                     }

//                     // Move to the user response so we don't process it again
//                     i = userResponseIndex;
//                 }
//             }
//         }

//         return qaData;
//     };

//     // Match extracted Q&A with predefined questions if needed
//     const matchWithPredefinedQuestions = () => {
//         if (!interviewData?.questionList || !qaData.length) return qaData;

//         let questions = [];
//         try {
//             questions = typeof interviewData.questionList === "string"
//                 ? JSON.parse(interviewData.questionList)
//                 : interviewData.questionList;
//         } catch (error) {
//             console.error("Error parsing questions:", error);
//             return qaData;
//         }

//         // Try to match each Q&A pair with a predefined question to get the correct type
//         return qaData.map(qa => {
//             // Find a matching predefined question
//             const matchedQuestion = questions.find(predefined => {
//                 return qa.question.toLowerCase().includes(predefined.question.toLowerCase().substring(0, 30));
//             });

//             if (matchedQuestion) {
//                 return {
//                     ...qa,
//                     question: matchedQuestion.question, // Use the cleaner predefined question text
//                     type: matchedQuestion.type || 'Technical'
//                 };
//             }

//             return qa;
//         });
//     };

//     if (loading) {
//         return (
//             <div className="flex items-center justify-center h-screen">
//                 <Loader2 className="animate-spin w-12 h-12 text-primary" />
//             </div>
//         );
//     }

//     if (!feedback) {
//         return (
//             <div className="p-8 text-center">
//                 <h2 className="text-2xl font-bold mb-4">No feedback found</h2>
//                 <p className="mb-6">We couldn't find the interview results for this session.</p>
//                 <Link href="/dashboard">
//                     <Button>Return to Dashboard</Button>
//                 </Link>
//             </div>
//         );
//     }

//     // Access the nested feedback structure
//     const feedbackData = feedback.feedback?.feedback || {
//         rating: {
//             technicalSkills: 0,
//             communication: 0,
//             problemSolving: 0,
//             experience: 0,
//         },
//         summary: "No summary available.",
//     };

//     const ratings = feedbackData.rating || {
//         technicalSkills: 0,
//         communication: 0,
//         problemSolving: 0,
//         experience: 0,
//     };

//     // Handle recommendation whether it's a string or object
//     let recommendationObj = {
//         decision: "No decision",
//         message: ""
//     };

//     // Check if recommendation is a string or object
//     if (typeof feedbackData.recommendation === 'string') {
//         // If it's a string, extract the first word as the decision
//         const firstSpaceIndex = feedbackData.recommendation.indexOf(' ');
//         if (firstSpaceIndex > 0) {
//             recommendationObj.decision = feedbackData.recommendation.substring(0, firstSpaceIndex);
//             recommendationObj.message = feedbackData.recommendation.substring(firstSpaceIndex + 1);
//         } else {
//             recommendationObj.decision = feedbackData.recommendation;
//         }
//     } else if (typeof feedbackData.recommendation === 'object' && feedbackData.recommendation !== null) {
//         // If it's already an object with decision/message structure
//         recommendationObj = feedbackData.recommendation;
//     }

//     const recommendation = recommendationObj;
//     const summary = feedbackData.summary || "No summary available.";

//     // Get final Q&A pairs with matching from predefined questions if available
//     const finalQuestions = matchWithPredefinedQuestions();

//     // Calculate average score
//     const totalScore = (
//         ratings.technicalSkills +
//         ratings.communication +
//         ratings.problemSolving +
//         ratings.experience
//     ) / 4;

//     const formattedScore = totalScore.toFixed(1);

//     return (
//         <div className="p-6 md:p-10 lg:p-20 max-w-6xl mx-auto">
//             <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between">
//                 <div>
//                     <h1 className="text-3xl font-bold">Interview Results</h1>
//                     <p className="text-gray-500 mt-1">Candidate: {feedback.userName}</p>
//                 </div>
//                 <div className="mt-4 md:mt-0">
//                     <Link href="/dashboard">
//                         <Button variant="outline" className="mr-2">Back to Dashboard</Button>
//                     </Link>
//                     <Button>Share Results</Button>
//                 </div>
//             </div>

//             {/* Overall Score Card */}
//             <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
//                 <div className="flex flex-col md:flex-row items-center justify-between">
//                     <div>
//                         <h2 className="text-xl font-bold mb-2">Overall Assessment</h2>
//                         <p className="text-gray-600">Based on technical skills, communication, problem-solving, and experience</p>
//                     </div>
//                     <div className="mt-4 md:mt-0 flex items-center justify-center bg-gray-100 rounded-full p-6 w-24 h-24">
//                         <span className="text-3xl font-bold">{formattedScore}</span>
//                     </div>
//                 </div>
//             </div>

//             {/* Decision Card */}
//             <div
//                 className={`p-6 rounded-lg mb-8 border-l-4 shadow-sm ${recommendation.decision && recommendation.decision.toLowerCase().includes("hire")
//                         ? "border-l-green-500 bg-green-50"
//                         : "border-l-amber-500 bg-amber-50"
//                     }`}
//             >
//                 <h2 className="text-xl font-bold mb-2">Recommendation</h2>
//                 <div className="flex flex-col md:flex-row md:items-center justify-between">
//                     <div className="mb-4 md:mb-0">
//                         <span className="font-medium">Decision: </span>
//                         <span
//                             className={`font-bold ${recommendation.decision && recommendation.decision.toLowerCase().includes("hire")
//                                     ? "text-green-700"
//                                     : "text-amber-700"
//                                 }`}
//                         >
//                             {recommendation.decision}
//                         </span>
//                     </div>
//                 </div>
//                 <p className="mt-2 text-gray-700">{recommendation.message}</p>
//             </div>

//             {/* Skills Assessment */}
//             <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
//                 <h2 className="text-xl font-bold mb-4">Skills Assessment</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div>
//                         <div className="mb-4">
//                             <div className="flex justify-between mb-1">
//                                 <span className="font-medium">Technical Skills</span>
//                                 <span className="font-bold">{ratings.technicalSkills}/5</span>
//                             </div>
//                             <Progress value={ratings.technicalSkills * 20} className="h-2" />
//                         </div>
//                         <div className="mb-4">
//                             <div className="flex justify-between mb-1">
//                                 <span className="font-medium">Communication</span>
//                                 <span className="font-bold">{ratings.communication}/5</span>
//                             </div>
//                             <Progress value={ratings.communication * 20} className="h-2" />
//                         </div>
//                     </div>
//                     <div>
//                         <div className="mb-4">
//                             <div className="flex justify-between mb-1">
//                                 <span className="font-medium">Problem Solving</span>
//                                 <span className="font-bold">{ratings.problemSolving}/5</span>
//                             </div>
//                             <Progress value={ratings.problemSolving * 20} className="h-2" />
//                         </div>
//                         <div className="mb-4">
//                             <div className="flex justify-between mb-1">
//                                 <span className="font-medium">Experience</span>
//                                 <span className="font-bold">{ratings.experience}/5</span>
//                             </div>
//                             <Progress value={ratings.experience * 20} className="h-2" />
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Summary */}
//             <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
//                 <h2 className="text-xl font-bold mb-4">Interview Summary</h2>
//                 <div className="text-gray-700">
//                     {summary.split(". ").map((sentence, index) =>
//                         sentence.trim() ? (
//                             <p key={index} className="mb-2">{sentence.trim()}.</p>
//                         ) : null
//                     )}
//                 </div>
//             </div>

//             {/* Interview Questions and Answers */}
//             <div className="bg-white rounded-lg shadow-sm border p-6">
//                 <h2 className="text-xl font-bold mb-4">Interview Questions & Answers</h2>
//                 {finalQuestions && finalQuestions.length > 0 ? (
//                     <div className="space-y-6">
//                         {finalQuestions.map((item, index) => (
//                             <div key={index} className="p-4 bg-gray-50 rounded-lg">
//                                 <div className="flex items-start mb-2">
//                                     <span className="bg-gray-200 text-gray-700 text-xs font-medium px-2.5 py-0.5 rounded mr-2">
//                                         {item.type || "Question"}
//                                     </span>
//                                     <h3 className="font-medium text-gray-800">{item.question}</h3>
//                                 </div>
//                                 {item.answer ? (
//                                     <div className="pl-4 border-l-2 border-gray-200 mt-2">
//                                         <p className="text-gray-700">{item.answer}</p>
//                                     </div>
//                                 ) : (
//                                     <div className="pl-4 border-l-2 border-gray-200 mt-2 text-gray-500 italic">
//                                         <p>No answer recorded</p>
//                                     </div>
//                                 )}
//                             </div>
//                         ))}
//                     </div>
//                 ) : (
//                     <p className="text-gray-500">No interview questions available for this session.</p>
//                 )}
//             </div>
//         </div>
//     );
// }

// export default InterviewComplete;








// THIS ONE WORKS WELL TOO++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// "use client";

// import { useEffect, useState } from "react";
// import { useParams } from "next/navigation";
// import { supabase } from "@/services/SupabaseClient";
// import { Loader2 } from "lucide-react";
// import { Progress } from "@/components/ui/progress";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";

// function InterviewComplete() {
//     const [feedback, setFeedback] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const { interview_id } = useParams();

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 // Fetch feedback and conversation data
//                 const feedbackResponse = await supabase
//                     .from("interview-feedback")
//                     .select("*, conversation")
//                     .eq("interview_id", interview_id)
//                     .single();

//                 if (feedbackResponse.error || !feedbackResponse.data) {
//                     console.error("Error fetching feedback:", feedbackResponse.error);
//                     setFeedback(null);
//                 } else {
//                     console.log("Fetched feedback:", feedbackResponse.data);
//                     setFeedback(feedbackResponse.data);
//                 }
//             } catch (error) {
//                 console.error("Exception fetching data:", error);
//                 setFeedback(null);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchData();
//     }, [interview_id]);

//     if (loading) {
//         return (
//             <div className="flex items-center justify-center h-screen">
//                 <Loader2 className="animate-spin w-12 h-12 text-primary" />
//             </div>
//         );
//     }

//     if (!feedback) {
//         return (
//             <div className="p-8 text-center">
//                 <h2 className="text-2xl font-bold mb-4">No feedback found</h2>
//                 <p className="mb-6">We couldn't find the interview results for this session.</p>
//                 <Link href="/dashboard">
//                     <Button>Return to Dashboard</Button>
//                 </Link>
//             </div>
//         );
//     }

//     // Access the nested feedback structure
//     const feedbackData = feedback.feedback?.feedback || {
//         rating: {
//             technicalSkills: 0,
//             communication: 0,
//             problemSolving: 0,
//             experience: 0,
//         },
//         summary: "No summary available.",
//     };

//     const ratings = feedbackData.rating || {
//         technicalSkills: 0,
//         communication: 0,
//         problemSolving: 0,
//         experience: 0,
//     };

//     // Handle recommendation
//     let recommendationObj = {
//         decision: "No decision",
//         message: "",
//     };
//     if (typeof feedbackData.recommendation === "string") {
//         const firstSpaceIndex = feedbackData.recommendation.indexOf(" ");
//         if (firstSpaceIndex > 0) {
//             recommendationObj.decision = feedbackData.recommendation.substring(0, firstSpaceIndex);
//             recommendationObj.message = feedbackData.recommendation.substring(firstSpaceIndex + 1);
//         } else {
//             recommendationObj.decision = feedbackData.recommendation;
//         }
//     } else if (typeof feedbackData.recommendation === "object" && feedbackData.recommendation !== null) {
//         recommendationObj = feedbackData.recommendation;
//     }

//     const recommendation = recommendationObj;
//     const summary = feedbackData.summary || "No summary available.";

//     // Extract Q&A from conversation
//     let qaData = [];
//     if (feedback.conversation && Array.isArray(feedback.conversation)) {
//         console.log("Processing conversation data from dedicated field");
//         let currentQuestion = null;

//         feedback.conversation.forEach((message, index) => {
//             const content = message.content || "";
//             if (message.role === "assistant" && content.trim().includes("?")) {
//                 // Skip introductory questions like "Hi, Wesley. How are you?"
//                 if (content.includes("How are you?") && content.includes("Ready for your interview")) {
//                     return;
//                 }
//                 // Extract the question up to the last question mark
//                 const questionEndIndex = content.lastIndexOf("?") + 1;
//                 const questionText = content.substring(0, questionEndIndex).trim();
//                 currentQuestion = {
//                     question: questionText,
//                     type: "Technical", // Default type; can be enhanced with questionList matching
//                     answer: "",
//                 };
//                 qaData.push(currentQuestion);
//             } else if (message.role === "user" && currentQuestion && currentQuestion.answer === "") {
//                 currentQuestion.answer = content.trim();
//             }
//         });

//         // Filter out incomplete Q&A pairs (e.g., questions without answers)
//         qaData = qaData.filter((qa) => qa.answer !== "");
//     }

//     console.log("Extracted Q&A data:", qaData);

//     // Calculate average score
//     const totalScore = (
//         ratings.technicalSkills +
//         ratings.communication +
//         ratings.problemSolving +
//         ratings.experience
//     ) / 4;
//     const formattedScore = totalScore.toFixed(1);

//     return (
//         <div className="p-6 md:p-10 lg:p-20 max-w-6xl mx-auto">
//             <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between">
//                 <div>
//                     <h1 className="text-3xl font-bold">Interview Results</h1>
//                     <p className="text-gray-500 mt-1">Candidate: {feedback.userName}</p>
//                 </div>
//                 <div className="mt-4 md:mt-0">
//                     <Link href="/dashboard">
//                         <Button variant="outline" className="mr-2">Back to Dashboard</Button>
//                     </Link>
//                     <Button>Share Results</Button>
//                 </div>
//             </div>

//             {/* Overall Score Card */}
//             <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
//                 <div className="flex flex-col md:flex-row items-center justify-between">
//                     <div>
//                         <h2 className="text-xl font-bold mb-2">Overall Assessment</h2>
//                         <p className="text-gray-600">Based on technical skills, communication, problem-solving, and experience</p>
//                     </div>
//                     <div className="mt-4 md:mt-0 flex items-center justify-center bg-gray-100 rounded-full p-6 w-24 h-24">
//                         <span className="text-3xl font-bold">{formattedScore}</span>
//                     </div>
//                 </div>
//             </div>

//             {/* Decision Card */}
//             <div
//                 className={`p-6 rounded-lg mb-8 border-l-4 shadow-sm ${recommendation.decision && recommendation.decision.toLowerCase().includes("hire")
//                         ? "border-l-green-500 bg-green-50"
//                         : "border-l-amber-500 bg-amber-50"
//                     }`}
//             >
//                 <h2 className="text-xl font-bold mb-2">Recommendation</h2>
//                 <div className="flex flex-col md:flex-row md:items-center justify-between">
//                     <div className="mb-4 md:mb-0">
//                         <span className="font-medium">Decision: </span>
//                         <span
//                             className={`font-bold ${recommendation.decision && recommendation.decision.toLowerCase().includes("hire")
//                                     ? "text-green-700"
//                                     : "text-amber-700"
//                                 }`}
//                         >
//                             {recommendation.decision}
//                         </span>
//                     </div>
//                 </div>
//                 <p className="mt-2 text-gray-700">{recommendation.message}</p>
//             </div>

//             {/* Skills Assessment */}
//             <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
//                 <h2 className="text-xl font-bold mb-4">Skills Assessment</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div>
//                         <div className="mb-4">
//                             <div className="flex justify-between mb-1">
//                                 <span className="font-medium">Technical Skills</span>
//                                 <span className="font-bold">{ratings.technicalSkills}/5</span>
//                             </div>
//                             <Progress value={ratings.technicalSkills * 20} className="h-2" />
//                         </div>
//                         <div className="mb-4">
//                             <div className="flex justify-between mb-1">
//                                 <span className="font-medium">Communication</span>
//                                 <span className="font-bold">{ratings.communication}/5</span>
//                             </div>
//                             <Progress value={ratings.communication * 20} className="h-2" />
//                         </div>
//                     </div>
//                     <div>
//                         <div className="mb-4">
//                             <div className="flex justify-between mb-1">
//                                 <span className="font-medium">Problem Solving</span>
//                                 <span className="font-bold">{ratings.problemSolving}/5</span>
//                             </div>
//                             <Progress value={ratings.problemSolving * 20} className="h-2" />
//                         </div>
//                         <div className="mb-4">
//                             <div className="flex justify-between mb-1">
//                                 <span className="font-medium">Experience</span>
//                                 <span className="font-bold">{ratings.experience}/5</span>
//                             </div>
//                             <Progress value={ratings.experience * 20} className="h-2" />
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Summary */}
//             <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
//                 <h2 className="text-xl font-bold mb-4">Interview Summary</h2>
//                 <div className="text-gray-700">
//                     {summary.split(". ").map((sentence, index) =>
//                         sentence.trim() ? (
//                             <p key={index} className="mb-2">{sentence.trim()}.</p>
//                         ) : null
//                     )}
//                 </div>
//             </div>

//             {/* Interview Questions and Answers */}
//             <div className="bg-white rounded-lg shadow-sm border p-6">
//                 <h2 className="text-xl font-bold mb-4">Interview Questions & Answers</h2>
//                 {qaData && qaData.length > 0 ? (
//                     <div className="space-y-6">
//                         {qaData.map((item, index) => (
//                             <div key={index} className="p-4 bg-gray-50 rounded-lg">
//                                 <div className="flex items-start mb-2">
//                                     <span className="bg-gray-200 text-gray-700 text-xs font-medium px-2.5 py-0.5 rounded mr-2">
//                                         {item.type}
//                                     </span>
//                                     <h3 className="font-medium text-gray-800">{item.question}</h3>
//                                 </div>
//                                 <div className="pl-4 border-l-2 border-gray-200 mt-2">
//                                     <p className="text-gray-700">{item.answer}</p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 ) : (
//                     <p className="text-gray-500">No interview questions available for this session.</p>
//                 )}
//             </div>
//         </div>
//     );
// }

// export default InterviewComplete;


//DISPLAYING THE WHOLE CONVERSATION ++++++++++++++++++++++++++++++++++++++

// "use client";

// import { useEffect, useState } from "react";
// import { useParams } from "next/navigation";
// import { supabase } from "@/services/SupabaseClient";
// import { Loader2 } from "lucide-react";
// import { Progress } from "@/components/ui/progress";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";

// function InterviewComplete() {
//     const [feedback, setFeedback] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const { interview_id } = useParams();

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 // Fetch feedback and conversation data
//                 const feedbackResponse = await supabase
//                     .from("interview-feedback")
//                     .select("*, conversation")
//                     .eq("interview_id", interview_id)
//                     .single();

//                 if (feedbackResponse.error || !feedbackResponse.data) {
//                     console.error("Error fetching feedback:", feedbackResponse.error);
//                     setFeedback(null);
//                 } else {
//                     console.log("Fetched feedback:", feedbackResponse.data);
//                     setFeedback(feedbackResponse.data);
//                 }
//             } catch (error) {
//                 console.error("Exception fetching data:", error);
//                 setFeedback(null);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchData();
//     }, [interview_id]);

//     if (loading) {
//         return (
//             <div className="flex items-center justify-center h-screen">
//                 <Loader2 className="animate-spin w-12 h-12 text-primary" />
//             </div>
//         );
//     }

//     if (!feedback) {
//         return (
//             <div className="p-8 text-center">
//                 <h2 className="text-2xl font-bold mb-4">No feedback found</h2>
//                 <p className="mb-6">We couldn't find the interview results for this session.</p>
//                 <Link href="/dashboard">
//                     <Button>Return to Dashboard</Button>
//                 </Link>
//             </div>
//         );
//     }

//     // Access the nested feedback structure
//     const feedbackData = feedback.feedback?.feedback || {
//         rating: {
//             technicalSkills: 0,
//             communication: 0,
//             problemSolving: 0,
//             experience: 0,
//         },
//         summary: "No summary available.",
//     };

//     const ratings = feedbackData.rating || {
//         technicalSkills: 0,
//         communication: 0,
//         problemSolving: 0,
//         experience: 0,
//     };

//     // Handle recommendation
//     let recommendationObj = {
//         decision: "No decision",
//         message: "",
//     };
//     if (typeof feedbackData.recommendation === "string") {
//         const firstSpaceIndex = feedbackData.recommendation.indexOf(" ");
//         if (firstSpaceIndex > 0) {
//             recommendationObj.decision = feedbackData.recommendation.substring(0, firstSpaceIndex);
//             recommendationObj.message = feedbackData.recommendation.substring(firstSpaceIndex + 1);
//         } else {
//             recommendationObj.decision = feedbackData.recommendation;
//         }
//     } else if (typeof feedbackData.recommendation === "object" && feedbackData.recommendation !== null) {
//         recommendationObj = feedbackData.recommendation;
//     }

//     const recommendation = recommendationObj;
//     const summary = feedbackData.summary || "No summary available.";

//     // Process conversation for display
//     let conversationData = [];
//     if (feedback.conversation && Array.isArray(feedback.conversation)) {
//         console.log("Processing conversation data from dedicated field");
//         conversationData = feedback.conversation
//             .filter((message) => message.role !== "system" && message.content?.trim()) // Exclude system messages and empty content
//             .map((message) => ({
//                 role: message.role, // 'assistant' or 'user'
//                 content: message.content.trim(),
//                 type: message.role === "assistant" && message.content.includes("?") ? "Question" : "Response", // Optional: Label questions
//             }));
//     }

//     console.log("Processed conversation data:", conversationData);

//     // Calculate average score
//     const totalScore = (
//         ratings.technicalSkills +
//         ratings.communication +
//         ratings.problemSolving +
//         ratings.experience
//     ) / 4;
//     const formattedScore = totalScore.toFixed(1);

//     return (
//         <div className="p-6 md:p-10 lg:p-20 max-w-6xl mx-auto">
//             <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between">
//                 <div>
//                     <h1 className="text-3xl font-bold">Interview Results</h1>
//                     <p className="text-gray-500 mt-1">Candidate: {feedback.userName}</p>
//                 </div>
//                 <div className="mt-4 md:mt-0">
//                     <Link href="/dashboard">
//                         <Button variant="outline" className="mr-2">Back to Dashboard</Button>
//                     </Link>
//                     <Button>Share Results</Button>
//                 </div>
//             </div>

//             {/* Overall Score Card */}
//             <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
//                 <div className="flex flex-col md:flex-row items-center justify-between">
//                     <div>
//                         <h2 className="text-xl font-bold mb-2">Overall Assessment</h2>
//                         <p className="text-gray-600">Based on technical skills, communication, problem-solving, and experience</p>
//                     </div>
//                     <div className="mt-4 md:mt-0 flex items-center justify-center bg-gray-100 rounded-full p-6 w-24 h-24">
//                         <span className="text-3xl font-bold">{formattedScore}</span>
//                     </div>
//                 </div>
//             </div>

//             {/* Decision Card */}
//             <div
//                 className={`p-6 rounded-lg mb-8 border-l-4 shadow-sm ${recommendation.decision && recommendation.decision.toLowerCase().includes("hire")
//                     ? "border-l-green-500 bg-green-50"
//                     : "border-l-amber-500 bg-amber-50"
//                     }`}
//             >
//                 <h2 className="text-xl font-bold mb-2">Recommendation</h2>
//                 <div className="flex flex-col md:flex-row md:items-center justify-between">
//                     <div className="mb-4 md:mb-0">
//                         <span className="font-medium">Decision: </span>
//                         <span
//                             className={`font-bold ${recommendation.decision && recommendation.decision.toLowerCase().includes("hire")
//                                 ? "text-green-700"
//                                 : "text-amber-700"
//                                 }`}
//                         >
//                             {recommendation.decision}
//                         </span>
//                     </div>
//                 </div>
//                 <p className="mt-2 text-gray-700">{recommendation.message}</p>
//             </div>

//             {/* Skills Assessment */}
//             <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
//                 <h2 className="text-xl font-bold mb-4">Skills Assessment</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div>
//                         <div className="mb-4">
//                             <div className="flex justify-between mb-1">
//                                 <span className="font-medium">Technical Skills</span>
//                                 <span className="font-bold">{ratings.technicalSkills}/5</span>
//                             </div>
//                             <Progress value={ratings.technicalSkills * 20} className="h-2" />
//                         </div>
//                         <div className="mb-4">
//                             <div className="flex justify-between mb-1">
//                                 <span className="font-medium">Communication</span>
//                                 <span className="font-bold">{ratings.communication}/5</span>
//                             </div>
//                             <Progress value={ratings.communication * 20} className="h-2" />
//                         </div>
//                     </div>
//                     <div>
//                         <div className="mb-4">
//                             <div className="flex justify-between mb-1">
//                                 <span className="font-medium">Problem Solving</span>
//                                 <span className="font-bold">{ratings.problemSolving}/5</span>
//                             </div>
//                             <Progress value={ratings.problemSolving * 20} className="h-2" />
//                         </div>
//                         <div className="mb-4">
//                             <div className="flex justify-between mb-1">
//                                 <span className="font-medium">Experience</span>
//                                 <span className="font-bold">{ratings.experience}/5</span>
//                             </div>
//                             <Progress value={ratings.experience * 20} className="h-2" />
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Summary */}
//             <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
//                 <h2 className="text-xl font-bold mb-4">Interview Summary</h2>
//                 <div className="text-gray-700">
//                     {summary.split(". ").map((sentence, index) =>
//                         sentence.trim() ? (
//                             <p key={index} className="mb-2">{sentence.trim()}.</p>
//                         ) : null
//                     )}
//                 </div>
//             </div>

//             {/* Full Conversation */}
//             <div className="bg-white rounded-lg shadow-sm border p-6">
//                 <h2 className="text-xl font-bold mb-4">Interview Conversation</h2>
//                 {conversationData && conversationData.length > 0 ? (
//                     <div className="space-y-4">
//                         {conversationData.map((message, index) => (
//                             <div
//                                 key={index}
//                                 className={`p-4 rounded-lg ${message.role === "assistant"
//                                     ? "bg-blue-50 border-l-4 border-blue-500"
//                                     : "bg-gray-50 border-l-4 border-gray-500"
//                                     }`}
//                             >
//                                 <div className="flex items-start mb-2">
//                                     <span className="bg-gray-200 text-gray-700 text-xs font-medium px-2.5 py-0.5 rounded mr-2">
//                                         {message.role === "assistant" ? "AI Recruiter" : "Candidate"}
//                                     </span>
//                                     <p className="text-gray-800">{message.content}</p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 ) : (
//                     <p className="text-gray-500">No conversation data available for this session.</p>
//                 )}
//             </div>
//         </div>
//     );
// }

// export default InterviewComplete;


// displaying the whole conversion and ratings out of 5 instead

// "use client";

// import { useEffect, useState } from "react";
// import { useParams } from "next/navigation";
// import { supabase } from "@/services/SupabaseClient";
// import { Loader2 } from "lucide-react";
// import { Progress } from "@/components/ui/progress";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";

// function InterviewComplete() {
//     const [feedback, setFeedback] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const { interview_id } = useParams();

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 // Fetch feedback and conversation data
//                 const feedbackResponse = await supabase
//                     .from("interview-feedback")
//                     .select("*, conversation")
//                     .eq("interview_id", interview_id)
//                     .single();

//                 if (feedbackResponse.error || !feedbackResponse.data) {
//                     console.error("Error fetching feedback:", feedbackResponse.error);
//                     setFeedback(null);
//                 } else {
//                     console.log("Fetched feedback:", feedbackResponse.data);
//                     setFeedback(feedbackResponse.data);
//                 }
//             } catch (error) {
//                 console.error("Exception fetching data:", error);
//                 setFeedback(null);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchData();
//     }, [interview_id]);

//     if (loading) {
//         return (
//             <div className="flex items-center justify-center h-screen">
//                 <Loader2 className="animate-spin w-12 h-12 text-primary" />
//             </div>
//         );
//     }

//     if (!feedback) {
//         return (
//             <div className="p-8 text-center">
//                 <h2 className="text-2xl font-bold mb-4">No feedback found</h2>
//                 <p className="mb-6">We couldn't find the interview results for this session.</p>
//                 <Link href="/dashboard">
//                     <Button>Return to Dashboard</Button>
//                 </Link>
//             </div>
//         );
//     }

//     // Access the nested feedback structure
//     const feedbackData = feedback.feedback?.feedback || {
//         rating: {
//             technicalSkills: 0,
//             communication: 0,
//             problemSolving: 0,
//             experience: 0,
//         },
//         summary: "No summary available.",
//     };

//     // Normalize ratings: if > 5, assume 10-point scale and convert to 5-point; otherwise use as-is
//     const normalizeRating = (value) => {
//         const num = Number(value);
//         if (isNaN(num)) return 0;
//         if (num > 5) return (num / 10) * 5; // Scale from 10-point to 5-point for old feedback
//         return num; // Use as-is for new 5-point feedback
//     };

//     const ratings = {
//         technicalSkills: normalizeRating(feedbackData.rating?.technicalSkills || 0),
//         communication: normalizeRating(feedbackData.rating?.communication || 0),
//         problemSolving: normalizeRating(feedbackData.rating?.problemSolving || 0),
//         experience: normalizeRating(feedbackData.rating?.experience || 0),
//     };

//     console.log("Normalized ratings:", ratings);

//     // Handle recommendation
//     let recommendationObj = {
//         decision: "No decision",
//         message: "",
//     };
//     if (typeof feedbackData.recommendation === "string") {
//         const firstSpaceIndex = feedbackData.recommendation.indexOf(" ");
//         if (firstSpaceIndex > 0) {
//             recommendationObj.decision = feedbackData.recommendation.substring(0, firstSpaceIndex);
//             recommendationObj.message = feedbackData.recommendation.substring(firstSpaceIndex + 1);
//         } else {
//             recommendationObj.decision = feedbackData.recommendation;
//         }
//     } else if (typeof feedbackData.recommendation === "object" && feedbackData.recommendation !== null) {
//         recommendationObj = feedbackData.recommendation;
//     }

//     const recommendation = recommendationObj;
//     const summary = feedbackData.summary || "No summary available.";

//     // Process conversation for display
//     let conversationData = [];
//     if (feedback.conversation && Array.isArray(feedback.conversation)) {
//         console.log("Processing conversation data from dedicated field");
//         conversationData = feedback.conversation
//             .filter((message) => message.role !== "system" && message.content?.trim()) // Exclude system messages and empty content
//             .map((message) => ({
//                 role: message.role, // 'assistant' or 'user'
//                 content: message.content.trim(),
//                 type: message.role === "assistant" && message.content.includes("?") ? "Question" : "Response", // Optional: Label questions
//             }));
//     }

//     console.log("Processed conversation data:", conversationData);

//     // Calculate average score based on normalized ratings
//     const totalScore = (
//         ratings.technicalSkills +
//         ratings.communication +
//         ratings.problemSolving +
//         ratings.experience
//     ) / 4;
//     const formattedScore = totalScore.toFixed(1);

//     return (
//         <div className="p-6 md:p-10 lg:p-20 max-w-6xl mx-auto">
//             <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between">
//                 <div>
//                     <h1 className="text-3xl font-bold">Interview Results</h1>
//                     <p className="text-gray-500 mt-1">Candidate: {feedback.userName}</p>
//                 </div>
//                 <div className="mt-4 md:mt-0">
//                     <Link href="/dashboard">
//                         <Button variant="outline" className="mr-2">Back to Dashboard</Button>
//                     </Link>
//                     <Button>Share Results</Button>
//                 </div>
//             </div>

//             {/* Overall Score Card */}
//             <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
//                 <div className="flex flex-col md:flex-row items-center justify-between">
//                     <div>
//                         <h2 className="text-xl font-bold mb-2">Overall Assessment</h2>
//                         <p className="text-gray-600">Based on technical skills, communication, problem-solving, and experience</p>
//                     </div>
//                     <div className="mt-4 md:mt-0 flex items-center justify-center bg-gray-100 rounded-full p-6 w-24 h-24">
//                         <span className="text-3xl font-bold">{formattedScore}</span>
//                     </div>
//                 </div>
//             </div>

//             {/* Decision Card */}
//             <div
//                 className={`p-6 rounded-lg mb-8 border-l-4 shadow-sm ${recommendation.decision && recommendation.decision.toLowerCase().includes("hire")
//                     ? "border-l-green-500 bg-green-50"
//                     : "border-l-amber-500 bg-amber-50"
//                     }`}
//             >
//                 <h2 className="text-xl font-bold mb-2">Recommendation</h2>
//                 <div className="flex flex-col md:flex-row md:items-center justify-between">
//                     <div className="mb-4 md:mb-0">
//                         <span className="font-medium">Decision: </span>
//                         <span
//                             className={`font-bold ${recommendation.decision && recommendation.decision.toLowerCase().includes("hire")
//                                 ? "text-green-700"
//                                 : "text-amber-700"
//                                 }`}
//                         >
//                             {recommendation.decision}
//                         </span>
//                     </div>
//                 </div>
//                 <p className="mt-2 text-gray-700">{recommendation.message}</p>
//             </div>

//             {/* Skills Assessment */}
//             <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
//                 <h2 className="text-xl font-bold mb-4">Skills Assessment</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div>
//                         <div className="mb-4">
//                             <div className="flex justify-between mb-1">
//                                 <span className="font-medium">Technical Skills</span>
//                                 <span className="font-bold">{ratings.technicalSkills.toFixed(1)}/5</span>
//                             </div>
//                             <Progress value={ratings.technicalSkills * 20} className="h-2" />
//                         </div>
//                         <div className="mb-4">
//                             <div className="flex justify-between mb-1">
//                                 <span className="font-medium">Communication</span>
//                                 <span className="font-bold">{ratings.communication.toFixed(1)}/5</span>
//                             </div>
//                             <Progress value={ratings.communication * 20} className="h-2" />
//                         </div>
//                     </div>
//                     <div>
//                         <div className="mb-4">
//                             <div className="flex justify-between mb-1">
//                                 <span className="font-medium">Problem Solving</span>
//                                 <span className="font-bold">{ratings.problemSolving.toFixed(1)}/5</span>
//                             </div>
//                             <Progress value={ratings.problemSolving * 20} className="h-2" />
//                         </div>
//                         <div className="mb-4">
//                             <div className="flex justify-between mb-1">
//                                 <span className="font-medium">Experience</span>
//                                 <span className="font-bold">{ratings.experience.toFixed(1)}/5</span>
//                             </div>
//                             <Progress value={ratings.experience * 20} className="h-2" />
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Summary */}
//             <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
//                 <h2 className="text-xl font-bold mb-4">Interview Summary</h2>
//                 <div className="text-gray-700">
//                     {summary.split(". ").map((sentence, index) =>
//                         sentence.trim() ? (
//                             <p key={index} className="mb-2">{sentence.trim()}.</p>
//                         ) : null
//                     )}
//                 </div>
//             </div>

//             {/* Full Conversation */}
//             <div className="bg-white rounded-lg shadow-sm border p-6">
//                 <h2 className="text-xl font-bold mb-4">Interview Conversation</h2>
//                 {conversationData && conversationData.length > 0 ? (
//                     <div className="space-y-4">
//                         {conversationData.map((message, index) => (
//                             <div
//                                 key={index}
//                                 className={`p-4 rounded-lg ${message.role === "assistant"
//                                     ? "bg-blue-50 border-l-4 border-blue-500"
//                                     : "bg-gray-50 border-l-4 border-gray-500"
//                                     }`}
//                             >
//                                 <div className="flex items-start mb-2">
//                                     <span className="bg-gray-200 text-gray-700 text-xs font-medium px-2.5 py-0.5 rounded mr-2">
//                                         {message.role === "assistant" ? "AI Recruiter" : "Candidate"}
//                                     </span>
//                                     <p className="text-gray-800">{message.content}</p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 ) : (
//                     <p className="text-gray-500">No conversation data available for this session.</p>
//                 )}
//             </div>
//         </div>
//     );
// }

// export default InterviewComplete;


"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { supabase } from "@/services/SupabaseClient";
import { Loader2, MusicIcon, StopCircle } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { toast } from "sonner";

function InterviewComplete() {
    const [feedback, setFeedback] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isSpeaking, setIsSpeaking] = useState(false);
    const { interview_id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch feedback and conversation data
                const feedbackResponse = await supabase
                    .from("interview-feedback")
                    .select("*, conversation")
                    .eq("interview_id", interview_id)
                    .single();

                if (feedbackResponse.error || !feedbackResponse.data) {
                    console.error("Error fetching feedback:", feedbackResponse.error);
                    setFeedback(null);
                } else {
                    console.log("Fetched feedback:", feedbackResponse.data);
                    setFeedback(feedbackResponse.data);
                }
            } catch (error) {
                console.error("Exception fetching data:", error);
                setFeedback(null);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [interview_id]);

    // Handle Share Results button click
    const handleShare = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            toast.success("URL copied to clipboard!");
        } catch (error) {
            console.error("Failed to copy URL:", error);
            toast.error("Failed to copy URL");
        }
    };

    // Handle text-to-speech for the entire conversation
    const handleSpeakConversation = (conversationData) => {
        if (!window.speechSynthesis) {
            toast.error("Text-to-speech is not supported in this browser.");
            return;
        }

        // Stop any ongoing speech
        window.speechSynthesis.cancel();

        // Concatenate all messages with role prefixes
        const fullText = conversationData
            .map((message) => `${message.role === "assistant" ? "AI Recruiter" : "Candidate"}: ${message.content}`)
            .join(" ");

        const utterance = new SpeechSynthesisUtterance(fullText);
        utterance.rate = 1; // Normal speed
        utterance.pitch = 1; // Normal pitch
        utterance.volume = 1; // Full volume

        // Use default voice (first available)
        const voices = window.speechSynthesis.getVoices();
        if (voices.length > 0) {
            utterance.voice = voices[0]; // Default to first voice
        }

        // Update speaking state
        utterance.onend = () => setIsSpeaking(false);
        setIsSpeaking(true);
        window.speechSynthesis.speak(utterance);
    };

    // Handle stopping the speech
    const handleStopSpeech = () => {
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <Loader2 className="animate-spin w-12 h-12 text-primary" />
            </div>
        );
    }

    if (!feedback) {
        return (
            <div className="p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">No feedback found</h2>
                <p className="mb-6">We couldn't find the interview results for this session.</p>
                <Link href="/dashboard">
                    <Button>Return to Dashboard</Button>
                </Link>
            </div>
        );
    }

    // Access the nested feedback structure
    const feedbackData = feedback.feedback?.feedback || {
        rating: {
            technicalSkills: 0,
            communication: 0,
            problemSolving: 0,
            experience: 0,
        },
        summary: "No summary available.",
    };

    // Normalize ratings: if > 5, assume 10-point scale and convert to 5-point; otherwise use as-is
    const normalizeRating = (value) => {
        const num = Number(value);
        if (isNaN(num)) return 0;
        if (num > 5) return (num / 10) * 5; // Scale from 10-point to 5-point for old feedback
        return num; // Use as-is for new 5-point feedback
    };

    const ratings = {
        technicalSkills: normalizeRating(feedbackData.rating?.technicalSkills || 0),
        communication: normalizeRating(feedbackData.rating?.communication || 0),
        problemSolving: normalizeRating(feedbackData.rating?.problemSolving || 0),
        experience: normalizeRating(feedbackData.rating?.experience || 0),
    };

    console.log("Normalized ratings:", ratings);

    // Handle recommendation
    let recommendationObj = {
        decision: "No decision",
        message: "",
    };
    if (typeof feedbackData.recommendation === "string") {
        const firstSpaceIndex = feedbackData.recommendation.indexOf(" ");
        if (firstSpaceIndex > 0) {
            recommendationObj.decision = feedbackData.recommendation.substring(0, firstSpaceIndex);
            recommendationObj.message = feedbackData.recommendation.substring(firstSpaceIndex + 1);
        } else {
            recommendationObj.decision = feedbackData.recommendation;
        }
    } else if (typeof feedbackData.recommendation === "object" && feedbackData.recommendation !== null) {
        recommendationObj = feedbackData.recommendation;
    }

    const recommendation = recommendationObj;
    const summary = feedbackData.summary || "No summary available.";

    // Process conversation for display
    let conversationData = [];
    if (feedback.conversation && Array.isArray(feedback.conversation)) {
        console.log("Processing conversation data from dedicated field");
        conversationData = feedback.conversation
            .filter((message) => message.role !== "system" && message.content?.trim()) // Exclude system messages and empty content
            .map((message) => ({
                role: message.role, // 'assistant' or 'user'
                content: message.content.trim(),
                type: message.role === "assistant" && message.content.includes("?") ? "Question" : "Response", // Label questions
            }));
    }

    console.log("Processed conversation data:", conversationData);

    // Calculate average score based on normalized ratings
    const totalScore = (
        ratings.technicalSkills +
        ratings.communication +
        ratings.problemSolving +
        ratings.experience
    ) / 4;
    const formattedScore = totalScore.toFixed(1);

    return (
        <div className="p-6 md:p-10 lg:p-20 max-w-6xl mx-auto">
            <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold">Interview Results</h1>
                    <p className="text-gray-500 mt-1">Candidate: {feedback.userName}</p>
                </div>
                <div className="mt-4 md:mt-0">
                    <Link href="/dashboard">
                        <Button variant="outline" className="mr-2">Back to Dashboard</Button>
                    </Link>
                    <Button onClick={handleShare} aria-label="Copy interview results URL">
                        Share Results
                    </Button>
                </div>
            </div>

            {/* Overall Score Card */}
            <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div>
                        <h2 className="text-xl font-bold mb-2">Overall Assessment</h2>
                        <p className="text-gray-600">Based on technical skills, communication, problem-solving, and experience</p>
                    </div>
                    <div className="mt-4 md:mt-0 flex items-center justify-center bg-gray-100 rounded-full p-6 w-24 h-24">
                        <span className="text-2xl font-bold">{formattedScore}/5</span>
                    </div>
                </div>
            </div>

            {/* Decision Card */}
            <div
                className={`p-6 rounded-lg mb-8 border-l-4 shadow-sm ${recommendation.decision && recommendation.decision.toLowerCase().includes("hire")
                        ? "border-l-green-500 bg-green-50"
                        : "border-l-amber-500 bg-amber-50"
                    }`}
            >
                <h2 className="text-xl font-bold mb-2">Recommendation</h2>
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="mb-4 md:mb-0">
                        <span className="font-medium">Decision: </span>
                        <span
                            className={`font-bold ${recommendation.decision && recommendation.decision.toLowerCase().includes("hire")
                                    ? "text-green-700"
                                    : "text-amber-700"
                                }`}
                        >
                            {recommendation.decision}
                        </span>
                    </div>
                </div>
                <p className="mt-2 text-gray-700">{recommendation.message}</p>
            </div>

            {/* Skills Assessment */}
            <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
                <h2 className="text-xl font-bold mb-4">Skills Assessment</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <div className="mb-4">
                            <div className="flex justify-between mb-1">
                                <span className="font-medium">Technical Skills</span>
                                <span className="font-bold">{ratings.technicalSkills.toFixed(1)}/5</span>
                            </div>
                            <Progress value={ratings.technicalSkills * 20} className="h-2" />
                        </div>
                        <div className="mb-4">
                            <div className="flex justify-between mb-1">
                                <span className="font-medium">Communication</span>
                                <span className="font-bold">{ratings.communication.toFixed(1)}/5</span>
                            </div>
                            <Progress value={ratings.communication * 20} className="h-2" />
                        </div>
                    </div>
                    <div>
                        <div className="mb-4">
                            <div className="flex justify-between mb-1">
                                <span className="font-medium">Problem Solving</span>
                                <span className="font-bold">{ratings.problemSolving.toFixed(1)}/5</span>
                            </div>
                            <Progress value={ratings.problemSolving * 20} className="h-2" />
                        </div>
                        <div className="mb-4">
                            <div className="flex justify-between mb-1">
                                <span className="font-medium">Experience</span>
                                <span className="font-bold">{ratings.experience.toFixed(1)}/5</span>
                            </div>
                            <Progress value={ratings.experience * 20} className="h-2" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Summary */}
            <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
                <h2 className="text-xl font-bold mb-4">Interview Summary</h2>
                <div className="text-gray-700">
                    {summary.split(". ").map((sentence, index) =>
                        sentence.trim() ? (
                            <p key={index} className="mb-2">{sentence.trim()}.</p>
                        ) : null
                    )}
                </div>
            </div>

            {/* Full Conversation */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
                <div className="flex items-center mb-4">
                    <h2 className="text-xl font-bold">Interview Conversation</h2>
                    {conversationData.length > 0 && (
                        <div className="ml-3 flex items-center gap-2">
                            <button
                                onClick={() => handleSpeakConversation(conversationData)}
                                aria-label="Read entire conversation aloud"
                                title="Read conversation aloud"
                                className="p-1 rounded-full hover:bg-gray-200 transition-colors duration-150"
                            >
                                <MusicIcon className="w-8 h-8 text-gray-600 gradient-background2 p-1 rounded-full cursor-pointer" />
                            </button>
                            {isSpeaking && (
                                <button
                                    onClick={handleStopSpeech}
                                    aria-label="Stop reading conversation"
                                    title="Stop reading"
                                    className="p-1 rounded-full hover:bg-gray-200 transition-colors duration-150"
                                >
                                    <StopCircle className="w-8 h-8 text-gray-600 gradient-background2 p-1 rounded-full cursor-pointer" />
                                </button>
                            )}
                        </div>
                    )}
                </div>
                {conversationData && conversationData.length > 0 ? (
                    <div className="space-y-4">
                        {conversationData.map((message, index) => (
                            <div
                                key={index}
                                role="listitem"
                                aria-label={`${message.role === "assistant" ? "AI Recruiter" : "Candidate"}: ${message.content}`}
                                className={`flex ${message.role === "assistant" ? "flex-row" : "flex-row-reverse"
                                    } items-start gap-3 p-4 rounded-lg hover:shadow-md transition-all duration-200 max-w-[80%]`}
                            >
                                <span
                                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-medium ${message.role === "assistant" ? "bg-blue-500" : "bg-gray-500"
                                        }`}
                                >
                                    {message.role === "assistant" ? "AI" : "C"}
                                </span>
                                <div
                                    className={`flex-1 p-3 rounded-lg ${message.role === "assistant"
                                            ? "bg-blue-50 border border-blue-200"
                                            : "bg-gray-100 border border-gray-200"
                                        }`}
                                >
                                    <div className="flex items-center mb-2">
                                        <span
                                            className={`text-xs font-medium px-2.5 py-0.5 rounded ${message.role === "assistant"
                                                    ? "bg-blue-200 text-blue-800"
                                                    : "bg-gray-200 text-gray-800"
                                                }`}
                                        >
                                            {message.role === "assistant" ? "AI Recruiter" : "Candidate"}
                                        </span>
                                    </div>
                                    <p
                                        className={`text-gray-800 ${message.type === "Question" ? "font-semibold text-lg" : "text-base"
                                            }`}
                                    >
                                        {message.content}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-500">No conversation data available for this session.</p>
                )}
            </div>
        </div>
    );
}

export default InterviewComplete;