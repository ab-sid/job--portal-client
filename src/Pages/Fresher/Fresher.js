import React, { useEffect, useState } from 'react';
import FresherCard from './FresherCard';

const Fresher = () => {
    const [freshers, setFreshers] = useState([]);
    useEffect(() => {
        fetch('fresher.json')
            .then(res => res.json())
            .then(data => setFreshers(data))
    }, [])
    return (
        <div className='my-12'>
            <h1 className='text-2xl font-bold text-center mb-12'>Fresher Jobs</h1>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    freshers.map(fresher => <FresherCard key={fresher.id} fresher={fresher}></FresherCard>)
                }
            </div>
        </div>
    );
};

export default Fresher;