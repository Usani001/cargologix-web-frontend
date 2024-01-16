import React from 'react'
import close from '../icons/close.png'
import downArrow from '../icons/arrow_drop_down.png'
import switchIcon from '../icons/switch.png'
import ellipse6 from '../icons/Ellipse 6.png'
import plus from '../icons/icon.png'
import { useState } from 'react';
import passportVector from '../icons/Shape.svg'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { useNavigate, Link } from "react-router-dom";

const AddJob = () => {
    const [customerName, setCustomerName] = useState('');
    const [poNumber, setPoNumber] = useState('');
    const [contactDetails, setContactDetails] = useState('');
    const [bookedBy, setBookedBy] = useState('');
    const [jobNumber, setJobNumber] = useState('');
    const [specialRequest, setSpecialRequest] = useState('');
    const [collectionPostcode, setCollectionPostcode] = useState('');
    const [deliveryPostcode, setDeliveryPostcode] = useState('');
    const [collectionDateTime, setCollctionDateTime] = useState('');
    const [deliveryDateTime, setDeliveryDateTime] = useState('');
    const [vehicleType, setVehicleType] = useState('');
    const [jobType, setJobType] = useState('');
    const [packagingType, setPackagingType] = useState('');
    const [clientCost, setClientCost] = useState('');
    const [extraCharges, setExtraCharges] = useState('');



    const [isButtonClickable, setIsButtonClickable] = useState(false);
    const checkButtonClickable = (newPassword, newFirstName, newLastName, newEmail, newBroker, newClient, newCarrier) => {
        // Add your conditions here
        // const isFilled = newPassword.trim() !== ''
        //     && newFirstName.trim() !== '' && newLastName.trim() !== '' && newEmail.trim() !== '' &&
        //     (newBroker.trim() !== '' || newClient.trim() !== '' || newCarrier.trim() !== '');
        // setIsButtonClickable(isFilled);

    };

    const handleCustomerName = (event) => {
        setCustomerName(event.target.value);
        checkButtonClickable();
    };
    const handlePoNumber = (event) => {
        setPoNumber(event.target.value);
        checkButtonClickable();
    };
    const handleBookedBy = (event) => {
        setBookedBy(event.target.value);
        checkButtonClickable();
    };
    const handleSpecialRequest = (event) => {
        setSpecialRequest(event.target.value);
        checkButtonClickable();
    };
    const handleContactDetails = (event) => {
        setContactDetails(event.target.value);
        checkButtonClickable();
    };
    const handleLJobNumber = (event) => {
        setJobNumber(event.target.value);
        checkButtonClickable();
    };
    const handleCollectionPostCode = (event) => {
        setCollectionPostcode(event.target.value);
        checkButtonClickable();
    };
    const handleDeliveryPostCode = (event) => {
        setDeliveryPostcode(event.target.value);
        checkButtonClickable();
    };
    const handleCollectionDeate = (event) => {
        setCollctionDateTime(event.target.value);
        checkButtonClickable();
    };
    const handleDeliveryDate = (event) => {

        setDeliveryDateTime(event.target.value);
        checkButtonClickable();
    };
    const handleVehicleType = (event) => {
        setVehicleType(event.target.value);
        checkButtonClickable();
    };
    const handleJobType = (event) => {
        setJobType(event.target.value);
        checkButtonClickable();
    };
    const handlePackagingType = (event) => {
        setPackagingType(event.target.value);
        checkButtonClickable();
    };
    const handleClientCost = (event) => {
        setClientCost(event.target.value);
        checkButtonClickable();
    };
    const handleExtraCharges = (event) => {
        setExtraCharges(event.target.value);
        checkButtonClickable();
    };



    const bearerToken = localStorage.getItem("token");
    const token = JSON.parse(bearerToken);
    const navigate = useNavigate();

    const profileData = localStorage.getItem('profileData');
    const profile = JSON.parse(profileData);

    const handleAddJob = async () => {
        try {
            const response = await fetch(
                `${process.env.REACT_APP_CARGOLOGIX_BASE_URL}/job/create`,
                {
                    method: 'POST',
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },

                    body: JSON.stringify({
                        customerName: customerName,
                        specialRequest: specialRequest,
                        contactDetails: contactDetails,
                        poNumber: poNumber,
                        bookedBy: bookedBy,
                        collectionDate: collectionDateTime,
                        deliveryDate: deliveryDateTime,
                        collectionPostcode: collectionPostcode,
                        deliveryPostcode: deliveryPostcode,
                        vehicleType: vehicleType,
                        jobType: jobType,
                        clientCost: clientCost,
                        extraCharges: extraCharges,
                    }),
                });

            console.log('Response from server', response)
            console.log('Bearer: ' + token)
            const responseData = await response.json();

            if (responseData.success === true) {
                localStorage.setItem(
                    'addJobData',
                    JSON.stringify(responseData.data)
                );
                console.log(token)
                toast.success('Job added successfully', {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 6000, // Display toast for 10 seconds
                    onClose: () => {
                        setTimeout(() => {
                            navigate('/dashboard')
                        }, 3000);
                    },
                });
            } else {
                console.log('Failed due to incorrect details');
                toast.error(responseData.message, {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 5000,
                });

                navigate("/add-job");

            }

        } catch (error) {
            console.log("Failure toast should be triggered", token);
            toast.error('Network is not available', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 5000,
            });
            navigate("/add-job");
        }


    };

    return (
        <div className=' flex justify-center  ' >
            <div className=' absolute bottom-0 flex  justify-center overflow-auto w-[88%] h-[81.5%] mt-[8px] ml-[170px] '>
                <div className=' relative flex justify-center items-center  w-[305px]   rounded-tl-lg bg-[#D9D9D9] rounded-tr-lg  h-[80px]'>

                    <div className='mt-[-40px] font-[350] text-[16px] leading-[19.2px] tracking-wide'>ADD A JOB</div>
                    <div className=' absolute  ' >
                        <Link to='/dashboard'>
                            <img className=' ml-[275px] mt-[-35px]' src={close} alt="" />
                        </Link>
                    </div>
                    <img className=' absolute mt-5' src={ellipse6} alt="" />
                    <img className=' absolute mt-5' src={plus} alt="" />

                </div>


                <div className=' absolute flex  w-[834px] top-[78px]  h-[1150px] bg-[#D9D9D9] justify-center   rounded-tl-lg rounded-tr-lg    '>

                    < div className=''>

                    </div>
                    <button className={` relative  w-[264px]  bg-[#8B9093] hover:bg-[#333333] h-[40px] rounded-[40px] top-[35px]  
                  text-[#FFFFFF] font-[900] text-[12px]  `}
                    >
                        ADD NEW CLIENT
                    </button>
                    <div className='absolute ml-[-220px]  w-[335px] tracking-[0.06em] text-[#000000] leading-[16px] text-[16px] h-[41px] font-[400] top-[100px] '>
                        CLIENT INFORMATION
                    </div>
                    <div className='absolute grid justify-center ml-[-60px] grid-cols-2 grid-rows-2 w-[500px] top-[127px] ' style={{
                        rowGap: '35px', columnGap: '80px'
                    }}>
                        < text className={`group  relative  w-[265px]  bg-white rounded-tr-md rounded-tl-md grid items-center   border-b border-solid border-black `
                        } style={{
                            height: '40px',
                            display: 'grid',
                            gridTemplateColumns: 'auto 1fr auto',
                            gap: '5px',
                            borderBottomWidth: customerName ? '2px' : '1px'
                        }}>
                            <img src={passportVector} alt="Vector" className=" ml-[0.5rem] h-[13.38px] w-[13.38px]" />
                            <input
                                value={customerName}
                                onChange={handleCustomerName}
                                placeholder='Customer Name'
                                type="text"
                                className={`bg-white     h-[40px] w-full p-2 outline-none text-[15px] border-b  border-solid border-black `}
                                style={{ borderBottomWidth: customerName ? '2px' : '1px' }} />

                        </text>
                        <span className={`marker: relative w-[265px]    bg-white rounded-tr-md rounded-tl-md grid items-center   border-b border-solid border-black `} style={{
                            height: '40px',
                            display: 'grid',
                            gridTemplateColumns: 'auto 1fr auto',
                            gap: '5px',
                            borderBottomWidth: poNumber ? '2px' : '1px'
                        }}>
                            <img src={passportVector} alt="Vector" className=" h-[13.38px] w-[13.38px] ml-[0.5rem]" />
                            <input
                                value={poNumber}
                                onChange={handlePoNumber}
                                placeholder='Po Number'
                                type="text"
                                style={{ borderBottomWidth: poNumber ? '2px' : '1px' }}
                                className=' bg-white  h-[40px] w-full p-2 outline-none text-[15px] border-b border-solid border-black' />

                        </span>
                        <span className=' relative h-[40px]  grid  gap-[5px] w-[265px]  bg-white rounded-tr-md rounded-tl-md  items-center  border-b border-solid border-black ' style={{
                            gridTemplateColumns: 'auto 1fr auto',
                            borderBottomWidth: contactDetails ? '2px' : '1px'
                        }}>
                            <img src={passportVector} alt="Vector" className=" ml-[0.5rem] h-[13.38px] w-[13.38px] " />
                            <input
                                value={contactDetails}
                                onChange={handleContactDetails}
                                placeholder='Contact Details'
                                type="text"
                                style={{ borderBottomWidth: contactDetails ? '2px' : '1px' }}
                                className='bg-white  h-[40px] w-full p-2 outline-none text-[15px] border-b border-solid border-black' />
                        </span>
                        <span className=' relative h-[40px]  w-[265px] gap-[5px] border-b border-solid border-black  bg-white rounded-tr-md rounded-tl-md grid items-center    ' style={{
                            gridTemplateColumns: 'auto 1fr',
                            borderBottomWidth: bookedBy ? '2px' : '1px'
                        }}>

                            < img src={passportVector} alt="Vector" className=" h-[13.38px] w-[13.38px] ml-[0.5rem]" />
                            <input
                                value={bookedBy}
                                onChange={handleBookedBy}
                                placeholder='BB (Booked By)'
                                type="text"
                                style={{ borderBottomWidth: bookedBy ? '2px' : '1px' }}
                                className='bg-white  h-[40px] w-full p-2 outline-none text-[15px] border-b border-solid border-black'
                            />
                        </span>

                        <textarea
                            value={specialRequest}
                            onChange={handleSpecialRequest}
                            type='password'
                            className='bg-white h-[121px] w-[265px]   rounded-md p-2 border-black border-[1px] outline-none text-[15px] ' />

                        <span className=' relative h-[121px]  w-[265px]      ' >
                            <div className='absolute pt-2 tracking-[0.06em] text-[#000000] leading-[16px] text-[16px] h-[41px] font-[400] '>
                                ADD SPECIAL REQUESTS
                                <div className=' relative text-[#000000] w-[211px] h-[15px] font-[300] leading-[12px] text-[12px] top-[5px]'>
                                    Add clients special requests and important notes in the space provided
                                </div>
                            </div>
                        </span>
                    </div>
                    <div className='absolute grid grid-cols-2 grid-rows-2 w-[500px] ml-[-60px] top-[420px] ' style={{
                        rowGap: '15px', columnGap: '20px'
                    }}>
                        <div className=' relative  text-[16px] font-[400] text-[#000000] grid  gap-[5px] tracking-[0.05em] ' >
                            DELIVERY DETAILS
                        </div>
                        <div></div>
                    </div>
                    <div className='absolute grid grid-cols-2 ml-[-60px] grid-rows-4 w-[500px] top-[450px] ' style={{
                        rowGap: '35px', columnGap: '80px'
                    }}>


                        <span className=' relative h-[40px]  grid  gap-[5px] w-[265px]  bg-white rounded-tr-md rounded-tl-md  items-center  border-b border-solid border-black '
                            style={{
                                gridTemplateColumns: 'auto 1fr auto',
                                borderBottomWidth: jobNumber ? '2px' : '1px'
                            }}>
                            <img src={passportVector} alt="Vector" className=" ml-[0.5rem] h-[13.38px] w-[13.38px] " />
                            <input
                                value={jobNumber}
                                onChange={handleLJobNumber}
                                placeholder='Job Number'
                                type="text"
                                style={{ borderBottomWidth: jobNumber ? '2px' : '1px' }}
                                className='bg-white  h-[40px] w-full p-2 outline-none text-[15px] border-b border-solid border-black' />
                        </span>

                        <span className=' relative mt-[-20px] text-[14px] gap-[10px] h-[40px] font-[300] grid-cols-2  grid grid-rows-2 w-[265px]  ' >

                            Add Min Bid Yes/No

                            <div></div>
                            <img src={switchIcon} alt="Vector" className=" ml-[0.5rem] h-[32px] w-[52px] " />
                            <span className=' w-[122px] h-[38px] pl-2 pt-4 opacity-50 bg-slate-50'
                            >£</span>
                        </span>

                        <span className=' relative h-[40px]  grid  gap-[5px] w-[265px]  bg-white rounded-tr-md rounded-tl-md  items-center  border-b border-solid border-black ' style={{
                            gridTemplateColumns: 'auto 1fr auto',
                            borderBottomWidth: collectionPostcode ? '2px' : '1px'
                        }}>
                            <img src={passportVector} alt="Vector" className=" ml-[0.5rem] h-[13.38px] w-[13.38px] " />
                            <input
                                value={collectionPostcode}
                                onChange={handleCollectionPostCode}
                                placeholder='Collection Address Enter Postcode'
                                type="text"
                                style={{ borderBottomWidth: collectionPostcode ? '2px' : '1px' }}
                                className='bg-white h-[40px] w-full p-2 tracking-[-0.07em] outline-none text-[15px] border-b border-solid border-black' />
                        </span>
                        <div className='absolute grid grid-cols-2 grid-rows-2 w-[500px] top-[100px] ' style={{
                            rowGap: '15px', columnGap: '20px'
                        }}>

                        </div>


                        <span className=' relative h-[40px]  w-[265px] gap-[5px] border-b border-solid border-black  bg-white rounded-tr-md rounded-tl-md grid items-center    ' style={{
                            gridTemplateColumns: 'auto 1fr auto',
                            borderBottomWidth: deliveryPostcode ? '2px' : '1px'
                        }}>

                            < img src={passportVector} alt="Vector" className=" h-[13.38px] w-[13.38px] ml-[0.5rem]" />
                            <input
                                value={deliveryPostcode}
                                onChange={handleDeliveryPostCode}
                                placeholder='Delivery Address Enter Postcode'
                                type="text"
                                style={{ borderBottomWidth: deliveryPostcode ? '2px' : '1px' }}
                                className='bg-white  h-[40px] w-full p-2 tracking-[-0.07em] outline-none text-[15px] border-b border-solid border-black'
                            />
                        </span>
                        <span className=' relative h-[40px] justify-center grid w-[265px] text-[14px] align-middle items-center ' style={{
                            gridTemplateColumns: 'auto 1fr auto'
                        }}>Select for ASAP delivery?
                            <img src={switchIcon} alt="Vector" className=" ml-[0.5rem] h-[32px] w-[52px] " />
                        </span>
                        <span className=' relative h-[40px]  grid items-center  w-[275px] grid-cols-2 text-[14px] ' style={{
                            gridTemplateColumns: 'auto 1fr auto',
                        }}    >Select for TODAY delivery?
                            <img src={switchIcon} alt="Vector" className="  ml-[0.5rem] h-[32px] w-[52px] " />
                        </span>
                        <span className=' relative h-[40px]  grid  gap-[5px] w-[265px]  bg-white rounded-tr-md rounded-tl-md  items-center  border-b border-solid border-black ' style={{
                            gridTemplateColumns: 'auto 1fr auto',
                            borderBottomWidth: collectionDateTime ? '2px' : '1px'
                        }}>
                            <img src={passportVector} alt="Vector" className=" ml-[0.5rem] h-[13.38px] w-[13.38px] " />
                            <input
                                value={collectionDateTime}
                                onChange={handleCollectionDeate}
                                placeholder='Collection Date/Time'
                                inputStyle="inputStyle"
                                type="datetime-local"
                                style={{ borderBottomWidth: collectionDateTime ? '2px' : '1px' }}
                                className='bg-white  h-[40px] w-full p-2 outline-none text-[15px] border-b border-solid border-black' />
                        </span>
                        <span className=' relative h-[40px]  grid  gap-[5px] w-[265px]  bg-white rounded-tr-md rounded-tl-md  items-center  border-b border-solid border-black ' style={{
                            gridTemplateColumns: 'auto 1fr auto',
                            borderBottomWidth: deliveryDateTime ? '2px' : '1px'
                        }}>
                            <img src={passportVector} alt="Vector" className=" ml-[0.5rem] h-[13.38px] w-[13.38px] " />
                            <input
                                value={deliveryDateTime}
                                onChange={handleDeliveryDate}
                                placeholder='Delivery Date/Time'
                                type="datetime-local"
                                style={{ borderBottomWidth: deliveryDateTime ? '2px' : '1px' }}
                                className='bg-white  h-[40px] w-full p-2 outline-none text-[15px] border-b border-solid border-black' />
                        </span>
                        <span className=' relative h-[54px]  grid  gap-[5px] w-[265px]  bg-white rounded-md  items-center  border-[1px] border-solid border-black ' style={{
                            gridTemplateColumns: 'auto 1fr auto',
                        }}
                        >
                            <img src={passportVector} alt="Vector" className=" ml-[0.5rem] h-[13.38px] w-[13.38px] " />
                            <select
                                type="text"
                                value={vehicleType}
                                onChange={handleVehicleType}
                                className='  h-[50px]  appearance-none w-[200px] outline-none text-[15px] ' >
                                <option value="" disabled>Vehicle Type </option>
                                <option value='12 Ton' > 12 Ton</option>
                                <option value='18 Ton'>Option 2</option>
                                <option value='Option 3'>Option 3</option>
                            </select>
                            <img src={downArrow} alt="Vector" className=" mr-[15px]  h-[24px] w-[24px] " />
                        </span>
                        <span className=' relative h-[54px]  grid  gap-[5px] w-[265px]  bg-white rounded-md  items-center  border-[1px] border-solid border-black ' style={{
                            gridTemplateColumns: 'auto 1fr auto',
                        }}
                        >
                            <img src={passportVector} alt="Vector" className=" ml-[0.5rem] h-[13.38px] w-[13.38px] " />
                            <select
                                value={jobType}
                                onChange={handleJobType}
                                type="text"
                                className='  h-[50px] bg-white appearance-none w-[200px] outline-none text-[15px] ' >
                                <option value="" disabled selected>Job Type </option>
                                <option value='Groupage Pallet' >Groupage Pallet</option>
                                <option >Option 2</option>
                                <option >Option 3</option>
                            </select>
                            <img src={downArrow} alt="Vector" className=" mr-[15px]  h-[24px] w-[24px] " />
                        </span>
                        <span className=' relative h-[54px]  grid  gap-[5px] w-[265px]  bg-white rounded-md  items-center  border-[1px] border-solid border-black ' style={{
                            gridTemplateColumns: 'auto 1fr auto',
                        }}
                        >
                            <img src={passportVector} alt="Vector" className=" ml-[0.5rem] h-[13.38px] w-[13.38px] " />
                            <select
                                value={packagingType}
                                onChange={handlePackagingType}
                                type="text"
                                className='  h-[50px] bg-white appearance-none w-[200px] outline-none text-[15px] ' >
                                <option value="" disabled selected>Packaging Type</option>
                                <option >Option 1</option>
                                <option >Option 2</option>
                                <option >Option 3</option>
                            </select>
                            <img src={downArrow} alt="Vector" className=" mr-[15px]  h-[24px] w-[24px] " />
                        </span>
                        <span className=' relative mt-[-8px] text-[14px] gap-[10px] h-[40px] font-[300] grid-cols-2  grid grid-rows-2 w-[265px]  ' >

                            Add weight Yes/No

                            <div></div>
                            <img src={switchIcon} alt="Vector" className=" ml-[0.5rem] h-[32px] w-[52px] " />
                            <span className=' w-[122px] pl-20 pt-3 h-[38px] opacity-50 bg-slate-50'
                            >kg</span>
                        </span>
                    </div>
                    <div className='absolute grid grid-cols-2 grid-rows-2 w-[500px] ml-[-60px] top-[910px] ' style={{
                        rowGap: '15px', columnGap: '20px'
                    }}>
                        <div className=' relative  text-[16px] font-[400] text-[#000000] grid  gap-[5px] tracking-[0.05em] ' >
                            INVOICE DETAILS
                        </div>
                        <div>

                        </div>
                    </div>


                    <div className='absolute grid grid-cols-2 ml-[-60px] grid-rows-2 w-[500px] top-[940px] ' style={{
                        rowGap: '35px', columnGap: '80px'
                    }}>


                        <span className=' relative h-[40px]  grid  gap-[5px] w-[265px]  bg-white rounded-tr-md rounded-tl-md  items-center  border-b border-solid border-black ' style={{
                            gridTemplateColumns: 'auto 1fr auto',
                            borderBottomWidth: clientCost ? '2px' : '1px'
                        }}>
                            <img src={passportVector} alt="Vector" className=" ml-[0.5rem] h-[13.38px] w-[13.38px] " />
                            <input
                                value={clientCost}
                                onChange={handleClientCost}
                                placeholder='Client Cost'
                                type="text"
                                style={{ borderBottomWidth: clientCost ? '2px' : '1px' }}
                                className='bg-white  h-[40px] w-full p-2 outline-none text-[15px] border-b border-solid border-black' />
                        </span>

                        <span className=' relative h-[40px]  grid  gap-[5px] w-[265px]  bg-white rounded-tr-md rounded-tl-md  items-center  border-b border-solid border-black ' style={{
                            gridTemplateColumns: 'auto 1fr auto',
                            borderBottomWidth: extraCharges ? '2px' : '1px'
                        }}>
                            <img src={passportVector} alt="Vector" className=" ml-[0.5rem] h-[13.38px] w-[13.38px] " />
                            <input
                                value={extraCharges}
                                onChange={handleExtraCharges}
                                placeholder='Extra Charges'
                                type="text"
                                style={{ borderBottomWidth: extraCharges ? '2px' : '1px' }}
                                className='bg-white  h-[40px] w-full p-2 outline-none text-[15px] border-b border-solid border-black' />
                        </span>
                    </div>
                    <button onClick={handleAddJob} className={` absolute  w-[264px] bg-[#8B9093] hover:bg-[#333333] h-[40px] rounded-[40px] top-[1090px] ml-[3px]  
                  text-[#FFFFFF] font-[900] text-[12px]  `}                    >
                        POST LOAD
                    </button>
                </div >

            </div >
        </div >
    )
}

export default AddJob