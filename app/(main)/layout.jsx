import React from 'react'
import DashboardProvider from './provider'

function DashboardLayout({ children }) {
    return (
        <div className='px-6 mt-2'>
            <DashboardProvider>
                <div className='p-5'>

                </div>
                {children}

            </DashboardProvider>


        </div>
    )
}

export default DashboardLayout