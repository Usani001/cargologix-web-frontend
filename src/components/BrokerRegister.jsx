import React from 'react'
import passportVector from '../icons/Shape.svg'
import wizardClamp from '../icons/Wizard Display.png'
import { Link } from "react-router-dom";
import eyeVector from '../icons/Vector.svg'

const BrokerRegister = () => {
    return (
        <div className='flex justify-center'>
            <div className='w-[550px] bg-[#D9D9D9] h-[489px] flex justify-center rounded-bl-lg rounded-br-lg shadow-md shadow-gray-700  p-7'>

                <div className=' absolute font-[Gotham] font-[830] text-[#000000] text-[24px] leading-[24px]  top-[106px] ml-[-4] tracking-[0.02em]'>CARGOLOGIX REGISTRATION</div>
                <div className=' absolute top-[143px] font-[Roboto] justify-center font-[400] text-[12px] leading-[16px] tracking-[0.01em] text-[#000000] align-middle'>
                    Welcome to Cargologix Registration wizard, please follow the
                    <div className=' ml-24' >instructions below</div>
                </div>
                <div className=' absolute top-[190px] '><img src={wizardClamp} alt="" /></div>

                <div className='absolute -mt-7 top-[280px]  '>
                    <button className=' relative bg-[#333333] w-[155px] h-[40px] rounded-[40px]  
                 text-[#FFFFFF] font-[Gotham] font-[900] text-[12px] -left-[8px] '>
                        BROKER
                    </button>
                    <button className=' relative  bg-[#8B9093]  w-[155px] h-[40px] rounded-[40px]  
                 text-[#FFFFFF] font-[Gotham] font-[900] text-[12px] '>
                        SENDER/CLIENT
                    </button>
                    <button className=' relative  bg-[#8B9093]  w-[155px] h-[40px] rounded-[40px]   
                 text-[#FFFFFF] font-[Gotham] font-[900] text-[12px] left-[10px]  '>
                        CARRIER
                    </button>
                </div>
                <div className='absolute grid w-[500px] top-[310px] ' style={{
                    gridTemplateColumns: 'auto  auto',
                    gridTemplateRows: ' auto auto',
                    rowGap: '30px', columnGap: '8px'
                }}>
                    <span className=' relative ml-[15px] w-[230px]  bg-white rounded-tr-md rounded-tl-md grid items-center  border-b-2 border-solid border-black ' style={{
                        height: '40px',
                        display: 'grid',
                        gridTemplateColumns: 'auto 1fr auto',
                        gap: '5px',
                    }}>
                        <img src={passportVector} alt="Vector" className=" ml-[0.5rem] h-[13.38px] w-[13.38px]" />
                        <input
                            placeholder='Username'
                            type="text"
                            className='bg-white rounded-sm h-[40px] w-full p-2 outline-none border-b-2 border-solid border-black ' />
                    </span>
                    <span className=' relative w-[230px]   bg-white rounded-tr-md rounded-tl-md grid items-center   border-b-2 border-solid border-black ' style={{
                        height: '40px',
                        display: 'grid',
                        gridTemplateColumns: 'auto 1fr auto',
                        gap: '5px',
                    }}>
                        <img src={passportVector} alt="Vector" className=" h-[13.38px] w-[13.38px] ml-[0.5rem]" />
                        <input
                            placeholder='Password'
                            type="text"
                            className='bg-white rounded-sm h-[40px] w-full p-2 outline-none border-b-2 border-solid border-black' />
                        <img src={eyeVector} alt="Vector" className="h-3 mr-[0.5rem]" />
                    </span>
                    <span className=' relative ml-[15px] w-[230px]  bg-white rounded-tr-md rounded-tl-md grid items-center  border-b-2 border-solid border-black ' style={{
                        height: '40px',
                        display: 'grid',
                        gridTemplateColumns: 'auto 1fr auto',
                        gap: '5px',
                    }}>
                        <img src={passportVector} alt="Vector" className=" ml-[0.5rem] h-[13.38px] w-[13.38px] " />
                        <input
                            placeholder='First Name'
                            type="text"
                            className='bg-white rounded-sm h-[40px] w-full p-2 outline-none border-b-2 border-solid border-black' />
                    </span>
                    <span className=' relative w-[230px]   bg-white rounded-tr-md rounded-tl-md grid items-center   border-b-2 border-solid border-black ' style={{
                        height: '40px',
                        display: 'grid',
                        gridTemplateColumns: 'auto 1fr auto',
                        gap: '5px',
                    }}>

                        < img src={passportVector} alt="Vector" className=" h-[13.38px] w-[13.38px] ml-[0.5rem]" />
                        <input
                            placeholder='Last Name'
                            type="text"
                            className='bg-white rounded-sm h-[40px] w-full p-2 outline-none border-b-2 border-solid border-black'
                        />
                        <img src={eyeVector} alt="Vector" className="h-3 mr-[0.5rem]" />
                    </span>
                    <span className=' relative ml-[15px] w-[230px]  bg-white rounded-tr-md rounded-tl-md grid items-center  border-b-2 border-solid border-black ' style={{
                        height: '40px',
                        display: 'grid',
                        gridTemplateColumns: 'auto 1fr auto',
                        gap: '5px',
                    }}>
                        <img src={passportVector} alt="Vector" className=" ml-[0.5rem] h-[13.38px] w-[13.38px] " />
                        <input
                            placeholder='Email'
                            type="text"
                            className='bg-white rounded-sm h-[40px] w-full p-2 outline-none border-b-2 border-solid border-black' />

                    </span>
                    <span className=' relative w-[208px]  h-[58px] font-[Roboto] font-[400] text-[12px] leading-[14px] tracking-[-1%] -mt-[7px] text-[#000000] '>
                        Once you have completed the form and click register. A Verification email will be sent to your account.
                        Please check the junk mail if you can’t see it?
                    </span>

                </div>

                <Link className="" to="/register-user/otp-verification">
                    <button className=' relative bg-[#8B9093] hover:bg-[#333333] w-[264px] h-[40px] rounded-[40px] top-[395px] ml-[3px]  
                  text-[#FFFFFF] font-[Gotham] font-[900] text-[12px]  '>
                        REGISTER
                    </button>
                </Link>
            </div >
        </div >
    )
}

export default BrokerRegister