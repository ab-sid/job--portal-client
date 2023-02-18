import React, { useEffect, useState } from 'react';
import ExperienceCard from './ExperienceCard';

const Experience = () => {
    const [experiences, setExperience] = useState([]);
    useEffect(() => {
        fetch('experience.json')
            .then(res => res.json())
            .then(data => setExperience(data))
    }, [])
    return (
        <div className='my-12'>
            <h1 className='text-2xl font-bold text-center mb-12'>Experience Jobs</h1>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    experiences.map(experience => <ExperienceCard key={experience.id} experience={experience}></ExperienceCard>)
                }
            </div>
        </div>
    );
};

export default Experience;