import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./forgotpassword.css";

export const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSendCode = async () => {
        setLoading(true);
        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            alert("Verification code sent!");
        }, 2000);
    };

    return (
        <div className="forgot-password">
            <div className="div">
                <div className="top-nav-bar">
                    <div className="frame">
                        <img className="logo" src="/img/logo-1.png" alt="Logo" />
                        <div className="text-wrapper">PeersCart</div>
                    </div>
                    <div className="frame-2">
                        <img className="img" src="/img/frame-48096122.svg" alt="Frame" />
                    </div>
                </div>

                <div className="group-wrapper">
                    <div className="group">
                        <div className="overlap">
                            <div className="overlap-group-wrapper">
                                <div className="overlap-group">
                                    <div className="rectangle" />
                                    <div className="rectangle-2" />
                                    <div className="rectangle-3" />
                                </div>
                            </div>
                            <div className="overlap-wrapper">
                                <div className="overlap-group">
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
                        <div className="frame-4">
                            <div className="frame-5">
                                <div className="text-wrapper-2">Forgot Password</div>
                                <p className="p">Enter the email address associated with your account to receive a verification code.</p>
                            </div>
                            <div className="form-input-wrapper">
                                <div className="form-input">
                                    <p className="label">
                                        <span className="span">Email Address </span>
                                        <span className="error">*</span>
                                    </p>
                                    <div className="textfield">
                                        <img className="img-2" alt="Form left icons mail" src="/img/form-left-icons-mail.svg"/>
                                        <input
                                            type="email"
                                            className="placeholder"
                                            placeholder="Enter email address"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="frame-4">
                                <div className="buttons">
                                    <button className="text-wrapper-4" onClick={handleSendCode} disabled={loading}>
                                        {loading ? "Sending..." : "Send Code"}
                                    </button>
                                </div>
                            </div>
                            <div className="frame-2">
                                <div className="text-wrapper-5">Already have an account?</div>
                                <div className="div-wrapper">
                                    <Link to="/login">
                                        <button className="text-wrapper-6">Sign In</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;