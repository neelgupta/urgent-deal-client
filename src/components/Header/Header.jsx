import React from 'react';
import images from '../../Utils/constants/images';
import './Header.scss';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

const Header = () => {

    return (
        <>
            <nav className="ud-navbar navbar navbar-expand-md fixed-top bg-white">
                <div className="container">
                    <Link className="navbar-brand m-0 p-0" to="/"><img src={images.logo} alt="Logo" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <Link className="navbar-brand" to="/"><img src={images.logo} alt="Logo" /></Link>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-center align-items-center flex-grow-1">
                                <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/">Home</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/">Features</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/">How it Works</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/">About Us</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/">Testimonial</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/">Blog</Link></li>
                            </ul>
                            <Button name={'Get the App'}/>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header
