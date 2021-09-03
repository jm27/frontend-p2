import React from 'react';
import NavBar from './NavBar';
// import '../../index.css';

const Layout = ({
    title = "Title",
    description = "Description",
    className,
    children
}) => {
    return (<div>
        <NavBar></NavBar>
        <div className='jumbotron'>
            <h2>{title}</h2>
            <p className="lead">
                {description}
            </p>
        </div>
        <div className={className}>{children}</div>
    </div>
    )
};

export default Layout;