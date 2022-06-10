import { useState, useEffect } from 'react';
import Logo from '../../../../Assets/Img/Logo.svg'
import { message, Modal } from 'antd'
import Account from '../../../../API/Account'
import Auth from '../../../../middleWare/Auth/Auth'
import axios from 'axios'
import Confirmed from '../../../../Assets/Img/Confirmed.png'
import { Navigate, useNavigate } from 'react-router-dom';


const ForgotPass = () => {
    const navigate = useNavigate();

    const [Error, setError] = useState('')

    const [email, setEmail] = useState("")

   


    const handleChange = (event) => {
        console.log(event.target.value)
        setEmail(event.target.value)
       
    }
// useEffect(() => {
//     navigate(`/ProvideNewPass/${4}/Noor123@gmail.com`, { state: { id: 7, color: 'green' } });
// }, [])

   
    const sendEmail = async (e) => {
        // setsendingReq(true)
        e.preventDefault()
        const res = Account.forgotPass(email)
        res.then((value) => {
            // setsendingReq(false)
            // console.log('Login', value)
            console.log("----------->",value)
            if (value?.data?.success) {
                // setStatus('Email Sent Sussfully')
                navigate(`/Email_sent_for_new_password/${email}`)
            } else {
                message.error("email not exist")
            }
        })
    }
    return (
        <div className="main">
            {/* <button onClick={()=>   navigate(`/ProvideNewPass/${4}`, { state: { id: 7, color: 'green' } })}></button> */}
            <div className="container">
                <div className="d-flex justify-content-center align-items-center">
                    <div className="ModalForm bg-white p-3">
                        <img className="logo d-block mx-auto" src={Logo} alt="Logo" />
                        <p className="tc-plum tf-light fw-700 fs45 mt-3">Reset Your Password</p>
                        <p className="tc-grey  fw-600 fs30 mt-3">Enter your email and we'll send you instructions
                            on how to reset your password.</p>
                        <form
                         onSubmit={sendEmail}
                         >
                            <div>
                                {/* <input
                                 type="email"
                                    className="email w-100 fs30 mt-3 px-1 py-3 lghtBdr"
                                    name="email"
                                    required
                                    placeholder="Email Address"
                                    value={user.email}
                                    onChange={handleChange}
                                /> */}
                                <input
                                  className="email w-100 fs30 mt-3 px-1 py-3 lghtBdr"
                                  name="email"
                                  value={email}
                                  required

                                  onChange={handleChange}
                                  placeholder="Email Address"
                                
                                />

                                <button
                                    className="filledBtn mt-5 bg-blue text-white w-100 py-3"
                                    type="submit">

                                    
                                        <>Submit</>
                                    

                                </button>
                                <p className="mt-1 tc-err fs30 fw-600" >{Error}</p>
                            </div>
                        </form>
                        <hr className="mt-3" />
                        <div className="d-flex justify-content-center">
                            <p className="text-center tc-grey mt-3 px-1" >Go back to </p>
                            <p className="text-center tc-blue mt-3 px-1 cursorPointer"  > Sign In.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForgotPass;