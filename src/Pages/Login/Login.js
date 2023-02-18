import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Login = () => {
    const { googleLogin } = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate();
    const handleGoogleLogin = () => {
        googleLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/')
            })
            .catch(err => console.error(err))
    }
    return (
        <div>
            <h1 className='text-center text-2xl font-bold'>Login</h1>
            <div className='text-center my-8'>
                <button onClick={handleGoogleLogin} className="btn btn-outline btn-secondary">Continue With Google</button>
            </div>
        </div>
    );
};

export default Login;