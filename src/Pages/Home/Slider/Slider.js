import React, { useState } from 'react';

const Slider = () => {
    const [show, setShow] = useState(true)
    return (
        <div className="hero" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyZCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    {
                        show ? <><h1 className="mb-5 text-5xl font-bold">Find Job</h1>
                            <p className="mb-5">This is for find a Job</p></>
                            :
                            <>
                                <h1 className="mb-5 text-5xl font-bold">Post Job</h1>
                                <p className="mb-5">This is for Post a Job</p>
                            </>
                    }
                    {/* <button onClick={() => setShow(false)} className="btn btn-primary">Job Post</button> */}
                    <button onClick={() => setShow(!show)} className="btn btn-primary">Toggle</button>
                </div>
            </div>
        </div>
    );
};

export default Slider;