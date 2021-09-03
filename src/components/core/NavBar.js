import React from 'react';
import { Link } from 'react-router-dom';
import '../../index.css';

const NavBar = () => {

    return (
        <div>
            <div>
                Lending App!
            </div>
            <ul style={{
                display: 'flex',
                flexAlign: 'row',
                justifyContent: 'center',
            }}>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/lenders'>lenders</Link></li>
                <li><Link to='/borrowers'>borrowers</Link></li>
                <li><Link to='/borrowers-requests'>borrowers-requests</Link></li>
                <li><Link to='/transactions'>transactions</Link></li>
                <li><Link to='/tsda'>lost page</Link></li>
            </ul>
        </div>
    )
}

export default NavBar
