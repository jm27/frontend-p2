import React, { useState, useEffect } from 'react';
import Layout from './core/Layout';

const Lenders = () => {
    // State lenders
    const [lenders, setLenders] = useState([])
    useEffect(() => {
        // Fetch lenders
        const fetchLenders = async () => {
            const lenders = await fetch("http://localhost:8080/lenders")
                .then(data => data.json())
                .then(lenders => setLenders(lenders))
        }
        fetchLenders()
    }, [lenders])


    // Display lenders
    const displayLenders = () => (
        <div>
            {lenders.map((lender, index) => (
                <div className="card lenders" style={{ width: '18rem' }} key={index}>
                    <div className="card-body">
                        <h5 className="card-title">Full name: {lender.firstName}, {lender.lastName} </h5>
                        <p className="card-text">Phone Number: {lender.phoneNumber}</p>
                        <p className="card-text">Tax id: {lender.taxId}</p>
                        <p className="card-text">Investment Limit : {lender.investmentLimit}</p>
                        <Link to="/" className="btn btn-primary">Show details</Link>
                    </div>
                </div>
            ))}
        </div>
    )

    return (
        <Layout>
             {displayLenders()}
        </Layout>
    )
}

export default Lenders;