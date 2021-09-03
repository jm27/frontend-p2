import React from 'react';
import { Link } from 'react-router-dom';
import '../../index.css';

const NavBar = () => {

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand nav-link" to='/'>Lending App</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarTogglerDemo01">
                    <ul className="navbar-nav  mt-2 mt-lg-0 w-100 justify-content-end">
                        <li className="nav-item">
                            <Link className='nav-link font-weight-bold text-light' to='/lenders'>Lenders</Link>
                        </li>
                        <li class="nav-item">
                            <Link className='nav-link font-weight-bold text-light' to='/borrowers'>Borrowers</Link>
                        </li>
                        <li class="nav-item">
                            <Link className='nav-link font-weight-bold text-light' to='/borrowers-requests'>Borrowers Requests</Link>
                        </li>
                        <li class="nav-item">
                            <Link className='nav-link font-weight-bold  text-light' to='/transactions'>Transactions</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link disabled" to='/login'>Login</Link>
                        </li>
                    </ul>

                </div>
            </nav>
        </div>
    )
}

export default NavBar
