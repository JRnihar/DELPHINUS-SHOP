import React, { useRef, useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';


const Login = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate()
    const [email, setEmail] = useState()
    const location = useLocation();


    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    if (user) {
        navigate(from, { replace: true });
    }

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
    );

   
    if (loading || sending) {
        return <Loading></Loading>
    }
    let errorElement;
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    const handelSubmit =  async (e) => {
        e.preventDefault()
        const email = emailRef.current.value
        const pasword = passwordRef.current.value
         await signInWithEmailAndPassword(email, pasword);
        const { data } = await axios.post('https://peaceful-journey-73897.herokuapp.com/login',{email})
        console.log(data);

    }
    return (
        <div>
            <section class=" mt-5">
                <div class="container-fluid h-custom">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-md-9 col-lg-6 col-xl-5">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                class="img-fluid" alt="Sample image"/>
                        </div>
                        <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            <form className='mt-5' onSubmit={handelSubmit}>
                                

                                
                                <div class="form-outline mb-4">
                                    <input ref={emailRef} type="email" name="email" onChange={(e) => setEmail(e.target.value)} id="form3Example3" class="form-control form-control-lg"
                                        placeholder="Enter a valid email address" required />
                                    <label class="form-label" for="form3Example3">Email address</label>
                                </div>

                                
                                <div class="form-outline mb-3">
                                    <input ref={passwordRef} type="password" id="form3Example4" class="form-control form-control-lg"
                                        placeholder="Enter password"  />
                                    <label class="form-label" for="form3Example4">Password</label>
                                </div>

                                <div class="d-flex justify-content-between align-items-center">
                                   
                                    <div class="form-check mb-0">
                                        <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                        <label class="form-check-label" for="form2Example3">
                                            Remember me
                                        </label>
                                    </div>
                                    <button className=' btn btn-link' onClick={async () => {
                                        await sendPasswordResetEmail(email);
                                        toast('Sent email');
                                    }} >Forgot password?</button>
                                </div>
                                <p className='mt-3'> {errorElement}</p>
                                <div class="text-center text-lg-start mt-4 pt-2">
                                    <button type="submit" class="btn btn-primary btn-lg" >Login</button>
                                    <Link to='/register' class=" ms-3  fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!"
                                        class="link-danger">Register</a></Link>
                                </div>
                                <div className='mt-5'>
                                    <SocialLogin></SocialLogin>
                                    <ToastContainer></ToastContainer>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
           
            </section>
        </div>
    );
};

export default Login;