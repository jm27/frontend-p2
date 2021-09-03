import React, { useState, useEffect } from 'react';
import Layout from './core/Layout';
import { Link } from 'react-router-dom'


const Lenders = () => {
    // State lenders
    const [lenders, setLenders] = useState([])
    useEffect(() => {
        // Fetch lenders
        const fetchLenders = async () => {
            const lenders = await fetch("http://localhost:8080/lenders")
                .then(data => data.json())
                .then(lenders => setLenders(lenders))

            return lenders;
        }
        fetchLenders()
    }, [lenders])


    // Display lenders
    const displayLenders = () => (
      <>
            {lenders.map((lender, index) => (
                <div className="card lenders" style={{ width: '18rem' }} key={index}>
                    <img class="card-img-top img-fluid rounded img-thumbnail"
                        src={index % 2 === 0 ? './resources/imgs/kristy.png'
                            : './resources/imgs/matthew.png'}
                        alt="Card cap" />
                    <div className="card-body">
                        <h5 className="card-title">Full name: {lender.firstName}, {lender.lastName} </h5>
                        <p className="card-text">Phone Number: {lender.phoneNumber}</p>
                        <p className="card-text">Tax id: {lender.taxId}</p>
                        <p className="card-text">Investment Limit : {lender.investmentLimit}</p>
                        <Link to="/" className="btn btn-primary">Show details</Link>
                    </div>
                </div>
            ))}
     </>
    )

    return (
        <Layout title='Lenders' description='Register by filling in relevant details, including the total amount they want to invest'>
            <div class="card-deck">
                {displayLenders()}
            </div>
        </Layout>
    )
}

export default Lenders;