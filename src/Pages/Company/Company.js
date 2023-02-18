import React, { useEffect, useState } from 'react';
import CompanyCard from './CompanyCard';

const Company = () => {
    const [companies, setCompanies] = useState([]);
    useEffect(() => {
        fetch('company.json')
            .then(res => res.json())
            .then(data => setCompanies(data))
    }, [])
    return (
        <div className='my-12'>
            <h1 className='text-2xl font-bold text-center mb-12'>Top IT Company</h1>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    companies.map(company => <CompanyCard key={company.id} company={company}></CompanyCard>)
                }
            </div>
        </div>
    );
};

export default Company;