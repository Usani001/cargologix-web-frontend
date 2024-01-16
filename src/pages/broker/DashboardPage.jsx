import React from 'react'
import DashBoard from '../../components/DashBoard'
import DashboardHeader from '../../components/DashboardHeader'
import DashboardSidebar from '../../components/DashboardSidebar'

const DashboardPage = () => {
    return (
        <div className=' '>

            <div>
                <DashboardSidebar />
            </div>

            <div>
                <DashboardHeader />
            </div>
            <div>
                <DashBoard />
            </div>

        </div >
    )
}

export default DashboardPage