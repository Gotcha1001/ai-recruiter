import React from 'react'

function QuestionListContainer({ questionList }) {
    return (
        <div>
            <h2 className='font-bold text-lg text-center'>Generated Interview Questions:</h2>
            <div className='p-5 border border-gray-300 rounded-xl mt-4'>
                {questionList.map((item, index) => (
                    <div key={index} className='p-3 mb-4 border border-gray-500 rounded-xl bg-gradient-to-bl from-indigo-500 via-black to-purple-900 text-white '>
                        <h2 className='font-medium'>{item.question}</h2>
                        <h2 className='text-sm text-indigo-500'>Type: {item?.type}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default QuestionListContainer