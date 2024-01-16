import tune from '../icons/tune.png'
import { Link } from 'react-router-dom'
import React from 'react';
import addJobTab from '../icons/Add job tab.png'
import messagesIcon from '../icons/Messages.png'


const DashBoard = () => {

    const loadStatus = localStorage.getItem('date')

    const jobData = localStorage.getItem('addJobData');
    const job = JSON.parse(jobData);








    return (
        <div className=' flex justify-center '>
            <div className=' absolute grid grid-rows-1 top-[110px]'>
                <div className='ml-40 grid grid-cols-2 gap-[545px] '><img src={tune} alt="Vector" className=" " />


                    <input placeholder='SEARCH' type='search' className=' w-[284px] border-black border-[1px] pr-2 bg-[#D9D9D9] h-[38px] pl-10 outline-none text-[16px] font-[350] rounded-3xl' /></div>

                <div className='   font-[350] text-[18px] leading-[26.4px] ml-40'>LIVE BIDS</div>
                <div className=' relative grid grid-flow-col  justify-evenly tracking-[-0.08em] bg-[#000000] w-[1220px] h-[40px] items-center text-[#FFFFFF] font-[350] text-[12px] ml-40 ' style={{ columnGap: '4px' }}>
                    <div className='w-[100px]' >COMPANY</div>
                    <div className='border-l w-[55px] pl-1 '>PO NUM</div>
                    <div className='border-l w-[55px] pl-1 '>JOB NUM</div>
                    <div className='border-l w-[100px] pl-1 '>LOAD ID</div>
                    <div className='border-l w-[70px] pl-1 '>BOOKED BY</div>
                    <div className='border-l w-[40px] pl-1 '>NOTES</div>
                    <div className='border-l w-[58.5px] pl-1 '>COL. ADD</div>
                    <div className='border-l w-[58.5px] pl-1 '>DEL. ADD</div>
                    <div className='border-l w-[100px] pl-1 '>COL. BY</div>
                    <div className='border-l w-[100px] pl-1 '>DEL. BY</div>
                    <div className='border-l w-[50px] pl-1 '>VEHICLE</div>
                    <div className='border-l w-[100px] pl-1 '>JOB TYPE</div>
                    <div className='border-l w-[50px] pl-1 '>MIN BID</div>
                    <div className='border-l w-[72px] pl-1 '>TOTAL COST</div>
                    <div className='border-l w-[90px] pl-1 '>STATUS</div>
                </div>
                {job && (
                    <>
                        <div className=' relative grid mt-[-19px] grid-flow-col  top-[20px] tracking-[-0.08em] justify-evenly  bg-[#8B9093] w-[1220px] h-[40px] items-center text-[#FFFFFF] font-[350] text-[12px] ml-40 ' style={{ columnGap: '4px' }}>

                            <div className='w-[100px]' >{job.customerName}</div>
                            <div className='border-l w-[55px] border-black pl-1 '>{job.poNumber}</div>
                            <div className='border-l w-[55px] border-black pl-1 '>{job.jobNumber}</div>
                            <div className='border-l w-[100px] border-black pl-1 '>{job.loadId}</div>
                            <div className='border-l w-[70px] border-black pl-1 '>{job.bookedBy}</div>
                            <div className='border-l w-[40px] border-black pl-1 '>{'Yes'} </div>
                            <div className='border-l w-[58.5px] border-black pl-1 '>{job.collectionPostcode}</div>
                            <div className='border-l w-[58.5px] border-black pl-1 '>{job.deliveryPostcode}</div>
                            <div className='border-l w-[100px] border-black pl-1 '>{job.collectionDate}</div>
                            <div className='border-l w-[100px] border-black pl-1 '>{job.deliveryDate}</div>
                            <div className='border-l w-[50px] border-black pl-1 '>{job.vehicleType}</div>
                            <div className='border-l w-[100px] border-black pl-1 '>{job.jobType}</div>
                            <div className='border-l w-[50px] border-black pl-1 '>{job.minBid ? job.minBid : '0'}</div>
                            <div className='border-l w-[72px] border-black pl-1 '>{'£' + job.clientCost}</div>
                            <Link to='/billing-page'>
                                <div className='border-l w-[90px]  bg-[#D9D9D9] font-[400]  h-[30px] text-black rounded-md pt-[6px]  pl-2 tracking-wide '
                                >{job.status + '...'}</div>
                            </Link>

                        </div>
                    </>
                )}
            </div>
            <div className=' absolute grid grid-rows-1 top-[270px]'>
                <div className='  font-[400] text-[18px] leading-[26.4px] ml-40'>LOAD STATUS</div>
                <div className=' pl-2 relative grid grid-flow-col justify-evenly tracking-tighter bg-[#000000] w-[1220px] h-[40px] items-center text-[#FFFFFF] font-[400] text-[12px] ml-40 ' style={{ columnGap: '8px' }}>
                    <div className='w-[90px]' >CLIENT NAME</div>
                    <div className='border-l w-[90px] pl-1 '>CARRIER NAME</div>
                    <div className='border-l w-[80px] pl-1 '>BOOKED BY</div>
                    <div className='border-l w-[70px] pl-1 '>DRIVER</div>
                    <div className='border-l w-[70px] pl-1 '>COL. ADD</div>
                    <div className='border-l w-[70px] pl-1 '>DEL. ADD</div>
                    <div className='border-l w-[60px] pl-1 '>COL. BY</div>
                    <div className='border-l w-[60px] pl-1 '>DEL. BY</div>
                    <div className='border-l w-[60px] pl-1 '>VEHICLE</div>
                    <div className='border-l w-[70px] pl-1 '>JOB TYPE</div>
                    <div className='border-l w-[60px] pl-1 '>LOAD ID</div>
                    <div className='border-l w-[80px] pl-1 '>TOTAL COST</div>
                    <div className='border-l w-[100px] pl-1 '>STATUS</div>
                </div>
                {loadStatus && (<>
                    <div className=' relative grid mt-[-19px] grid-flow-col top-[20px] justify-evenly pl-2 tracking-tighter bg-[#8B9093] w-[1220px] h-[40px] items-center text-[#FFFFFF] font-[350] text-[12px] ml-40 ' style={{ columnGap: '8px' }}>
                        <div className='w-[90px]' ></div>
                        <div className='border-l w-[90px] border-black pl-1 '>{ }</div>
                        <div className='border-l w-[80px] border-black pl-1 '>{ }</div>
                        <div className='border-l w-[70px] border-black pl-1 '>{ }</div>
                        <div className='border-l w-[70px] border-black pl-1 '>{ }</div>
                        <div className='border-l w-[70px] border-black pl-1 '></div>
                        <div className='border-l w-[60px] border-black pl-1 '></div>
                        <div className='border-l w-[60px] border-black pl-1 '></div>
                        <div className='border-l w-[60px] border-black pl-1 '></div>
                        <div className='border-l w-[70px] border-black pl-1 '></div>
                        <div className='border-l w-[60px] border-black pl-1 '></div>
                        <div className='border-l w-[80px] border-black pl-1 '></div>
                        <div className='border-l w-[100px] border-black bg-[#333333] font-[400]  h-[30px] rounded-md pt-[6px]  pl-1 '></div>
                    </div>
                </>)}
            </div>
            <div>
                <Link to='/add-job' >
                    < img src={addJobTab} alt="Vector" className=" absolute ml-[-75px] bottom-0 " />
                </Link>
                <Link to='' >
                    < img src={messagesIcon} alt="Vector" className=" absolute right-0 bottom-0 " />
                </Link>
            </div>
        </div >
    )
}

export default DashBoard