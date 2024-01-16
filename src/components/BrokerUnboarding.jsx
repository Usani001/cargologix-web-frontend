import React from 'react'
import close from '../icons/close.png'
import ellipse1 from '../icons/Ellipse 1.png'
import ellipse2 from '../icons/Ellipse 2.png'
import line2 from '../icons/Line 2.png'
import { useNavigate, Link } from "react-router-dom";

const BrokerUnboarding = () => {

    const navigate = useNavigate();
    const handleClose = () => {
        navigate('/dashboard')
    }
    return (
        <div className='  flex justify-center' >
            <div className=' flex w-[550px] bg-[#D9D9D9] justify-center ml-32 h-[448px] rounded-bl-lg rounded-br-lg shadow-md shadow-gray-700  p-7'>
                <div className='absolute ml-[500px] mt-[-25px] flex justify-end   ' >
                    <Link to='/dashboard'>
                        <img className='relative ' src={close} alt="" />
                    </Link>
                </div>
                <div className=' absolute font-[700] text-[#000000] text-[24px] leading-[24px]  top-[133px] tracking-[0.03em]'>
                    CARGOLOGIX BROKER REGISTRATION
                </div>
                <div>

                    <div className=' relative w-[240px] top-[62px] justify-center ml-[7px]  align-middle '>
                        <img src={line2} alt="" />
                    </div>
                    <div className=' relative   grid grid-cols-3 grid-rows-2 justify-center top-[50px] '
                        style={{
                            columnGap: '73px', rowGap: '-562px'
                        }}>

                        <span className=' relative'>
                            <img src={ellipse1} alt="" />
                        </span>
                        <span className=' relative '>
                            <img src={ellipse1} alt="" />
                        </span>
                        <span className=' relative '>
                            <img src={ellipse2} alt="" />
                        </span>
                        < div className=' realative ml-[-8px] font-[700] tracking-[0.06em] text-[12px] h-[23px] leading-[16px] ' >
                            WHO
                        </div>
                        <div className=' realative ml-[-18px] font-[700] tracking-[0.06em] text-[12px] h-[23px] leading-[16px]'>
                            PROFILE
                        </div>
                        <div className=' realative ml-[-24px] font-[700] tracking-[0.06em] text-[12px] h-[23px] leading-[16px] '>
                            WELCOME
                        </div>
                    </div>


                </div>
                <div className=' absolute flex align-middle justify-center font-[700] text-[#000000] text-[24px] leading-[24px]  top-[245px]  tracking-[0.03em]'>
                    WHAT NEXT?
                </div>
                <div className=' absolute top-[291px]  justify-center font-[400] text-[12px] leading-[16px] tracking-[0.01em] text-[#000000] align-middle'>
                    <div className=' relative flex justify-center'>
                        Welcome to the Broker dashboard, this is where all the magic
                    </div>
                    <div className=' relative flex justify-center' >happens. You are now ready to use Cargologix. You can either add</div>
                    <div className=' relative flex justify-center'>
                        your client information by hand or upload a .CSV file.
                    </div>
                </div>
                <div className=' absolute top-[361px]  justify-center font-[400] text-[12px] leading-[16px] tracking-[0.01em] text-[#000000] align-middle'>
                    <div className=' relative flex justify-center'>
                        Clients will also be added o the database automatically every time
                    </div>
                    <div className=' relative flex justify-center' >you post a load on Cargologix</div>
                </div>
                <button onClick={handleClose} className={` absolute  w-[155px] bg-[#8B9093] hover:bg-[#333333] h-[40px] rounded-[40px] top-[434px] ml-[3px]  
                  text-[#FFFFFF] font-[900] text-[12px]  `}
                >
                    CLOSE
                </button>
            </div >
        </div >
    )
}

export default BrokerUnboarding