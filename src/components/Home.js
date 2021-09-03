import React from 'react'
import Layout from './core/Layout'


const Home = () => {
    /* TODO */
    // State borrowers by id
    // const [borrowersById, setBorrowersById] = useState([])
    // State borrowers loan requests by id
    // State lenders by id
    // State transactions by id

    // Fetch borrowers by id
    // Fetch borrowers loan requests by id
    // Fetch lenders by id
    // Fetch transactions by id

    // Display borrowers by id
    // Display borrowers loan requests by id
    // Display lenders by id
    // Display transactions by id

    /*
   
    */

    return (
        <Layout title="Peer-to-Peer Lending Platform" description="Bringing borrowers and investors together and allow them to choose to whom they want to lend their money">
            <div>
                <h3 className='mb-4 mt-5 pt-3'>Get Started</h3>
                <button type="button" className="btn btn btn-outline-dark m-3">Request a Loan</button>

                <button type="button" className="btn btn btn-outline-dark m-3">Make a Loan</button>
                <div>
                    <img alt='welcome img' className='img w-50' src='./resources/imgs/social-support.jpg' />
                </div>

            </div>
        </Layout>
    )
}

export default Home
