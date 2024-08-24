import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './style.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { register, handleSubmit, formState: { errors, isValid } } = useForm({ mode: "onBlur" });
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await fetch('http://localhost:5001/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        localStorage.setItem('token', result.token);
        localStorage.setItem('user', JSON.stringify(result.user));
        navigate('/home');
      } else {
        const errorData = await response.json();
        setLoginError(errorData.message);
      }
    } catch (error) {
      console.error('Error:', error);
      setLoginError('An error occurred. Please try again.');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateUsernameOrEmail = (value) => {
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    const isValidUsername = /^[a-zA-Z0-9_]+$/.test(value);
    if (!isValidEmail && !isValidUsername) {
      return 'Invalid username or email address';
    }
    return true;
  };

  return (
    <div className="login" style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className="div" style={{ width: '100%' }}>
        <div className="top-nav-bar">
          <div className="frame">
            <img className="logo" alt="Logo" src="/img/logo-1.png" />
            <div className="text-wrapper">PeersCart</div>
          </div>
          <div className="frame-2">
            <img className="img" alt="Frame" src="/img/frame-48096122.svg" />
          </div>
        </div>
        <div className="overlap">
          <div className="group-wrapper">
            <div className="group">
              <div className="overlap-group">
                <div className="overlap-group-wrapper">
                  <div className="overlap-group-2">
                    <div className="rectangle" />
                    <div className="rectangle-2" />
                    <div className="rectangle-3" />
                  </div>
                </div>
                <div className="overlap-wrapper">
                  <div className="overlap-group-2">
                    <div className="rectangle-4" />
                    <div className="rectangle-5" />
                    <div className="rectangle-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-wrapper">
            <div className="frame-3">
              <div className="frame-3">
                <div className="frame-4">
                  <div className="text-wrapper-2">Welcome back!</div>
                  <p className="p">Please enter your Username or Email Address to continue</p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="div-wrapper">
                    <div className="form-input">
                      <p className="label">
                        <span className="span">Username or Email Address </span>
                        <span className="error">*</span>
                      </p>
                      <div className="textfield">
                        <img className="img-2" alt="Form left icons mail" src="/img/form-left-icons-mail.svg" />
                        <input
                          className="email-field"
                          placeholder="Enter username or email address"
                          {...register("usernameOrEmail", { required: "This field is required", validate: validateUsernameOrEmail })}
                        />
                      </div>
                      {errors.usernameOrEmail && <p className="error">{errors.usernameOrEmail.message}</p>}
                    </div>
                  </div>
                  <div className="form-input">
                    <p className="label">
                      <span className="span">Password </span>
                      <span className="error">*</span>
                    </p>
                    <div className="textfield-2">
                      <div className="frame-5">
                        <img className="img-2" alt="Material symbols" src="/img/material-symbols-lock-outline.svg" />
                        <input
                          type={showPassword ? "text" : "password"}
                          className="password-field"
                          placeholder="Enter Password"
                          {...register("password", { required: "This field is required" })}
                        />
                      </div>
                      <img
                        className="img-2"
                        alt="Toggle visibility"
                        src={showPassword ? "/img/charm-eye.svg" : "/img/mdi-eye-off-outline.svg"}
                        onClick={togglePasswordVisibility}
                        style={{ cursor: 'pointer' }}
                      />
                    </div>
                    {errors.password && <p className="error">{errors.password.message}</p>}
                  </div>
                  {loginError && <p className="error">{loginError}</p>}
                  <div className="frame-3">
                    <button type="submit" disabled={!isValid} className="buttons">
                      <div className="text-wrapper-4">Continue</div>
                    </button>
                    <div className="frame-6">
                      <img className="line" alt="Line" src="/img/line-2.svg" />
                      <div className="text-wrapper-5">or continue with</div>
                      <img className="line" alt="Line" src="/img/line-2.svg" />
                    </div>
                    <div className="div-wrapper">
                      <div className="buttons-2">
                        <img className="img-2" alt="Logo" src="/img/logo.svg" />
                        <div className="typography">
                          <div className="continue-with-google">Continue With Google</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
                <div className="frame-2">
                  <div className="text-wrapper-6">New to PeersCart?</div>
                  <div className="clickable-text">
                    <a href="/register" className="create-account-button">Create an Account</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;