import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

import Layout from './core/Layout'

const BorrowersRequests = () => {

    // State borrowers loan requests
    const [borrowersLoanRequests, setBorrowersLoanRequests] = useState([])

    useEffect(() => {
        // Fetch borrowers loan requests
        const fetchBorrowersLoanRequests = async () => {
            const borrowersLoanRequests = await fetch("http://localhost:8080/borrowers/borrowers-requests")
                .then(data => data.json())
                .then(user => setBorrowersLoanRequests(user))

            return borrowersLoanRequests;
        }
        fetchBorrowersLoanRequests()

    }, [borrowersLoanRequests])

    // Display borrowers loan requests
    const displayBorrowersLoanRequests = () => (
        <>
            {borrowersLoanRequests.map((borrower, index) => (
                <div className="card borrowersLoanRequests" style={{ width: '18rem' }} key={index}>
                    <div className="card-body">
                        <h5 className="card-title">Borrower ID: {borrower.borrower_id} </h5>
                        <p className="card-text">Loan amount : {borrower.loan_amount}</p>
                        <p className="card-text">Loan length: {borrower.loan_length}</p>
                        <p className="card-text">Interest: {borrower.interest}</p>
                        <p className="card-text">Loan reason: {borrower.loan_reason}</p>
                        <Link to="/" className="btn btn-primary">Show details</Link>
                    </div>
                </div>
            ))}
        </>
    )


    return (
        <Layout title='Borrower’s loan requests' description='Details from tickets'>
            <div class="card-deck">
                {displayBorrowersLoanRequests()}
            </div>
        </Layout>
    )
}

export default BorrowersRequests
