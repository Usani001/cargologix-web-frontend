import React from 'react'
import passportVector from '../icons/VectorPassport.svg'
import eyeVector from '../icons/Vector.svg'
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordToggle, setPasswordToggle] = useState(false);
    const [isButtonClickable, setIsButtonClickable] = useState(false);
    const navigate = useNavigate();


    const handleLogin = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_CARGOLOGIX_BASE_URL}/user/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username,
                    password: password

                }),
            });
            const responseData = await response.json();
            console.log(responseData);
            if (responseData.message === "Login Successful") {
                localStorage.setItem(
                    'token',
                    JSON.stringify(responseData.token)
                );
                localStorage.setItem(
                    'addJobData',
                    JSON.stringify(responseData.jobs)
                );
                toast.success(responseData.message, {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 3000, // Display toast for 3 seconds
                    onClose: () => {
                        setTimeout(() => {
                            navigate('/dashboard'); // Redirect after 2 seconds
                        }, 2000);
                    },
                });
            } else {
                console.log("Failure toast should be triggered");
                toast.error('Username or Password is incorrect...', {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 5000,
                });
                navigate("/login-user");
            }
        } catch (error) {
            console.log("Failure toast should be triggered");
            toast.error(error.message, {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 5000,
            });
            navigate("/login-user");
        }

    };


    const handleRegister = () => {
        navigate('/register-user');
    }

    const checkButtonClickable = (newUsername, newPassword) => {
        // Add your conditions here
        const isFilled = newUsername.trim() !== '' && newPassword.trim() !== '';
        setIsButtonClickable(isFilled);

    };
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
        checkButtonClickable(event.target.value, password);
    };
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        checkButtonClickable(username, event.target.value);
    };
    const maskedPassword = password.replace(/./g, '*')
    return (
        <div className=' flex justify-center  ' >
            <div className=' flex  justify-center rounded-bl-lg rounded-br-lg  shadow-md shadow-gray-700 bg-gray-800 p-7'
                style={{ backgroundColor: ' #D9D9D9', width: '550px', height: '380px' }}>
                <div className=' absolute font-[700] text-[#000000] text-[24px] leading-[24px]  top-[101px] ml-[-4] tracking-[0.02em]'>WELCOME TO CARGOLOGIX</div>
                <div className=' absolute top-[132px]  font-[400] text-[12px] leading-[16px] tracking-[0.01em] text-[#000000] '>Sign in or Register below:</div>


                <div className=' absolute w-[274px]  bg-white rounded-tr-md rounded-tl-md grid items-center  border-b-2 border-solid border-black ' style={{
                    top: '163px',
                    height: '40px',
                    display: 'grid',
                    gridTemplateColumns: 'auto 1fr auto',
                    borderBottomWidth: username ? '2px' : '1px',
                    gap: '5px',
                }}>
                    <img src={passportVector} alt="Vector" className=" ml-[0.5rem] outline-none text-[15px] " />
                    <input
                        value={username}
                        onChange={handleUsernameChange}
                        placeholder='Username'
                        type="text"
                        style={{ borderBottomWidth: username ? '2px' : '1px' }}
                        className='bg-white  h-[40px] w-full p-2 outline-none text-[15px] border-b-2 border-solid border-black'
                    />

                </div>
                <div className=' absolute w-[274px] bg-white rounded-tr-md rounded-tl-md grid items-center   border-b-2 border-solid border-black ' style={{
                    top: '218px',
                    height: '40px',
                    display: 'grid',
                    gridTemplateColumns: 'auto 1fr auto',
                    borderBottomWidth: password ? '2px' : '1px',
                    gap: '5px',
                }}>
                    <img src={passportVector} alt="Vector" className=" ml-[0.5rem] outline-none text-[15px]" />
                    <input
                        type={passwordToggle ? 'text' : 'password'}
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder='Password'
                        name="password"
                        style={{ borderBottomWidth: password ? '2px' : '1px' }}
                        className={`bg - white h-[40px] w-full  p-2 outline-none text-[15px]  border-solid border-black`}
                    />
                    <img src={eyeVector}
                        onClick={() => {
                            setPasswordToggle(!passwordToggle);
                            console.log("passwordToggle state:", passwordToggle);
                        }} alt="Vector" className="h-3 mr-[0.5rem]" />
                </div>
                <div>
                    <div>
                        <span className=' relative top-[174px] '>
                            <input type="checkbox" className=' relative outline-none text-[15px] checked:bg-[#333333] checked:border-transparent appearance-none w-[18px] h-[18px] top-[0px] border-solid border-2 border-black left-[62px]  ' />
                            <span className=' relative font-light text-[12px] h-[23px] tracking-[-1%] left-[70px] '>Remember me
                            </span>
                        </span>

                        <button onClick={handleLogin} className={` relative  w-[122px] h-[40px] rounded-[40px] top-[160px] 
                        text-[#FFFFFF] font-[900] text-[12px] left-[117px] ${isButtonClickable ? 'bg-[#333333]' : 'bg-[#8B9093]'} `}
                            disabled={!isButtonClickable}>
                            LOGIN
                        </button>
                    </div>
                    <div className=' relative w-[265px] top-[170px] '>
                        <span className='  relative h-[23px]    font-[600] text-[12px] leading-[16px] tracking-[-0.07em] left-[62px]  text-[#000000] '>
                            FORGOTTEN PASSWORD
                        </span>

                        <span className='  relative h-[23px]   font-[600] text-[12px] leading-[16px] tracking-[-0.07em]  left-[75px] text-[#000000] '>
                            FORGOTTEN USERNAME
                        </span>
                    </div>
                    <div className='   relative w-[400px]  h-[28px] left-[30px] top-[175px]  font-[300] tracking-tight  text-[12px] '>
                        If you have any trouble logging in to an existing account, please

                    </div>
                    <div className=' relative   h-[28px] left-[80px] top-[165px] font-[Roboto] font-[300] tracking-[-1%]  text-[12px]'>contact us at <span><span className='font-[700]' >cargologix.support@sohonet.com</span></span></div>
                </div>

                <button onClick={handleRegister} className={` absolute w-[264px] h-[40px] rounded-[40px] top-[397px]
                        text-[#FFFFFF]  font-[900] text-[12px] bg-[#8B9093] hover:bg-[#333333] `}
                >
                    REGISTER
                </button>

            </div >
        </div >
    )
}
export default Login