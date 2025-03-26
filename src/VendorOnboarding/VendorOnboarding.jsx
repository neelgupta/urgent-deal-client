import React, { useState } from 'react';
import './VendorOnboarding.scss';
import { Button, Container, Form } from 'react-bootstrap';
import logo from '../assets/images/logo.png'
import check from '../assets/icons/check.svg'


const VendorOnboarding = () => {

    const [formStep, setformStep] = useState("stepOne");

    const gotoStepOne = () =>{
        setformStep("stepOne")
    }

    const gotoStepTwo = () =>{
        setformStep("stepTwo")
    }

    const gotoStepThree = () =>{
        setformStep("stepThree")
    }

    const gotoStepFour = () =>{
        setformStep("stepFour")
    }


    return (
        <div className='vendor-onboarding'>
            <Container>
                <div className="row align-items-center gy-5">
                    <div className="col-md-6">
                        <div className="onboarding-rightpart">
                            <img src={logo} alt="Logo" className='logo' />
                            <div className="title">
                                <p>PARTNER WITH SWIGGY!</p>
                                <h1>Increase your online orders</h1>
                            </div>

                            <div className='easy-steps'>
                                <p className='step-sm-title'>In just 3 easy steps</p>
                                <h6 className='step-title'>Get your store delivery-ready in 24hrs!</h6>
                                <div className="steps">
                                    <div className="step">
                                        <span>01</span>
                                        <p>Install the Urgent Deal Owner App</p>
                                    </div>
                                    <div className="step">
                                        <span>02</span>
                                        <p>Register using your phone number</p>
                                    </div>
                                    <div className="step">
                                        <span>03</span>
                                        <p>Enter Store & Owner details</p>
                                    </div>
                                </div>
                            </div>

                            <div className="easy-process">
                                <p className='process-sm-title'>For an easy form filling process,</p>
                                <h5 className='process-title'>You may need these documents to Join UD</h5>
                                <div className='process-card'>
                                    <div>
                                        <img src={check} alt="Check Icon" />
                                        <p>FSSAI License copy <a href="#">Apply Here</a></p>
                                    </div>
                                    <div>
                                        <img src={check} alt="Check Icon" />
                                        <p>Your store menu</p>
                                    </div>
                                    <div>
                                        <img src={check} alt="Check Icon" />
                                        <p>Bank details</p>
                                    </div>
                                    <div>
                                        <img src={check} alt="Check Icon" />
                                        <p>GSTIN <a href="#">Apply Here</a></p>
                                    </div>
                                    <div>
                                        <img src={check} alt="Check Icon" />
                                        <p>PAN card copy</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="col-md-6">

                    {formStep === "stepOne" && (
                        <div className='onboarding-form'>
                            <h4>Get Started</h4>
                                <Form action="#">
                                    <Form.Group className="form-group" controlId="mobileStoreID">
                                        <Form.Label>Enter a mobile number to continue</Form.Label>
                                        <Form.Control type="number" placeholder="Enter mobile number" />
                                    </Form.Group>

                                    <Button type="submit" onClick={gotoStepTwo} className='common-btn'>Continue</Button>
                                </Form>
                            <p className='terms-text'>By logging in, I agree to Urgent Deal’s <a href="#">terms & conditions</a></p>
                        </div>
                    )}

                    {formStep === "stepTwo" && (
                        <div className='onboarding-form'>
                            <h4>Enter OTP</h4>
                            <Form action="#">
                                <Form.Group className="form-group" controlId="loginOTP">
                                    <Form.Label>Enter OTP sent on number +91 98XXXXXX54</Form.Label>
                                    <div className="otp-field">
                                        <Form.Control type="number" max={1} placeholder="0" />
                                        <Form.Control type="number" placeholder="0" />
                                        <Form.Control type="number" placeholder="0" />
                                        <Form.Control type="number" placeholder="0" />
                                    </div>
                                    <p className='terms-text text-start'><a href="#">Resend OTP</a> (00:30)</p>
                                </Form.Group>

                                <div className="d-flex gap-2">
                                    <Button type="submit" onClick={gotoStepOne} className='common-btn btn-gray'>Back</Button>
                                    <Button type="submit" onClick={gotoStepThree} className='common-btn'>Continue</Button>
                                </div>
                            </Form>
                            <p className='terms-text'>By logging in, I agree to Urgent Deal’s <a href="#">terms & conditions</a></p>
                        </div>
                    )}

                    {formStep === "stepThree" && (
                        <div className='onboarding-form'>
                            <h4>Store Detail</h4>
                            <Form action="#">
                                <Form.Group className="form-group" controlId="numberId">
                                    <Form.Label>Store name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Store ID/ Mobile number" />
                                </Form.Group>

                                <Form.Group className="form-group" controlId="storeNoFloor">
                                    <Form.Label>Store Number & Floor</Form.Label>
                                    <div className="d-flex gap-2">
                                        <Form.Control type="text" placeholder="Store Number" />
                                        <Form.Control type="text" placeholder="Floor" />
                                    </div>
                                </Form.Group>

                                <Form.Group className="form-group" controlId="buildingMallComplex">
                                    <Form.Label>Building/Mall/Complex Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Building/Mall/Complex Name" />
                                </Form.Group>

                                <Form.Group className="form-group" controlId="pincode">
                                    <Form.Label>Pincode</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Pincode" />
                                </Form.Group>

                                <div className="d-flex gap-2">
                                    <Button type="submit" onClick={gotoStepTwo} className='common-btn btn-gray'>Back</Button>
                                    <Button type="submit" onClick={gotoStepFour} className='common-btn'>Continue</Button>
                                </div>
                            </Form>
                            <p className='terms-text'>By logging in, I agree to Urgent Deal’s <a href="#">terms & conditions</a></p>
                        </div>
                    )}

                    {formStep === "stepFour" && (
                        <div className='onboarding-form'>
                            <h4>Owner Contact Details</h4>
                            <Form action="#">
                                <Form.Group className="form-group" controlId="ownerEmail">
                                    <Form.Label>Full Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Full Name" />
                                </Form.Group>

                                <Form.Group className="form-group" controlId="ownerEmail">
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter Email Address" />
                                </Form.Group>

                                <div className="d-flex gap-2">
                                    <Button type="submit" onClick={gotoStepThree} className='common-btn btn-gray'>Back</Button>
                                    <Button type="submit" className='common-btn'>Submit</Button>
                                </div>
                            </Form>
                            <p className='terms-text'>By logging in, I agree to Urgent Deal’s <a href="#">terms & conditions</a></p>
                        </div>
                    )}
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default VendorOnboarding