import React from 'react';

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200 my-6">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://st4.depositphotos.com/14101486/28582/i/600/depositphotos_285825536-stock-photo-human-resources-crm-and-recruitment.jpg" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">About Us</h1>
                    <p className="py-6">Whether you’re looking for work or new employees, we can help you speed up the process and make the most of it. Browse our tips and tricks about job search, recruitment, or how to use Job Portal.</p>
                    <button className="btn btn-primary">See More</button>
                </div>
            </div>
        </div>
    );
};

export default About;