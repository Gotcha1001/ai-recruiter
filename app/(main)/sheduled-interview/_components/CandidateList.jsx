import FeatureMotionWrapper from '@/app/components/FramerMotion/FeatureMotionWrapperMap'

import moment from 'moment'
import React from 'react'
import CandidateFeedbackDialog from './CandidateFeedbackDialog'

function CandidateList({ candidateList }) {
    return (
        <div className=''>
            <h2 className='font-bold my-5'>Candidates ({candidateList?.length})</h2>
            {candidateList?.map((candidate, index) => (
                <FeatureMotionWrapper index={index} key={index}>
                    <div className='p-5 flex gap-3 items-center justify-between bg-indigo-100 rounded-lg mb-10'>
                        <div className='flex items-center gap-5'>
                            <h2 className='p-3 px-4 font-bold text-white  bg-primary rounded-full'>
                                {candidate.userName[0]}
                            </h2>
                            <div>
                                <h2 className='font-bold'>{candidate?.userName}</h2>
                                <h2 className='text-gray-500 text-sm'>Completed On: {moment(candidate?.created_at).format('MMMM DD, yyyy')}</h2>
                            </div>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <h2 className='text-green-500'>4/5</h2>
                            <CandidateFeedbackDialog candidate={candidate} />
                        </div>

                    </div>

                </FeatureMotionWrapper>
            ))}
        </div>
    )
}

export default CandidateList