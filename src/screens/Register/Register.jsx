import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './style.css';
import { useNavigate } from 'react-router-dom';

export const Register = () => {
  const { register, watch, handleSubmit, formState: { errors, isValid } } = useForm({ mode: "onBlur" });
  const [showPassword, setShowPassword] = useState(false);
  const [ loading, setLoading] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [registerError, setRegisterError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();
  const password = watch('password');

  const onSubmit = async (data) => {
    try {
      setLoading(true); 
      const response = await fetch('https://pc-backend-17gq.onrender.com/api/users/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setLoading(false);
        setSuccessMessage('Verification email has been sent. Please check your inbox.');
        setRegisterError('');
        setTimeout(() => {
          navigate('/login');
        }, 3000); // Redirect to login page after 3 seconds
      } else {
        setLoading(false);
        const errorData = await response.json();
        setRegisterError(errorData.error || 'Registration failed');
        setSuccessMessage('');
      }
    } catch (error) {
      setRegisterError('Error: ' + error.message);
      setSuccessMessage('');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="register" style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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
            <form onSubmit={handleSubmit(onSubmit)} className="frame-3">
              <div className="frame-4">
                <div className="text-wrapper-2">Welcome!</div>
                <p className="p">Please enter the below details to continue</p>
              </div>

              <div className="div-wrapper">
                <div className="form-input">
                  <p className="label">
                    <span className="span">Username </span>
                    <span className="text-wrapper-3">*</span>
                  </p>
                  <div className="textfield">
                    <img className="img-2" alt="Form left icons user" src="/img/tdesign-user.svg" />
                    <input
                      type="text"
                      className="email-field"
                      placeholder="Enter username"
                      {...register('username', { required: 'Username is required' })}
                    />
                  </div>
                  {errors.username && <p className="error">{errors.username.message}</p>}
                </div>

                <div className="form-input">
                  <p className="label">
                    <span className="span">Email Address </span>
                    <span className="text-wrapper-3">*</span>
                  </p>
                  <div className="textfield">
                    <img className="img-2" alt="Form left icons mail" src="/img/form-left-icons-mail.svg" />
                    <input
                      type="email"
                      className="email-field"
                      placeholder="Enter email address"
                      {...register('email', { required: 'Email is required' })}
                    />
                  </div>
                  {errors.email && <p className="error">{errors.email.message}</p>}
                </div>

                <div className="form-input">
                  <p className="label">
                    <span className="span">Password </span>
                    <span className="text-wrapper-3">*</span>
                  </p>
                  <div className="textfield-2">
                    <div className="frame-5">
                      <img className="img-2" alt="Material symbols" src="/img/material-symbols-lock-outline.svg" />
                      <input
                        type={showPassword ? 'text' : 'password'}
                        style={{ width: "100%" }}
                        className="password-field"
                        placeholder="Enter Password"
                        {...register('password', { required: 'Password is required', minLength: { value: 6, message: 'Password must be at least 6 characters' } })}
                      />
                    </div>
                    <img
                      className="img-2"
                      alt="Toggle password visibility"
                      src={showPassword ? '/img/charm-eye.svg' : '/img/mdi-eye-off-outline.svg'}
                      onClick={togglePasswordVisibility}
                      style={{ cursor: 'pointer' }}
                    />
                  </div>
                  {errors.password && <p className="error">{errors.password.message}</p>}
                </div>

                <div className="form-input">
                  <p className="label">
                    <span className="span">Confirm Password </span>
                    <span className="text-wrapper-3">*</span>
                  </p>
                  <div className="textfield-2">
                    <div className="frame-5">
                      <img className="img-2" alt="Material symbols" src="/img/material-symbols-lock-outline.svg" />
                      <input
                        style={{ width: "100%" }}
                        type={showConfirmPassword ? 'text' : 'password'}
                        className="password-field"
                        placeholder="Re-Enter Password"
                        {...register('confirmPassword', {
                          required: 'Enter password again',
                          validate: value => value === password || 'Passwords do not match'
                        })}
                      />
                    </div>
                    <img
                      className="img-2"
                      alt="Toggle password visibility"
                      src={showConfirmPassword ? '/img/charm-eye.svg' : '/img/mdi-eye-off-outline.svg'}
                      onClick={toggleConfirmPasswordVisibility}
                      style={{ cursor: 'pointer' }}
                    />
                  </div>
                  {errors.confirmPassword && <p className="error">{errors.confirmPassword.message}</p>}
                </div>
              </div>

              {successMessage && <p className="success">{successMessage}</p>}
              {registerError && <p className="error">{registerError}</p>}

              <div className="frame-3">
                <button type="submit" disabled={!isValid || loading} className="buttons">
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
              <div className="frame-2">
                <div className="text-wrapper-6">Already have an account?</div>
                <div className="clickable-text">
                  <a href="/login" className="login-button">Login</a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;