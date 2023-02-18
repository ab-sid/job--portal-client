import React from 'react';
import { Link } from 'react-router-dom';

const ExperienceCard = ({ experience }) => {
    const { position, location, company, img } = experience
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img className='h-[200px]' src={img} alt="Shoes" /></figure>
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

export default ExperienceCard;