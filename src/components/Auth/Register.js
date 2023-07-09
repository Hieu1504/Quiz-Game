import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postRegister } from '../../services/apiService';
import { toast } from 'react-toastify';
import { VscEye, VscEyeClosed } from "react-icons/vsc"
import './Register.scss'


const Register = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const navigate = useNavigate();
    const [isShowPassword, setIsShowPassword] = useState(false);

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const handleRegister = async () => {
        //validate
        //validate
        const isValidEmail = validateEmail(email);
        if (!validateEmail) {
            toast.error('Invalid Email 🦄')
            return;
        }

        if (!password) {
            toast.error('Invalid Password 🦄')
            return;
        }
        //submit apis
        let data = await postRegister(email, password, username)
        if (data && data.EC === 0) {
            toast.success(data.EM);
            navigate('/login')
        }
        if (data && +data.EC !== 0) {
            toast.error(data.EM);
        }
    }
    return (
        <div className="register-container">
            <div className="header">
                <span>Already have an account ?</span>
                <button onClick={() => navigate('/login')}>Login</button>
            </div>
            <div className="title col-4 mx-auto fw-bold">
                Sign up Quiz
            </div>
            <div className="welcome col-4 mx-auto">
                Start your journey ?
            </div>
            <div className="content-form col-4 mx-auto">
                <div className='form-group'>
                    <label>Email (*)</label>
                    <input
                        type={'email'}
                        className='form-control'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div className='form-group pass-group'>
                    <label>Password (*)</label>
                    <input
                        type={isShowPassword ? "text" : 'password'}
                        className='form-control'
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    {isShowPassword ?
                        <span className='icons-eye'
                            onClick={() => setIsShowPassword(false)}>
                            <VscEye />
                        </span>
                        :
                        <span className='icons-eye'
                            onClick={() => setIsShowPassword(true)}>
                            <VscEyeClosed />
                        </span>
                    }
                </div>
                <div className='form-group'>
                    <label>User Name</label>
                    <input
                        type={'text'}
                        className='form-control'
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    />
                </div>
                <div>
                    <button
                        className='btn-submit'
                        onClick={() => handleRegister()}
                    >Sign up
                    </button>
                    <div className='text-center'>
                        <span className='back' onClick={() => { navigate('/') }}> &#60;&#60; Go to Homepage</span>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Register;