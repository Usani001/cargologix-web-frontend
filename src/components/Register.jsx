import React from 'react'
import passportVector from '../icons/Shape.svg'
import wizardClamp from '../icons/Wizard Display.png'
import { useNavigate } from "react-router-dom";
import eyeVector from '../icons/Vector.svg'
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Register = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [broker, setBroker] = useState('');
    const [client, setClient] = useState('');
    const [carrier, setCarrier] = useState('');
    const [activeButton, setActiveButton] = useState(null);
    const handleSignUp = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_CARGOLOGIX_BASE_URL}/user/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                    firstname: firstName,
                    lastname: lastName,
                    email: email,
                    role: broker

                }),
            });
            const responseData = await response.json();
            console.log(responseData);
            if (responseData.message === "User Created") {
                localStorage.setItem(
                    'token',
                    JSON.stringify(responseData.token)
                );
                toast.success(" Signup Successful", {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 6000, // Display toast for 10 seconds
                    onClose: () => {
                        setTimeout(() => {
                            navigate('/user-otp-verification'); // Redirect after 10 seconds
                        }, 3000);
                    },
                });
                console.log(responseData.token)
            } else {
                console.log("Failure toast should be triggered");
                toast.error(responseData.message, {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 5000,
                });
                navigate("/register-user");
            }
        } catch (error) {
            console.log("Failure toast should be triggered");
            toast.error(error.message, {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 5000,
            });
            navigate("/register-user");
        }

    };


    const [isButtonClickable, setIsButtonClickable] = useState(false);
    const checkButtonClickable = (newUsername, newPassword, newFirstName, newLastName, newEmail, newBroker, newClient, newCarrier) => {
        // Add your conditions here
        const isFilled = newUsername.trim() !== '' && newPassword.trim() !== ''
            && newFirstName.trim() !== '' && newLastName.trim() !== '' && newEmail.trim() !== '' &&
            (newBroker.trim() !== '' || newClient.trim() !== '' || newCarrier.trim() !== '');
        setIsButtonClickable(isFilled);

    };

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
        checkButtonClickable(event.target.value, password, firstName, lastName, email, broker, client, carrier);
    };
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        checkButtonClickable(username, event.target.value, firstName, lastName, email, broker, client, carrier);
    };
    const handleFisrtNameChange = (event) => {
        setFirstName(event.target.value);
        checkButtonClickable(username, password, event.target.value, lastName, email, broker, client, carrier);
    };
    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
        checkButtonClickable(username, password, firstName, event.target.value, email, broker, client, carrier);
    };
    const handleEmail = (event) => {
        setEmail(event.target.value);
        checkButtonClickable(username, password, firstName, lastName, event.target.value, broker, client, carrier);
    };

    const navigate = useNavigate();





    const handleClick = (buttonColor, value) => {

        if (activeButton === buttonColor) {
            // If the same button is clicked again, reset the active button
            setActiveButton(null);
            setBroker('');
            setClient('')
            setCarrier('')
            setActiveButton(null);
        } else {
            // Set the active button to the clicked button
            setActiveButton(buttonColor);
            setBroker(value);
            setClient(value)
            setCarrier(value)
            checkButtonClickable(username, password, firstName, lastName, email, value, value, value);
            setActiveButton(buttonColor);
        }
    };
    return (
        <div className='flex justify-center'>
            <div className='w-[550px] bg-[#D9D9D9] h-[489px] flex justify-center rounded-bl-lg rounded-br-lg shadow-md shadow-gray-700  p-7'>
                <div className=' absolute font-[830] text-[#000000] text-[24px] leading-[24px]  top-[106px] ml-[-4] tracking-[0.02em]'>CARGOLOGIX REGISTRATION</div>
                <div className=' absolute top-[143px] font-[Roboto] justify-center font-[400] text-[12px] leading-[16px] tracking-[0.01em] text-[#000000] align-middle'>
                    Welcome to Cargologix Registration wizard, please follow the
                    <div className=' ml-24' >instructions below</div>
                </div>
                <div className=' absolute top-[190px] '><img src={wizardClamp} alt="" /></div>

                <div className='absolute -mt-7 top-[280px]  '>
                    <button onClick={() => handleClick('bg-[#8B9093]', 'Broker')}
                        value={broker}
                        className={` relative   w-[155px] h-[40px] rounded-[40px] 
                    text-[#FFFFFF] 
                    ${activeButton === 'bg-[#8B9093]' ? 'bg-[#333333]' : 'bg-[#8B9093]'}   font-[Gotham] font-[900] text-[12px] -left-[8px] `} >
                        BROKER
                    </button>
                    <button onClick={() => handleClick('bg-[#8B9094]', '')}
                        value={client}
                        className={` relative   w-[155px] h-[40px] rounded-[40px]
                    text-[#FFFFFF]
                    ${activeButton === 'bg-[#8B9094]' ? 'bg-[#333333]' : 'bg-[#8B9093]'} font-[Gotham] font-[900] text-[12px]  `}>
                        SENDER/CLIENT
                    </button>
                    <button onClick={() => handleClick('bg-[#8B9095]', '')}
                        value={carrier}
                        className={`relative    w-[155px] h-[40px] rounded-[40px]
                    text-[#FFFFFF]
                    ${activeButton === 'bg-[#8B9095]' ? 'bg-[#333333]' : 'bg-[#8B9093]'} font-[Gotham] font-[900] text-[12px] left-[10px] selection:bg-[#333333] `}>
                        CARRIER
                    </button>
                </div>
                <div className='absolute grid w-[500px] top-[310px] ' style={{
                    gridTemplateColumns: 'auto  auto',
                    gridTemplateRows: ' auto auto',
                    rowGap: '30px', columnGap: '8px'
                }}>
                    < span className={`group  relative  ml-[15px] w-[230px]  bg-white rounded-tr-md rounded-tl-md grid items-center   border-b border-solid border-black `
                    } style={{
                        height: '40px',
                        display: 'grid',
                        gridTemplateColumns: 'auto 1fr auto',
                        gap: '5px',
                        borderBottomWidth: username ? '2px' : '1px'
                    }}>
                        <img src={passportVector} alt="Vector" className=" ml-[0.5rem] h-[13.38px] w-[13.38px]" />
                        <input
                            value={username}
                            onChange={handleUsernameChange}
                            placeholder='Username'
                            type="text"
                            className={`bg-white    rounded-sm h-[40px] w-full p-2 outline-none text-[15px] text-[15px] border-b  border-solid border-black `}
                            style={{ borderBottomWidth: username ? '2px' : '1px' }} />
                    </span>
                    <span className={`marker: relative w-[230px]    bg-white rounded-tr-md rounded-tl-md grid items-center   border-b border-solid border-black `} style={{
                        height: '40px',
                        display: 'grid',
                        gridTemplateColumns: 'auto 1fr auto',
                        gap: '5px',
                        borderBottomWidth: password ? '2px' : '1px'
                    }}>
                        <img src={passportVector} alt="Vector" className=" h-[13.38px] w-[13.38px] ml-[0.5rem]" />
                        <input
                            value={password}
                            onChange={handlePasswordChange}
                            placeholder='Password'
                            type="password"
                            style={{ borderBottomWidth: password ? '2px' : '1px' }}
                            className={` ${activeButton === ' border-b-2'} bg - white rounded-sm h-[40px] w-full p-2 outline-none text-[15px] text-[15px] border-b border-solid border-black`} />
                        <img src={eyeVector} alt="Vector" className="h-3 mr-[0.5rem]" />
                    </span>
                    <span className=' relative ml-[15px] w-[230px]  bg-white rounded-tr-md rounded-tl-md grid items-center  border-b border-solid border-black ' style={{
                        height: '40px',
                        display: 'grid',
                        gridTemplateColumns: 'auto 1fr auto',
                        gap: '5px',
                        borderBottomWidth: firstName ? '2px' : '1px'
                    }}>
                        <img src={passportVector} alt="Vector" className=" ml-[0.5rem] h-[13.38px] w-[13.38px] " />
                        <input
                            value={firstName}
                            onChange={handleFisrtNameChange}
                            placeholder='First Name'
                            type="text"
                            style={{ borderBottomWidth: firstName ? '2px' : '1px' }}
                            className='bg-white rounded-sm h-[40px] w-full p-2 outline-none text-[15px] border-b border-solid border-black' />
                    </span>
                    <span className=' relative w-[230px] border-b border-solid border-black  bg-white rounded-tr-md rounded-tl-md grid items-center    ' style={{
                        height: '40px',
                        display: 'grid',
                        gridTemplateColumns: 'auto 1fr auto',
                        gap: '5px',
                        borderBottomWidth: lastName ? '2px' : '1px'
                    }}>

                        < img src={passportVector} alt="Vector" className=" h-[13.38px] w-[13.38px] ml-[0.5rem]" />
                        <input
                            value={lastName}
                            onChange={handleLastNameChange}
                            placeholder='Last Name'
                            type="text"
                            style={{ borderBottomWidth: lastName ? '2px' : '1px' }}
                            className='bg-white rounded-sm h-[40px] w-full p-2 outline-none text-[15px] border-b border-solid border-black'
                        />
                    </span>
                    <span className=' relative ml-[15px] w-[230px]  bg-white rounded-tr-md rounded-tl-md grid items-center  border-b border-solid border-black ' style={{
                        height: '40px',
                        display: 'grid',
                        gridTemplateColumns: 'auto 1fr auto',
                        gap: '5px',
                        borderBottomWidth: email ? '2px' : '1px'
                    }}>
                        <img src={passportVector} alt="Vector" className=" ml-[0.5rem] h-[13.38px] w-[13.38px] " />
                        <input
                            value={email}
                            onChange={handleEmail}
                            placeholder='Email'
                            type="text"
                            style={{ borderBottomWidth: email ? '2px' : '1px' }}
                            className='bg-white rounded-sm h-[40px] w-full p-2 outline-none text-[15px] border-b border-solid border-black' />
                    </span>
                    <span className=' relative w-[208px]  h-[58px] font-[Roboto] font-[400] text-[12px] leading-[14px] tracking-[-1%] -mt-[7px] text-[#000000] '>
                        Once you have completed the form and click register. A Verification email will be sent to your account.
                        Please check the junk mail if you can’t see it?
                    </span>
                </div>
                <button

                    onClick={() => { handleSignUp() }}
                    className={`relative w-[264px]  h-[40px] rounded-[40px] top-[395px] ml-[3px]
                        text-[#FFFFFF]
                        ${isButtonClickable ? 'bg-[#333333]' : 'bg-[#8B9093]'} font-[Gotham] font-[900] text-[12px]  `}
                    disabled={!isButtonClickable}>
                    REGISTER
                </button>
            </div >
        </div >
    )
}
export default Register