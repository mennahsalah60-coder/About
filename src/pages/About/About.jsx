// import React from 'react'
import OurFeatures from "../../assets/components/OurFeatures/features"
import OurMission from "../../assets/components/OurMission/OurMission"
import Questions from "../../assets/components/Questions/Questions"
import './About.css'

import shipp from '../../assets/components/OurFeatures/images/shipping-fast 1.png'
import creditCard from '../../assets/components/OurFeatures/images/credit-card-buyer 1.png'
import restock from '../../assets/components/OurFeatures/images/restock 1.png'
import user from '../../assets/components/OurFeatures/images/user-headset 1.png'


function AboutUs() {
    return (
        <>
            <div className="about">
                <h1>About BookShop</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.</p>
            </div>
        </>
    )
}

export default function About() {
    return (
        <>
            <div className="about">
                <AboutUs />
            </div>
            <h1>Our Mission</h1>
            <div className="missions">
                <div className="miision">
                    <OurMission title="Quality Selection" />
                </div>
                <div className="miision">
                    <OurMission title="Exceptional Service" />
                </div>
                <div className="miision">
                    <OurMission title="Set Up Stores" />
                </div>
            </div>
            <div className="questions">
                <Questions />
            </div>
            <div className='features'>
                <div className="feature">
                    <OurFeatures image={shipp} title="Fast & Reliable Shipping" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo." />
                </div>
                <div className="feature">
                    <OurFeatures image={creditCard} title="Secure Payment" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo." />
                </div>
                <div className="feature">
                    <OurFeatures image={restock} title="Easy Returns" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo." />
                </div>
                <div className="feature">
                    <OurFeatures image={user} title="24/7 Customer Support" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo." />
                </div>
            </div>
            {/* <Footer /> */}
        </>
    )
}

export { AboutUs }