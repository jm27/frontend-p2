import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css';


function NotFoundPage() {
    return (
        <div className='not-found'>
            <h1>404 Not found!</h1>
            <p> Wow it looks like you are lost! go back <Link to='/'>Home!</Link></p>
        </div>
    )
}

export default NotFoundPage
