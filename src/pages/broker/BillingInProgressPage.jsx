import React from 'react'
import DashBoard from '../../components/DashBoard'
import DashboardHeader from '../../components/DashboardHeader'
import DashboardSidebar from '../../components/DashboardSidebar'
import BillingInProgress from '../../components/BiddingInProgress'

const BillingInProgressPage = () => {
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
            <div>
                <BillingInProgress />
            </div>

        </div >
    )
}

export default BillingInProgressPage