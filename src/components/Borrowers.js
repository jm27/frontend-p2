import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'


import Layout from './core/Layout'

const Borrowers = () => {
    // State borrowers
    const [borrowers, setBorrowers] = useState([])
    useEffect(() => {
        // Fetch borrowers
        const fetchBorrowers = async () => {
            const borrowers = await fetch("http://localhost:8080/borrowers")
                .then(data => data.json())
                .then(user => setBorrowers(user))

            return borrowers;
        }

        fetchBorrowers();
    }, [borrowers])


    // Display borrowers
    const displayBorrowers = () => (
        <>
            {borrowers.map((borrower, index) => (
                <div className="card borrowers" style={{ width: '33vw' }} key={index}>
                    <img class="card-img-top img-fluid rounded img-thumbnail"
                        src={index % 2 === 0 ? './resources/imgs/kristy.png'
                            : './resources/imgs/matthew.png'}
                        alt="Card cap" />
                    <div className="card-body">
                        <h5 className="card-title">Full name: {borrower.first_name}, {borrower.last_name} </h5>
                        <p className="card-text">Funds : {borrower.funds}</p>
                        <p className="card-text">Credit Score: {borrower.credit_score}</p>
                        <p className="card-text">Rating: {borrower.rating}</p>
                        <Link to="/" className="btn btn-primary">Show details</Link>
                    </div>
                </div>
            ))}
       </>
    )


    return (
        <Layout title='Borrowers' description='supply their desired loan amount and relevant details'>
            <div class="card-deck">
                {displayBorrowers()}
            </div>
        </Layout>
    )
}

export default Borrowers
