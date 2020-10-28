import React, { useState } from 'react'
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
// import { auth } from '../../../firebase/firebase';
import { selectUser, setUser } from './userSlice'
import './Login.css'
import { useDispatch, useSelector } from 'react-redux';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setpassword] = useState('')
    const dispatch = useDispatch();
    const user = useSelector(selectUser)
    const signIn = e => {
        e.preventDefault();
        dispatch(setUser({ email: email, name: name, phone: phone }))
        history.push('/home')
    }

    return (
        <div className='login'>

            <img className="login_logo" src="/exam-logo.png" alt="" />
            <div className="login_container">
                <h1>SignIn</h1>
                <form >
                    <h5>Name</h5>
                    <input
                        value={name}
                        onChange={e => setName(e.target.value)}
                        type="text"
                        placeholder="   Enter Name"
                        required
                    />
                    <h5>Email</h5>
                    <input
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        type="text"
                        placeholder="   Enter Email"
                        required
                    />
                    <h5>Number</h5>
                    <input
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        type="text"
                        placeholder="   Enter Phone Number"
                        required
                    />
                    <h5>Password</h5>
                    <input
                        value={password}
                        onChange={e => setpassword(e.target.value)}
                        type="password"
                        placeholder="   Enter Password"
                        required="required"
                    />
                    <button
                        type="submit"
                        onClick={signIn}
                        className="login_signInButton"
                        disabled={!email || !name || !phone || !password}
                    >Sign in</button>
                </form>
                <p>By continuing, you agree to terms and Conditions of Use and Privacy Notice.</p>

            </div>

        </div>
    )
}

export default Login
