import React from 'react'
import close from '../icons/close.png'
import ellipse1 from '../icons/Ellipse 1.png'
import ellipse2 from '../icons/Ellipse 2.png'
import line2 from '../icons/Line 2.png'
import imageSymbol from '../icons/image_search.png'
import { useState, useEffect, useRef } from 'react';
import passportVector from '../icons/Shape.svg'
import eyeVector from '../icons/Vector.svg'
import { useNavigate, Link } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CreateProfile = () => {
    const [username, setUsername] = useState('');
    const [company, setCompany] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [timeZone, setTimezone] = useState('');
    const [telephone, setTelephone] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState('');
    const hiddenFileInput = useRef(null);


    useEffect(() => {
        const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        setTimezone(userTimezone);
    }, []);

    const [isButtonClickable, setIsButtonClickable] = useState(false);
    const checkButtonClickable = (newUsername, newCompany, newFirstName, newLastName, newJobTile, newTelephone, newMobile) => {
        // Add your conditions here
        const isFilled = newUsername.trim() !== '' && newCompany.trim() !== ''
            && newFirstName.trim() !== '' && newLastName.trim() !== '' && newJobTile.trim() && newTelephone.trim() && newMobile.trim();
        setIsButtonClickable(isFilled);

    };

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
        checkButtonClickable(event.target.value, company, firstName, lastName, jobTitle, telephone, mobile, email);
    };
    const handleCompany = (event) => {
        setCompany(event.target.value);
        checkButtonClickable(username, event.target.value, firstName, lastName, jobTitle, telephone, mobile, email);
    };
    const handleFisrtNameChange = (event) => {
        setFirstName(event.target.value);
        checkButtonClickable(username, company, event.target.value, lastName, jobTitle, telephone, mobile, email);
    };
    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
        checkButtonClickable(username, company, firstName, event.target.value, jobTitle, telephone, mobile, email);
    };
    const handleJobTitle = (event) => {
        setJobTitle(event.target.value);
        checkButtonClickable(username, company, firstName, lastName, event.target.value, telephone, mobile, email);
    };
    const handleTelephone = (event) => {
        setTelephone(event.target.value);
        checkButtonClickable(username, company, firstName, lastName, jobTitle, event.target.value, mobile, email);
    };
    const handleMobile = (event) => {
        setMobile(event.target.value);
        checkButtonClickable(username, company, firstName, lastName, jobTitle, telephone, event.target.value, email);
    };

    const handleEmail = (event) => {
        setEmail(event.target.value);
        checkButtonClickable(username, company, firstName, lastName, jobTitle, telephone, mobile, event.target.value);
    };


    const navigate = useNavigate();

    const bearerToken = localStorage.getItem("token");
    const token = JSON.parse(bearerToken);

    const handleCreateProfile = async () => {
        try {
            const response = await fetch(
                `${process.env.REACT_APP_CARGOLOGIX_BASE_URL}/user/update-details`,
                {
                    method: 'PATCH',
                    headers: {
                        Authorization: `Bearer ${token}`,

                        'Content-Type': 'application/json',
                    },

                    body: JSON.stringify({
                        username: username,
                        companyName: company,
                        firstname: firstName,
                        lastname: lastName,
                        jobTitle: jobTitle,
                        telephone: telephone,
                        cell: mobile,
                    }),
                });

            console.log('Response from server', response)
            console.log('Bearer: ' + token)
            const responseData = await response.json();

            if (responseData.success === true) {
                localStorage.setItem(
                    'profileData',
                    JSON.stringify(responseData.data)
                );
                console.log(token)
                toast.success('Succesfully Updated Profile ', {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 6000, // Display toast for 10 seconds
                    onClose: () => {
                        setTimeout(() => {
                            navigate('/broker-unboarding')
                        }, 3000);
                    },
                });
            } else {
                console.log('Failed due to incorrect details');
                toast.error(responseData.message, {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 5000,
                });

                navigate("/create-profile");

            }

        } catch (error) {
            console.log("Failure toast should be triggered", token);
            toast.error('Network is not available', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 5000,
            });
            navigate("/create-profile");
        }


    };
    const inputRef = useRef(null);


    const handleImageClick = () => {
        inputRef.current.click();
    };
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        const imgname = event.target.files[0].name;
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            const img = new Image();
            img.src = reader.result;
            img.onload = () => {
                const canvas = document.createElement("canvas");
                const maxSize = Math.max(img.width, img.height);
                canvas.width = maxSize;
                canvas.height = maxSize;
                const ctx = canvas.getContext("2d");
                ctx.drawImage(
                    img,
                    (maxSize - img.width) / 2,
                    (maxSize - img.height) / 2
                );
                canvas.toBlob(
                    (blob) => {
                        const file = new File([blob], imgname, {
                            type: "image/png",
                            lastModified: Date.now(),
                        });

                        console.log(file);
                        setImage(file);
                    },
                    "image/jpeg",
                    0.8
                );
            };
        };
    };
    const handleUploadButtonClick = async (file) => {


        var formdata = new FormData();
        formdata.append("file", file);


        try {

            const response = await fetch(
                // `${process.env.REACT_APP_CARGOLOGIX_BASE_URL}/user/update-image`,
                `https://cors-anywhere.herokuapp.com/https://cargologix-api.up.railway.app/user/update-image`,
                {
                    method: 'PATCH',
                    headers: {
                        Authorization: `Bearer ${token}`,

                        'Content-Type': 'application/json',
                    },

                    body: formdata,
                    redirect: "follow",
                })
                .then((response) => response.text())
                .then((result) => {
                    console.log(JSON.parse(result));
                    const profileurl = JSON.parse(result);
                    setImage(profileurl.img_url);
                });
            console.log('Response from server', response)
            console.log('Bearer: ' + token)
            const responseData = await response.json();

            if (responseData.success === true) {
                localStorage.setItem(
                    'profileData',
                    JSON.stringify(responseData.data)
                );
                console.log(token)
                toast.success('Succesfully Updated Profile ', {
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

                navigate("/create-profile");

            }

        } catch (error) {
            console.log("Failure toast should be triggered", token);
            toast.error('Network is not available', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 5000,
            });
            navigate("/create-profile");
        }

    };

    const handleClick = (event) => {
        hiddenFileInput.current.click();
    };
    return (
        <div className='flex justify-center' >
            <div className='w-[550px] bg-[#D9D9D9] justify-center h-[619px] flex  rounded-bl-lg rounded-br-lg shadow-md shadow-gray-700  '>
                <div className=' max-[550px]:ml-[450px] ml-[500px] justify-end ' >
                    <Link to='/broker-unboarding'>
                        <img className='relative  ' src={close} alt="" />
                    </Link>
                </div>
                <div className=' absolute font-[700] text-[#000000] text-[24px] leading-[24px]  top-[106px] ml-[-4] tracking-[0.03em]'>
                    CARGOLOGIX BROKER REGISTRATION
                </div>
                <div className=' absolute top-[143px]   justify-center font-[400] text-[12px] leading-[16px] tracking-[0.01em] text-[#000000] align-middle'>
                    Welcome to the <span className='font-[700]'>Broker</span> Registration wizard, please add your profile
                    <div className=' ml-[5px]' >details. If you are not a Broker click the back arrow to start again?</div>
                </div>
                <div className=' absolute w-[230px] top-[213px] ml-[-13px] justify-center align-middle '>
                    <img src={line2} alt="" />
                </div>

                <div className=' absolute align-middle  grid grid-cols-3 grid-rows-2 justify-center top-[205px] '
                    style={{
                        columnGap: '73px', rowGap: '-562px'
                    }}>

                    <span className=' '>
                        <img src={ellipse1} alt="" />
                    </span>
                    <span className='  '>
                        <img src={ellipse2} alt="" />
                    </span>
                    <span className='  '>
                        <img src={ellipse1} alt="" />
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
                <div onClick={handleImageClick} className=' absolute flex justify-center items-center bg-white top-[256px] h-[90px] w-[90px] rounded-full ml-[-410px]' >
                    {image ?
                        <img src={URL.createObjectURL(image)} alt="" className=' absolute flex justify-center items-center  h-[90px] w-[90px] rounded-full ' /> :

                        <img className=' relative' src={imageSymbol} alt="" />
                    }
                    <div>

                    </div>

                </div>
                <div className='absolute  grid grid-rows-2 top-[-240px] ml-[-80px]'>
                    <input ref={inputRef} className={` absolute  w-[122px] bg-[#8B9093] hover:bg-[#333333] h-[40px] rounded-[40px] top-[505px] ml-[3px]  
                  text-[#FFFFFF] font-[900] text-[12px]`}
                        style={{ display: 'none' }}
                        type="file"
                        onChange={handleImageChange}
                    />
                    <button
                        onClick={handleUploadButtonClick}
                        className={` absolute  w-[122px] bg-[#8B9093] hover:bg-[#333333] h-[40px] rounded-[40px] top-[505px] ml-[3px]  
                  text-[#FFFFFF] font-[900] text-[12px]`}
                    >
                        ADD IMAGE
                    </button>
                    <div className=' relative text-[#000000] w-[171px] h-[35px] font-[300] leading-[12px] text-[12px] top-[555px]'>
                        Add or remove a profile photo, avatar or a company logo?
                    </div>
                </div>
                <div className='absolute  ml-[-160px] w-[335px] tracking-[0.06em] text-[#000000] leading-[16px] text-[16px] h-[41px] font-[700] top-[359px] '>
                    ADD PROFILE INFORMATION
                    <div className=' text-[14px] mt-[5px] w-[168px] tracking-tight h-[10px]'>
                        Complete all fields below
                    </div>
                </div>
                <div className='absolute grid grid-cols-2 grid-rows-3 w-[500px] top-[402px] ' style={{
                    rowGap: '15px', columnGap: '20px'
                }}>
                    < span className={`group  relative ml-[-8px] w-[246px]  bg-white rounded-tr-md rounded-tl-md grid items-center   border-b border-solid border-black`
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
                            className={`bg-white h-[40px] w-full p-2 outline-none  text-[15px] border-b  border-solid border-black`}
                            style={{ borderBottomWidth: username ? '2px' : '1px' }} />
                    </span>
                    <span className={`marker:relative w-[246px]    bg-white rounded-tr-md rounded-tl-md grid items-center   border-b border-solid border-black`} style={{
                        height: '40px',
                        display: 'grid',
                        gridTemplateColumns: 'auto 1fr auto',
                        gap: '5px',
                        borderBottomWidth: company ? '2px' : '1px'
                    }}>
                        <img src={passportVector} alt="Vector" className=" h-[13.38px] w-[13.38px] ml-[0.5rem]" />
                        <input
                            value={company}
                            onChange={handleCompany}
                            placeholder='Company'
                            type="text"
                            style={{ borderBottomWidth: company ? '2px' : '1px' }}
                            className=' bg-white  h-[40px] w-full p-2 outline-none text-[15px] border-b border-solid border-black' />

                    </span>
                    <span className=' relative h-[40px]  grid ml-[-8px] gap-[5px] w-[246px]  bg-white rounded-tr-md rounded-tl-md  items-center  border-b border-solid border-black ' style={{
                        gridTemplateColumns: 'auto 1fr auto',
                        borderBottomWidth: firstName ? '2px' : '1px'
                    }}>
                        <img src={passportVector} alt="Vector" className=" ml-[0.5rem] h-[13.38px] w-[13.38px] " />
                        <input
                            value={firstName}
                            onChange={handleFisrtNameChange}
                            placeholder='First Name'
                            type="text"
                            style={{ borderBottomWidth: firstName ? '2px' : '1px' }}
                            className='bg-white  h-[40px] w-full p-2 outline-none text-[15px] border-b border-solid border-black' />
                    </span>
                    <span className=' relative h-[40px]  w-[246px] gap-[5px] border-b border-solid border-black  bg-white rounded-tr-md rounded-tl-md grid items-center    ' style={{
                        gridTemplateColumns: 'auto 1fr auto',
                        borderBottomWidth: lastName ? '2px' : '1px'
                    }}>

                        < img src={passportVector} alt="Vector" className=" h-[13.38px] w-[13.38px] ml-[0.5rem]" />
                        <input
                            value={lastName}
                            onChange={handleLastNameChange}
                            placeholder='Last Name'
                            type="text"
                            style={{ borderBottomWidth: lastName ? '2px' : '1px' }}
                            className='bg-white  h-[40px] w-full p-2 outline-none  text-[15px] border-b border-solid border-black'
                        />
                    </span>
                    <span className=' relative h-[40px]  grid ml-[-8px] gap-[5px] w-[246px]  bg-white rounded-tr-md rounded-tl-md  items-center  border-b border-solid border-black ' style={{
                        gridTemplateColumns: 'auto 1fr auto',
                        borderBottomWidth: jobTitle ? '2px' : '1px'
                    }}>
                        <img src={passportVector} alt="Vector" className=" ml-[0.5rem] h-[13.38px] w-[13.38px] " />
                        <input
                            value={jobTitle}
                            onChange={handleJobTitle}
                            placeholder='Job Title'
                            type="text"
                            style={{ borderBottomWidth: jobTitle ? '2px' : '1px' }}
                            className='bg-white  h-[40px] w-full p-2 outline-none  text-[15px] border-b border-solid border-black' />
                    </span>

                    <span className=' relative h-[40px]  w-[246px] gap-[5px] border-b border-solid border-black  bg-white rounded-tr-md rounded-tl-md grid items-center    ' style={{
                        gridTemplateColumns: 'auto 1fr auto',
                        borderBottomWidth: timeZone ? '2px' : '1px'
                    }}>

                        < img src={passportVector} alt="Vector" className=" h-[13.38px] w-[13.38px] ml-[0.5rem]" />
                        <input
                            readOnly
                            value={timeZone}
                            placeholder='Time Zone'
                            type="text"
                            style={{ borderBottomWidth: timeZone ? '2px' : '1px' }}
                            className='bg-white  h-[40px] w-full p-2 outline-none text-[15px] border-b border-solid border-black'
                        />
                    </span>
                </div>
                <div className='absolute grid grid-cols-2 grid-rows-2 w-[500px] top-[560px] ' style={{
                    rowGap: '15px', columnGap: '20px'
                }}>
                    <div className=' relative text-[16px] font-[700] text-[#000000] grid ml-[-8px] gap-[5px] tracking-[0.05em] ' >
                        CONTACT INFORMATION
                    </div>
                    <div>

                    </div>
                </div>
                <div className='absolute grid grid-cols-2 grid-rows-2 w-[500px] top-[585px] ' style={{
                    rowGap: '15px', columnGap: '20px'
                }}>


                    <span className=' relative h-[40px]  grid ml-[-8px] gap-[5px] w-[246px]  bg-white rounded-tr-md rounded-tl-md  items-center  border-b border-solid border-black ' style={{
                        gridTemplateColumns: 'auto 1fr auto',
                        borderBottomWidth: telephone ? '2px' : '1px'
                    }}>
                        <img src={passportVector} alt="Vector" className=" ml-[0.5rem] h-[13.38px] w-[13.38px] " />
                        <input
                            value={telephone}
                            onChange={handleTelephone}
                            placeholder='Telephone'
                            type="text"
                            style={{ borderBottomWidth: telephone ? '2px' : '1px' }}
                            className='bg-white  h-[40px] w-full p-2 outline-none text-[15px] border-b border-solid border-black' />
                    </span>
                    <span className=' relative h-[40px]  w-[246px] gap-[5px] border-b border-solid border-black  bg-white rounded-tr-md rounded-tl-md grid items-center    ' style={{
                        gridTemplateColumns: 'auto 1fr auto',
                        borderBottomWidth: mobile ? '2px' : '1px'
                    }}>

                        < img src={passportVector} alt="Vector" className=" h-[13.38px] w-[13.38px] ml-[0.5rem]" />
                        <input
                            value={mobile}
                            onChange={handleMobile}
                            placeholder='Mobile/cell'
                            pattern='/^[0-9]{10}$/'
                            type="text"
                            style={{ borderBottomWidth: mobile ? '2px' : '1px' }}
                            className='bg-white  h-[40px] w-full p-2 outline-none text-[15px] border-b border-solid border-black'
                        />
                    </span>
                    <span className=' relative h-[40px]  grid ml-[-8px] gap-[5px] w-[246px]  bg-white rounded-tr-md rounded-tl-md  items-center  border-b border-solid border-black ' style={{
                        gridTemplateColumns: 'auto 1fr auto',
                        borderBottomWidth: email ? '2px' : '1px'
                    }}>
                        <img src={passportVector} alt="Vector" className=" ml-[0.5rem] h-[13.38px] w-[13.38px] " />
                        <input
                            value={email}
                            onChange={handleEmail}
                            placeholder='Email'
                            type="text"
                            style={{ borderBottomWidth: email ? '2px' : '1px' }}
                            className='bg-white  h-[40px] w-full p-2 outline-none text-[15px] border-b border-solid border-black' />
                    </span>
                    <button onClick={handleCreateProfile} className={`  w-[246px] ${isButtonClickable ? 'bg-[#333333]' : 'bg-[#8B9093]'} h-[40px] rounded-[40px]   
                  text-[#FFFFFF] font-[900] text-[12px]`}
                        disabled={!isButtonClickable}>
                        SAVE
                    </button>
                    <div className='absolute grid grid-cols-2 grid-rows-2 w-[500px] top-[125px] ' style={{
                        rowGap: '15px', columnGap: '20px'
                    }}>
                    </div>
                </div>

            </div >
        </div >
    )
}
export default CreateProfile