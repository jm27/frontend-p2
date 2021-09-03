import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

import Layout from './core/Layout'

const Transactions = () => {

    // State transactions
    const [transactions, setTransactions] = useState([])

    useEffect(() => {
        // Fetch transactions
        const fetchTransactions = async () => {
            const transactions = await fetch("http://localhost:8080/transactions")
                .then(data => data.json())
                .then(transaction => setTransactions(transaction))

            return transactions;
        }
        fetchTransactions()
    }, [transactions])

    // Display transactions
    const displayTransactions = () => (
        <>
            {transactions.map((transaction, index) => (
                <div className="card transactions" style={{ width: '18rem' }} key={index}>
                    <div className="card-body">
                        <h5 className="card-title">Lender ID: {transaction.lenderId} </h5>
                        <h5 className="card-title">Borrower ID: {transaction.borrowerId} </h5>
                        <h5 className="card-title">Start date: {transaction.startDate} </h5>
                        <h5 className="card-title">Interest rate: {transaction.interestRate} </h5>
                        <h5 className="card-title">Repayment length(Months){""}: {transaction.repaymentTerm} </h5>
                        <h5 className="card-title">Loan amount: {transaction.amount} </h5>
                        <h5 className="card-title">Payments: {transaction.monthlyPayment} </h5>
                        <h5 className="card-title">Loan Status: {transaction.status} </h5>
                        <Link to="/" className="btn btn-primary">Show details</Link>
                    </div>
                </div>
            ))}
        </>
    )

    return (
        <Layout title='Transactions' description='Details from borrowers and lenders'>
            <div class="card-deck">
                {displayTransactions()}
            </div>
        </Layout>
    )
}

export default Transactions
