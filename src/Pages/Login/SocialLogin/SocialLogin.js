import React from 'react';
import google from '../../../images/social/google.png';
import facebook from '../../../images/social/Facebook.png';
import Github from '../../../images/social/GitHub.png';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();

    let errorElement;
    if (error || error1) {
        errorElement = <p className='text-danger'>Error: {error?.message} {error1?.message}</p>


    }

    if (user || user1) {
        navigate('/home');
    }

    return (
        <div className="">
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className="w-50 bg-primary "></div>
                <p className='p-2 mt-2'>or</p>
                <div style={{ height: '1px' }} className="w-50 bg-primary "></div>
            </div>
            {errorElement}
            <div className="">
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-info w-50 d-block mx-auto my-2 '>
                    <img style={{ width: "30px" }} src={google} alt="" />
                    <span className='mx-2'>Google Sign In</span>
                </button>
                <button className='btn btn-info w-50 d-block mx-auto my-2  '>
                    <img style={{ width: "30px" }} src={facebook} alt="" />
                    <span className='mx-2'>Facebook Sign In</span>
                </button>
                <button
                    onClick={() => { signInWithGithub() }}
                    className='btn btn-info w-50 d-block mx-auto my-2  '>
                    <img style={{ width: "30px" }} src={Github} alt="" />
                    <span className='mx-2'>Github Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;