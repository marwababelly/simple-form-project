import React,{ Fragment, useRef, useState } from "react";
import classes from './Form.module.css';

const Form = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [isPasswordError,setIspasswordError] = useState(false);
    const [logInError,setLogInError] = useState(false);
    const ref = useRef();

    const emailHandler = (event) => {
        setEmail(event.target.value);
    };

    const passwordHandler = (event) => {
        setPassword(event.target.value);
    };

    const passwordBlurHandler = (event) => {
        const isValid = password >= 5;
        setIspasswordError(!isValid);
    };

    const logInHandler = () => {
        const emailIsValid = email.trim().length === 0;
        const passwordIsValid = password.trim().length === 0;
        setLogInError(!emailIsValid || !passwordIsValid);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        setEmail("");
        setPassword("");
        ref.current.focus();
    };


    return (
        <Fragment>
            <div className={classes.background}></div>
            <form onSubmit={handleFormSubmit} className = {classes.shape}>
                <h3>Login Here</h3>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    placeholder="email.gmail.com"
                    onChange={emailHandler}
                />
                {logInError && <p className={classes.errorms}>Please set your email</p>}
                <label htmlFor="password">PassWord</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    placeholder="password"
                    onChange={passwordHandler}
                    onBlur={passwordBlurHandler}
                />
                {isPasswordError && <p className={classes.errorms}>password is invalid</p>}
                {logInError && <p className={classes.errorms}>Please set your password</p>}
                <button onClick={logInHandler}>Log In</button>

            </form>
        </Fragment>
    );
};

export default Form;