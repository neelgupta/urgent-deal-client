import React from 'react'
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const TermsCondition = () => {
  return (
    <div className="vendor-onboarding">
      <Container>
        <div className="onboarding-rightpart terms">
          <img src={logo} alt="Logo" className="logo" />
          <div className="title">
            <p>PARTNER WITH Urgent Deal!</p>
            <div className="terms-title">
              <h1>Terms & Condition</h1>
              <Link to={"/"} className="btn-primary common-btn">Get Started</Link>
            </div>
          </div>

          <div className="easy-steps mb-5">
            <h6 className="step-title mb-4">Merchant T&C</h6>
            <p className="step-sm-title mb-3">This document is an electronic record in terms of the Information Technology Act, 2000 and rules there under as applicable and the amended provisions pertaining to electronic records in various statutes as amended by the Information Technology Act, 2000. This document is published in accordance with the provisions of Rule 3 (1) of the Information Technology (Intermediaries guidelines) Rules, 2011 that require publishing the rules and regulations, privacy policy and Merchant T&C (as defined below) for access or usage of <a href="#">www.urgentdeal.com</a> website and ‘Urgent Deal’ application for mobile and handheld devices.</p>
            <p className="step-sm-title mb-3">Any Capitalized terms used but not defined herein shall have the meaning assigned to them under the (i) the services agreement executed between Urgent Deal and the Merchant and (ii) Terms of Use, as amended from time to time which govern your use of our website <a href="#">www.urgentdeal.com</a> (the “Website”) and our ‘Urgent Deal’ application for mobile and handheld devices (the “App”).</p>
            <p className="step-sm-title mb-3">You wish to avail the Platform Services enabled by Urgent Deal on a non-exclusive and contractual basis subject to the terms and conditions set out hereinafter.</p>
            <p className="step-sm-title mb-3">Merchant and Urgent Deal are referred individually as ‘Party’ and collectively as ‘Parties’, wherever the context so requires.</p>
            <ol>
              <li>These terms are called the “Merchant T&C” and these Merchant T&C read together with Terms of Use and the agreements executed between the Parties shall govern your use of Platform. In the event of any inconsistency between the documents/agreements, the terms of the agreement will prevail over these Merchant T&C, which will prevail over the Terms of Use. Please read these Merchant T&C carefully before you use the Platform Services. If you do not agree to these Merchant T&C, you must not use the Platform Services, and we request you to uninstall the App. By installing, downloading or even merely using the Platform, you shall be contracting with Urgent Deal and you signify your acceptance to this Merchant Terms, Terms of Use and other Urgent Deal policies (including but not limited to the Privacy Policy being incorporated by reference herein) which take effect on the date on which you download, install or use the Platform Services, and create legally binding arrangements to abide by the same.</li>
              <li>These Merchant T&C along with the services agreement or any other agreement signed between the Parties shall constitute the entire agreement between the Parties in relation to the Platform Services.</li>
            </ol>
          </div>
          <div className="easy-steps mb-5">
            <h6 className="step-title mb-4">Merchant T&C</h6>
            <p className="step-sm-title mb-3">This document is an electronic record in terms of the Information Technology Act, 2000 and rules there under as applicable and the amended provisions pertaining to electronic records in various statutes as amended by the Information Technology Act, 2000. This document is published in accordance with the provisions of Rule 3 (1) of the Information Technology (Intermediaries guidelines) Rules, 2011 that require publishing the rules and regulations, privacy policy and Merchant T&C (as defined below) for access or usage of <a href="#">www.urgentdeal.com</a> website and ‘Urgent Deal’ application for mobile and handheld devices.</p>
            <p className="step-sm-title mb-3">Any Capitalized terms used but not defined herein shall have the meaning assigned to them under the (i) the services agreement executed between Urgent Deal and the Merchant and (ii) Terms of Use, as amended from time to time which govern your use of our website <a href="#">www.urgentdeal.com</a> (the “Website”) and our ‘Urgent Deal’ application for mobile and handheld devices (the “App”).</p>
            <p className="step-sm-title mb-3">You wish to avail the Platform Services enabled by Urgent Deal on a non-exclusive and contractual basis subject to the terms and conditions set out hereinafter.</p>
            <p className="step-sm-title mb-3">Merchant and Urgent Deal are referred individually as ‘Party’ and collectively as ‘Parties’, wherever the context so requires.</p>
            <ol>
              <li>These terms are called the “Merchant T&C” and these Merchant T&C read together with Terms of Use and the agreements executed between the Parties shall govern your use of Platform. In the event of any inconsistency between the documents/agreements, the terms of the agreement will prevail over these Merchant T&C, which will prevail over the Terms of Use. Please read these Merchant T&C carefully before you use the Platform Services. If you do not agree to these Merchant T&C, you must not use the Platform Services, and we request you to uninstall the App. By installing, downloading or even merely using the Platform, you shall be contracting with Urgent Deal and you signify your acceptance to this Merchant Terms, Terms of Use and other Urgent Deal policies (including but not limited to the Privacy Policy being incorporated by reference herein) which take effect on the date on which you download, install or use the Platform Services, and create legally binding arrangements to abide by the same.</li>
              <li>These Merchant T&C along with the services agreement or any other agreement signed between the Parties shall constitute the entire agreement between the Parties in relation to the Platform Services.</li>
            </ol>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default TermsCondition
