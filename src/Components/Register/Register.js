import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
// import SocialLogin from '../SocialLogin/SocialLogin';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import { useNavigate } from 'react-router-dom';
import "./Register.module.css"
import Loading from '../Loading/Loading';

const Register = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
  
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    let errorElement;
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    const navigate = useNavigate()
    

    if (user) {
        navigate('/home')
    }

    if (loading) {
        return <Loading></Loading>
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(email, password, name)
        // toast('Email sent.Verify your Email Please!!')
    }
    return (
        <div>
            <section class="text-center">
                <div class=" p-5 bg-image " style={{ backgroundImage: "url('https://mdbootstrap.com/img/new/textures/full/171.jpg')", height: '300px' }} ></div>
                <div class="card mx-4 mx-md-5 shadow-5-strong" style={{ marginTop: '-100px', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(30px)' }}>
                    <div class="card-body py-5 px-md-5  shadow   bg-body rounded">
                        <div class="row d-flex justify-content-center">
                            <div class="col-lg-8">
                                <h2 class="fw-bold mb-5">Sign up now</h2>
                                <form onSubmit={handleSubmit}>
                                    <div class="row">
                                        <div class="col-md-6 mb-4">
                                            <div class="form-outline">
                                                <input onChange={(e) => setName(e.target.value)} type="text" id="form3Example1" class="form-control" required />
                                                <label class="form-label" name='name' for="form3Example1">First name</label>
                                            </div>
                                        </div>
                                        <div class="col-md-6 mb-4">
                                            <div class="form-outline">
                                                <input type="text" id="form3Example2" class="form-control" />
                                                <label class="form-label" for="form3Example2">Last name</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-outline mb-4">
                                        <input onChange={(e) => setEmail(e.target.value)}  name='email' type="email" id="form3Example3" class="form-control" required />
                                        <label class="form-label" for="form3Example3">Email address</label>
                                    </div>
                                    <div class="form-outline mb-4">
                                        <input onChange={(e) => setPassword(e.target.value)} type="password" id="form3Example4" class="form-control" name='password' required />
                                        <label class="form-label" for="form3Example4">Password</label>
                                    </div>
                                    <div className=' d-flex  justify-content-center'>
                                        <p className='me-3'>Do you have an account ?</p>
                                        <Link to='/login'>Please Login</Link>
                                    </div>
                                    <button type="submit" class="btn btn-primary btn-block mb-4">
                                        Sign up
                                    </button>
                                    {errorElement}
                                    <SocialLogin></SocialLogin>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Register;