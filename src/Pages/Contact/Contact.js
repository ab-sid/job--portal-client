import React from 'react';

const Contact = () => {
    return (
        <div className='my-6'>
            <h1 className='text-center text-2xl font-bold'>Contact US</h1>
            <form className='w-1/2 mx-auto'>
                <label className="label">
                    <span className="label-text">Name:</span>
                </label>
                <input type="text" placeholder="name" className="input input-bordered w-full" />
                <label className="label">
                    <span className="label-text">Email:</span>
                </label>
                <input type="email" placeholder="Email" className="input input-bordered w-full" />
                <label className="label">
                    <span className="label-text">Message:</span>
                </label>
                <textarea className="textarea textarea-bordered" placeholder="message"></textarea>
            </form>
            <div className='w-1/2 mx-auto'>
                <button className="btn btn-outline btn-success">Submit</button>
            </div>
        </div>
    );
};

export default Contact;