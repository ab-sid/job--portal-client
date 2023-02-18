import React from 'react';
import { Link } from 'react-router-dom';

const FresherCard = ({ fresher }) => {
    const { position, location, company } = fresher;
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">Position: {position}</h2>
                <h2 className="">Company Name: {company}</h2>
                <p>Location: {location}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary"><Link to='/apply'>Apply</Link></button>
                    <button className="btn btn-primary">See All Jobs</button>
                </div>
            </div>
        </div>
    );
};

export default FresherCard;