import React from 'react'
import AddJob from '../../components/AddJob'
import DashboardHeader from '../../components/DashboardHeader'
import DashBoard from '../../components/DashBoard'

import DashboardSidebar from '../../components/DashboardSidebar'

const AddJobPage = () => {

    return (
        <div>
            <div>
                <DashboardSidebar />
            </div>

            <div>
                <DashboardHeader />
            </div>
            <div>
                <DashBoard />
            </div>
            <div>
                <AddJob />
            </div>
        </div>
    )
}

export default AddJobPage