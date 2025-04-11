import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Thumbs, FreeMode } from 'swiper/modules';
import Header from '../../components/Header/Header';
import images from '../../Utils/constants/images';
import Counter from '../../components/Counter';
import Button from '../../components/Button/Button';
import './Home.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';
import Footer from '../../components/Footer/Footer';

const steps = [
    {
        title: "User Registration",
        description: "Easily sign up by entering your mobile number and verifying with an OTP. Get started in seconds and enjoy a personalized shopping experience!",
        icon: images.workIconOne
    },
    {
        title: "Exploring Grocery",
        description: "Browse a wide range of fresh groceries, daily essentials, and favorite brands. Use smart filters and search to quickly find what you need.",
        icon: images.workIconTwo
    },
    {
        title: "Placing an Order",
        description: "Add items to your cart, choose your preferred delivery slot, and securely checkout in just a few taps. It’s fast, easy, and hassle-free.",
        icon: images.workIconThree
    },
    {
        title: "Track Orders",
        description: "Stay updated with real-time order tracking. Know exactly when your groceries are packed, dispatched, and arriving at your doorstep.",
        icon: images.workIconFour
    }
];

const testimonials = [
    {
        name: "Omar Siddiqui",
        title: "Tech Lover",
        image: images.userFour,
        rating: 4,
        review:
            "The Tazzy app is smooth, sleek, and smart. Love the instant search and easy checkout. Delivery is quick, and customer service is solid.",
    },
    {
        name: "Ali Javed",
        title: "Late-Night Shopper",
        image: images.userFive,
        rating: 4,
        review:
            "Tazzy is my go-to for last-minute grocery needs. The late-night delivery is a lifesaver. Just wish there were more payment options.",
    },
    {
        name: "Shane Lee",
        title: "Satisfied Customer",
        image: images.userOne,
        rating: 5,
        review:
            "This app is super easy to use and has a wide range of products. I love the fast delivery and fresh groceries. The search feature is quick, and I can always find what I need. Highly recommend for hassle-free shopping!",
    },
    {
        name: "Fatima Noor",
        title: "Working Professional",
        image: images.userTwo,
        rating: 4,
        review:
            "Tazzy saves me so much time during the week. The app is fast, easy to use, and the selection is impressive. Only wish they added more organic options.",
    },
    {
        name: "Ravi Patel",
        title: "Mom of Three",
        image: images.userThree,
        rating: 5,
        review:
            "With three kids, I need things fast—and Tazzy delivers. Literally. Fresh veggies, snacks, and even baby items in one place. Love it!",
    },

];


const Home = () => {

    const [activeStep, setActiveStep] = useState(0);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveStep((prev) => (prev + 1) % steps.length);
        }, 2400);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <Header />
            <section className="hero-section">
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-lg-6">
                            <div className="hero-content">
                                <div className="hero-sm-title">
                                    <span><img src={images.storeIcon} alt="Store Icon" /></span>
                                    <p>#1 instant delivery service in surat</p>
                                </div>
                                <h1>Your <span>Online Grocery </span>Superstore is Here!</h1>
                                <p className='hero-desc'>Shop on the go and get anything delivered in minutes. Buy everything from groceries to fresh fruits & vegetables, cakes and bakery items, to meats & seafood, cosmetics, mobiles & accessories, electronics, baby care products and much more.</p>
                                <form className='locate-me'>
                                    <div>
                                        <input type="text" name="location" id="location" className='form-control' placeholder='Enter your location' />
                                        <button type='button' className='locet-me-btn btn'><img src={images.location} alt="Location Icon" />Locate me</button>
                                    </div>
                                    <Button name={'Find Store'} />
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6 pt-4">
                            <div className="mobile-mockup">
                                <img src={images.twoMobiels} alt="Mobiel Mockup" className='mobielmockup-img' />
                                <div className="mockup-icon mockup-iconone"><img src={images.mockupIconOne} alt="Icon" /></div>
                                <div className="mockup-icon mockup-icontwo"><img src={images.mockupIconTwo} alt="Icon" /></div>
                                <div className="mockup-icon mockup-iconthree"><img src={images.mockupIconThree} alt="Icon" /></div>
                                <div className="mockup-icon mockup-iconfour"><img src={images.mockupIconFour} alt="Icon" /></div>
                                <div className="mockup-icon mockup-iconfive"><img src={images.mockupIconFive} alt="Icon" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="download-section">
                <div className="container">
                    <div className="row gx-xl-5 gy-5">
                        <div className="col-xl-6 col-lg-5">
                            <h2 className='title'>Download <span>tazzy</span> Mobile App</h2>
                            <p className='description'>Download app and order thousands of products at just a tap - milk, eggs, bread, cooking oil, ghee, atta, rice, fresh fruits & vegetables, spices, chocolates, chips, biscuits, drinks, body wash other organic from your neighbourhood stores and a lot more.</p>
                            <div className='totals'>
                                <Counter target={5000} label="Active Users" />
                                <Counter target={58} label="Categories" />
                                <Counter target={1180} label="Products" />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-7">
                            <div className="qr-cards">
                                <div className="card">
                                    <h5>For Android</h5>
                                    <p>Android 8.0+</p>
                                    <Button name={'Download App'} />
                                    <div className="qr-code">
                                        <img src={images.qrCode} alt="QR Code" />
                                    </div>

                                    <div className="app-type">
                                        <img src={images.androidIcon} alt="Android Icon" />
                                    </div>
                                </div>
                                <div className="card">
                                    <h5>For IOS</h5>
                                    <p>IOS 15.6+</p>
                                    <Button name={'Download App'} />
                                    <div className="qr-code">
                                        <img src={images.qrCode} alt="QR Code" />
                                    </div>

                                    <div className="app-type">
                                        <img src={images.iosIcon} alt="Android Icon" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img src={images.bgBorder} alt="Border" className='bg-border' />
            </section>
            <section className="benefit-section">
                <div className="container">
                    <p className='sub-title'>benefits of tazzy App</p>
                    <h2><span className='title-img'>Exclusive</span> Benefits of <span className='color'>tazzy</span> App</h2>
                    <div className="row gy-4">
                        <div className="col-xl-3 col-sm-6">
                            <div className="benefit-card">
                                <div>
                                    <img src={images.benefitOne} alt="Benefit Icon" />
                                </div>
                                <h5>Order Tracking</h5>
                                <p>Track your orders in real-time and stay updated with every step of your grocery delivery.</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                            <div className="benefit-card">
                                <div>
                                    <img src={images.benefitTwo} alt="Benefit Icon" />
                                </div>
                                <h5>Secure Payments</h5>
                                <p>Enjoy peace of mind with fast, secure, and hassle-free payment options for every transaction</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                            <div className="benefit-card">
                                <div>
                                    <img src={images.benefitThree} alt="Benefit Icon" />
                                </div>
                                <h5>Exclusive Offers</h5>
                                <p>Unlock special discounts and exclusive deals, available only to tazzy app users!</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                            <div className="benefit-card">
                                <div>
                                    <img src={images.benefitFour} alt="Benefit Icon" />
                                </div>
                                <h5>24/7 Support</h5>
                                <p>Get round-the-clock assistance with our dedicated support team, always ready to help anytime.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='shop-section'>
                <img src={images.bgBorder} alt="Border" className='bg-border' />
                <div className="container">
                    <div className="row gx-lg-5 align-items-lg-center">
                        <div className="col-xl-6 col-lg-5">
                            <div className="shop-imgs">
                                <img src={images.shopUser} alt="Shop Image" className='shop-img' />
                                <div className="shop-icon icon-one"><img src={images.shopIconOne} alt="Icon" /></div>
                                <div className="shop-icon icon-two"><img src={images.shopIconTwo} alt="Icon" /></div>
                                <div className="shop-icon icon-three"><img src={images.shopIconThree} alt="Icon" /></div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-7">
                            <p className='sub-title'>Shop by stores near by</p>
                            <h2>Shop by Stores Near by and <span>Get Your Order Quickly</span></h2>
                            <ul>
                                <li>Discover nearby stores for quick and easy shopping.</li>
                                <li>Browse local stores and find the freshest groceries around.</li>
                                <li>Shop from your favorite nearby stores with just a tap.</li>
                                <li>Access a wide range of products from local stores in your area.</li>
                                <li>Support local businesses by shopping from nearby stores.</li>
                            </ul>
                            <Button name={'Download App'} />
                        </div>
                    </div>
                </div>
            </section>
            <section className='features-section'>
                <div className="container">
                    <div className="header">
                        <div>
                            <p>Best features</p>
                            <h2>Key Features of <span>tazzy</span> App</h2>
                        </div>

                        <button className="btn round-btn">
                            <img src={images.btnText} alt="Button Text" />
                        </button>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="feature-card">
                                <div>
                                    <h5>Explore Fresh & More</h5>
                                    <p>Explore a wide range of groceries, fresh produce, beauty products, gifts, and more—all at your fingertips, delivered to your door.</p>
                                </div>
                                <img src={images.featureOne} alt="Feature Image" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="feature-card">
                                <img src={images.featureTwo} alt="Feature Image" />
                                <div>
                                    <h5>Shop by Store Near by</h5>
                                    <p>Browse and shop from your favorite local stores nearby, with quick access to fresh products and exclusive deals.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="feature-card">
                                <div>
                                    <h5>Live Location Tracking</h5>
                                    <p>Track your grocery delivery in real-time, from store to doorstep, with live location updates for complete peace of mind.</p>
                                </div>
                                <img src={images.featureThree} alt="Feature Image" />
                            </div>
                        </div>
                    </div>
                </div>
                <img src={images.bgBorder} alt="Border" className='bg-border' />
            </section>
            <section className='howwork-section'>
                <div className="container">
                    <div className="row gy-5">
                        <div className="col-lg-4 col-md-5">
                            <p className="sub-title">How it works</p>
                            <h2>Here’s How Works <span>tazzy</span></h2>
                            <Button name={'Download App'} />
                        </div>
                        <div className="col-lg-5 col-md-6">
                            <div className="howwork-steps">
                                {steps.map((step, index) => (
                                    <div
                                        key={index}
                                        className={`step-one ${index === activeStep ? 'active' : ''}`}
                                    >
                                        <div className="step-left">
                                            <div className="step-icon">
                                                <img src={step.icon} alt={step.title} />
                                            </div>
                                            {index < steps.length - 1 && <span className="step-line"></span>}
                                        </div>
                                        <div className="step-right">
                                            <h5>{step.title}</h5>
                                            <p>{step.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='testimonial'>
                <img src={images.bgBorder} alt="Border" className='bg-border-top' />
                <div className="container">
                    <p className="sub-title">testimonial</p>
                    <h2>Our Customer <span>Testimonials</span></h2>
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        spaceBetween={24}
                        slidesPerView={5}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="userimg-slider"
                    >
                        {testimonials.map((item, index) => (
                            <SwiperSlide key={index}>
                                <img src={item.image} />
                            </SwiperSlide>
                        ))}
                        <button className="custom-prev btn "><img src={images.rightArrow} /></button>
                        <button className="custom-next btn"><img src={images.rightArrow} /></button>

                    </Swiper>
                    <Swiper
                        spaceBetween={24}
                        thumbs={{ swiper: thumbsSwiper }}
                        navigation={{
                            prevEl: '.custom-prev',
                            nextEl: '.custom-next',
                        }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        slidesPerView={1}
                        modules={[Navigation, Autoplay, Thumbs]}
                        className="review-slider"
                    >
                        {testimonials.map((item, index) => (
                            <SwiperSlide key={index}>
                                <h5 className='customer-name'>{item.name}</h5>
                                <span className='customer-type'>{item.title}</span>
                                <div className="customer-stars">
                                    {[...Array(item.rating)].map((_, i) => (
                                        <img key={i} src={images.starIcon} alt="Star Icon" />
                                    ))}
                                </div>
                                <p className='customer-review'>{item.review}</p>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </div>
                <img src={images.bgBorder} alt="Border" className='bg-border' />
            </section>
            <section className='blog-section'>
                <div className="container">
                    <p className="sub-title">Blogs & news</p>
                    <h2>Latest Blog & News By <span>tazzy</span></h2>

                    <div className="row g-lg-5 gy-lg-5 gy-4">
                        <div className="col-lg-4 col-sm-6">
                            <a href='#' className="blog-card">
                                <img src={images.blogImg} alt="Blog Image" className='blog-img' />
                                <div className='blog-content'>
                                    <p className='tag'>Best in Veg & Grocery</p>
                                    <h5>Top 10 Reasons to Choose Our Grocery Delivery App</h5>
                                    <div className='blog-detail'>
                                        <div><img src={images.clockIcon} alt="Icon" /><span>By Admin</span></div>
                                        <div><img src={images.locationIcon} alt="Icon" /><span>23 Sep, 202</span></div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <a href='#' className="blog-card">
                                <img src={images.blogImg} alt="Blog Image" className='blog-img' />
                                <div className='blog-content'>
                                    <p className='tag'>Best in Veg & Grocery</p>
                                    <h5>Top 10 Reasons to Choose Our Grocery Delivery App</h5>
                                    <div className='blog-detail'>
                                        <div><img src={images.clockIcon} alt="Icon" /><span>By Admin</span></div>
                                        <div><img src={images.locationIcon} alt="Icon" /><span>23 Sep, 202</span></div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <a href='#' className="blog-card">
                                <img src={images.blogImg} alt="Blog Image" className='blog-img' />
                                <div className='blog-content'>
                                    <p className='tag'>Best in Veg & Grocery</p>
                                    <h5>Top 10 Reasons to Choose Our Grocery Delivery App</h5>
                                    <div className='blog-detail'>
                                        <div><img src={images.clockIcon} alt="Icon" /><span>By Admin</span></div>
                                        <div><img src={images.locationIcon} alt="Icon" /><span>23 Sep, 202</span></div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="faster-section">
                <img src={images.bgBorder} alt="Border" className='bg-border' />
                <div className="container">
                    <div className="row align-items-center gy-5 gx-lg-5">
                        <div className="col-lg-6">
                            <p className='sub-title'>Budget-Friendly grocery!</p>
                            <h2>Shop Faster With <span>tazzy</span></h2>
                            <p className='desc'>Get weekly deals, valuable health information and more.</p>
                            <form className='locate-me'>
                                <div>
                                    <input type="text" name="location" id="location" className='form-control' placeholder='Enter your location' />
                                    <button type='button' className='locet-me-btn btn'><img src={images.location} alt="Location Icon" />Locate me</button>
                                </div>
                                <Button name={'Find Store'} />
                            </form>
                        </div>
                        <div className="col-lg-6">
                            <img src={images.twoMobiels} alt="Mobiel Image" className='mobiel-img' />
                        </div>
                    </div>
                </div>
            </section>
           <Footer/>
        </> 
    )
}

    export default Home;
