import React from 'react'
import menu from '../icons/menu.png'
import dashboard from '../icons/dashboard (1).svg'
import clients from '../icons/supervisor_account.png'
import truck from '../icons/Truck-2 1.png'
import finance from '../icons/bar_chart.png'
import account from '../icons/person_add_alt.png'

const DashboardSidebar = () => {
    return (
        <div>
            <div className=' absolute  w-[12%] max-lg:w-[18%] flex h-full justify-center  shadow-md shadow-gray-700' style={{
                background: '#333333'
            }}>

                <div className='relative ml-[10px] max-md:ml-[25px] top-[120px] h-[246px] items-end  w-[460px] text-[#FFFFFF] justify-between grid grid-cols-2 grid-rows-6'
                    style={{
                        rowGap: '', columnGap: '10px'
                    }}>
                    <div className=' ' >
                        <img src={menu} alt="home" />
                    </div>
                    <div>
                    </div>
                    <div className=' relative border-b-[3px] w-[27px] max-md:w-[15px] rounded-sm ml-[4px] max-xl:w-[50px] border-white'>
                        <img className='ml-[-2px] max-xl:hidden' src={dashboard} alt="" />
                    </div>
                    <div>
                        <div className='realative ml-[-50px] max-md:text-[10px] font-[350] text-[#b6b4b4] text-[14px] h-[18px] leading-[16.2px] '>DASHBOARD</div>
                    </div>
                    <div>
                        <img className='max-xl:hidden' src={clients} alt="" />
                    </div>
                    <div>
                        <div className='realative ml-[-50px] max-md:text-[10px] font-[350] text-[14px] h-[18px] leading-[16.2px] '>CLIENTS</div>
                    </div>
                    <div>
                        <img className='max-xl:hidden' src={truck} alt="" />
                    </div>
                    <div>
                        <div className='realative ml-[-50px] max-md:text-[10px] font-[350] text-[14px] h-[18px] leading-[16.2px] '>CARRIERS</div>
                    </div>
                    <div>
                        <img className='max-xl:hidden' src={finance} alt="" />
                    </div>
                    <div>
                        <div className='realative ml-[-50px] max-md:text-[10px] font-[350] text-[14px] h-[18px] leading-[16.2px] '>FINANCE</div>
                    </div>
                    <div>
                        <img className='max-xl:hidden' src={account} alt="" />
                    </div>
                    <div>
                        <div className='realative ml-[-50px] max-md:text-[10px] font-[350] text-[14px] h-[18px] leading-[16.2px] '>ACCOUNT</div>
                    </div>
                </div>

            </div ></div >
    )
}

export default DashboardSidebar