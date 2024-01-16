import React from 'react'

import { Link, useNavigate } from "react-router-dom";

const Header = () => {
    return (
        <div className='relative flex-auto w-full h-[80px]  shadow-md shadow-gray-700' style={{
            background: '#333333'
        }}>
            <div className=' text-[#FFFFFF] top-[36px] font-black left-[27px] w-fit text-xl relative leading-[16px] tracking-[0.5px]' style={{
                fontSize: '26px', marginLeft: '2rem',
                left: '5px'
            }}>CARGOLOGIX</div>

            <div className='relative text-left  mr-20    text-white top-5 ml-[45px] md:text-right ' style={{
                fontWeight: 350, fontSize: '18px',
                lineHeight: '16px', letterSpacing: '0.5px', height: '48px'
            }} >
                <Link to="/login-user">
                    LOGIN/REGISTER
                </Link>
            </div>

        </div >

    )
}

export default Header