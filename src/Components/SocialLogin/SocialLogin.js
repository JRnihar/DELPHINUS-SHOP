import React from 'react';
import { useSignInWithGoogle, useSignInWithGithub } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init'
import Loading from '../Loading/Loading';


const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, gituser, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate()
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    if (user || gituser) {
        navigate(from, { replace: true });
    }
    let errorElement;

    if (loading || loading1) {
    return <Loading></Loading>
    }

    if (error || error1) {
        errorElement = <p className='text-danger'>Error: {error?.message} {error1?.message} </p>
    }

   
    return (
        <div>
            {errorElement}
            <div class="text-center">
                <p>or sign up with:</p>
                

                <button onClick={() => signInWithGoogle()} type="button" class="btn btn-link btn-floating mx-1">
                    <i class="fab fa-google"></i>
                </button>

                <button onClick={() => signInWithGithub()} type="button" class="btn btn-link btn-floating mx-1">
                    <i class="fab fa-github"></i>
                </button>

                
            </div>
            
        </div>
    );
};

export default SocialLogin;