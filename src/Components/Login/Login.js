import React from 'react';
import './Login.css';
const Login = () => {
    return (
        <div>
            <div className="loginBox">
                <div className="loginText">
                    <h2>Log In</h2>
                </div>
                
                <div className="input-box">
                    <div class="mb-3 row">
                        
                        <div class="col-sm-10">
                            <input type="text" readonly class="form-control" id="staticEmail" placeholder="User email"/>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <div class="col-sm-10">
                            <input type="password" class="form-control" id="inputPassword" placeholder="Password"/>
                        </div>
                    </div>
                </div>
                
                <div className="remember">
                    <input className="rememberCheckbox" type="checkbox" />
                    <label htmlFor="">Remember Me</label>
                </div>
                <div className="forgotPass">
                    <a href="#" className="forgotTxt">Forgot Password</a>
                </div>
                <div>
                    <button className="form-control bg-primary text-light">Log In</button>
                </div>
                <div className="creatTxt">
                    <p>Don't have an account?<a href="#" className="creatAccount">Create an account</a></p>
                </div>
            </div>
        </div>
    );
};

export default Login;