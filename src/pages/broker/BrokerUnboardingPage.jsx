import React from 'react'
import BrokerUnboarding from '../../components/BrokerUnboarding'
import DashboardHeader from '../../components/DashboardHeader'
import DashboardSidebar from '../../components/DashboardSidebar'

const BrokerUnboardingPage = () => {
    return (
        <div>
            <div>
                <DashboardSidebar />
            </div>

            <div>
                <DashboardHeader />
            </div>
            <div>
                <BrokerUnboarding />
            </div>
        </div>
    )
}

export default BrokerUnboardingPage