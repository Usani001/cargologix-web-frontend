import React from 'react'
import close from '../icons/close.png'
import { Link } from 'react-router-dom'
import tune from '../icons/tune.png'

const BiddingInProgress = () => {
    return (
        <div>
            < div className='  justify-start  pl-10 pt-6  absolute top-4  bg-[#D9D9D9] shadow-md shadow-gray-700 w-[670px] h-[832px] right-0'
            >

                <div className='absolute  ' >
                    <Link to='/dashboard'>
                        <img className=' ml-[575px] mt-[-20px]' src={close} alt="" />
                    </Link>
                </div>
                <div className=' font-[400] text-[22px] h-[47px] leading-[26.4px] '>
                    BILLING IN PROGRESS
                </div>
                <div className=' font-[400] text-[16px] h-[16px] leading-[10px] '>
                    COMPANY DETAILS:
                </div>
                <div className='relative grid grid-cols-2 grid-flow-row'
                    style={{ columnGap: '20px', rowGap: '5px' }}>
                    <div className=' text-[10px] font-[350] text-[#8B9093]'>COMPANY</div>
                    <div className=' text-[10px] font-[350] text-[#8B9093]'>BB (BOOK BY)</div>
                    <div className=' text-[14px] font-[350]'>Core Solutions Europe</div>
                    <div className=' text-[14px] font-[350]'>Natasha</div>
                    <div className=' text-[10px] font-[350] text-[#8B9093]'>PO NUM</div>
                    <div className=' text-[10px] font-[350] text-[#8B9093]'>JOB NUM</div>
                    <div className=' text-[14px] font-[350]'>PO14417122843</div>
                    <div className=' text-[14px] font-[350]'>123456</div>
                    <div className=' text-[16px] font-[450] leading-[19.2px]'>NOTES:</div>
                    <div className=' text-[16px] font-[450] leading-[19.2px]'>Distance:</div>
                    <div className=' text-[14px] font-[350] w-[203.13px] '>Flatbed</div>
                    <div className=' text-[14px] font-[350] w-[203.13px]'>Fastest Route - 23.4 miles</div>
                    <div className=' text-[16px] font-[350] leading-[19.2px]'>DELIVERY DETAILS:</div>
                    <div></div>
                    <div className=' text-[10px] font-[350] text-[#8B9093]'>COLLECTION ADDRESS</div>
                    <div className=' text-[10px] font-[350] text-[#8B9093]'>DELIVERY ADDRESS</div>
                    <div className=' text-[14px] font-[350] w-[200.13px]'>Unit 10 Barshaw Business Park, Leycroft Road, Leicester, LE4 1ET</div>
                    <div className=' text-[14px] font-[350] w-[188px]'>8B Nottingham South & Wilford Industrial Estate, Nottingham, NG11 7EP</div>
                    <div className=' text-[10px] font-[350] text-[#8B9093]'>COLLECTION TIME/DATE</div>
                    <div className=' text-[10px] font-[350] text-[#8B9093]'>DELIVERY TIME/DATE</div>
                    <div className=' text-[14px] font-[350] w-[188px]'>03/03/23 11:00am</div>
                    <div className=' text-[14px] font-[350] w-[188px]'>03/03/23 16:30pm</div>
                    <div className=' text-[10px] font-[350] text-[#8B9093]'>VEHICAL TYPE</div>
                    <div className=' text-[10px] font-[350] text-[#8B9093]'>JOB TYPE</div>
                    <div className=' text-[14px] font-[350] w-[188px]'>EV 7.5T Box</div>
                    <div className=' text-[14px] font-[350] w-[188px]'>Groupage Pallet</div>
                    <div className=' text-[10px] font-[350] text-[#8B9093]'>PACKAGING TYPE</div>
                    <div className=' text-[10px] font-[350] text-[#8B9093]'>WEIGHT</div>
                    <div className=' text-[14px] font-[350] w-[188px]'>Not  Supplied</div>
                    <div className=' text-[14px] font-[350] w-[188px]'>Not  Supplied</div>
                    <div className=' text-[10px] font-[350] text-[#8B9093]'>LOAD ID</div>
                    <button className={`w-[190px] ml-[-5px] mb-[-30px] bg-[#79747E] hover:bg-[#333333] h-[40px] rounded-[40px] text-[#FFFFFF] font-[900] text-[12px]  `}                    >
                        ADD MANUAL BID
                    </button>
                    <div className=' text-[14px] font-[350] w-[188px]'>ID5677006611</div>
                    <div></div>
                    <div></div>
                </div>
                <div className='  h-[250px] mt-[30px] ml-[-20px] w-[635px] border-t-[1px] border-b-[1px] border-black'>
                    <div className=' grid pt-5 grid-cols-2 grid-flow-row'
                        style={{ columnGap: '300px', rowGap: '8px' }}>
                        <div className=' text-[16px] leading-[19.2px] font-[400] '>BIDS: 6 MIN    BID: 0</div>
                        <div className=' text-[16px] leading-[19.2px] font-[400] '>CLIENT PRICE: £150</div>
                        <div className=' text-[14px] leading-[16.41px] w-[223px] font-[300]'>Click on bid below to see driver
                            profile or to accept the bid?</div>
                        <img className=' h-[24px] w-[24px] ml-[125px] ' src={tune} alt="" />
                    </div>
                    <div className=' grid pl-6 mt-[6px]  grid-cols-4 h-[23px] pt-1  text-white grid-flow-row bg-[#000000] justify-center'
                        style={{ columnGap: '30px', rowGap: '8px' }}>
                        <div className=' text-[14px] leading-[16.8px] font-[400] '>CARRIER</div>
                        <div className=' text-[14px] leading-[16.8px] font-[400] '>LOCATION</div>
                        <div className=' text-[14px] leading-[16.8px] font-[400] '>RATING</div>
                        <div className=' text-[14px] leading-[16.8px] font-[400] '>BID</div>

                    </div>
                    <div className=' grid pl-6  grid-cols-4 h-[29px] pt-1 align-middle  text-white grid-flow-row w-[600px] bg-[#8B9093]'
                        style={{ columnGap: '30px', rowGap: '8px' }}>
                        <div className=' text-[16px] leading-[16.8px] min-w-max font-[400] '>National Mile Ltd</div>
                        <div className=' text-[16px] leading-[16.8px] ml-[9px] font-[400] '>Leicester</div>
                        <div className=' text-[16px] leading-[16.8px] ml-[17px] font-[400] '>5/5</div>
                        <div className=' text-[16px] leading-[16.8px] pt-[1px] hover:bg-[#333333] h-[20px] rounded-xl w-[85px] bg-[#79747E] text-center align-text-bottom text font-[400] '>£215</div>

                    </div>
                    <div className=' grid pl-6  grid-cols-4 h-[29px] pt-1 align-middle  text-white grid-flow-row w-[600px] bg-[#333333]'
                        style={{ columnGap: '30px', rowGap: '8px' }}>
                        <div className=' text-[16px] leading-[16.8px] min-w-max font-[400] '>National Mile Ltd</div>
                        <div className=' text-[16px] leading-[16.8px] ml-[9px] font-[400] '>Leicester</div>
                        <div className=' text-[16px] leading-[16.8px] ml-[17px] font-[400] '>5/5</div>
                        <div className=' text-[16px] leading-[16.8px] pt-[1px] h-[20px] rounded-xl w-[85px] bg-[#79747E]  text-center align-text-bottom text font-[400] '>£215</div>

                    </div>
                </div>
            </div >
        </div >
    )
}

export default BiddingInProgress