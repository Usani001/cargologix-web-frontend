import { useState } from 'react'
import React from 'react'
import wizardClamp from '../icons/Wizard Display.png'
import { useNavigate } from 'react-router-dom'
import OTPInput from "react-otp-input";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const OtpVerification = () => {
    const [otp, setOtp] = useState('');
    const [isButtonClickable, setIsButtonClickable] = useState(false);

    const navigate = useNavigate();




    const checkButtonClickable = (newOtp) => {
        // Add your conditions here
        const isFilled = newOtp.trim().length === 4;
        setIsButtonClickable(isFilled);
    }

    const handleOtpChange = (otp) => {
        setOtp(otp);
        checkButtonClickable(otp)
    };

    const bearerToken = localStorage.getItem("token");
    const token = JSON.parse(bearerToken);

    const handleVerifyOtp = async () => {
        try {
            const response = await fetch(
                `${process.env.REACT_APP_CARGOLOGIX_BASE_URL}/user/verify-otp`,
                {
                    method: 'POST',
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },

                    body: JSON.stringify({
                        otp: otp,
                    }),
                });

            console.log('Response from server', response)
            console.log('Bearer: ' + token)
            const responseData = await response.json();

            if (responseData.message === "Otp Verified") {
                console.log(token)
                toast.success(responseData.message, {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 6000, // Display toast for 10 seconds
                    onClose: () => {
                        setTimeout(() => {
                            navigate('/create-profile')
                        }, 3000);
                    },
                });
            } else {
                console.log('Failed due to incorrect details');
                toast.error(responseData.message, {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 5000,
                });

                navigate("/user-otp-verification");

            }

        } catch (error) {
            console.log("Failure toast should be triggered", token);
            toast.error(error.message, {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 5000,
            });
            navigate("/user-otp-verification");
        }


    };

    return (
        <div className='flex justify-center'>
            <div className='w-[550px] bg-[#D9D9D9] justify-center h-[489px] flex  rounded-bl-lg rounded-br-lg shadow-md shadow-gray-700  p-7'>
                <div className=' absolute font-[700] text-[#000000] text-[24px] leading-[24px]  top-[106px] ml-[-4] tracking-[0.03em]'>
                    CARGOLOGIX  REGISTRATION</div>
                <div className=' absolute top-[143px] font-[Roboto] justify-center font-[400] text-[12px] leading-[16px] tracking-[0.01em] text-[#000000] align-middle'>
                    Welcome to Cargologix Registration wizard, please follow the
                    <div className=' ml-24' >instructions below</div>
                </div>
                <div className=' absolute top-[190px] '><img src={wizardClamp} alt="" /></div>
                <div className=' absolute top-[246.81px] font-[Roboto] justify-center font-[500] text-[16px] leading-[18.75px] tracking-[0.01em] text-[#303030]'>
                    Registration was completed successfully, please
                    <div className='ml-6 ' >check your email to verify your account?</div>
                </div>
                <div className=' absolute top-[300.81px] font-[Roboto] justify-center font-[500] text-[16px] leading-[21.09px] tracking-[0.01em] text-[#303030]'>
                    If you can't find the email check your
                    <div className='ml-16 ' >Spam/Junk folder</div>
                </div>
                <div className='absolute  top-[354.81px]  justify-center font-[600] text-[18px] leading-[21.13px] tracking-[0.01em] text-[#303030]' >
                    ENTER THE 4 DIGIT CODE SENT TO YOUR
                    <div className=' ml-28' >EMAIL BELOW</div>
                </div>
                <div
                    className=" otp relative m-20 justify-center w-[213px] h-[38px] top-[280px] "
                >
                    <OTPInput

                        value={otp}
                        inputStyle="inputStyle"
                        onChange={handleOtpChange}
                        numInputs={4}
                        inputType='tel'
                        separator={<span></span>}
                        renderInput={(props) => <input {...props} />}
                    />
                </div>
                <div className=' absolute text-[#303030] font-[400px] leading-[14.06px] ml-24 text-[12px] top-[472px] h-[14px] w-[329.69px]'>Click here to resend code | Change email</div>
                <button onClick={handleVerifyOtp} className={` ${isButtonClickable ? 'bg-[#333333]' : 'bg-[#8B9093]'} absolute  w-[264px] h-[40px] rounded-[40px] top-[505px] ml-[3px]  
                  text-[#FFFFFF] font-[900] text-[12px]`}
                    disabled={!isButtonClickable}>
                    REGISTER
                </button>
            </div >

        </div >
    )
}
export default OtpVerification