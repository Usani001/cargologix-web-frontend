import React from 'react'
import home from '../icons/home.png'
import telephone from '../icons/Vector (1).png'
import investment from '../icons/Vector.png'
import aboutus from '../icons/Group.png'
import imageSymbol from '../icons/image_search.png'
import arrow from '../icons/arrow_forward_ios.png'

const DashboardHeader = () => {
    return (
        <div className=' relative w-full flex h-[90px] justify-center  shadow-md shadow-gray-900' style={{
            background: '#333333'
        }}>
            <div className=' text-[#FFFFFF] top-[36px] font-black left-[5%] w-fit text-xl absolute leading-[16px] tracking-[0.5px]' style={{
                fontSize: '26px'

            }}>CARGOLOGIX</div>
            <div className='relative max-lg:hidden ml-[30%] top-9 h-[46px] w-[460px] text-[#FFFFFF]  justify-center grid grid-cols-4 grid-rows-2'
                style={{
                    columnGap: '-5px', rowGap: '3px'
                }}>
                <div className='' >
                    <img src={home} alt="home" />
                </div>
                <div>
                    <img src={investment} alt="" />
                </div>
                <div>
                    <img src={aboutus} alt="" />
                </div>
                <div>
                    <img src={telephone} alt="" />
                </div>
                <div className='realative ml-[-10px] font-[350] text-[14px] h-[18px] leading-[10.2px] '>HOME</div>
                <div className='realative ml-[-35px] font-[350] text-[14px] h-[18px] leading-[10.2px] '>INVESTMENT</div>
                <div className='realative ml-[-30px] font-[350] text-[14px] h-[18px] leading-[10.2px] '>ABOUT US</div>
                <div className='realative ml-[-35px] font-[350] text-[14px] h-[18px] leading-[10.2px] ' >CONTACT US</div>
            </div>
            <div className=' relative grid grid-rows-3 gap-[7px] ml-[10%] max-lg:ml-[80%] justify-center items-center'>
                <div className='relative flex justify-center top-[10px]  items-center bg-white  h-[30px] w-[30px] rounded-full '>
                    <div>
                        <img className=' relative h-[20px] w-[20px]' src={imageSymbol} alt="" />
                    </div>
                </div>
                <div className=' relative  text-[#FFFFFF] text-[12px] mt-[1.5rem] ml-[-8px]  h-[16px] leading-[10.4px] font-[350]'>
                    PROFILE
                </div>
                <div className=' relative ml-[15%]'>
                    <img className=' relative h-[20px] w-[20px]' src={arrow} alt="" />
                </div>
            </div>
        </div >
    )
}

export default DashboardHeader