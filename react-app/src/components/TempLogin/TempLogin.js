import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../store/session";

const TempLogin = () =>{
    const [errors, setErrors] = useState([]);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();


    const updateEmail = (e) =>{
        setEmail(e.target.value)
    }

    const updatePassword = (e) =>{
        setPassword(e.target.value)
    }

    const onLogin = async (e) =>{
        e.preventDefault();
        const data = await dispatch(login(email, password));
        if (data) {
          setErrors(data);
        }
    }

    return (
        <>
            <div>
                <div>
                {errors.map((error, ind) => (
                <div key={ind}>{error}</div>
                ))}
                </div>
                <form onSubmit={onLogin}>
                    <label>Email</label>
                    <input type= 'text' value={email} onChange={updateEmail} />

                    <label>Password</label>
                    <input type='text' value={password} onChange={updatePassword} />

                    <button type='submit'>Login</button>
                </form>


            </div>
        </>
    )
}

export default TempLogin
