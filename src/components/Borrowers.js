import React, { useState, useEffect } from 'react';

import Layout from './core/Layout'

const Borrowers = () => {
    // State borrowers
    const [borrowers, setBorrowers] = useState([])
    useEffect(() => {
        // Fetch borrowers
        const fetchBorrowers = async () => {
            const Borrowers = await fetch("http://localhost:8080/borrowers")
                .then(data => data.json())
                .then(user => setBorrowers(user))
        }

        fetchBorrowers();
    }, [borrowers])


    // Display borrowers
    const displayBorrowers = () => (
        <div>
            {borrowers.map((borrower, index) => (
                <div className="card borrowers" style={{ width: '18rem' }} key={index}>
                    <div className="card-body">
                        <h5 className="card-title">Full name: {borrower.first_name}, {borrower.last_name} </h5>
                        <p className="card-text">Funds : {borrower.funds}</p>
                        <p className="card-text">Credit Score: {borrower.credit_score}</p>
                        <p className="card-text">Rating: {borrower.rating}</p>
                        <Link to="/" className="btn btn-primary">Show details</Link>
                    </div>
                </div>
            ))}
        </div>
    )


    return (
        <Layout>
            <div>
                {displayBorrowers()}
            </div>
        </Layout>
    )
}

export default Borrowers
